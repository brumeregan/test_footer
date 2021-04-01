import React, {useEffect, useState} from 'react';
import {getFooter} from "../../services/getFooter";
import {FooterBlock} from './footerBlock/FooterBlock'
import {Title, FooterStyled, DecoratedText, FooterContainer,FooterContent, FooterBlockWithLinks, FooterColumn} from './styles';
import {AdditionalInfo} from './additionalInfo/AdditionalInfo'
import {BottomFooter} from './bottomFooter/BottomFooter'
import {useMediaQuery} from "../../hooks/useMediaQuery";
import {Accordion} from "../accordion/Accordion";
import {SocialLinksBlock} from "../socialLinksBlock/SocialLinksBlock";

export const Footer = () => {
    const [footerBlocks, setFooterBlocks] = useState(null);
    const isDesktop = useMediaQuery('(min-width: 768px)')


    useEffect(() => {
        getFooter().then((response) => {
            setFooterBlocks(response)
        }).catch((err) => {
            console.info({err})
        })
    }, [])

    return <FooterStyled>
        <FooterContent>
        <Title>Sveriges största marknadsplats för <DecoratedText>fynd</DecoratedText></Title>

        <FooterContainer>
            <FooterColumn>
                <AdditionalInfo/>
            </FooterColumn>

            <FooterBlockWithLinks>
                {footerBlocks && footerBlocks.map((footerBlock) => <FooterBlock {...footerBlock} />)}
                {!isDesktop && <Accordion title='Fyndiq i sociala medier' content={<SocialLinksBlock/>}/>}
            </FooterBlockWithLinks>
        </FooterContainer>
        <BottomFooter />
        </FooterContent>
    </FooterStyled>
}
