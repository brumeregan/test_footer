import React, {useEffect, useState} from 'react';
import {getFooter} from "../../services/getFooter";
import {FooterBlock} from './footerBlock/footerBlock'
import {Title, FooterStyled} from './styles';
import {AdditionalInfo} from './additionalInfo/AdditionalInfo'

export const Footer = () => {
    const [footerBlocks, setFooterBlocks] = useState(null);

    useEffect(() => {
        getFooter().then((response) => {
            console.info({response})
            setFooterBlocks(response)
        }).catch((err) => {
            console.info({err})
        })
    }, [])

    return <FooterStyled>
        <Title>Sveriges största marknadsplats för fynd</Title>

        <AdditionalInfo/>

        {footerBlocks && footerBlocks.map((footerBlock) => <FooterBlock {...footerBlock} />)}
    </FooterStyled>
}
