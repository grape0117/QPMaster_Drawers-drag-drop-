const Dashboard = () => {
    return(
        <div>
            <h1>Here is Dashboard</h1>
        </div>
    )
}

export default Dashboard;

// import React, { useState } from "react";
// import { ListManager } from "react-beautiful-dnd-grid";

// // Components
// import ReposCard from "../../components/ReposCard/ReposCard";

// // Constants
// import { lists, drawers } from "../Drawers/config";

// // style
// import "./style.css";

// // const ListElement = (props) => <div className="item">id: {props.item.project}</div>;

// function Dashboard() {
//   const [displayLists, setDisplayLists] = useState(drawers.drawers)

//   const recorder = (sourceIndex, destinationIndex) => {
//     console.log("sourceIndex", sourceIndex, "destinationIndex", destinationIndex);

//     if (sourceIndex == destinationIndex) {
//       return;
//     } else if (sourceIndex > destinationIndex) {

//       const newItems = [...displayLists];
//       const [removed] = newItems.splice(sourceIndex, 1);
//       newItems.splice(destinationIndex, 0, removed);
//       const [old_dest] = newItems.splice(destinationIndex + 1, 1);
//       newItems.splice(sourceIndex, 0, old_dest)
//       setDisplayLists(newItems)

//       return;
//     } else {

//       const newItems = [...displayLists];
//       const [removed] = newItems.splice(sourceIndex, 1);
//       newItems.splice(destinationIndex, 0, removed);
//       const [old_dest] = newItems.splice(destinationIndex - 1, 1);
//       newItems.splice(sourceIndex, 0, old_dest) ;
//       setDisplayLists(newItems)

//       return;
//     }
//   };

//   return (
//     <ListManager
//       items={displayLists}
//       direction="horizontal"
//       maxItems={drawers.cols}
//       render={(item) => 
//         <ReposCard
//           description='exist'
//           details={item}
//           cols={drawers.cols}
//           item={item} />}
//       onDragEnd={recorder}
//     />
//   );
// }

// export default Dashboard;
