import { Link } from "react-router-dom";
type ClickHandler = () => void;



export function AddButton({handleAddClick} : {handleAddClick: ClickHandler}) {
  return (
      <button onClick={handleAddClick}>Add new anime</button>
  )
}

export function Buttons({handleAddClick}: {handleAddClick: ClickHandler}) {

  
  return (
      <div className="shows-top-buttons">
          <Link to="/shows/add">
            <AddButton handleAddClick={handleAddClick}/>
          </Link>
      </div>
  )
}