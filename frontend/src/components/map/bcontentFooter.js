import React from "react";

const BContentFooter = ({eventID, editPlacemark, delitePlacemark}) => {
  console.log(eventID)
  return (<div><a href="#" onClick={(e) => editPlacemark(e, eventID)}>Редактировать</a> <a href="#" onClick={(e) => delitePlacemark(e, eventID)}>Удалить</a></div>)
}

export default BContentFooter;