// data/lessons.ts
import { Lesson } from "../types/lesson";

export const lessons: Lesson[] = [
  {
    id: 0,
    title: "What is W-Shica?",
    content: [
      {
        type: "paragraph",
        text:
          "<b>Shica</b> is a programming language for distributed physical computing systems." +
          " It is designed to make it easy to write programs that interact with the physical world through sensors and actuators. " +
          "<b>W-Shica</b> is a web-based IDE that allows you to learn, design, test and demonstrate Shica programs directly in your browser!",
      },
      {
        type: "heading",
        text: "Features of Shica",
      },
      {
        type: "list",
        items: [
          "State-based programming",
          "Event-driven programming",
          "Distributed programming ",
        ],
      },
      {
        type: "heading",
        text: "Hello World in Shica",
      },
      {
        type: "paragraph",
        text:
          "Starting with the basics, " +
          "Here's a simple Hello World program written in Shica:",
      },
      {
        type: "code",
        filename: "hello_world.shica",
        code: '// Hello World program\nstate shica(){\n    entryEH(){\n        print("Hello, World!");\n    }\n}',
        output: "Hello, World!",
      },
      {
        type: "heading",
        text: "Get Started with W-Shica IDE",
      },
      {
        type: "paragraph",
        text:
          "Open <a href='https://dear-project.com/ide' target='_blank' rel='noopener noreferrer'><b><u>W-Shica IDE</u></b></a> " +
          "and try running the Hello World program yourself!",
      },
      {
        type: "figure",
        src: "/user-study/shica-ide.png",
        altText: "W-Shica IDE Interface",
      },
      {
        type: "list",
        items: [
          "Left map: you can see the rover agent here.",
          "Middle panele: you can add and choose code files here.",
          "Right panele: you can write and edit Shica code here.",
          "Compile/Run button: click here to compile and run your Shica code. (Run implements all codes)",
          "Bottom panele: you can see the output console here.",
        ],
      },
    ],
  },
  // --- ---
  {
    id: 2,
    title: "State features",
    content: [
      {
        type: "paragraph",
        text: "Let's learn the basic syntax of Shica.",
      },
      {
        type: "heading",
        text: "State blocks",
      },
      {
        type: "paragraph",
        text:
          "In Shica, code is organized into states. Each state represents a specific mode of operation for your system." +
          " So your sysmtem must have at least one state to start with." +
          " Initial state is starting from most top state block.",
      },
      {
        type: "code",
        filename: "mystate.shica",
        code: '// This is a state block\nstate MyState(){\n    entryEH(){\n        print("Entering MyState");\n    }\n}',
        output: "Entering MyState",
      },
      {
        type: "paragraph",
        text: "The above code defines a state called <b>MyState()</b>. When the system enters this state, it will execute the code inside the <b>entryEH()</b> block, which prints <b>Entering MyState</b> to the console.",
      },
      {
        type: "heading",
        text: "State transitions",
      },
      {
        type: "paragraph",
        text: "In Shica, each state is separated by state blocks. You can define multiple states in your program and transition between them based on events or conditions.",
      },
      {
        type: "code",
        filename: "state_transition.shica",
        code: '// State transition example\nstate StateA(){\n    entryEH(){\n        print("In State A");\n        // Transition to State B\n        state StateB;\n    }\n}\n\nstate StateB(){\n    entryEH(){\n        print("In State B");\n    }\n}',
        output: "In State A\nIn State B",
      },
      {
        type: "paragraph",
        text: "In this example, when the system enters <b>StateA()</b>, it prints <b>In State A</b> and then transitions to <b>StateB()</b>, which prints <b>In State B</b>.",
      },
    ],
  },
  {
    id: 3,
    title: "Event features",
    content: [
      {
        type: "paragraph",
        text: "Inside each state, you can define event handlers that respond to specific events, such as button presses or sensor readings.",
      },
      {
        type: "heading",
        text: "Event Handlers",
      },
      {
        type: "paragraph",
        text:
          "Event handlers are special functions that are triggered when a specific event occurs. " +
          "You can define event handlers within a state block to respond to events relevant to that state." +
          " Each event handler provides event arguments that give you information about the event. " +
          "The event argument is specified in the parentheses of the event handler.",
      },
      {
        type: "code",
        filename: "event_handler.shica",
        code: '// Event handler example\nstate ButtonState(){\n    entryEH(){\n        print("Waiting for button press...");\n    }\n    clickEH(int x, int y){\n        print("Rover was pressed ", x, ", ", y);\n    }\n}',
        output:
          "Waiting for button press...\nButton was pressed 1 times\nButton was pressed 2 times\n...",
      },
      {
        type: "paragraph",
        text: "In this example, the <b>clickEH(int x, int y)</b> event handler is triggered whenever a button is pressed. It prints the coordinates where the button was pressed.",
      },
      {
        type: "heading",
        text: "Event conditions",
      },
      {
        type: "paragraph",
        text: "You can also add conditions to event handlers to control when they are triggered (Left side of event argument with colon ':'). The event handler will only be executed when the condition is true.",
      },
      {
        type: "code",
        filename: "event_condition.shica",
        code: '// Event condition example\nstate SensorState(){\n    entryEH(){\n        print("Counting time!");\n    }\n    timerEH(int sec:sec%2==0){\n        print("every 2 seconds");\n    }\n}',
        output: "Counting time!\nevery 2 seconds\nevery 2 seconds\n...",
      },
      {
        type: "paragraph",
        text: "In this example, the <b>timerEH(int sec:sec%2==0)</b> event handler is triggered every 2 seconds, printing <b>every 2 seconds</b> to the console.",
      },
      {
        type: "heading",
        text: "Multiple event handlers",
      },
      {
        type: "paragraph",
        text: "You can define multiple event handlers within a single state to respond to different events or conditions.",
      },
      {
        type: "code",
        filename: "multiple_event_handlers.shica",
        code: '// Multiple event handlers example\nstate MultiEventState(){\n\tclickEH(int x, int y){\n\t\tprint("Button was pressed ", x, ", ", y);\n\t}\n    timerEH(int sec:sec%2==0){\n\t\tprint("every 2 seconds");\n    }\n    timerEH(int sec:sec%5==0){\n        print("every 5 seconds");\n    }\n}',
        output:
          "Button was pressed 0,0\nevery 2 seconds\nevery 5 seconds\nevery 2 seconds\n...",
      },
      {
        type: "paragraph",
        text: "In this example, the state <b>MultiEventState()</b> has three event handlers: <b>clickEH</b> for button presses, and two <b>timerEH</b> handlers for different time intervals (every 2 seconds and every 5 seconds). Each handler operates independently, allowing the state to respond to multiple events simultaneously.",
      },
      {
        type: "heading",
        text: "Event Objects",
      },
      {
        type: "paragraph",
        text:
          "Event objects are special objects that encapsulate event handlers and their associated functions. " +
          "They allow you to use events that need to be initializaed as objects, such as broadcast channels and timers.",
      },
      {
        type: "code",
        filename: "event_object.shica",
        code: '// Event object example\nvar t = timerEO();\nstate OneSecTimer(){\n    t.secEH(int sec:sec%1==0){\n        print("Every second");\n    }\n}',
        output: "Every second\nEvery second\n...",
      },
      {
        type: "paragraph",
        text:
          "In this example, we create a timer object <b>t</b> using the <b>time()</b> function. " +
          "The event handler <b>t.timerEH(int sec:sec%1==0)</b> is defined to trigger every second, printing <b>Every second</b> to the console.",
      },
    ],
  },
  {
    id: 4,
    title: "Distributed features",
    content: [
      {
        type: "paragraph",
        text: "Shica provides group broadcasting for distributed systems as events, allowing multiple devices to communicate and coordinate their actions.",
      },
      {
        type: "heading",
        text: "Group broadcasting",
      },
      {
        type: "code",
        code: '// Receiver agent\nvar channle = broadcastEO("channel1", "scicret");\nstate Receiver(){\n\tchannle.receivedEH(str addr, str msg){\n\t\tprint("Received message: ", msg, " from ", addr);\n\t}\n}',
        filename: "receiver.shica",
      },
      {
        type: "paragraph",
        text: "In this example, the <b>Receiver</b> agent listens for messages on <b>channel1</b>. When a message is received, it prints the message and the sender's address to the console.",
      },
      {
        type: "info",
        text:
          "Make sure both Sender and Receiver agents are using the same channel name and password to communicate successfully. " +
          "broadcastEO(channel_name, password) creates a broadcast channel event object. " +
          "The channel_name is used to identify the channel, and the password is used for simple authentication.",
      },
      {
        type: "code",
        code: '// Sender agent\nvar channle = broadcastEO("channel1", "scicret");\nstate Sender(){\n\tclickEH(int x, int y){\n\t\tchannle.send("Hello from Sender!");\n\t}\n}',
        filename: "sender.shica",
      },
      {
        type: "paragraph",
        text: "In this example, the <b>Sender</b> agent sends a message to <b>channel1</b> whenever the button is clicked.",
      },
      {
        type: "info",
        text: "Combining event conditions and distributed features allows you to create sophisticated distributed systems that respond to events in a coordinated manner.",
      },
    ],
  },
  {
    id: 5,
    title: "Variable and Data Types",
    content: [
      {
        type: "paragraph",
        text:
          "Shica is statically typed language like C language. You need to declare variable type when you create a variable. " +
          "Shica supports three basic data types: string, integer, and float.",
      },
      {
        type: "heading",
        text: "Variable Declaration",
      },
      {
        type: "code",
        filename: "variables.shica",
        code: '// Variable declaration and initialization\nstr name= "Taro"\nint age = 25\nflo height = 175.5\n' + 
        'state MyState(){\n    entryEH(){\n        print(name)\n        print(age)\n    }\n}',
      },
      {
        type: "heading",
        text: "Data Types",
      },
      {
        type: "list",
        items: ['String: "Hello"', "Integer: 42", "Float: 3.14"],
      },
      {
        type: "heading",
        text: "Event Objects / Event variables",
      },
      {
        type: "paragraph",
        text:
          "Event objects hold one or more event handlers and its respective functions." +
          " You can create event objects using built-in functions like <b>broadcast()</b> and <b>timer()</b>." +
          " Event variables are used to store event-related data, such as event arguments passed to event handlers." +
          ' <b>"var"</b> keyword is used to declare event object variables.',
      },
      {
        type: "code",
        filename: "event_object.shica",
        code: '// Event object example\nvar t = timerEO();\nstate OneSecTimer(){\n    t.secEH(int sec:sec%1==0){\n        print("Every second");\n    }\n}',
        output: "Every second\nEvery second\n...",
      },
      {
        type: "heading",
        text: "Variable Scope",
      },
      {
        type: "paragraph",
        text: "Variables in Shica have scope, which determines where they can be accessed. " +
          "Variables declared within a state or event handler are local to that block, while variables declared outside of any state are global and can be accessed from any state or event handler.",
      },
      {
        type: "code",
        filename: "variable_scope.shica",
        code: '// Variable scope example\nint globalVar = 10; // Global variable\nstate MyState(){\n    int stateLocalVar = 5; // State local variable\n    entryEH(){\n        int localVar = 3; // Local variable\n        print("Global Variable:", globalVar);\n        print("State Local Variable:", stateLocalVar);\n        print("Local Variable:", localVar);\n   }\n   clickEH(int x,int y){\n     print("State local variable:", stateLocalVar);//\n     state AnotherState;\n   }\n}'+
        '\nstate AnotherState(){\n    entryEH(){\n        // print("State Local Variable:", stateLocalVar); // Error: stateLocalVar is not accessible here\n        print("Global Variable:", globalVar); // Accessible\n    }\n}',
        output: "Global Variable: 10\nState Local Variable: 5\nLocal Variable: 3\nGlobal Variable: 10",
      }
    ],
  },
  {
    id: 6,
    title: "Conditional Statements",
    content: [
      {
        type: "heading",
        text: "If statement",
      },
      {
        type: "paragraph",
        text: "Conditional statements allow you to make decisions in your code based on certain conditions.",
      },
      {
        type: "code",
        filename: "if_statement.shica",
        code: '// If statement example\nstate ClickEvenTimes(){\n    entryEH(){\n        print("Waiting for button clicks...");\n    }\n    clickEH(int x,int y){\n        if(x % 2 == 0){\n            print(x, " is even");\n        }else{\n            print(x, " is odd");\n        }\n    }\n}',
        output:
          "Waiting for button clicks...\n0 is even\n1 is odd\n2 is even\n...",
      },
    ],
  },
  {
    id: 7,
    title: "Loops",
    content: [
      {
        type: "paragraph",
        text: "Learn about loops to repeat the same process multiple times.",
      },
      {
        type: "heading",
        text: "For loop",
      },
      {
        type: "paragraph",
        text:
          "The for loop is used to repeat a block of code a specific number of times. " +
          "You can specify the initialization, condition, and increment/decrement in the loop header.",
      },
      {
        type: "code",
        filename: "for_loop.shica",
        code: '// 5 times repeat\nstate Loop(){\n\tentryEH(){\n\t\tfor(int i=0; i<5; i++){\n\t\t\tprint("Hello");\n\t\t}\n\t}\n}',
        output: "Hello\nHello\nHello\nHello\nHello",
      },
      {
        type: "heading",
        text: "While loop",
      },
      {
        type: "paragraph",
        text: "The while loop is used to repeat a block of code as long as a specified condition is true.",
      },
      {
        type: "code",
        filename: "while_loop.shica",
        code: "// While loop example\nstate CountDown(){\n\tentryEH(){\n\t\tint count = 5;\n\t\twhile(count > 0){\n\t\t\tprint(count);\n\t\t\tcount = count - 1;\n\t\t}\n\t}\n}",
        output: "5\n4\n3\n2\n1",
      },
    ],
  },
  {
    id: 9,
    title: "Common functions",
    content: [
      {
        type: "paragraph",
        text: "W-Shica provides 13 common functions to support debugging, rover control (position/velocity), and visual appearance.",
      },

      // Debug / Output
      {
        type: "heading",
        text: "Log function",
      },
      {
        type: "paragraph",
        text: "The log function outputs values to the developer tools console (browser console). It is useful for debugging internal states without affecting the Shica IDE console.",
      },
      {
        type: "code",
        filename: "log_example.shica",
        code: 'state exampleLog(){\n    entryEH(){\n        log("Debug message");\n        log(getX(), getY());\n    }\n}',
        output: "Debug message\n<current x> <current y>",
      },

      {
        type: "heading",
        text: "Print function",
      },
      {
        type: "paragraph",
        text: "The print function outputs text to the Shica IDE console. It can print strings, numbers, and variables (multiple arguments are allowed).",
      },
      {
        type: "code",
        filename: "print_example.shica",
        code: 'state examplePrint(){\n    entryEH(){\n        print("Hello, World!");\n        print("x =", getX(), "y =", getY());\n    }\n}',
        output: "Hello, World!\nx = <current x> y = <current y>",
      },

      // Position
      {
        type: "heading",
        text: "Move rover (position control)",
      },
      {
        type: "paragraph",
        text: "These functions directly set the rover position. <b>setXY(x, y)</b> sets both axes at once; <b>setX(x)</b>/<b>setY(y)</b> update only one axis. <b>getX()</b>/<b>getY()</b> returns the current rover position.",
      },
      {
        type: "code",
        filename: "position_example.shica",
        code:
          "state examplePosition(){\n    entryEH(){\n        setXY(100, 80);\n        print(\"pos =\", getX(), getY());\n\n        setX(120);\n        setY(60);\n        print(\"pos =\", getX(), getY());\n    }\n}",
        output: "pos = 100 80\n" + "pos = 120 60",
      },

      // Velocity
      {
        type: "heading",
        text: "Set rover velocity",
      },
      {
        type: "paragraph",
        text: "These functions set the rover velocity (vx, vy). <b>setVXY(vx, vy)</b> sets both components, while <b>setVX(vx)</b>/<b>setVY(vy)</b> updates one component. <b>getVX()</b>/<b>getVY()</b> returns the current velocity values.",
      },
      {
        type: "code",
        filename: "velocity_example.shica",
        code:
          "state exampleVelocity(){\n    entryEH(){\n        setVXY(2, 0);\n" +
          '        print("v =", getVX(), getVY());\n\n' +
          "        setVY(-3);\n" +
          '        print("v =", getVX(), getVY());\n    }\n}',
        output: "v = 2 0\n" + "v = 2 -3",
      },

      // Color
      {
        type: "heading",
        text: "Set rover color",
      },
      {
        type: "paragraph",
        text: "<b>setColor(r, g, b)</b> changes the rover color. Each component (r, g, b) represents the intensity of red, green, and blue. Use this to visualize states or interactions.",
      },
      {
        type: "code",
        filename: "color_example.shica",
        code:
          "state exampleColor(){\n    entryEH(){\n" +
          "        setColor(255, 0, 0);\n" +
          '        print("Color set to red");\n\n' +
          "        setColor(0, 255, 255);\n" +
          '        print("Color set to cyan");\n    }\n}',
        output: "Color set to red\n" + "Color set to cyan",
      },
    ],
  },
  {
    id: 10,
    title: "Event functions",
    content: [
      {
        type: "paragraph",
        text: "W-Shica provides 4 normal event functions (global event handlers) and 2 special event functions that are elements of event objects (e.g., broadcast channel and timer objects).",
      },

      // Normal event functions
      {
        type: "heading",
        text: "Normal event functions (global event handlers)",
      },
      {
        type: "paragraph",
        text: "These event handlers are triggered by the runtime. You define the handler in your program, and the runtime calls it when the event occurs.",
      },

      {
        type: "heading",
        text: "timerEH(int sec)",
      },
      {
        type: "paragraph",
        text: "Triggered periodically (every 1 second). The parameter sec represents the elapsed seconds (or current tick count depending on the runtime). Use it for periodic updates such as movement or animations.",
      },
      {
        type: "code",
        filename: "timer_example.shica",
        code: "state exampleTimer(){\n    timerEH(int sec) {\n" + '        print("tick =", sec);\n' + "    }\n}",
        output: "tick = 1\ntick = 2\n...",
      },

      {
        type: "heading",
        text: "clickEH(int x, int y)",
      },
      {
        type: "paragraph",
        text: "Triggered when the user clicks on the screen (map). The parameters x and y represent the coordinates of the click.",
      },
      {
        type: "code",
        filename: "click_example.shica",
        code:
          "state exampleClick(){\n    clickEH(int x, int y) {\n" +
          '        print("screen clicked at:", x, y);\n' +
          "    }\n}",
        output: "screen clicked at: 10 20\nscreen clicked at: 15 25\n...",
      },

      {
        type: "heading",
        text: "touchEH(int count)",
      },
      {
        type: "paragraph",
        text: "Triggered when the user clicks/touches the rover itself. The parameter count is the number of rover touches detected so far.",
      },
      {
        type: "code",
        filename: "touch_example.shica",
        code:
        "state exampleTouch(){\n    touchEH(int count) {\n" +
        "        setColor(255, 255, 255);\n" +
        '        print("rover touched:", count);\n' +
        "    }\n}",
        output: "rover touched: 1\nrover touched: 2\n...",
      },

      {
        type: "heading",
        text: "collisionEH(int x, int y)",
      },
      {
        type: "paragraph",
        text: "Triggered when the rover collides with walls or other rovers. Direction is represented by x and y: x==1 (left), x==-1 (right), y==1 (up), y==-1 (down). You can use this to bounce back or change direction.",
      },
      {
        type: "code",
        filename: "collision_example.shica",
        code:
          "state exampleCollision(){\n" +
          "    entryEH() {\n" +
          "        setVX(5);\n" +
          "    }\n" +
          "    collisionEH(int x, int y) {\n" +
          '        print("collision dir:", x, y);\n' +
          "        // Example: simple bounce\n" +
          "        if (x != 0) setVX(-getVX());\n" +
          "    }\n" +
          "}",
        output: "collision dir: 1 0\ncollision dir: 0 -1\n...",
      },
      {
        type: "paragraph",
        text: "This example sets an initial velocity to the right. Upon collision, it prints the collision direction and reverses the x-velocity to simulate a bounce effect.",
      },

      // Event object functions
      {
        type: "heading",
        text: "Special event functions (event objects)",
      },
      {
        type: "paragraph",
        text: "Some events are provided as members of objects. You first create an object (e.g., broadcast channel or timer), then define its event handler (receivedEH / secEH).",
      },

      {
        type: "heading",
        text: "Broadcast channel: receivedEH(str address, str msg)",
      },
      {
        type: "paragraph",
        text: "Create a channel with broadcastEO(channel_name, password). You can send messages using channel.send(str). When a message is received, channel.receivedEH(address, msg) is triggered.",
      },
      {
        type: "code",
        filename: "broadcast_example.shica",
        code:
          'var channel = broadcastEO("room1", "pass");\n\n' +
          'state exampleBroadcast(){\n' +
          "\tchannel.receivedEH(str addr,str msg) {\n" +
          '        print("received from", addr, ":", msg);\n' +
          "    }\n\n" +
          "    clickEH(int count) {\n" +
          '        channel.send("hello");\n' +
          "    }\n}",
        output:
          "received from <addr> : hello 1\nreceived from <addr> : hello 2\n...",
      },

      {
        type: "heading",
        text: "Timer object: secEH(s)",
      },
      {
        type: "paragraph",
        text: "Create a timer object with timerEO(). You can reset the timer counter using t.reset(0). The timer triggers t.secEH(s), where s is the current seconds count since reset.",
      },
      {
        type: "code",
        filename: "timer_example.shica",
        code:
          "var t = timerEO();\n" +
          "\n" +
          "state exampleTimer(){\n" +
          "  t.secEH(int s) {\n" +
          '     print("timer s =", s);\n' +
          "     // Example: move rover slowly to the right\n" +
          "     setX(getX() + 1);\n" +
          "  }\n" + 
          "  clickEH(int x, int y) {\n" +
          "     t.reset(0); // Reset timer on click\n" +
          "  }\n" +
          "}",
        output: "timer s = 1\ntimer s = 2\n...",
      },
    ],
  },
];
