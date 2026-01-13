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
      {
        type: "heading",
        text: "Shica hints",
      },
      {
        type: "hint",
        title: "Hint1: structure",
        text:
          "You can use a <b>state</b> to define the behavior of the agent. Inside the state, you can define event handlers for time and click events." +
          "<a href='/docs/'><u><b> See docs > state features</b></u></a> for more details.",
        items: [
          "how many states you need.",
          "what event handlers to define in each state. (docs > event functions)",
          "how to transition between states. (docs > state features)",
        ],
        code: "state morningState(){\n\t//eventhandler(){...} //Define time event handler here\n\t//eventhandler(){...} //Define click event handler here\n}",
      },
      {
        type: "hint",
        title: "Hint2: Event Handlers and Functions",
        text: "You can see the example code at <a href='/docs/'><u>docs</u></a> > event functions | common. functions.",
        items: [
          "timerEH(int sec): Event handler called every second by the timer event object.",
          "clickEH(int x, int y): Event handler called when the agent is clicked, providing the click coordinates.",
          "print(string msg): Function to print messages to the console.",
          "state stateName;: Move to another state using this syntax.",
        ],
      },
      {
        type: "hint",
        title: "Hint3: Comment out",
        text: "You can comment out lines using '//' at the beginning of the line. This is useful for temporarily disabling code while testing.",
        code:
          "state morining(){\n\t// timerEH(int sec) {\n\t    //If 5 seconds have passed\n\t\t// state transition to next state\n\t// }\n\n\t// clickEH(int x, int y) {\n\t//     //print out message\n\t// }\n}" +
          "\nstate afternoon(){\n\t//similar to morning state\n}" +
          "\nstate evening(){\n\t//similar to morning state\n}",
      },
      {
        type: "heading",
        text: "JavaScript hints",
      },
      {
        type: "hint",
        title: "Hint1: Function",
      },
      {
        type: "hint",
        title: "Hint2: Structure",
      },
      {
        type: "hint",
        title: "Hint3: Comment out",
        code:
          "//define variable 'currentStateIndex' to manage current state\n" +
          "define array messages = ['Good morning', 'Good afternoon', 'Good evening'];\n" +
          "connect click event to the agent element\n" +
          "",
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
      {
        type: "heading",
        text: "Shica hints",
      },
      {
        type: "hint",
        title: "Hint1: Function",
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
        type: "hint",
        title: "Hint2: Structure",
        text: "You can structure your code as follows:",
        items: [
          "there are two states: <b>movingState</b> and <b>stoppedState</b>.",
          "<b>collisionEH(int xdir,int ydir)</b>: to handle boundary collisions and reverse direction.",
          "<b>touchEH(int count)</b>: to handle click agents and transition to stoppedState.",
          "You need to use <b>global variables</b> to manage velocity in x and y directions.",
          "In stoppedState, use a <b>timerEH(int sec)</b> to count 3 seconds before transitioning back to movingState.",
        ],
      },
      {
        type: "hint",
        title: "Hint3: Comment out",
        code:
          "//define vx (velocity in x direction)\n//define vy (velocity in y direction)\n" +
          "state movingState(){\n\tentryEH(){\n\t\t//set velocity (vx, vy);\n\t}\n\t____EH(type args){\n\t\t//if x direction is collision\n\t\t\t//reverse x velocity\n\t\t//if y direction is collision\n\t\t\t//reverse y velocity\n\t}\n\t____EH(type args){//trigger when touch\n\t\t//state change to stoppedState\n\t}\n}" +
          "\nstate stoppedState(){\n\tentryEH(){\n\t\t//store current velocity\n\t\t//set velocity(0, 0);\n\t}\n\ttimerEH(int sec){//Define time event handler here" +
          "\n\t\t//if 3 seconds left" +
          "\n\t\t\t//state transition movingState\n\t}" +
          "\n}",
      },
      {
        type: "heading",
        text: "JavaScript hints",
      },
      {
        type: "hint",
        title: "Hint1: Function",
      },
      {
        type: "hint",
        title: "Hint2: Structure",
      },
      {
        type: "hint",
        title: "Hint3: Comment out",
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
      {
        type: "heading",
        text: "Shica hints",
      },
      {
        type: "hint",
        title: "Hint1: Function",
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
        type: "hint",
        title: "Hint2: Structure",
        text: "You can structure your code as follows:",
        items: [
          "Define two states: <b>on</b> and <b>off</b>. Entering each state changes the agent's color accordingly.",
          "Use a <b>broadcast event object</b> to notify other agents when one agent is selected.",
          "In the <b>off</b> state, handle click events to transition to the <b>on</b> state.",
          "In the <b>on</b> state, handle click events to transition back to the <b>off</b> state. Also, handle events from the broadcast object to transition back to <b>off</b> when another agent is selected.",
        ],
      },
      {
        type: "hint",
        title: "Hint3: Comment out",
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
      {
        type: "heading",
        text: "JavaScript hints",
      },
      {
        type: "hint",
        title: "Hint1: Function",
      },
      {
        type: "hint",
        title: "Hint2: Structure",
      },
      {
        type: "hint",
        title: "Hint3: Comment out",
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
        type: "code",
        filename: "styles.css",
        code: '#map {\n\tposition: relative;\n\twidth: 500px;\n\theight: 500px;\n\tborder: 1px solid #ccc;\n\tbackground-color: #f9f9f9;\n\tbackground-image: linear-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.08) 1px, transparent 1px);\n\tbackground-size: 20px 20px;\n\tcursor: crosshair;\n}\n\n.robot-vacuum {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 50px;\n\theight: 50px;\n\ttransition: all 0.05s linear;\n\twill-change: transform;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground: linear-gradient(135deg, #2c3e50, #34495e);\n\tborder-radius: 50%;\n\tborder: 3px solid #000;\n\tbox-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);\n}\n\n.robot-vacuum::before {\n\tcontent: "";\n\tposition: absolute;\n\twidth: 20px;\n\theight: 20px;\n\tbackground: #000;\n\tborder-radius: 50%;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tbox-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.robot-vacuum::after {\n\tcontent: "";\n\tposition: absolute;\n\twidth: 8px;\n\theight: 8px;\n\tbackground: #e74c3c;\n\tborder-radius: 50%;\n\ttop: 25%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tanimation: blink 2s infinite;\n}\n\n@keyframes blink {\n\t0%, 100% { opacity: 1; }\n\t50% { opacity: 0.2; }\n}\n',
      },
    ],
  },
];
