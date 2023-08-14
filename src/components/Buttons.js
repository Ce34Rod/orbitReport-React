import satData from "./satData";
import "./styling.css"

// const Buttons = ({filterByType, setSat, displaySats}) => {
//   {displaySats.map((sat, id) => {
//   return (
//     <div>
//       <button onClick={() => filterByType(sat)} key={id}>{sat} Orbit</button>
      
     
//       </div>
//   );
// })};
// <button onClick={() => setSat(satData)}>All Orbits</button>
// }


const Buttons = ({ filterByType, setSat, displaySats }) => {
  console.log(displaySats)
  return (
    <div className="flex-container">
      {displaySats.map((sat, id) => (
        <div key={id}>
          <button onClick={() => filterByType(sat)}>{sat} Orbit</button>
        </div>
      ))}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};
export default Buttons;