// lessons/home.ts
import { Lesson } from "../types/lesson";

export const home: Lesson[] = [
  {
    id: 0,
    title: "Welcome to Shica",
    content: [
      {
        type: "heading",
        text: "State-based, Event-driven, Distributed Programming Language",
      },
      {
        type: "paragraph",
        text:
          "Shica is an experimental programming language designed around three core concepts: State, Event, and Distributed Communication. " +
          "It aims to provide a natural way to describe real-world systems such as IoT devices, physical computing, and agent-based systems.",
      },
      {
        type: "info",
        text:
          "Real-world systems are inherently stateful, reactive, and distributed. Shica makes these characteristics first-class citizens of the language.",
      },
      {
        type: "heading",
        text: "Why Shica?",
      },
      {
        type: "paragraph",
        text:
          "In many conventional programming languages, state management, event handling, and distributed communication are treated as secondary concerns. " +
          "They are often scattered across variables, callbacks, and external libraries.",
      },
      {
        type: "paragraph",
        text:
          "Shica integrates these concepts directly into the language, allowing programmers to focus on how a system behaves rather than how control flow is manually implemented.",
      },

      {
        type: "heading",
        text: "Key Features",
      },
      {
        type: "heading",
        text: "1. State-centric Program Structure",
      },
      {
        type: "paragraph",
        text:
          "A Shica program is composed of explicit states. Each state defines which events are valid and how the system should react while in that state.",
      },
      {
        type: "paragraph",
        text:
          "This structure makes it easy to understand what can happen in each state and how transitions occur.",
      },

      {
        type: "heading",
        text: "2. Event-driven by Design",
      },
      {
        type: "paragraph",
        text:
          "All interactions in Shica—such as sensor inputs, user actions, or messages—are treated as events. " +
          "Event handlers are clearly associated with states, reducing hidden control flow and complex conditionals.",
      },

      {
        type: "heading",
        text: "3. Natural Expression of Distributed Communication",
      },
      {
        type: "paragraph",
        text:
          "Shica assumes that systems may consist of multiple cooperating agents. Communication between agents is not an afterthought, " +
          "but a fundamental part of the programming model.",
      },

      {
        type: "heading",
        text: "Execution Environments",
      },
      {
        type:"figure",
        src:"/home/shica-wr.png",
        altText:"Shica execution environments: W-Shica in the browser and R-Shica on a Raspberry Pi."
      },
      {
        type: "heading",
        text: "W-Shica (Web-Shica)",
      },
      {
        type: "paragraph",
        text:
          "W-Shica is a browser-based execution environment that allows developers to test, debug, and simulate Shica programs without real hardware.",
      },
      {
        type: "list",
        items: [
          "Runs in a web browser",
          "No physical devices required",
          "Suitable for education and rapid prototyping",
        ],
      },

      {
        type: "heading",
        text: "R-Shica (Real-Shica)",
      },
      {
        type: "paragraph",
        text:
          "R-Shica runs on real devices such as Raspberry Pi and interacts directly with sensors and actuators.",
      },
      {
        type: "list",
        items: [
          "Runs on physical hardware",
          "Direct access to sensors and actuators",
          "Designed for IoT, robotics, and physical computing",
        ],
      },

      {
        type: "heading",
        text: "Research-Oriented Language Design",
      },
      {
        type: "paragraph",
        text:
          "Shica is not only a practical tool but also a research platform. It explores how integrating state, event, and distribution " +
          "into a unified language model affects readability, cognitive load, and expressiveness.",
      },

      {
        type: "heading",
        text: "Looking Ahead",
      },
      {
        type: "paragraph",
        text:
          "Shica is an evolving project. Its language specification, runtime, and tooling continue to develop in pursuit of more intuitive " +
          "and expressive programming for complex, interactive systems.",
      },
    ],
  },
];
