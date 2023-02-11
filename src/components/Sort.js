import { React, useState } from "react";

const Sort = ({ value, onClickSort }) => {
  const [sortActive, setSortActive] = useState(false);
  // const [activeListIndex, setActiveListIndex] = useState(0);

  const list = [
    { name: "популярности(DESC)", sortProperty: "rating" },
    { name: "популярности(ASK)", sortProperty: "-rating" },
    { name: "цене(DESC)", sortProperty: "price" },
    { name: "цене(ASK)", sortProperty: "-price" },
    { name: "алфавиту(DESC)", sortProperty: "title" },
    { name: "алфавиту(ASK)", sortProperty: "-title" },
  ];
  const changeListIndex = (i) => {
    onClickSort(i);
    setSortActive(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        {sortActive && (
          <div className="sort__popup">
            <ul>
              {list.map((item, i) => (
                <li
                  key={i}
                  onClick={() => changeListIndex(item)}
                  className={
                    value.sortProperty === item.sortProperty ? "active" : ""
                  }
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        <b>Сортировка по:</b>
        <span onClick={() => setSortActive(!sortActive)}>{value.name}</span>
      </div>
    </div>
  );
};

export default Sort;

// <li  onClick={() => changeListIndex(i)} className={activeListIndex === i ? "active" : ""}>популярности</li>
//               <li onClick={() => changeListIndex(i)} className={activeListIndex === i ? "active" : ""}>цене</li>
//               <li onClick={() => changeListIndex(i)} className={activeListIndex === i ? "active" : ""}>алфавиту</li>
