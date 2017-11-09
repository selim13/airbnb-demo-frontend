import React from "react";
import styled from "styled-components";

import Select from "./Select";

const Menu = styled.div`padding: 48px 0;`;
const LanguageSelect = styled(Select)`margin-bottom: 16px;`;
const MenuHeading = styled.p`
  margin-top: 0;
  margin-bottom: 16px;
  font-weight: bold;
  color: #383838;
`;
const MenuLink = styled.a`
  display: block;
  margin-bottom: 8px;
  color: #636363;
  text-decoration: none;
`;

export default function() {
  const languages = ["English", "Русский"];
  const currencies = ["United States dollar", "Russian Rouble"];

  return (
    <Menu>
      <div className="row">
        <div className="col-md-3">
          <LanguageSelect
            name="language-selector"
            label="Choose your language"
            options={languages}
          >
            <option>Deutsch</option>
            <option>English</option>
            <option>Italiano</option>
            <option>Íslenska</option>
            <option>Čeština</option>
            <option>Русский</option>
            <option>ภาษาไทย</option>
          </LanguageSelect>
          <Select
            name="currency-selector"
            label="Choose your currency"
            options={currencies}
          >
            <option>United States dollar</option>
            <option>Russian Rouble</option>
          </Select>
        </div>

        <div className="col-md-2 col-md-offset-1">
          <nav>
            <MenuHeading>Airbnb</MenuHeading>
            <MenuLink href="#">About us</MenuLink>
            <MenuLink href="#">Careers</MenuLink>
            <MenuLink href="#">Press</MenuLink>
            <MenuLink href="#">Policies</MenuLink>
            <MenuLink href="#">Help</MenuLink>
            <MenuLink href="#">Diversity &amp; Belonging</MenuLink>
          </nav>
        </div>
        <div className="col-md-2 col-md-offset-1">
          <nav>
            <MenuHeading>Discover</MenuHeading>
            <MenuLink href="#">Trust &amp; Safety</MenuLink>
            <MenuLink href="#">Travel Credit</MenuLink>
            <MenuLink href="#">Gift Cards</MenuLink>
            <MenuLink href="#">Airbnb Citizen</MenuLink>
            <MenuLink href="#">Business Travel</MenuLink>
            <MenuLink href="#">Guidebooks</MenuLink>
            <MenuLink href="#">Airbnbmag</MenuLink>
          </nav>
        </div>
        <div className="col-md-2 col-md-offset-1">
          <nav>
            <MenuHeading>Hosting</MenuHeading>
            <MenuLink href="#">Why Host</MenuLink>
            <MenuLink href="#">Hospitality</MenuLink>
            <MenuLink href="#">Responsible Hosting</MenuLink>
            <MenuLink href="#">Community Center</MenuLink>
          </nav>
        </div>
      </div>
    </Menu>
  );
}
