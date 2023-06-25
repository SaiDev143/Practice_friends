import React, { useEffect, useState } from "react";

const Final = () => {
  const [list, setList] = useState([]);
  const [message, setMessage] = useState({ text: "", id: "" });
  const [editing, SetEditing] = useState({ id: "", status: false });
  const changemessage = (e) => {
    setMessage({ ...message, text: e.target.value });
  };
  const handleadd = (e) => {
    e.preventDefault();
    let userobj = {
      text: message.text,
      id: new Date().getTime().toString(),
    };
    setList([...list, userobj]);
    setMessage({ text: "", id: "" });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="message"
          id="message"
          value={message.text}
          onChange={changemessage}
        />

        <button onClick={handleadd}>Add</button>
      </form>

      <hr />
      <div>
        {list.length === 0 ? (
          <strong>Please add your todo list</strong>
        ) : (
          list.map((eachitem) => {
            const { id, text } = eachitem;
            return (
              <ul>
                <li key={id}>
                  <span>{text}</span>
                  <button>edit</button>
                  <button>delete</button>
                </li>
              </ul>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Final;
