import { AnimeProps } from "./model/Anime";
type ClickHandler = (id: number) => void;



export function AddButton({handleAddClick}: ClickHandler & any) {
  return (
      <button onClick={handleAddClick}>Add new anime</button>
  )
}

export function UpdateButton({handleUpdateClick}: ClickHandler & any) {
  return (
      <button onClick={handleUpdateClick}>Update anime</button>
  )
}

export function RemoveButton({handleRemoveClick}: ClickHandler & any) {
  return (
      <button onClick={handleRemoveClick}>Remove anime</button>
  )
}

interface ButtonsProps {
  handleAddClick: () => void;
  handleRemoveClick: (id: number) => void;
  handleUpdateClick: (id: number, updatedAnime: AnimeProps) => void;
}

export function Buttons({handleAddClick, handleRemoveClick, handleUpdateClick}: ButtonsProps) {

  
  
  return (
      <div className="shows-top-buttons">
          <AddButton handleAddClick={handleAddClick}/>
          <UpdateButton handleUpdateClick={handleUpdateClick}/>
          <RemoveButton handleRemoveClick={handleRemoveClick}/>
      </div>
  )
}