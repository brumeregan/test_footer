import React, {useEffect, useState} from 'react';
import {getFooter} from "../../services/getFooter";
import {FooterBlock} from './footerBlock/FooterBlock'
import {Title, FooterStyled, DecoratedText, FooterContainer, FooterBlockDesktop, FooterColumn} from './styles';
import {AdditionalInfo} from './additionalInfo/AdditionalInfo'

export const Footer = () => {
    const [footerBlocks, setFooterBlocks] = useState(null);

    useEffect(() => {
        getFooter().then((response) => {
            setFooterBlocks(response)
        }).catch((err) => {
            console.info({err})
        })
    }, [])

    return <FooterStyled>
        <Title>Sveriges största marknadsplats för <DecoratedText>fynd</DecoratedText></Title>

        <FooterContainer>
            <FooterColumn>
                <AdditionalInfo/>

            </FooterColumn>

            <FooterBlockDesktop>
                {footerBlocks && footerBlocks.map((footerBlock) => <FooterBlock {...footerBlock} />)}
            </FooterBlockDesktop>
        </FooterContainer>


    </FooterStyled>
}
