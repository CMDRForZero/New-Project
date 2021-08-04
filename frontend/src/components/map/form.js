import React, {useState} from 'react';
import ReactDOM from "react-dom";
import Select from 'react-select';
import usePostEvent from "../../hooks/usePostEvent";

const Form = ({props}) => {
  let name = React.createRef();
  let desk = React.createRef();
  let type = React.createRef();
  const {postEvent} = usePostEvent()
    const [options, setOptions] = useState([
        {label: 'Бар', value: "kokt"},
        {label: 'Спорт', value: "bike"},
        {label: 'Танцы', value: "dance"},
        {label: 'Шопинг', value: "shoping"},
        {label: 'Здоровье', value: "health"},
        {label: 'Театр', value: "theatre"},
    ]);
    const [selected, setSelected] = useState([]);
  return ReactDOM.createPortal(
      <div id="modalForm" className="container w-25">
          <div className="row">
              <form className="position-relative" action="">
                  <h2 className="formHeader">Новое мероприятие</h2>
                  <div>Проведи время в приятной компании!</div>
                  <div onClick={props.closeModal} className="position-absolute formCloseButton translate-middle"><svg width="15" height="15" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.480592 0.501545C0.788408 0.193557   1.20584 0.0205385 1.64109 0.0205385C2.07634 0.0205385 2.49377 0.193557 2.80159 0.501545L11.4897 9.19719L20.1779 0.501545C20.3293 0.344635 20.5104 0.219479 20.7107 0.133378C20.911 0.0472777 21.1263 0.00195758 21.3443 6.20289e-05C21.5622 -0.00183353 21.7784 0.0397336 21.9801 0.122338C22.1818 0.204942 22.3651 0.326929 22.5192 0.481182C22.6734 0.635434 22.7952 0.818862 22.8778 1.02076C22.9603 1.22266 23.0018 1.439 22.9999 1.65713C22.998 1.87527 22.9528 2.09085 22.8667 2.29128C22.7807 2.49172 22.6557 2.673 22.4989 2.82455L13.8107 11.5202L22.4989 20.2158C22.7979 20.5257 22.9633 20.9407 22.9596 21.3714C22.9559 21.8022 22.7832 22.2142 22.4789 22.5188C22.1746 22.8234 21.7629 22.9962 21.3325 22.9999C20.9021 23.0037 20.4875 22.8381 20.1779 22.5388L11.4897 13.8432L2.80159 22.5388C2.49201 22.8381 2.07738 23.0037 1.647 22.9999C1.21662 22.9962 0.804923 22.8234 0.500587 22.5188C0.19625 22.2142 0.0236218 21.8022 0.019882 21.3714C0.0161421 20.9407 0.18159 20.5257 0.480592 20.2158L9.16874 11.5202L0.480592 2.82455C0.172869 2.51646 0 2.09867 0 1.66304C0 1.22742 0.172869 0.809626 0.480592 0.501545Z" fill="#B9B9B9"/>
                  </svg>
                   </div>
                  <input className="form-control mt-4" ref={name} placeholder="Название мероприятия" type="text"/>
                      <textarea className="form-control mt-4" ref={desk} id="" cols="30" rows="3"
                                placeholder="Описание"></textarea>
                      <input className="form-control mt-4" placeholder="&#x1F50D; Местоположение" type="text"/>
                  <Select
                      options={options} // Options to display in the dropdown
                      onChange={setSelected}
                      placeholder={"Категории"}
                      isMulti={true}
                      className="mt-4"
                      styles={{
                          control: (provided, state) => ({
                              ...provided,
                              border: "1px solid rgba(113, 175, 248, 0.54)",
                              borderRadius: "8px",
                          })
                      }
                      }

                  />
                              <div className="row mt-2 ">
                                  <div className="col-12">
                                  </div>
                              </div>
                              <div className="row buttonRow">
                                  <button onClick={safeForm} className="btn btn-primary col-12" type="button">Создать</button>
                              </div>
              </form>
          </div>
      </div>,
        document.body
    );
  function onSelect(selectedList, selectedItem) {
      setSelected(selectedList)
    }

  function  onRemove(selectedList, removedItem) {
    }

  function safeForm() {
    // тут мы должны передать в createPlacemark что мы редактируем какую то точку
      // console.log(selected);
      let eventID;
      postEvent({cordX: props.cordX, cordY: props.cordY, name: name.current.value, desk: desk.current.value, type: selected[0].value})
          .then(data => {
              eventID = data.id;
              console.log(data.id);
              console.log(eventID);
              props.createPlacemark(props.cordX, props.cordY, name.current.value, desk.current.value, selected[0].value, selected, eventID);
              props.closeModal()
          });
  }

  function createPlacemark(coords, name, ballon, tapy, eventID) {
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
