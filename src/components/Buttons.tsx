import { Link } from "react-router-dom";
export type ClickHandler = () => void;


export function AddButton({handleAddClick} : {handleAddClick: ClickHandler}) {
  return (
      <button onClick={handleAddClick}>Add new anime</button>
  )
}

export function SortButton({handleSortClick, ascending} : {handleSortClick: ClickHandler, ascending: boolean}) {
  return (
      <button onClick={handleSortClick}>
        {
        ascending ? "Sort ascending by episodes" : "Sort descending by episodes"
        }
        </button>
  )
}

export function ChartButton({handleChartClick} : {handleChartClick : ClickHandler}) {
  return (
    <button onClick={handleChartClick}>See chart</button>
  )
}

export function Buttons({handleAddClick, handleSortClick, ascending, handleChartClick}: 
  {
    handleAddClick: ClickHandler, 
    handleSortClick: ClickHandler,
    ascending: boolean,
    handleChartClick: ClickHandler
  }) {

  return (
      <div className="shows-top-buttons">
          <Link to="/shows/add">
            <AddButton handleAddClick={handleAddClick}/>
          </Link>
          <Link to={ascending ? "/shows/sorted-asc" : "/shows/sorted-desc"}>
            <SortButton handleSortClick={handleSortClick} ascending={ascending}/>
          </Link>
          <Link to="/shows/see-chart">
            <ChartButton handleChartClick={handleChartClick}/>
          </Link>
      </div>
  )
}