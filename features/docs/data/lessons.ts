// data/lessons.ts
import { Lesson } from "../types/lesson";

export const lessons: Lesson[] = [
  {
    id: 0,
    title: "What is W-Shica?",
    content: [
      {
        type: "paragraph",
        text: "<b>Shica</b> is a programming language for distributed physical computing systems." +
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
        text: "Starting with the basics, " +
        "Here's a simple Hello World program written in Shica:",
      },
      {
        type: "code",
        filename: "hello_world.shica",
        code: '// Hello World program\nstate shica(){\n    entry(){\n        print("Hello, World!");\n    }\n}',
        output: "Hello, World!",
      },
      {
        type: "heading",
        text: "Get Started with W-Shica IDE",
      },
      {
        type: "paragraph",
        text: "Open <a href='https://dear-project.com/ide' target='_blank' rel='noopener noreferrer'><b><u>W-Shica IDE</u></b></a> " +
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
      }
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
        text: "In Shica, code is organized into states. Each state represents a specific mode of operation for your system."+
         " So your sysmtem must have at least one state to start with." +
         " Initial state is starting from most top state block.",
      },
      {
        type: "code",
        filename: "mystate.shica",
        code: '// This is a state block\nstate MyState(){\n    entry(){\n        print("Entering MyState");\n    }\n}',
        output: "Entering MyState",
      },
      {
        type: "paragraph",
        text: "The above code defines a state called <b>MyState()</b>. When the system enters this state, it will execute the code inside the <b>entry()</b> block, which prints <b>Entering MyState</b> to the console.",
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
        code: '// State transition example\nstate StateA(){\n    entry(){\n        print("In State A");\n        // Transition to State B\n        state StateB;\n    }\n}\n\nstate StateB(){\n    entry(){\n        print("In State B");\n    }\n}',
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
        text: "Event handlers are special functions that are triggered when a specific event occurs. " +
        "You can define event handlers within a state block to respond to events relevant to that state." +
        " Each event handler provides event arguments that give you information about the event. " +
        "The event argument is specified in the parentheses of the event handler.",
      },
      {
        type: "code",
        filename: "event_handler.shica",
        code: '// Event handler example\nstate ButtonState(){\n    entry(){\n        print("Waiting for button press...");\n    }\n    clickEH(int count){\n        print("Button was pressed ", count, " times");\n    }\n}',
        output:
          "Waiting for button press...\nButton was pressed 1 times\nButton was pressed 2 times\n...",
      },
      {
        type: "paragraph",
        text: "In this example, the <b>clickEH(int count)</b> event handler is triggered whenever a button is pressed. It prints the number of times the button has been pressed.",
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
        code: '// Event condition example\nstate SensorState(){\n    entry(){\n        print("Counting time!");\n    }\n    timerEH(int sec:sec%2==0){\n        print("every 2 seconds");\n    }\n}',
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
        code: '// Multiple event handlers example\nstate MultiEventState(){\n\tclickEH(int count){\n\t\tprint("Button was pressed ", count, " times");\n\t}\n    timerEH(int sec:sec%2==0){\n\t\tprint("every 2 seconds");\n    }\n    timerEH(int sec:sec%5==0){\n        print("every 5 seconds");\n    }\n}',
        output:
          "Button was pressed 1 times\nevery 2 seconds\nevery 5 seconds\nevery 2 seconds\n...",
      },
      {
        type: "paragraph",
        text: "In this example, the state <b>MultiEventState()</b> has three event handlers: <b>clickEH</b> for button presses, and two <b>timerEH</b> handlers for different time intervals (every 2 seconds and every 5 seconds). Each handler operates independently, allowing the state to respond to multiple events simultaneously.",
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
        code: '// Receiver agent\nvar channle = broadcast("channel1", "scicret");\nstate Receiver(){\n\tchannle.receive(str addr, str msg){\n\t\tprint("Received message: ", msg, " from ", addr);\n\t}\n}',
        filename: "receiver.shica",
      },
      {
        type: "paragraph",
        text: "In this example, the <b>Receiver</b> agent listens for messages on <b>channel1</b>. When a message is received, it prints the message and the sender's address to the console.",
      },
      {
        type: "code",
        code: '// Sender agent\nvar channle = broadcast("channel1", "scicret");\nstate Sender(){\n\tclickEH(){\n\t\tchannle.send("Hello from Sender!");\n\t}\n}',
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
        text: "Variables are like boxes that store information.",
      },
      {
        type: "heading",
        text: "Variable Declaration",
      },
      {
        type: "code",
        filename: "variables.shica",
        code: '// Variable declaration and initialization\nstr name= "Taro"\nint age = 25\nflo height = 175.5\nprint(name)\nprint(age)',
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
        text: "Event objects hold one or more event handlers and its respective functions.",
      },
      {
        type: "code",
        filename: "event_object.shica",
        code: '// Event object example\nvar t = time();\nstate OneSecTimer(){\n    t.timerEH(int sec:sec%1==0){\n        print("Every second");\n    }\n}',
        output: "Every second\nEvery second\n...",
      },
    ],
  },
  {
    id: 6,
    title: "Conditional Statements",
    content: [
      {
        type: "paragraph",
        text: "Variables are like boxes that store information.",
      },
      {
        type: "heading",
        text: "If statement",
      },
      {
        type: "code",
        filename: "if_statement.shica",
        code: '// If statement example\nstate ClickEvenTimes(){\n    entry(){\n        print("Waiting for button clicks...");\n    }\n    clickEH(int count){\n        if(count % 2 == 0){\n            print("Even number of clicks: ", count);\n        }else{\n            print("Odd number of clicks: ", count);\n        }\n    }\n}',
        output:
          "Waiting for button clicks...\nOdd number of clicks: 1\nEven number of clicks: 2\n...",
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
        type: "code",
        filename: "for_loop.shica",
        code: '// 5 times repeat\nstate Loop(){\n\tentry(){\n\t\tfor(int i=0; i<5; i++){\n\t\t\tprint("Hello");\n\t\t}\n\t}\n}',
        output: "Hello\nHello\nHello\nHello\nHello",
      },
      {
        type: "heading",
        text: "While loop",
      },
      {
        type: "code",
        filename: "while_loop.shica",
        code: "// While loop example\nstate CountDown(){\n\tentry(){\n\t\tint count = 5;\n\t\twhile(count > 0){\n\t\t\tprint(count);\n\t\t\tcount = count - 1;\n\t\t}\n\t}\n}",
        output: "5\n4\n3\n2\n1",
      },
    ],
  },
  {
    id: 8,
    title: "Functions",
    content: [
      {
        type: "paragraph",
        text: "Functions allow you to break your code into reusable pieces.",
      },
      {
        type: "heading",
        text: "Function Definition",
      },
      {
        type: "code",
        filename: "function_definition.shica",
        code: '// Function definition example\nvoid greet(str name){\n    print("Hello, ", name, "!");\n}',
      },
      {
        type: "code",
        filename: "function_call.shica",
        code: "// Math function example\nint add(int a, int b){\n    return a + b;\n}\n\nstate MainState(){\n    entry(){\n        int result = add(5, 3);\n        print(\"5 + 3 = \", result);\n    }\n}",
        output: "8",
      },
    ],
  },
  {
    id: 9,
    title: "Common functions",
    content: [
      {
        type: "paragraph",
        text: "W-Shica provides X common functions to handle various tasks.",
      },
      {
        type: "heading",
        text: "Print function",
      },
      {
        type: "paragraph",
        text: "The print function outputs text to Shica IDE console. It can print strings, numbers, and variables.",
      },
      {
        type: "code",
        code: 'print("Hello, World!");',
        output: "Hello, World!",
      },
    ],
  },
  {
    id: 10,
    title: "Event functions",
    content: [
      {
        type: "paragraph",
        text: "W-Shica wprovides X normal event functions, and Y special event functions that is element of event objects.",
      },
    ],
  },
];