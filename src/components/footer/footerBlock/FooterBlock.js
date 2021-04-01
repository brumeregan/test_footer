import React from 'react'
import {useMediaQuery} from '../../../hooks/useMediaQuery'
import {Accordion} from '../../accordion/Accordion'

export const FooterBlock = ({linkBlockTitle, links}) => {
    const isDesktop = useMediaQuery('(min-width: 768px)')

    // TODO: create separate component
    return isDesktop ? <div>
        {linkBlockTitle}
        <ul>
            {links.map((link) => {
                return <li>{link.linkTitle}</li>
            })}
        </ul>

    </div> : <Accordion title={linkBlockTitle} content={<ul>
        {links.map((link) => {
            return <li>{link.linkTitle}</li>
        })}
    </ul>} />
}