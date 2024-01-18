import React, { useState, useMemo, useCallback } from "react";
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

  const handleSwitch = useCallback((e: React.DragEvent<HTMLDivElement>, index: number) => {
    let source_index = JSON.parse(e.dataTransfer.getData("text/plain"));
    const newItems = [...displayLists];
    let temp = newItems[index];
    newItems[index] = newItems[source_index];
    newItems[source_index] = temp;
    setDisplayLists(newItems);
  }, []);

  const handleDragStart = useCallback(
    (e: React.DragEvent<HTMLDivElement>, index: number, drawer: Drawer) => {
      let tmp = [...initialState];
      tmp[index] = true;
      setInitialState(tmp);
      e.dataTransfer.setData("text/plain", index.toString());
      e.dataTransfer.setData(
        "application/json",
        JSON.stringify(drawer)
      );
    }, [])

  const handleDragEnter = useCallback(
    (index: number) => {
      let temp = [...isOutlined];
      temp[index] = true;
      setIsOutlined(temp);
    }, []
  )

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
                  index={index}
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
                  handleDragStart(e, index, drawer)
                }}
                onDragOver={(e) => {
                  e.preventDefault();
                }}
                onDragEnter={() => {
                  handleDragEnter(index);
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
                  handleDragStart(e, index, drawer);
                }}
                onDragOver={(e) => {
                  // console.log('drag overed')
                  e.preventDefault();
                }}
                onDragEnter={() => {
                  handleDragEnter(index);
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
