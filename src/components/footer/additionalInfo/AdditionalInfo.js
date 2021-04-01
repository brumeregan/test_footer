import React from 'react';
import {CheckedIcon} from "./CheckedIcon";
import {CheckedWrapper, InfoList, InfoListItem} from './styles';

export const AdditionalInfo = () => {
    const infoTexts = [
        'Alltid 9 kr i frakt',
        'Svensk kundservice',
        'Snabba leveranser'
    ]
    return <>
        <h5>additional subtitle</h5>
        <p>additional text</p>
        <InfoList>
            {infoTexts.map((info) => {
                return <InfoListItem>
                    <CheckedWrapper><CheckedIcon /></CheckedWrapper>
                    {info}
                </InfoListItem>
            })}
        </InfoList>
    </>
}
