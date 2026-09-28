import React, { useRef, useState } from "react";
import "./App.css";

const sections = [
  {
    title: "Accordion1",
    par: "Lorem ipsum dolor sit amet consectetur adipiscing elit laLorem ipsum dolor sit amet consectetur adipiscing elit laLorem ipsum dolor sit amet consectetur adipiscing elit laLorem ipsum dolor sit amet consectetur adipiscing elit laLorem ipsum dolor sit amet consectetur adipiscing elit laLorem ipsum dolor sit amet consectetur adipiscing elit la",
  },
  {
    title: "Accordion2",
    par: "Lorem ipsum dolor sit amet consectetur adipiscing elit laLorem ipsum dolor sit amet consectetur adipiscing elit laLorem ipsum dolor sit amet consectetur adipiscing elit laLorem ipsum dolor sit amet consectetur adipiscing elit laLorem ipsum dolor sit amet consectetur adipiscing elit laLorem ipsum dolor sit amet consectetur adipiscing elit la",
  },
  {
    title: "Accordion3",
    par: "Lorem ipsum dolor sit amet consectetur adipiscing elit laLorem ipsum dolor sit amet consectetur adipiscing elit laLorem ipsum dolor sit amet consectetur adipiscing elit laLorem ipsum dolor sit amet consectetur adipiscing elit laLorem ipsum dolor sit amet consectetur adipiscing elit laLorem ipsum dolor sit amet consectetur adipiscing elit la",
  },
];

const App = () => {
  const [isActive, setIsActive] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="accordion-div">
      {sections.map((sec) => {
        return (
          <div
            key={sec.title}
            className="acor-heading"
            onClick={() => {
              if (sec.title === isActive) {
                setIsOpen(!isOpen);
              } else {
                setIsOpen(true);
              }
              setIsActive(sec.title);
            }}
          >
            <h1> {sec.title}</h1>
            <p
              className={`hidden-class ${sec.title === isActive && isOpen ? "visible-class" : "null"}`}
            >
              <span>{sec.par}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
