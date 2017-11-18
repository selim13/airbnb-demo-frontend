import React from "react";
import styled from "styled-components";

import bp from "../breakpoints";
import Link from "../UI/Link";

import logoSvg from "./logo.svg";
import facebookSvg from "./facebook.svg";
import instagramSvg from "./instagram.svg";
import twitterSvg from "./twitter.svg";

const BottomBar = styled.div`
  padding: 32px 0;
  border-top: 1px solid rgba(72, 72, 72, 0.08);

  @media (min-width: ${bp.sm}px) {
    display: flex;
    justify-content: space-between;
  }
`;
const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;
const Copyright = styled.span`margin-left: 16px;`;
const Navs = styled.div`
  display: flex;
  align-items: center;
`;
const MenuNav = styled.nav`
  display: flex;
  margin-left: -8px;
`;
const MenuLink = Link.extend`padding: 0 8px;`;
const SocialNav = styled.nav`
  display: flex;
  margin-left: 10px;
  margin-right: -6px;
`;
const SocialLink = styled.a`padding: 0 6px;`;

export default function() {
  return (
    <BottomBar>
      <LogoWrap>
        <img src={logoSvg} alt="Airbnb" width="21" height="22" />
        <Copyright>© Airbnb Inc.</Copyright>
      </LogoWrap>
      <Navs>
        <MenuNav>
          <MenuLink href="#">Terms</MenuLink>
          <MenuLink href="#">Privacy</MenuLink>
          <MenuLink href="#">Site map</MenuLink>
        </MenuNav>
        <SocialNav>
          <SocialLink
            href="https://www.facebook.com/AirbnbRussia"
            title="Facebook"
          >
            <img src={facebookSvg} width="24" height="24" alt="Facebook" />
          </SocialLink>
          <SocialLink href="https://twitter.com/airbnb_ru" title="Twitter">
            <img src={twitterSvg} width="24" height="24" alt="Twitter" />
          </SocialLink>
          <SocialLink href="https://instagram.com/airbnb" title="Instagram">
            <img src={instagramSvg} width="24" height="24" alt="Instagram" />
          </SocialLink>
        </SocialNav>
      </Navs>
    </BottomBar>
  );
}
