## Speed Typing game

I have made this project with [ReactJs](https://reactjs.org/) in order to practice the [hooks](https://reactjs.org/docs/hooks-intro.html) and [context](https://reactjs.org/docs/context.html) (useState, useEffect, useRef, useContext, useReducer).

### Dependencies:

-[ReactJs](https://reactjs.org/)<br />
-[axios](https://github.com/axios/axios)<br />
-[json-server](https://github.com/typicode/json-server)<br />
-[concurrently](https://github.com/kimmobrunfeldt/concurrently#readme)<br />
-[howler](https://howlerjs.com/)<br />

### How to play:

This is a **speed typing game**. You can use it to practice you typing speed! The **rules** are pretty straight forward, once you have chosen a **difficulty** and a **time** you can press **start** to begin the game. A **word** will appear on top of the **input field** and you have to type it in the exact same way that it appears on the screen. Press **enter** to validate your answer. If the answer is right you will earn **1 point** then the next word will appear.

### Run the application:

to run this application use the command line `npm run dev`.
Since the game features a [local http server](https://github.com/typicode/json-server), I used [concurrently](https://github.com/kimmobrunfeldt/concurrently#readme) to run both the server and the app at the same time