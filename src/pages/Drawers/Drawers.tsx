import React, { useState, useMemo } from "react";
import ReposCard from "../../components/ReposCard/ReposCard.tsx";
import "./Drawers.scss";
import { drawers } from "./config";

type Drawer = {
  boxNumber: number | null;
  project: string;
  completed: boolean;
} | null;

function DrawersComponent() {
  const [displayLists, setDisplayLists] = useState<Drawer[]>(drawers.drawers);
  const originalArray = useMemo(() => {
    return drawers.drawers.map(() => false);
  }, []);
  const [initialState, setInitialState] = useState<boolean[]>(originalArray);
  const [isOutlined, setIsOutlined] = useState<boolean[]>(originalArray);

  const handleSwitch = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    var source_index = JSON.parse(e.dataTransfer.getData("text/plain"));

    const newItems = [...displayLists];
    let temp = newItems[index];
    newItems[index] = newItems[source_index];
    newItems[source_index] = temp;
    setDisplayLists(newItems);
  };

  return (
    <div className="repos">
      <div style={{ width: "100%", height: "20px" }}></div>
      <div className="reposList">
        {displayLists.map((drawer, index) => {
          if (drawer == null) {
            return (
              <div style={{ width: `${100 / drawers.cols}%` }}>
                <ReposCard
                  key={index}
                  index = {index}
                  description="false"
                  details={drawer}
                  visibility="hidden"
                  outline={false}
                />
              </div>
            );
          } else if (drawer.boxNumber === null && drawer.project === "") {
            return (
              <div
                draggable
                style={{
                  width: `${100 / drawers.cols}%`,
                  opacity: initialState[index] ? 0.3 : 1,
                }}
                onDragStart={(e) => {
                  let tmp = [...initialState];
                  tmp[index] = true;
                  setInitialState(tmp);
                  e.dataTransfer.setData("text/plain", index.toString());
                  e.dataTransfer.setData(
                    "application/json",
                    JSON.stringify(drawer)
                  );
                }}
                onDragOver={(e) => {
                  e.preventDefault();
                }}
                onDragEnter={(e) => {
                  console.log("empty entered");
                  let temp = [...isOutlined];
                  temp[index] = true;
                  setIsOutlined(temp);
                }}
                // onDragLeave={(e) => {
                //   console.log("empty leaved");
                //   setIsOutlined(originalArray);
                // }}
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
                  index = {index}
                  description="Empty drawer"
                  details={drawer}
                  visibility=""
                  outline={isOutlined[index]}
                />
              </div>
            );
          } else {
            return (
              <div
                style={{
                  width: `${100 / drawers.cols}%`,
                  opacity: initialState[index] ? 0.3 : 1,
                }}
                draggable
                onDragStart={(e) => {
                  const tmp = [...initialState];
                  tmp[index] = true;
                  setInitialState(tmp);
                  e.dataTransfer.setData("text/plain", index.toString());
                  e.dataTransfer.setData(
                    "application/json",
                    JSON.stringify(drawer)
                  );
                }}
                onDragOver={(e) => {
                  e.preventDefault();
                }}
                onDragEnter={(e) => {
                  console.log("entered")
                  let tmp = [...isOutlined];
                  tmp[index] = true;
                  setIsOutlined(tmp);
                }}
                // onDragLeave={(e) => {
                //   console.log("leaved");
                //   setIsOutlined(originalArray);
                // }}
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
                  index = {index}
                  description="exist"
                  details={drawer}
                  visibility=""
                  outline={isOutlined[index]}
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
