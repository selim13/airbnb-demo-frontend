import React from "react";
import styled from "styled-components";

import { bp } from "../vars";
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
const Link = styled.a`
  display: block;
  margin-bottom: 8px;
  color: #636363;
  text-decoration: none;
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
            <Link href="#">About us</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Press</Link>
            <Link href="#">Policies</Link>
            <Link href="#">Help</Link>
            <Link href="#">Diversity &amp; Belonging</Link>
          </Nav>
        </div>
        <div className="col-md-2 col-md-offset-1">
          <Nav>
            <Heading>Discover</Heading>
            <Link href="#">Trust &amp; Safety</Link>
            <Link href="#">Travel Credit</Link>
            <Link href="#">Gift Cards</Link>
            <Link href="#">Airbnb Citizen</Link>
            <Link href="#">Business Travel</Link>
            <Link href="#">Guidebooks</Link>
            <Link href="#">Airbnbmag</Link>
          </Nav>
        </div>
        <div className="col-md-2 col-md-offset-1">
          <Nav>
            <Heading>Hosting</Heading>
            <Link href="#">Why Host</Link>
            <Link href="#">Hospitality</Link>
            <Link href="#">Responsible Hosting</Link>
            <Link href="#">Community Center</Link>
          </Nav>
        </div>
      </div>
    </Menu>
  );
}
