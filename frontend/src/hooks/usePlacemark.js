import React from 'react';
import {createContext, useContext, useState} from "react";

const PlacemarkContext = createContext()
export const usePlacemark = () => useContext(PlacemarkContext)

const usePlacemarkProvider = () => {
    const [placemarks, setPlacemark] = useState([])

    const savePlacemark = placemarks => setPlacemark(placemarks)

    const setPlacemarkEmpty = () => setPlacemark([])

    return {
        placemarks,
        savePlacemark,
        setPlacemarkEmpty
    }
}

export function PlacemarkProvider({children}){
    const placemarks = usePlacemarkProvider()

    return <PlacemarkContext.Provider value={{...placemarks}}>{children}}</PlacemarkContext.Provider>;

}