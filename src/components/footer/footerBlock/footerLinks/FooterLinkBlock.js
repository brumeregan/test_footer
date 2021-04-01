import React from 'react';
import PropTypes from 'prop-types';
import {LinkStyled, LinkList} from './styles'

export const FooterLinkBlock = ({links}) => {
  return <LinkList>
    {links.map((link) => {
      return <div key={link.linkTitle}>
        <LinkStyled to={link.linkUrl.slug}>{link.linkTitle}</LinkStyled>
      </div>
    })}
  </LinkList>
}

FooterLinkBlock.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    linkUrl: PropTypes.shape({
      slug: PropTypes.string
    }),
    linkTitle: PropTypes.string
  })).isRequired
}
