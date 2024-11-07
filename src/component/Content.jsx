import React, { useState } from "react";

const Content = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [err, setErr] = useState("");

  const handleAddTodo = () => {
    if (title === "" || text === "") {
      setErr("ลืมใส่ช่องไหนป่าวเตง !!");
      setTimeout(() => {
        setErr("");
      }, [1000]);
      return;
    }
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: title,
        text: text,
        isEditing: false,
      },
    ]);
    setTitle("");
    setText("");
  };

  const handleRemove = (id) => {
    setTodos(todos.filter((e) => e.id !== id));
  };

  const handleEdit = (id) => {
    setTodos(todos.map((e) => (e.id == id ? { ...e, isEditing: true } : e)));
  };

  const handleSave = (id, updateTilte, updatetext) => {
    setTodos(
      todos.map((e) =>
        e.id == id
          ? {
              ...e,
              title: updateTilte,
              text: updatetext,
              isEditing: false,
            }
          : e
      )
    );
  };

  return (
    <div>
      <div id="form-add">
        <h1>ToDo...List</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {err}
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
          <button onClick={handleAddTodo}>add</button>
        </div>
      </div>
      {/*  */}
      <div>
        {todos.map((e) =>
          e.isEditing ? (
            <div key={e.id}>
              <input
                type="text"
                value={e.title}
                onChange={(update) =>
                  setTodos(
                    todos.map((todo) =>
                      todo.id == e.id
                        ? { ...todo, title: update.target.value }
                        : todo
                    )
                  )
                }
              />
              <input
                type="text"
                value={e.text}
                onChange={(update) =>
                  setTodos(
                    todos.map((todo) =>
                      todo.id == e.id
                        ? { ...todo, text: update.target.value }
                        : todo
                    )
                  )
                }
              />
              <button onClick={() => handleSave(e.id, e.title, e.text)}>
                save
              </button>
            </div>
          ) : (
            <div key={e.id}>
              <h1>{e.title}</h1>
              <h1>{e.text}</h1>
              <div>
                <button onClick={() => handleRemove(e.id)}>remove</button>
                <button onClick={() => handleEdit(e.id)}>edit</button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Content;
