import { useEffect, useState } from "react";
import { List, ListManager } from "react-beautiful-dnd-grid";

// Components
import ReposCard from "../../components/ReposCard/ReposCard";

// Styles
import "./Drawers.scss";

// config
import { drawers } from "./config";

const test_item = { boxNumber: null, project: "402743", completed: false };

function DrawersComponent() {
  const [displayLists, setDisplayLists] = useState(drawers.drawers);

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
  
  return (
    <div className="repos">
      <h1>Here is DrawersComponent</h1>
      <div style={{ width: "100%", height: "20px" }}></div>
      <div className="">
        <ListManager
          items={displayLists}
          draggableID={item => item.id}
          direction="horizontal"
          maxItems={drawers.cols}
          render={(item) => {
            {
              if(item.status == false) {
                return <ReposCard
                          description="false"
                          details={item}
                          visibility="hidden"
                          cols={drawers.cols}
                        />
              } else if(item.boxNumber == null && item.project == "") {
                return <ReposCard
                          description="Empty drawer"
                          details={item}
                          cols={drawers.cols}
                        />
              } else {
                return <ReposCard
                          description='exist'
                          details={item}
                          cols={drawers.cols}
                        />
              }
            }
          }}
          onDragEnd={recorder}            
        />
        
              
            
        {/* {drawers.drawers.map((drawer, index) => {
          // console.log("INDEX", index)
          if (drawer == null) {
            return (
              <ReposCard
                key={index}
                index={index}
                description="false"
                details={drawer}
                visibility="hidden"
                cols={drawers.cols}
              />
            );
          } else if (drawer.boxNumber == null && drawer.project == "") {
            return (
              <ReposCard
                key={index}
                index={index}
                description="Empty drawer"
                details={drawer}
                cols={drawers.cols}
              />
            );
          } else {
            return (
              <ReposCard
                key={index}
                index={index}
                description="exist"
                details={drawer}
                cols={drawers.cols}
              />
            );
          }
        })} */}
      </div>
    </div>
  );
}

export default DrawersComponent;
