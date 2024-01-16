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

//   const handleSwitch = (e, index) => {
//     // let source_data = JSON.parse(e.dataTransfer.getData('application/json'));
//     var source_index = JSON.parse(e.dataTransfer.getData('text/plain'))

//     const newItems = [...displayLists];
//     let temp = newItems[index];
//     newItems[index] = newItems[source_index];
//     newItems[source_index]= temp;
//     console.log('backend_data after swap', newItems[index], newItems[source_index]);
//     setDisplayLists(newItems); 
//   }

//   return (
//      <div 
//       style={{display: 'flex', flexWrap: 'wrap', width: '100%'}}
//      >
//          {displayLists.map((drawer, index) => 
//          {
//             // console.log("INDEX", drawer)
//             if (drawer.status == false) {
//               return (
//                 <div 
//                   style={{width: '12.5%'}}
//                 >
//                   <ReposCard
//                     key={index}
//                     index={index}
//                     description="false"
//                     details={drawer}
//                     visibility="hidden"
//                     cols={drawers.cols}
//                   />
//                 </div>
//               );
//             } else if (drawer.boxNumber == null && drawer.project == "") {
//               return (
//                 <div 
//                   draggable
//                   style={{width: '12.5%'}}
//                   onDragStart={(e)=>{
//                     e.dataTransfer.setData('text/plain', index)
//                     e.dataTransfer.setData('application/json', JSON.stringify(drawer))
//                   }}
//                   onDragOver={(e) => {
//                     e.preventDefault();
//                   }}
//                   onDrop={(e) => {
//                     e.preventDefault();
//                     handleSwitch(e, index);
//                   }} 
//                 >
//                   <ReposCard
//                     key={index}
//                     index={index}
//                     description="Empty drawer"
//                     details={drawer}
//                     cols={drawers.cols}
//                   />
//                 </div>
//               );
//             } else {
//               return (
//                 <div 
//                   style={{width: '12.5%'}}
//                   draggable
//                   onDragStart={(e)=>{
//                     e.dataTransfer.setData('text/plain', index)
//                     e.dataTransfer.setData('application/json', JSON.stringify(drawer))
//                   }}
//                   onDragOver={(e) => {
//                     e.preventDefault();
//                   }}
//                   onDrop={(e) => {
//                     e.preventDefault();
//                     handleSwitch(e, index)
//                  }} 
//                 >
//                   <ReposCard
//                     key={index}
//                     index={index}
//                     description="exist"
//                     details={drawer}
//                     cols={drawers.cols}
//                   />
//                 </div>
//               );
//             }
         
//         })} 
//      </div>
//   );
// }

// export default Dashboard;
