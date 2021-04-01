import React from 'react';
import {BottomFooterStyled} from './styles'
import {SocialLinksBlock} from '../../socialLinksBlock/SocialLinksBlock'
import {useMediaQuery} from "../../../hooks/useMediaQuery";

export const BottomFooter = () => {
    const isDesktop = useMediaQuery('(min-width: 768px)')

    return <BottomFooterStyled>
        BottomFooter

        {isDesktop && <SocialLinksBlock/>}

    </BottomFooterStyled>
}
