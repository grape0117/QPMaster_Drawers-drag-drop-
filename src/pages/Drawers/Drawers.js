import { useState } from "react";

// Components
import ReposCard from "../../components/ReposCard/ReposCard";

// Styles
import "./Drawers.scss";

// config
import { drawers } from "./config";

function DrawersComponent() {
  const [displayLists, setDisplayLists] = useState(drawers.drawers);
  const originalArray = drawers.drawers.map(() => false);
  const [initialState, setInitialState] = useState(originalArray);
  const [isOutlined, setIsOutlined] = useState(originalArray);

  const handleSwitch = (e, index) => {
    var source_index = JSON.parse(e.dataTransfer.getData("text/plain"));

    const newItems = [...displayLists];
    let temp = newItems[index];
    newItems[index] = newItems[source_index];
    newItems[source_index] = temp;
    setDisplayLists(newItems);
  };

  return (
    <div className="repos">
      <h1>Here is DrawersComponent</h1>
      <div style={{ width: "100%", height: "20px" }}></div>
      <div className="reposList">
        {displayLists.map((drawer, index) => {
          if (drawer == null) {
            return (
              <div style={{ width: `${100 / drawers.cols}%` }}>
                <ReposCard
                  key={index}
                  index={index}
                  description="false"
                  details={drawer}
                  visibility="hidden"
                  cols={drawers.cols}
                />
              </div>
            );
          } else if (drawer.boxNumber === null && drawer.project === "") {
            return (
              <div
                className="not-null"
                draggable
                style={{
                  width: `${100 / drawers.cols}%`,
                  opacity: initialState[index] === true ? 0.3 : 1,
                }}
                onDragStart={(e) => {
                  let tmp = [...initialState];
                  tmp[index] = true;
                  setInitialState([...tmp]);
                  e.dataTransfer.setData("text/plain", index);
                  e.dataTransfer.setData(
                    "application/json",
                    JSON.stringify(drawer)
                  );
                }}
                onDragOver={(e) => {
                  e.preventDefault();
                }}
                onDragEnter={(e) => {
                  let temp = [...isOutlined];
                  temp[index] = true;
                  setIsOutlined(temp);                  
                }}
                onDragEnd={(e) => {
                  setInitialState(originalArray);
                  setIsOutlined(originalArray);
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  handleSwitch(e, index);
                }}
              >
                <ReposCard
                  key={index}
                  index={index}
                  description="Empty drawer"
                  details={drawer}
                  cols={drawers.cols}
                  outline = {isOutlined[index]}
                />
              </div>
            );
          } else {
            return (
              <div
                className="not-null"
                style={{
                  width: `${100 / drawers.cols}%`,
                  opacity: initialState[index] === true ? 0.3 : 1,
                }}
                draggable
                onDragStart={(e) => {
                  const tmp = [...initialState];
                  tmp[index] = true;
                  setInitialState([...tmp]);
                  e.dataTransfer.setData("text/plain", index);
                  e.dataTransfer.setData(
                    "application/json",
                    JSON.stringify(drawer)
                  );
                }}
                onDragOver={(e) => {
                  e.preventDefault();
                }}
                onDragEnter={(e) => {
                  let tmp = [...isOutlined];
                  tmp[index] = true;
                  setIsOutlined(tmp);                                    
                }}
                onDragEnd={(e) => {
                  setInitialState(originalArray);
                  setIsOutlined(originalArray);
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  handleSwitch(e, index);
                }}
              >
                <ReposCard
                  key={index}
                  index={index}
                  description="exist"
                  details={drawer}
                  cols={drawers.cols}
                  outline = {isOutlined[index]}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default DrawersComponent;
