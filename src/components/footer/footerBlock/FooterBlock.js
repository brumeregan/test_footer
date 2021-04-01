import React from "react";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { Accordion } from "../../accordion/Accordion";
import { FooterLinkBlock } from "./footerLinks/FooterLinkBlock";
import { BlockTitle, BlockLinkStyled } from "./styles";

export const FooterBlock = ({ linkBlockTitle, links }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return isDesktop ? (
    <BlockLinkStyled>
      <BlockTitle>{linkBlockTitle}</BlockTitle>
      <FooterLinkBlock links={links} />
    </BlockLinkStyled>
  ) : (
    <Accordion
      title={linkBlockTitle}
      content={<FooterLinkBlock links={links} />}
    />
  );
};
