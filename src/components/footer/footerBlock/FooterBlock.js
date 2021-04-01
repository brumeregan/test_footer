import React from 'react'
import {useMediaQuery} from '../../../hooks/useMediaQuery'
import {Accordion} from '../../accordion/Accordion'
import {FooterLinkBlock} from "./footerLinks/FooterLinkBlock";

export const FooterBlock = ({linkBlockTitle, links}) => {
    const isDesktop = useMediaQuery('(min-width: 768px)')

    return isDesktop ? <div>
        {linkBlockTitle}
        <FooterLinkBlock links={links} />
    </div> : <Accordion
        title={linkBlockTitle}
        content={<FooterLinkBlock links={links} />}
    />
}
