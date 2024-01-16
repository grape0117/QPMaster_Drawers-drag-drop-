import { useEffect, useState } from "react";
import { List, ListManager } from "react-beautiful-dnd-grid";

// Components
import ReposCard from "../../components/ReposCard/ReposCard";

// Styles
import "./Drawers.scss";

// config
import { drawers } from "./config";

function DrawersComponent() {
  const [displayLists, setDisplayLists] = useState(drawers.drawers);
  const [initialState, setInitialState] = useState(
    drawers.drawers.map(() => false)
  );
  // const initialState = drawers.drawers.map(()=>false);
  // console.log(initialState,'hello')
  const [isDragging, setIsDragging] = useState(Number(0));

  const recorder = (sourceIndex, destinationIndex) => {
    console.log(
      "sourceIndex",
      sourceIndex,
      "destinationIndex",
      destinationIndex
    );

    if (sourceIndex == destinationIndex) {
      return;
    } else if (sourceIndex > destinationIndex) {
      const newItems = [...displayLists];
      const [removed] = newItems.splice(sourceIndex, 1);
      newItems.splice(destinationIndex, 0, removed);
      const [old_dest] = newItems.splice(destinationIndex + 1, 1);
      newItems.splice(sourceIndex, 0, old_dest);
      setDisplayLists(newItems);

      return;
    } else {
      const newItems = [...displayLists];
      const [removed] = newItems.splice(sourceIndex, 1);
      newItems.splice(destinationIndex, 0, removed);
      const [old_dest] = newItems.splice(destinationIndex - 1, 1);
      newItems.splice(sourceIndex, 0, old_dest);
      setDisplayLists(newItems);

      return;
    }
  };

  const handleSwitch = (e, index) => {
    // let source_data = JSON.parse(e.dataTransfer.getData('application/json'));
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
          } else if (drawer.boxNumber == null && drawer.project == "") {
            return (
              <div
                className="not-null"
                draggable
                style={{
                  width: `${100 / drawers.cols}%`,
                  opacity: initialState[index] == true ? 0.3 : 1,
                }}
                onMouseDown={(e) => {
                  console.log("mouse is downed!");
                  const tmp = [...initialState];
                  tmp[index] = true;
                  setInitialState([...tmp]);
                }}
                onDragStart={(e) => {
                  console.log("drag is started!");
                  e.dataTransfer.setData("text/plain", index);
                  e.dataTransfer.setData(
                    "application/json",
                    JSON.stringify(drawer)
                  );
                }}
                onDragOver={(e) => {
                  console.log("drag overed!");
                  e.preventDefault();
                }}
                onDragEnd={(e) => {
                  console.log("mouse is released!");
                  setInitialState(drawers.drawers.map(() => false));
                }}
                onDrop={(e) => {
                  console.log("dropped");
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
                />
              </div>
            );
          } else {
            return (
              <div
                className="not-null"
                style={{
                  width: `${100 / drawers.cols}%`,
                  opacity: initialState[index] == true ? 0.3 : 1,
                }}
                draggable
                onMouseDown={(e) => {
                  console.log("mouse is downed!");
                  const tmp = [...initialState];
                  tmp[index] = true;
                  setInitialState([...tmp]);
                }}
                onDragStart={(e) => {
                  console.log("drag is started!");
                  e.dataTransfer.setData("text/plain", index);
                  e.dataTransfer.setData(
                    "application/json",
                    JSON.stringify(drawer)
                  );
                }}
                onDragOver={(e) => {
                  console.log("drag overed!");
                  e.preventDefault();
                }}
                onDragEnd={(e) => {
                  console.log("mouse is released!");
                  setInitialState(drawers.drawers.map(() => false));
                }}
                onDrop={(e) => {
                  console.log("dropped");
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
