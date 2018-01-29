import React from 'react';
import styled from 'styled-components';
import includes from 'lodash/includes';
import { Row, Col } from 'react-flexbox-grid';

import bp from '../../breakpoints';
import { Sm, ToSm } from '../../UI/mediaQueries';
import Checkbox from '../../UI/Checkbox';
import SeeAllButton from '../../UI/SeeAllButton';

const HeadingWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Heading = styled.p`
  margin: 0;
  font-size: 18px;

  @media (min-width: ${bp.sm}px) {
    font-size: 20px;
  }
`;

const SeeAll = styled(SeeAllButton)`
  font-size: 14px;
  @media (min-width: ${bp.sm}px) {
    font-size: 16px;
  }
`;

const SectionBody = styled.div`
  padding-top: 24px;
`;

const Option = styled.div`
  margin-bottom: 16px;
`;

export default class extends React.Component {
  static defaultProps = {
    heading: '',
    options: [],
    selected: [],
    onFilterChange: () => {},
  };

  state = { seeAll: false };

  toggle = () =>
    this.setState(prevState => ({
      seeAll: !prevState.seeAll,
    }));

  handleCheck = (option, state) => {
    if (state) this.props.onFilterChange([...this.props.selected, option]);
    else {
      this.props.onFilterChange(this.props.selected.filter(o => o !== option));
    }
  };

  render() {
    const allOptions = this.props.options.map(option => (
      <Col xs={12} sm={6} key={option}>
        <Option>
          <Checkbox
            label={option}
            name={option}
            checked={includes(this.props.selected, option)}
            onChange={e => this.handleCheck(option, e.target.checked)}
          />
        </Option>
      </Col>
    ));

    const topOptions = allOptions.slice(0, 4);

    return (
      <div>
        <HeadingWrap>
          <Heading>{this.props.heading}</Heading>

          <ToSm>
            <SeeAll isOpen={this.state.seeAll} label="See all" onClick={this.toggle} />
          </ToSm>
        </HeadingWrap>
        <ToSm>
          <Row>{this.state.seeAll && <SectionBody>{allOptions}</SectionBody>}</Row>
        </ToSm>
        <Sm>
          <SectionBody>
            <Row>{this.state.seeAll ? allOptions : topOptions}</Row>

            <SeeAll
              isOpen={this.state.seeAll}
              label={`See all ${this.props.heading.toLowerCase()}`}
              onClick={this.toggle}
            />
          </SectionBody>
        </Sm>
      </div>
    );
  }
}
