import React, { useState } from 'react';

export default function usePutEvent({},markplaceId) {
  const putEvent = async(placemark) => {
    return fetch("/api/events/" + markplaceId , {
      method: 'put',
      body: JSON.stringify(placemark)
    }).then(res => res.json())
  };


  return {putEvent}
}