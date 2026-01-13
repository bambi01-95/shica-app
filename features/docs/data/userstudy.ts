import { Lesson } from "../types/lesson";

export const userstudy: Lesson[] = [
  {
    id: 0,
    title: "W-Shica User Study",
    content: [
      {
        type: "heading",
        text: "Introduction",
      },
      {
        type: "paragraph",
        text: "This page explains what the W-Shica User Study is about and what kinds of tasks you will work on.",
      },
      {
        type: "paragraph",
        text:
          "In this user study, you will use two programming environments: W-Shica and JavaScript. " +
          "You will work on the same set of tasks in both environments.",
      },
      {
        type: "paragraph",
        text:
          "Shica is an experimental programming language designed to describe distributed and physical computing systems " +
          "in a natural and intuitive way.",
      },
      {
        type: "paragraph",
        text: "The goal of this study is to investigate how the choice of programming language affects:",
      },
      {
        type: "list",
        items: [
          "How clearly system behavior can be described",
          "How intuitively program behavior can be understood",
        ],
      },
      {
        type: "paragraph",
        text:
          "You will have 40 minutes for each environment. You are not required to complete all tasks, " +
          "but please try to work through as many tasks as possible within the time limit.",
      },
      {
        type: "heading",
        text: "schedule",
      },
      {
        type: "list",
        items: [
          "00:00 – 00:10  Introduction",
          "00:10 – 00:50  Tasks using W-Shica",
          "00:50 – 01:30  Tasks using JavaScript",
          "01:30 – 01:40  Questionnaire",
        ],
      },
      {
        type: "heading",
        text: "Rules",
      },
      {
        type: "list",
        items: [
          "You can refer to the official documentation or some website for each programming language during the tasks, but don't use SOME AI.",
          "You can ask the facilitator for help if you have any questions about the tasks or the environment.",
          "Please focus on describing and understanding system behavior, rather than writing complex algorithms.",
        ],
      },
      {
        type: "hint",
        title: "Hint1: Time Management",
        text: "You have 40 minutes for each environment. Please manage your time accordingly.",
        code: "state timeManagement(){\n\t// Keep an eye on the clock!\n}",
      },
    ],
  },

  {
    id: 1,
    title: "Task 1: Greeting",
    content: [
      {
        type: "paragraph",
        text: "In this task, you will work with an agent whose response changes depending on the timing of a click.",
      },
      {
        type: "heading",
        text: "Agent Behavior",
      },
      {
        type: "list",
        items: [
          "A single agent is displayed on the screen",
          "When you click the agent, it displays a greeting message",
        ],
      },
      {
        type: "heading",
        text: "Greeting Rules",
      },
      {
        type: "paragraph",
        text: "The greeting message depends on the current time. The time state changes every 5 seconds.",
      },
      {
        type: "list",
        items: ["Good morning", "Good afternoon", "Good evening"],
      },
      {
        type: "figure",
        src: "/user-study/task1.png",
        altText: "Greeting Timeline",
      },
      {
        type: "paragraph",
        text: "As a result, clicking the agent at different times will produce different greetings.",
      },
      {
        type: "info",
        text: "This task focuses on handling time-based state changes and varying responses to the same event.",
      },
    ],
  },

  {
    id: 2,
    title: "Task 2: Particle",
    content: [
      {
        type: "paragraph",
        text: "In this task, you will work with an agent that moves continuously on the screen.",
      },
      {
        type: "heading",
        text: "Agent Behavior",
      },
      {
        type: "list",
        items: [
          "The agent moves around the stage continuously",
          "It keeps moving without any user interaction",
        ],
      },
      {
        type: "heading",
        text: "Click Interaction",
      },
      {
        type: "list",
        items: [
          "When the agent is clicked, it stops moving",
          "The agent remains stopped for 3 seconds",
          "After 3 seconds, it automatically starts moving again",
        ],
      },
      {
        type: "figure",
        src: "/user-study/task2.png",
        altText: "Particle Behavior",
      },
      {
        type: "info",
        text: "This task examines how continuous behavior and temporary state changes can be expressed.",
      },
    ],
  },

  {
    id: 3,
    title: "Task 3: Radio Button Group",
    content: [
      {
        type: "paragraph",
        text: "In this task, you will work with multiple agents that interact with each other.",
      },
      {
        type: "heading",
        text: "Agent Setup",
      },
      {
        type: "list",
        items: [
          "Three agents are displayed on the screen",
          "All agents have the same role and appearance",
        ],
      },
      {
        type: "heading",
        text: "Behavior Rules",
      },
      {
        type: "list",
        items: [
          "Clicking one agent selects it",
          "At the same time, the other two agents become unselected",
          "Only one agent can be selected at any time",
        ],
      },
      {
        type: "figure",
        src: "/user-study/task3.png",
        altText: "Radio Button Group Behavior",
      },
      {
        type: "paragraph",
        text: "This behavior is similar to radio buttons used in web forms.",
      },
      {
        type: "info",
        text: "This task focuses on managing shared state and coordination between multiple agents.",
      },
    ],
  },

  {
    id: 4,
    title: "Overall Perspective",
    content: [
      {
        type: "paragraph",
        text: "These tasks are not designed to test your ability to write complex algorithms.",
      },
      {
        type: "paragraph",
        text:
          "Instead, the study focuses on whether system behavior can be described clearly and " +
          "whether program execution can be understood intuitively.",
      },
      {
        type: "paragraph",
        text: "Through this study, you will experience the differences between W-Shica and JavaScript.",
      },
    ],
  },
  {
    id: 5,
    title: "W-Shica Environment",
    content: [
      {
        type: "paragraph",
        text:
          'The W-Shica implementation environment is the <a href="https://dear-project.com/ide"><u>Shica IDE</u></a> available on the web page.' +
          'For instructions on how to use it and for details about W-Shica, please refer to the <a href="https://dear-project.com/docs"><u>Shica Docs</u></a>.',
      },
      {
        type: "paragraph",
        text: "Move to the Shica IDE and Shica Docs using the image below.",
      },
      {
        type: "figure",
        src: "/user-study/shica-ide-docs.png",
        altText: "Shica IDE and Shica Docs",
      },
      {
        type: "paragraph",
        text: "Shica IDE looks like the image below. Please use this environment to implement the tasks.",
      },
      {
        type: "figure",
        src: "/user-study/shica-ide.png",
        altText: "Shica IDE Interface",
      },
    ],
  },
  {
    id: 6,
    title: "JavaScript Environment",
    content: [
      {
        type: "paragraph",
        text:
          "You can use any JavaScript environment you like for this study. " +
          'If you don\'t have a some preferred environment, we recommend using <a href="https://jsfiddle.net/"><u>JSFiddle</u></a>, ' +
          "which is a web-based JavaScript playground." +
          'For instructions on how to use it and for details about JavaScript, please refer to the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><u>MDN Web Docs</u></a>, ' +
          '<a href="https://www.w3schools.com/js/js_intro.asp"><u>W3Schools</u></a>.',
      },
      {
        type: "heading",
        text: "Rover and Map UI",
      },
      {
        type: "paragraph",
        text:
          "If you'd like to use same Rover and map UI as in the W-Shica enviroment, " +
          "you can use the following HTML/CSS snippet as a starting point.",
      },
      {
        type: "code",
        filename: "index.html",
        code: '<div id="map">\n\t<div class="robot-vacuum"></div>\n</div>',
      },
      {
        type: "hint",
        title: "Display Multiple Agents HTML",
        filename: "index-3agents.html",
        code: `<div id="map">
  <div class="robot-vacuum" id="agent1" style="transform: translate(0px, 0px)"></div>
  <div class="robot-vacuum" id="agent2" style="transform: translate(60px, 0px)"></div>
  <div class="robot-vacuum" id="agent3" style="transform: translate(120px,0px)"></div>
</div>`,
      },
      {
        type: "code",
        filename: "styles.css",
        code: '#map {\n\tposition: relative;\n\twidth: 500px;\n\theight: 500px;\n\tborder: 1px solid #ccc;\n\tbackground-color: #f9f9f9;\n\tbackground-image: linear-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.08) 1px, transparent 1px);\n\tbackground-size: 20px 20px;\n\tcursor: crosshair;\n}\n\n.robot-vacuum {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 50px;\n\theight: 50px;\n\ttransition: all 0.05s linear;\n\twill-change: transform;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground: linear-gradient(135deg, #2c3e50, #34495e);\n\tborder-radius: 50%;\n\tborder: 3px solid #000;\n\tbox-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);\n}\n\n.robot-vacuum::before {\n\tcontent: "";\n\tposition: absolute;\n\twidth: 20px;\n\theight: 20px;\n\tbackground: #000;\n\tborder-radius: 50%;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tbox-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.robot-vacuum::after {\n\tcontent: "";\n\tposition: absolute;\n\twidth: 8px;\n\theight: 8px;\n\tbackground: #e74c3c;\n\tborder-radius: 50%;\n\ttop: 25%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tanimation: blink 2s infinite;\n}\n\n@keyframes blink {\n\t0%, 100% { opacity: 1; }\n\t50% { opacity: 0.2; }\n}\n',
      },
    ],
  },
  //////////////////////////////////// W-Shica Example
  {
    id: 7,
    title: "W-Shica Small Code Example",
    content: [
      {
        type: "heading",
        text: "Hint task 1",
      },
      {
        type: "heading",
        text: "Shica hints",
      },
      {
        type: "hint",
        title: "Hint",
        text:
          "You can use a <b>state</b> to define the behavior of the agent. Inside the state, you can define event handlers for time and click events." +
          "<a href='/docs/'><u><b> See docs > state features</b></u></a> for more details.",
        items: [
          "how many states you need.",
          "what event handlers to define in each state. (docs > event functions)",
          "how to transition between states. (docs > state features)",
        ],
      },
      {
        type: "paragraph",
        text: "The following is a small code example for Task 1 using W-Shica.",
      },
      {
        type: "paragraph",
        text:
          "This code switches the agent's state between A, B, and C every second, logging the current state each time." +
          " In this example, there are three states: <b>A</b>, <b>B</b>, and <b>C</b>. Each state has an entry event handler (<b>entryEH()</b>) that logs the current state when the agent enters that state." +
          " Additionally, each state has a timer event handler (<b>timerEH(int sec)</b>) that transitions the agent to the next state after one second." +
          " timerEH receives the elapsed time in seconds as an argument.",
      },
      {
        type: "code",
        filename: "state.shica",
        code: `//state management example
state A(){
    entryEH(){print("Current State: A");}
    timerEH(int sec){
      state B;
    }
}
state B(){
    entryEH(){print("Current State: B");}
    timerEH(int sec){
      state C;
    }
}
state C(){
    entryEH(){print("Current State: C");}
    timerEH(int sec){
      state A;
    }
}`,
      },
      {
        type: "paragraph",
        text:
          "This code sets up a click event listener for an agent and logs a message when the agent is clicked." +
          " In this example, the agent is in the <b>waitingForClick</b> state, which has a click event handler (<b>clickEH(int x, int y)</b>) that logs a message each time the agent is clicked." +
          " clickEH receives the x and y coordinates of the click as arguments.",
      },
      {
        type: "code",
        filename: "click.shica",
        code: `//click event listener for agent
state waitingForClick(){
    clickEH(int x, int y){
        print("Agent 1 clicked");
    }
}`,
      },
      {
        type: "paragraph",
        text:
          "This code uses a timer event handler to log a message every 2 seconds." +
          " In this example, the agent is in the <b>timeLogging</b> state, which has a timer event handler (<b>timerEH(int sec)</b>) that checks if the elapsed time in seconds is a multiple of 2." +
          " If it is, it logs the message '2 second'." +
          " timerEH receives the elapsed time in seconds as an argument.",
      },
      {
        type: "code",
        filename: "time.shica",
        code: `//2 second logging 
state timeLogging(){
    timerEH(int sec){
        if(sec % 2 == 0)print("2 second");
    }
}`,
      },
      {
        type: "hint",
        title: "timer example using event condition",
        code: `//event condition example
state exampleState(){
    timerEH(int sec: sec%2==0){
        print("This event triggers every 2 seconds");
    }
}`,
      },
      {
        type: "hint",
        title:
          "WARN: Only open this if you have absolutely no idea what to do.",
        text: "You can structure your code as follows:",
        code:
          "state morining(){\n\t// timerEH(int sec) {\n\t    //If 5 seconds have passed\n\t\t// state transition to next state\n\t// }\n\n\t// clickEH(int x, int y) {\n\t//     //print out message\n\t// }\n}" +
          "\nstate afternoon(){\n\t//similar to morning state\n}" +
          "\nstate evening(){\n\t//similar to morning state\n}",
      },
      {
        type: "heading",
        text: "Hint task 2", //task 2
      },
      {
        type: "paragraph",
        text: "The following is a small code example for Task 2 using W-Shica.",
      },
      {
        type: "hint",
        title: "Hint",
        text:
          "You can starting from following steps" +
          "(You can see the example code at <a href='/docs/'><u>docs</u></a> > event features)",
        items: [
          "How many state you need.",
          "What event handlers to define in each state.",
          "How to manage velocity and position of the agent.",
          "How to handle timing for stopping and resuming movement.",
        ],
      },

      {
        type: "paragraph",
        text:
          "This code moves the agent continuously to the right direction." +
          " In this example, the agent is in the <b>movingRightState</b> state, which has an entry event handler (<b>entryEH()</b>) that sets the agent's velocity in the x direction to 5 units when the agent enters this state.",
      },
      {
        type: "code",
        filename: "move_right.shica",
        code: `//move right example
int vx = 5;//velocity in x direction
state movingRightState(){
    entryEH(){
        setVX(vx);
    }
}`,
      },
      {
        type: "paragraph",
        text:
          "This code makes the agent bounce back when it collides with an obstacle." +
          " In this example, the agent is in the <b>bounceState</b> state, which has a collision event handler (<b>collisionEH(int xdir, int ydir)</b>) that reverses the agent's x velocity when a collision occurs in the x direction." +
          " xdir and ydir indicate the direction of the collision.",
      },
      {
        type: "code",
        filename: "bounce.shica",
        code: `//continuous movement example
state movingState(){
    entryEH(){setVX(5);}
    collisionEH(int xdir, int ydir){
        print("xdir: ", xdir, ", ydir: ", ydir);
        if(xdir != 0)setVX(-getVX());
    }
}`,
      },
      {
        type: "hint",
        title:
          "WARN: Only open this if you have absolutely no idea what to do.",
        code:
          "//define vx (velocity in x direction)\n//define vy (velocity in y direction)\n" +
          "state movingState(){\n\t____EH(){//trigger when entering this state\n\t\t//set velocity (vx, vy);\n\t}\n\t____EH(type args){\n\t\t//if x direction is collision\n\t\t\t//reverse x velocity\n\t\t//if y direction is collision\n\t\t\t//reverse y velocity\n\t}\n\t____EH(type args){//trigger when touch\n\t\t//state change to stoppedState\n\t}\n}" +
          "\nstate stoppedState(){\n\tentryEH(){\n\t\t//store current velocity\n\t\t//set velocity(0, 0);\n\t}\n\ttimerEH(int sec){//Define time event handler here" +
          "\n\t\t//if 3 seconds left" +
          "\n\t\t\t//state transition movingState\n\t}" +
          "\n}",
      },
      {
        type: "heading",
        text: "Hint task 3",
      },
      {
        type: "paragraph",
        text: "The following is a small code example for Task 3 using W-Shica.",
      },
      {
        type: "heading",
        text: "Shica hints",
      },
      {
        type: "hint",
        title: "Hint",
        text:
          "You can add agent by click add file. But you should consider the following points:" +
          " (You can see the example code at <a href='/docs/'><u>docs</u></a> > distributed features)",
        items: [
          "How many state you need.",
          "What event handlers to define in each state.",
          "How to use broadcast event objects for inter-agent communication.",
          "All agents program is same or not.",
        ],
      },
      {
        type: "paragraph",
        text:
          "This code demonstrates how to use a broadcast event object for inter-agent communication." +
          " In this example, a broadcast event object named <b>channel</b> is created with the name 'channel1' and a password 'password'." +
          " The agent has a touch event handler (<b>touchEH(int count)</b>) that sends a message 'Agent clicked' to the channel when the agent is clicked." +
          " Additionally, the agent has a received event handler (<b>channel.receivedEH(str addr, str msg)</b>) that prints any message received from the channel." +
          " (addr indicates the address of the sender, and msg is the message content.)" +
          " Implementing this code, you need to click <b>'add file'</b> button in the Shica IDE.",
      },
      {
        type: "code",
        filename: "broadcast.shica",
        code: `//broadcast event object example
var channel =broadcastEO("channel1", "password");
state broadcastExampleState(){
    touchEH(int count){
        channel.send("Agent clicked");
    }
    channel.receivedEH(str addr, str msg){
        print(msg);
    }
}`,
      },
      {
        type: "paragraph",
        text: "This code changes the agent's color when entrying the state.",
      },
      {
        type: "code",
        filename: "color_change.shica",
        code: `//change color example
state colorChange(){
    entryEH(){
        setColor(255,0,0);//red
        //setColor(0,0,0);//black
    }
}`,
      },
      {
        type: "hint",
        title:
          "WARN: Only open this if you have absolutely no idea what to do.",
        code:
          "//define channle variable as new broadcast event object\n" +
          "state off(){\n\t" +
          "__EH(){//trigger when entring this state\n\t//set a color black\n\t}\n" +
          "\t__EH(type args){//trigger when agent click\n" +
          "\t\t//state change to on\n\t}\n}\n" +
          "state on(){\n\t" +
          "__EH(){//trigger when entering this state\n\t\t//set a color white\n\t\t//send message to channel\n\t}\n" +
          "\t__EH(type args){//trigger when agent click\n" +
          "\t\t//state change to off\n\t}\n" +
          "\tchannel.__EH(type args){//trigger when receiving message from channel\n\t\t//state change to off\n\t}\n" +
          "}",
      },
    ],
  },
  ///////////////////////////////////// JavaScript Example
  {
    id: 8,
    title: "JavaScript Small Code Example",
    content: [
      {
        type: "heading",
        text: "Hint task 1",
      },
      {
        type: "paragraph",
        text: "The following is a small code example for Task 1 using JavaScript.",
      },
      {
        type: "hint",
        title: "Hint",
        text:
          "You can use variables to manage the state of the agent. You can use functions to handle time and click events." +
          "<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'><u> See MDN Web Docs > JavaScript</u></a> for more details.",
        items: [
          "how many states you need.",
          "what functions to define for each state.",
          "how to transition between states.",
          "Step1: Use setInterval to change state every 5 seconds.",
          "Step2: Use addEventListener to handle click events on the agent.",
        ],
      },
      {
        type: "paragraph",
        text:
          "This code switches the agent's state between A, B, and C every second, logging the current state each time." +
          " In this example, there are three states: <b>A</b>, <b>B</b>, and <b>C</b>. The variable <b>stateIndex</b> keeps track of the current state index." +
          " The function <b>switchNextState</b> updates the state index to the next state and logs the current state." +
          " The <b>setInterval(function, delay)</b> function calls switchNextState every 1000 milliseconds (1 second).",
      },
      {
        type: "code",
        filename: "state.js",
        code: `
var stateIndex = 0; // indicates current state (A)
const states = ['A', 'B', 'C'];
const switchNextState = () => {
  stateIndex = (stateIndex + 1) % states.length;
  console.log("Current State: " + states[stateIndex]);
}
setInterval(switchNextState, 1000);
`,
        output: "Current State: B\nCurrent State: C\n...",
      },
      {
        type: "paragraph",
        text:
          "This code sets up a click event listener for an agent and logs a message when the agent is clicked." +
          " In this example, the agent is selected using <b>document.getElementById('agent1')</b>, and an event listener is added using <b>addEventListener('click', function)</b>." +
          " When the agent is clicked, the function logs the message 'Agent 1 clicked'.",
      },
      {
        type: "code",
        filename: "click.js",
        code: `//click event listener for agent
const agent = document.getElementById("agent1");
agent.addEventListener("click", function() {
      console.log("Agent 1 clicked");
}`,
        output: "Agent 1 clicked\nAgent 1 clicked\n...",
      },
      {
        type: "hint",
        title: "HTML code",
        text: "You can use the following HTML code to create the agent (checkbox) element.",
        code: `<div id="map">
	<div class="robot-vacuum" id="agent1"></div>
</div>`,
      },
      {
        type: "hint",
        title: "CSS code",
        text: "Agent (robot vacuum) style code. Agent size is (50x,50px). and Map size is (500x,500px).",
        code: '#map {\n\tposition: relative;\n\twidth: 500px;\n\theight: 500px;\n\tborder: 1px solid #ccc;\n\tbackground-color: #f9f9f9;\n\tbackground-image: linear-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px), \n\tlinear-gradient(90deg, rgba(0, 0, 0, 0.08) 1px, transparent 1px);\n\tbackground-size: 20px 20px;\n\tcursor: crosshair;\n}\n\n.robot-vacuum {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 50px;\n\theight: 50px;\n\ttransition: all 0.05s linear;\n\twill-change: transform;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground: linear-gradient(135deg, #2c3e50, #34495e);\n\tborder-radius: 50%;\n\tborder: 3px solid #000;\n\tbox-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);\n}\n\n.robot-vacuum::before {\n\tcontent: "";\n\tposition: absolute;\n\twidth: 20px;\n\theight: 20px;\n\tbackground: #000;\n\tborder-radius: 50%;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tbox-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.robot-vacuum::after {\n\tcontent: "";\n\tposition: absolute;\n\twidth: 8px;\n\theight: 8px;\n\tbackground: #e74c3c;\n\tborder-radius: 50%;\n\ttop: 25%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tanimation: blink 2s infinite;\n}\n\n@keyframes blink {\n\t0%, 100% { opacity: 1; }\n\t50% { opacity: 0.2; }\n}\n',
      },
      {
        type: "paragraph",
        text:
          "This code uses setInterval to log a message every 2 seconds." +
          " The function <b>logging</b> logs the message '2 second' to the console." +
          " The <b>setInterval(function, delay)</b> function calls logging every 2000 milliseconds (2 seconds).",
      },
      {
        type: "code",
        filename: "time.js",
        code: `//2 second logging
const logging = () => {
  console.log("2 second")
};
setInterval(logging, 2000);
`,
        output: "2 second\n2 second\n...",
      },
      ///// TASK 2
      {
        type: "heading",
        text: "Hint task 2",
      },
      {
        type: "paragraph",
        text: "The following is a small code example for Task 2 using JavaScript.",
      },
      {
        type: "hint",
        title: "Hint",
        items: [
          "How many states you need.",
          "What event handlers to define in each state.",
          "How to manage velocity and position of the agent.",
          "How to handle timing for stopping and resuming movement.",
          "Step1: Move the agent continuously.",
          "Step2: Handle boundary condition of the map.",
          "Step3: Handle click event to stop and resume movement.",
        ],
      },
      {
        type: "paragraph",
        text:
          "This code moves an agent to the right continuously by updating its position every 50 milliseconds." +
          " The agent's current position is tracked using the variable <b>posX</b>, and its velocity in the x direction is defined by <b>vx</b>." +
          " The <b>setInterval(function, delay)</b> function updates the agent's position by adding the velocity to the current position and applying a CSS transform to move the agent on the screen.",
      },
      {
        type: "code",
        filename: "move.js",
        code: `//Simple moving agent example
const agent = document.getElementById("agent1");
let vx = 5; // velocity in x direction
let posX = 0; // current x position
// Update agent position every 50ms
setInterval(() => {
  posX += vx;
  agent.style.transform = \`translate(\${posX}px, 0px)\`;
}, 50);
`,
      },
      {
        type: "paragraph",
        text:
          "This code indicates boundary condition of provided HTML/CSS environment." +
          " In this example, the agent's position is checked against the boundaries of the map (0 and 450 pixels, considering the agent size of 50 pixels)." +
          " If the agent's position goes beyond these boundaries, a collision with the boundary is detected.",
      },
      {
        type: "code",
        filename: "BoundaryCondition.js",
        code: `//extend move.js code to handle boundary condition
if(posX <=0 || posX >= 500 - 50){
    //collision with boundary}
}`,
      },
      {
        type: "hint",
        title: "How to use Boundary Condition",
        text: "If you use the CSS and HTML code from the previous hint, you can handle boundary conditions as follows.",
        code: `//Boundary condition example
const agent = document.getElementById("agent1");
const mapWidth = 500; // Width of the map
const agentSize = 50; // Size of the agent
var vx = 5; // velocity in x direction
var posX = 0; // current x position
// Update agent position every 50ms
setInterval(() => {
  posX += vx;
  // Check for boundary collision
  if (posX <= 0 || posX >= mapWidth - agentSize) {
    vx = -vx; // Reverse direction
  }
  agent.style.transform = \`translate(\${posX}px, 0px)\`;
}, 100);
`,
      },
      {
        type: "heading",
        text: "Hint task 3",
      },
      {
        type: "paragraph",
        text: "The following is a small code example for Task 3 using JavaScript.",
      },
      {
        type: "hint",
        title: "Hint",
        items: [
          "How to manage on/off state for each agent.",
          "How to handle click events to toggle the state of the clicked agent.",
          "How to ensure that only one agent is 'on' at any given time by turning off the other agents when one is turned on.",
        ],
      },
      {
        type: "paragraph",
        text:
          "This code demonstrates inter-agent communication using the BroadcastChannel API." +
          " In this example, two agents (Agent 1 and Agent 2) communicate through a broadcast channel named 'channel1'." +
          " When Agent 1 is clicked, it sends a message containing its ID to the channel." +
          " Agent 2 listens for messages on the same channel and logs any received messages, ignoring messages sent by itself." +
          " <b>BroadcastChannel(channelName)</b> allows simple communication between different browsing contexts (like different tabs or iframes) or different agents in this case." +
          " The <b>postMessage(message)</b> method sends a message to the channel, and the <b>onmessage</b> event handler processes incoming messages.",
      },
      {
        type: "code",
        filename: "broadcast.js",
        code: `//broadcast (send & receive) example using JavaScript
//Agent 1 code
const robot1CH = new BroadcastChannel("channel1");
const robot1 = document.getElementById("agent1");
robot1.addEventListener("click", () => {
  robot1CH.postMessage({ fromId: 1 });
});
//Agent 2 code
const robot2CH = new BroadcastChannel("channel1");
robot2CH.onmessage = (e) => {
  const msg = e.data;
  if (!msg || typeof msg.fromId !== "number") return;
  if (msg.fromId === 2) return; 
  console.log("received!", msg);
};`,
      },
      {
        type: "paragraph",
        text: "This code changes the agent's color using JavaScript.",
      },
      {
        type: "code",
        filename: "colorChange.js",
        code: `//change color example using JavaScript
const agent = document.getElementById("agent1");
agent.style.background = "rgb(255, 0, 0)"//ret;
//agent.style.background = "rgb(0, 0, 0)"//black;
`,
      },
      {
        type: "hint",
        title: "Display 3 agents by HTML",
        text: "You can use the following HTML code to create three agents (checkboxes) elements.",
        code: `<div id="map">
  <div class="robot-vacuum" id="agent1" style="transform: translate(0px, 0px)"></div>
  <div class="robot-vacuum" id="agent2" style="transform: translate(60px, 0px)"></div>
  <div class="robot-vacuum" id="agent3" style="transform: translate(120px,0px)"></div>
</div>`,
      },
      {
        type: "hint",
        title: "State management example",
        code: `//state management example using JavaScript
const agent = document.getElementById("agent1");
let isOn = false; // initial state
agent.addEventListener("click", () => {
  isOn = !isOn;
  console.log("Agent state:", isOn ? "ON" : "OFF");
});`,
      },
    ],
  },
];
