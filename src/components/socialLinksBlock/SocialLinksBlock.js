import React from "react";
import { FacebookIcon } from "./icons/FacebookIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { YoutubeIcon } from "./icons/YoutubeIcon";
import { SocialLinksItem, SocialLinksBlockStyled } from "./styles";

export const SocialLinksBlock = () => {
  const socials = [
    {
      component: <FacebookIcon />,
      url: "fb.com",
    },
    {
      component: <InstagramIcon />,
      url: "instagram.com",
    },
    {
      component: <YoutubeIcon />,
      url: "youtube.com",
    },
  ];

  return (
    <SocialLinksBlockStyled>
      {socials.map((social) => {
        return (
          <SocialLinksItem key={social.url}>
            <a href={social.url} target="_blank">
              {social.component}
            </a>
          </SocialLinksItem>
        );
      })}
    </SocialLinksBlockStyled>
  );
};
