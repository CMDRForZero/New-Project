import React, { useState } from 'react';

import { Map, Placemark, YMaps } from "react-yandex-maps";

const Form = () => {
    const [placemarks, setPlacemarks] = useState([]);

    return (

            <div id="modalForm">
                <label htmlFor="name">Название</label><br/>
                <input id="name"></input><br/>
                <label htmlFor="desk">Описание</label><br/>
                <input id="desk"></input><br/>
                <label htmlFor="type">Вид</label><br/>
                <select id="type">
                    <option value="bike">Спорт</option>
                    <option value="kokt">Коктель</option>
                    <option value="shop">Магазин</option>
                </select><br/>
                <button id="safeButton">Метка</button>
                <input type='hidden' id="cordX"></input>
                <input type='hidden' id="cordY"></input>
            </div>
    );

    function safeForm(){
        let name = document.getElementById('name')
        let desk = document.getElementById('desk')
        let type = document.getElementById('type')
        let cordX = document.getElementById('cordX')
        let cordY = document.getElementById('cordY')
        let myPlacemark = createPlacemark([cordX.value, cordY.value], name.value, desk.value, type.value);
        setPlacemarks([...placemarks, myPlacemark]);
        let form = document.getElementById('modalForm')
        form.style.display = 'none'
        //	name.value = ''
        //	desk.value = ''
    }
    function createPlacemark(coords, name, ballon, tapy) {
        //	return new ymaps.Placemark(coords, {
        return {
            geometry: coords,
            properties: {
                //  balloonContentHeader:'<div class="place"><img src="place1.png" class="place1"></div>', name,
                balloonContentHeader:['<div class="place"><img src="/img/place1.png" class="place1" alt="метка">' + name + '</div>'].join(''),
                iconCaption: name,
                balloonContentFooter: 'Ваше событие! <br><a href="#">Редактировать</a> <a href="#">Удалить</a>',
                balloonContentBody: ballon

            }, options: {
                iconLayout: 'default#image',
                iconImageHref: '/img/'+ tapy +'.png',
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
