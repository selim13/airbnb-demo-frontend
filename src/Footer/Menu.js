import React from "react";
import styled from "styled-components";

import { bp } from "../vars";
import Link from "../Link";
import Select from "../Select";

const Menu = styled.div`
  padding: 16px 0;
  @media (min-width: ${bp.md}px) {
    padding: 48px 0;
  }
`;
const LanguageSelect = styled(Select)`
  margin-bottom: 8px;
  @media (min-width: ${bp.md}px) {
    margin-bottom: 16px;
  }
`;
const Nav = styled.nav`
  display: none;
  @media (min-width: ${bp.md}px) {
    display: block;
  }
`;
const Heading = styled.p`
  margin-top: 0;
  margin-bottom: 16px;
  font-weight: bold;
  color: #383838;
`;
const MenuLink = Link.extend`
  display: block;
  margin-bottom: 8px;
`;

export default function() {
  return (
    <Menu>
      <div className="row">
        <div className="col-xs-12 col-md-3">
          <div className="row">
            <div className="col-xs-6 col-md-12">
              <LanguageSelect
                name="language-selector"
                label="Choose your language"
              >
                <option>Deutsch</option>
                <option>English</option>
                <option>Italiano</option>
                <option>Íslenska</option>
                <option>Čeština</option>
                <option>Русский</option>
                <option>ภาษาไทย</option>
              </LanguageSelect>
            </div>
            <div className="col-xs-6 col-md-12">
              <Select name="currency-selector" label="Choose your currency">
                <option>United States dollar</option>
                <option>Russian Rouble</option>
              </Select>
            </div>
          </div>
        </div>

        <div className="col-md-2 col-md-offset-1">
          <Nav>
            <Heading>Airbnb</Heading>
            <MenuLink href="#">About us</MenuLink>
            <MenuLink href="#">Careers</MenuLink>
            <MenuLink href="#">Press</MenuLink>
            <MenuLink href="#">Policies</MenuLink>
            <MenuLink href="#">Help</MenuLink>
            <MenuLink href="#">Diversity &amp; Belonging</MenuLink>
          </Nav>
        </div>
        <div className="col-md-2 col-md-offset-1">
          <Nav>
            <Heading>Discover</Heading>
            <MenuLink href="#">Trust &amp; Safety</MenuLink>
            <MenuLink href="#">Travel Credit</MenuLink>
            <MenuLink href="#">Gift Cards</MenuLink>
            <MenuLink href="#">Airbnb Citizen</MenuLink>
            <MenuLink href="#">Business Travel</MenuLink>
            <MenuLink href="#">Guidebooks</MenuLink>
            <MenuLink href="#">Airbnbmag</MenuLink>
          </Nav>
        </div>
        <div className="col-md-2 col-md-offset-1">
          <Nav>
            <Heading>Hosting</Heading>
            <MenuLink href="#">Why Host</MenuLink>
            <MenuLink href="#">Hospitality</MenuLink>
            <MenuLink href="#">Responsible Hosting</MenuLink>
            <MenuLink href="#">Community Center</MenuLink>
          </Nav>
        </div>
      </div>
    </Menu>
  );
}
