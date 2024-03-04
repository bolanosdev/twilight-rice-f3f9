import { useState } from "react";

export const Categories = ({ onChange: onChangeCB }) => {
  const [categories, setCategories] = useState([
    { name: "Domestic", checked: false },
    { name: "Exotic", checked: false },
    { name: "Sweet", checked: false },
    { name: "Tangy", checked: false },
  ]);

  const handleOnChange = (event, onChangeCB) => {
    const newCategories = categories.map((it) => ({
      name: it.name,
      checked:
        it.name.toLowerCase() === event.target.name
          ? event.target.checked
          : it.checked,
    }));
    setCategories(newCategories);
    onChangeCB(newCategories);
  };

  return (
    <div>
      <h3>Categories</h3>
      {categories.map((it, index) => (
        <div key={index}>
          <input
            name={it.name.toLowerCase()}
            type="checkbox"
            onChange={(event) => handleOnChange(event, onChangeCB)}
          />
          <label>{it.name}</label>
        </div>
      ))}{" "}
    </div>
  );
};
