import React, { useState, useMemo, useCallback, useRef } from "react";
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
  const [initialOpacityState, setInitialOpacityState] = useState<boolean[]>(originalArray);
  const [isOutlined, setIsOutlined] = useState<boolean[]>(originalArray);
  const dragSourceIndex = useRef(0);


  const handleSwitch =
    // useCallback(
    (e: React.DragEvent<HTMLDivElement>, index: number) => {
      let source_index = dragSourceIndex.current;
      const newItems = [...displayLists];
      let temp = newItems[index];
      newItems[index] = newItems[source_index];
      newItems[source_index] = temp;
      setDisplayLists(newItems);
    };

  const handleDragStart =
    useCallback(
      ( index: number,) => {
        let tmp = [...initialOpacityState];
        tmp[index] = true;
        setInitialOpacityState(tmp);
        dragSourceIndex.current = index;
      }, []);

  const handleDragEnter =
    useCallback(
      (index: number) => {
        let temp = [...isOutlined];
        temp[index] = true;
        setIsOutlined(temp);
      }, [])

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
                  opacity: initialOpacityState[index] ? 0.3 : 1,
                }}
                onDragStart={() => {
                  handleDragStart(index)
                }}
                onDragOver={(e) => {
                  e.preventDefault();
                }}
                onDragEnter={() => {
                  handleDragEnter(index);
                }}
                onDragEnterCapture={() => {
                  setIsOutlined(originalArray);
                }}
                onDragEnd={() => {
                  setInitialOpacityState(originalArray);
                  setIsOutlined(originalArray);
                }}
                onDrop={(e) => {
                  handleSwitch(e, index);
                }}
              >
                <ReposCard
                  key={index}
                  index={index}
                  description="Leer"
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
                  opacity: initialOpacityState[index] ? 0.3 : 1,
                }}
                draggable
                onDragStart={(e) => {
                  handleDragStart(index);
                }}
                onDragOver={(e) => {
                  e.preventDefault();
                }}
                onDragEnter={() => {
                  handleDragEnter(index);
                }}
                onDragEnterCapture={() => {
                  setIsOutlined(originalArray);
                }}
                onDragEnd={(e) => {
                  setInitialOpacityState(originalArray);
                  setIsOutlined(originalArray);
                }}
                onDrop={(e) => {
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
