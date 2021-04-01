import React from 'react';
import {BottomFooterStyled} from './styles'
import {SocialLinksBlock} from '../../socialLinksBlock/SocialLinksBlock'
import {useMediaQuery} from "../../../hooks/useMediaQuery";
import {FyndiqLogo} from '../../FyndiqLogo/FyndiqLogo';
import {Copyright} from "./Copyright/Copyright";
import {PaymentProviders} from "../../paymentProviders/PaymentProviders";

export const BottomFooter = () => {
    const isDesktop = useMediaQuery('(min-width: 768px)')

    return <BottomFooterStyled>
        {isDesktop && <FyndiqLogo />}

        {isDesktop && <Copyright />}

        {isDesktop && <SocialLinksBlock/>}

        {<PaymentProviders/>}

        {!isDesktop && <Copyright />}


    </BottomFooterStyled>
}
