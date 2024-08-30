// -- (1)

// import { useState } from "react";

// const Content = () => {
//   const [todos, setTodos] = useState([]);
//   const [text, setText] = useState("");
//   const [editText, setEditText] = useState("");

//   const handleClickAddTodo = () => {
//     if (text.trim() === "") {
//       alert("Please enter a todo item.");
//       return;
//     }
//     const newTodo = {
//       id: Date.now(),
//       text: text,
//       status: "complete",
//     };
//     setTodos([...todos, newTodo]);
//     setText("");
//   };

//   const editTodo = (id) => {
//     const todo = todos.find((todo) => todo.id === id);

//     if (todo) {
//       todo.status = "edit";
//       setEditText(todo.text);
//       setTodos([...todos]);
//     }
//   };

//   const saveTodo = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, text: editText, status: "complete" } : todo
//       )
//     );
//     setEditText("");
//   };

//   const remove = async (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div className=" w-[800px] h-[600px] bg-red-400">
//       <div>
//         <div>
//           <input
//             type="text"
//             placeholder="text"
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//           />
//         </div>
//         <button onClick={handleClickAddTodo}>add</button>
//       </div>
//       <div className=" w-[500px] h-[400px] flex flex-col bg-gray-500">
//         {todos.map((todo) =>
//           todo.status === "complete" ? (
//             <div key={todo.id}>
//               <h1>{todo.text}</h1>
//               <h1>{todo.id}</h1>
//               <button
//                 onClick={() => editTodo(todo.id)}
//                 id="btn-edit"
//                 className="focus:bg-[#0766AD]  bg-[#9B4444]  w-10 h-6 rounded-full flex justify-center items-center text-[#F2F1EB] focus:text-[#C5E898]"
//               >
//                 edit
//               </button>
//               <button
//                 onClick={() => remove(todo.id)}
//                 id="btn-edit"
//                 className="focus:bg-[#0766AD]  bg-[#9B4444]  w-10 h-6 rounded-full flex justify-center items-center text-[#F2F1EB] focus:text-[#C5E898]"
//               >
//                 remove
//               </button>
//             </div>
//           ) : (
//             <div key={todo.id}>
//               <input
//                 type="text"
//                 value={editText}
//                 onChange={(e) => setEditText(e.target.value)}
//               />
//               <button onClick={() => saveTodo(todo.id)}>Save</button>
//             </div>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default Content;

// -- (2)
// import React, { useState } from "react";

// const content = () => {
//   const [todos, setTodos] = useState([]);
//   const [text, setText] = useState("");
//   const [editText, EditSetText] = useState("");

//   const addTodoHandle = () => {
//     if (text.trim() === "") {
//       alert("พิมพ์อะไรสักหน่อยไหม ?");
//       return;
//     }

//     setTodos([...todos, { text, status: "complete" }]);
//     setText("");
//   };

//   const editHandle = (index) => {
//     const todo = todos[index];

//     if (todo) {
//       todo.status = "edit";
//       EditSetText(todo.text);
//       setTodos([...todos]);
//     }
//   };

//   const saveHandle = (index) => {
//     setTodos(
//       todos.map((todo, i) =>
//         i === index ? { ...todo, text: editText, status: "complete" } : todo
//       )
//     );
//     EditSetText("");
//   };

//   const removeHandle = (index) => {
//     setTodos(todos.filter((todo, i) => i !== index));
//   };

//   return (
//     <div>
//       <div>
//         <h1>ToDo____List</h1>
//         <div>
//           <input
//             type="text"
//             value={text}
//             placeholder="add"
//             onChange={(e) => setText(e.target.value)}
//           />
//           <button onClick={addTodoHandle}>add si wa</button>
//         </div>
//       </div>

//       <div className=" bg-yellow-200">
//         {todos.map((todo, i) =>
//           todo.status === "complete" ? (
//             <div key={i}>
//               <h1>{todo.text}</h1>
//               <button onClick={() => editHandle(i)}>edit</button>
//               <button onClick={() => removeHandle(i)}>remove</button>
//             </div>
//           ) : (
//             <div key={i}>
//               <input
//                 type="text"
//                 value={editText}
//                 onChange={(e) => EditSetText(e.target.value)}
//               />
//               <button onClick={() => saveHandle(i)}>save</button>
//             </div>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default content;

import React, { useState } from "react";

const content = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [edittitle, editSetTitle] = useState("");
  const [edittext, editSetText] = useState("");

  const addTodoHandle = () => {
    // if (title.trim() == "" || text.trim() == "") {
    //   alert("มึงลืมใส่อะไร ?");
    //   return;
    // }

    setTodos([...todos, { title, text, status: "complete" }]);
    setTitle("");
    setText("");
  };

  const removeTodoHandle = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  const editTodoHandle = (index) => {
    const todo = todos[index];

    if (todo) {
      todo.status = "edit";
      editSetTitle(todo.title);
      editSetText(todo.text);
      setTodos([...todos]);
    }
  };

  const saveTodoHandle = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index
          ? { ...todo, title: edittitle, text: edittext, status: "complete" }
          : todo
      )
    );
    editSetTitle("");
    editSetText("");
  };

  return (
    <div>
      <div>
        <h1>ToDo___List</h1>
        <div>
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={addTodoHandle}>add</button>
        </div>
      </div>
      <div>
        {todos.map((todo, i) =>
          todo.status == "complete" ? (
            <div key={i}>
              <h1>{todo.title}</h1>
              <h1>{todo.text}</h1>
              <button onClick={() => editTodoHandle(i)}>edit</button>
              <button onClick={() => removeTodoHandle(i)}>remove</button>
            </div>
          ) : (
            <div key={i}>
              <input
                type="text"
                value={edittitle}
                onChange={(e) => editSetTitle(e.target.value)}
              />
              <input
                type="text"
                value={edittext}
                onChange={(e) => editSetText(e.target.value)}
              />
              <button onClick={() => saveTodoHandle(i)}>save</button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default content;
