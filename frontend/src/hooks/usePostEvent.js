import React, { useState } from 'react';

export default function usePostEvent() {
    const postEvent = async(placemark) => {
        return fetch("/api/events/create", {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(placemark)
        }).then(res => res.json())
        }


    return {postEvent}
}