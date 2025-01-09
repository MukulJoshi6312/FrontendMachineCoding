import React, { useState, useEffect } from "react";

const Code = () => {
  const [arr, setArr] = useState(() => {
    // Fetch initial data from localStorage
    const savedData = localStorage.getItem("todoList");
    return savedData ? JSON.parse(savedData) : [
      { item: "Services", isChecked: false },
      { item: "Github", isChecked: false },
      { item: "Databases", isChecked: false },
    ];
  });

  const [dataname, setDataname] = useState("");

  useEffect(() => {
    // Update localStorage whenever arr changes
    localStorage.setItem("todoList", JSON.stringify(arr));
  }, [arr]);

  const checkHandler = (index) => {
    arr[index].isChecked = !arr[index].isChecked;
    setArr([...arr]);
  };

  const removeHandler = (index) => {
    arr.splice(index, 1);
    setArr([...arr]);
  };

  const addNewItem = () => {
    const obj = { item: dataname, isChecked: false };
    if (!dataname) return;
    setArr([...arr, obj]);
    setDataname("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewItem();
    }
  };

  return (
    <div>
      <h1>This is my code</h1>
      {arr.map((data, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          <input
            type="checkbox"
            checked={data.isChecked}
            onChange={() => checkHandler(index)}
          />
          <li
            style={{
              listStyle: "none",
              textDecoration: data.isChecked ? "line-through" : "none",
            }}
          >
            {data.item}
          </li>
          {data.isChecked && (
            <span
              onClick={() => removeHandler(index)}
              style={{ cursor: "pointer", color: "red" }}
            >
              X
            </span>
          )}
        </div>
      ))}
      <br />
      <input
        type="text"
        placeholder="Enter the name"
        value={dataname}
        onChange={(e) => setDataname(e.target.value)}
        onKeyDown={handleKeyDown} // Call function on key press
        style={{ outline: "none" }}
      />
      <br />
      <br />
      <button onClick={addNewItem}>Add new Item</button>
    </div>
  );
};

export default Code;
