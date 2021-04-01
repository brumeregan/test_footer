import React from 'react';
import {CheckedIcon} from "./CheckedIcon";

export const AdditionalInfo = () => {
    const infoTexts = [
        'Alltid 9 kr i frakt',
        'Svensk kundservice',
        'Snabba leveranser'
    ]
    return <>
        <h5>additional subtitle</h5>
        <p>additional text</p>
        {infoTexts.map((info) => {
        return <div><CheckedIcon /> {info}</div>
    })}</>
}
