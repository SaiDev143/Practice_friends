import React, { useEffect, useReducer, useState } from "react";

const initialState = {
  list: [],
  message: { text: "", id: "" },
  editing: { id: "", status: false },
};

const reducer = (state, action) => {
  if (action.type === "CHANGE_MESSAGE") {
    return {
      ...state,
      message: { ...state.message, text: action.payload },
    };
  }
  if (action.type === "ADD_TODO") {
    const userobj = {
      text: state.message.text,
      id: new Date().getTime().toString(),
    };
    return {
      ...state,
      list: [...state.list, userobj],
      message: { text: "", id: "" },
    };
  }

  return state;
};

const Final = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changemessage = (e) => {
    dispatch({ type: "CHANGE_MESSAGE", payload: e.target.value });
  };

  const handleadd = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO" });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="message"
          id="message"
          value={state.message.text}
          onChange={changemessage}
        />

        <button onClick={handleadd}>Add</button>
      </form>

      <hr />
      <div>
        {state.list.map((eachitem) => {
          const { id, text } = eachitem;
          return (
            <ul>
              <li key={id}>
                <span>{text}</span>
                <button>Edit</button>
                <button>Delete</button>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Final;
