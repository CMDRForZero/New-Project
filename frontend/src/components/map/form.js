import React, {useState} from 'react';
import ReactDOM from "react-dom";
import usePostEvent from "../../hooks/usePostEvent";


const Form = ({props}) => {
  let name = React.createRef();
  let desk = React.createRef();
  let type = React.createRef();
  const {postEvent} = usePostEvent()
  return ReactDOM.createPortal(
      <div id="modalForm" style={{position: "absolute", top: props.clickY, left: props.clickX}}>
        <label htmlFor="name">Название</label><br/>
        <input id="name" ref={name} defaultValue={props.name} /><br/>
        <label htmlFor="desk">Описание</label><br/>
        <input id="desk" ref={desk} defaultValue={props.desk}/><br/>
        <label htmlFor="type">Вид</label><br/>
        <select id="type" ref={type} defaultValue={props.type}>
          <option value="bike">Спорт</option>
          <option value="kokt">Коктель</option>
          <option value="shop">Магазин</option>
        </select><br/>
        <button onClick={safeForm}>Метка</button>
      </div>,
        document.body
    );

  function safeForm() {
    // тут мы должны передать в createPlacemark что мы редактируем какую то точку
    props.createPlacemark(props.cordX, props.cordY, name.current.value, desk.current.value, type.current.value);
    postEvent({cordX: props.cordX, cordY: props.cordY, name: props.name, desk: props.desk, type: props.type}).then(data => console.log(data))
    props.closeModal()
  }

  function createPlacemark(coords, name, ballon, tapy) {
    //	return new ymaps.Placemark(coords, {
    return {
      geometry: coords,
      properties: {
        //  balloonContentHeader:'<div class="place"><img src="place1.png" class="place1"></div>', name,
        balloonContentHeader: ['<div class="place"><img src="/img/place1.png" class="place1" alt="метка">' + name + '</div>'].join(''),
        iconCaption: name,
        balloonContentFooter: 'Ваше событие! <br><a href="#">Редактировать</a> <a href="#">Удалить</a>',
        balloonContentBody: ballon

      }, options: {
        iconLayout: 'default#image',
        iconImageHref: '/img/' + tapy + '.png',
        iconImageSize: [35, 47],
        iconImageOffset: [-19, -44]
        // preset: 'islands#violetDotIconWithCaption',
        // draggable: false
      },
      modules:
        ['geoObject.addon.balloon', 'geoObject.addon.hint']

    };
  }
}


export default Form;
