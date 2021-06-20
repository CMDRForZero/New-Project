import React from "react";

const BContentFooter = ({i, editPlacemark}) => {
  return (<div>Ваше событие! <br/><a href="#" onClick={(e) => editPlacemark(e, i)}>Редактировать</a> <a href="#">Удалить</a></div>)
}

export default BContentFooter;