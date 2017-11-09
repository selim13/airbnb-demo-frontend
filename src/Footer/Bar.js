import React from "react";
import styled from "styled-components";

import logoSvg from "./logo.svg";
import facebookSvg from "./facebook.svg";
import instagramSvg from "./instagram.svg";
import twitterSvg from "./twitter.svg";

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
  border-top: 1px solid rgba(72, 72, 72, 0.3);
`;
const LogoWrap = styled.div`
  display: flex;
  align-items: center;
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
const MenuLink = styled.a`
  padding: 0 8px;
  text-decoration: none;
  color: #636363;
`;
const SocialNav = styled.nav`
  display: flex;
  margin-left: 10px;
  margin-right: -6px;
`;
const SocialLink = styled.a`padding: 0 6px;`;

export default function() {
  return (
    <Bar>
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
            className="col-md-4"
          >
            <img src={facebookSvg} width="24" height="24" alt="Facebook" />
          </SocialLink>
          <SocialLink
            href="https://twitter.com/airbnb_ru"
            title="Twitter"
            className="col-md-4"
          >
            <img src={twitterSvg} width="24" height="24" alt="Twitter" />
          </SocialLink>
          <SocialLink
            href="https://instagram.com/airbnb"
            title="Instagram"
            className="col-md-4"
          >
            <img src={instagramSvg} width="24" height="24" alt="Instagram" />
          </SocialLink>
        </SocialNav>
      </Navs>
    </Bar>
  );
}
