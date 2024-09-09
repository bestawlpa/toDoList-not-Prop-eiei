import React, { useState } from "react";

const Content = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const [clickComplete, setClickComplete] = useState(null);

  const handleAddTodo = () => {
    setTodos([
      ...todos,
      { id: Date.now(), title, text, status: "complete", isEditing: false },
    ]);
    setTitle("");
    setText("");
  };

  const handleRemove = (id) => {
    setTodos(todos.filter((e) => e.id !== id));
  };

  const handleEdit = (id) => {
    setTodos(todos.map((e) => (e.id === id ? { ...e, isEditing: true } : e)));
  };

  const handleSave = (id, newTitle, newText) => {
    setTodos(
      todos.map((e) =>
        e.id === id
          ? {
              ...e,
              title: newTitle,
              text: newText,
              status: "complete",
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
          <button onClick={handleAddTodo}>add</button>
        </div>

        <div id="form-list">
          <h1>List</h1>
          <div>
            {todos.map((e) =>
              e.isEditing ? (
                <div>
                  <h1>Edit</h1>
                  <div key={e.id}>
                    <input
                      type="text"
                      value={e.title}
                      onChange={(even) =>
                        setTodos(
                          todos.map((todo) =>
                            todo.id == e.id
                              ? {
                                  ...todo,
                                  title: even.target.value,
                                }
                              : todo
                          )
                        )
                      }
                    />
                    <input
                      type="text"
                      value={e.text}
                      onChange={(even) =>
                        setTodos(
                          todos.map((todo) =>
                            todo.id == e.id
                              ? {
                                  ...todo,
                                  text: even.target.value,
                                }
                              : todo
                          )
                        )
                      }
                    />
                    <button onClick={() => handleSave(e.id, e.title, e.text)}>
                      save
                    </button>
                  </div>
                </div>
              ) : (
                <div key={e.id}>
                  <button>complete</button>
                  <h2>{e.title}</h2>
                  <h5>{e.text}</h5>
                  <div>
                    <button onClick={() => handleEdit(e.id)}>edit</button>
                    <button onClick={() => handleRemove(e.id)}>remove</button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Content;
