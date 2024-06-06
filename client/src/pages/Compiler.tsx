import CodeEditor from "@/components/CodeEditor";
import HelperHeader from "@/components/HelperHeader";
import RenderCode from "@/components/RenderCode";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { updateFullCode } from "@/redux/slices/compilerSlice";
import { handleError } from "@/utils/handleError";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const Compiler = () => {
  const { urlId } = useParams();
  const dispatch = useDispatch();

  const loadCode = async () => {
    try {
      const response = await axios.post('http://localhost:4000/compiler/load', {
        urlId:urlId
      });
      dispatch(updateFullCode(response.data.fullCode))
    } catch (error) {
      handleError(error);
    }
  }

  useEffect(() => {
    if(urlId) {
      loadCode();
    }
  }, [urlId]);

  return (
    <div>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          defaultSize={50}
          className="h-[calc(100dvh-60px)] min-w-[350px] p-6"
        >
          <HelperHeader />
          <CodeEditor />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel
          defaultSize={50}
          className="h-[calc(100dvh-60px)] min-w-[350px]"
        >
          <RenderCode />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Compiler;


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Simple To-Do List</title>
//     <link rel="stylesheet" href="styles.css">
// </head>
// <body>
//     <div class="container">
//         <h1>To-Do List</h1>
//         <input type="text" id="todo-input" placeholder="Add a new task">
//         <button id="add-btn">Add</button>
//         <ul id="todo-list"></ul>
//     </div>

//     <script src="script.js"></script>
// </body>
// </html>

// document.getElementById('add-btn').addEventListener('click', function() {
//   const todoInput = document.getElementById('todo-input');
//   const todoText = todoInput.value.trim();

//   if (todoText !== "") {
//       const todoList = document.getElementById('todo-list');
//       const listItem = document.createElement('li');
//       listItem.textContent = todoText;

//       const deleteBtn = document.createElement('button');
//       deleteBtn.textContent = 'Delete';
//       deleteBtn.addEventListener('click', function() {
//           todoList.removeChild(listItem);
//       });

//       listItem.appendChild(deleteBtn);
//       todoList.appendChild(listItem);
//       todoInput.value = "";
//   }
// });


// document.getElementById('add-btn').addEventListener('click', function() {
//   const todoInput = document.getElementById('todo-input');
//   const todoText = todoInput.value.trim();

//   if (todoText !== "") {
//       const todoList = document.getElementById('todo-list');
//       const listItem = document.createElement('li');
//       listItem.textContent = todoText;

//       const deleteBtn = document.createElement('button');
//       deleteBtn.textContent = 'Delete';
//       deleteBtn.addEventListener('click', function() {
//           todoList.removeChild(listItem);
//       });

//       listItem.appendChild(deleteBtn);
//       todoList.appendChild(listItem);
//       todoInput.value = "";
//   }
// });