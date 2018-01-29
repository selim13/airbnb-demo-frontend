import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

import bp from '../../../breakpoints';
import Reviews from '../../../UI/Reviews';
import SaveIcon from '../../../UI/SaveIcon';

const Wrap = styled.div`
  position: relative;
`;

const Link = styled(RouterLink)`
  position: relative;
  font-size: 15px;
  color: #383838;
  text-decoration: none;

  @media (min-width: ${bp.sm}px) {
    font-size: 15px;
  }
`;

const ImageWrap = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 8px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const SaveButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px;
  border: none;
  background: transparent;
  cursor: pointer;
  user-select: none;
`;

const CardSaveIcon = SaveIcon.extend`
  width: 32px;
  height: 32px;
  fill: ${props => (props.isSaved ? '#ff5a5f' : 'rgba(72, 72, 72, 0.5)')};
  color: #ffffff;
`;

const Heading = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 15px;
`;

const Price = styled.p`
  margin-top: 0;
  margin-bottom: 4px;
  font-weight: 300;
  font-size: 15px;
`;

const Properties = styled.p`
  margin: 0;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${props => (props.hot ? '#8D1F13' : '#383838')};
`;

const NewBadge = styled.div`
  display: inline-block;
  padding: 4px 5px;
  border-radius: 2px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  background: #008489;
`;

export default class Card extends React.Component {
  static defaultProps = {
    reviews: {},
  };

  state = { isSaved: false };

  handleToggleSave = () => this.setState(prevState => ({ isSaved: !prevState.isSaved }));

  render() {
    return (
      <Wrap>
        <Link to={`/homes/${this.props.id}`}>
          <ImageWrap>
            <Image src={this.props.image} width="738" height="494" alt="" />
          </ImageWrap>
          <Properties hot={this.props.hot}>
            {this.props.roomType} · {this.props.bedsNumber} beds
          </Properties>
          <Heading>{this.props.name}</Heading>
          <Price>${this.props.price} per night</Price>
          {this.props.reviews && this.props.reviews.count > 0 ? (
            <Reviews
              rating={this.props.reviews.rating}
              count={this.props.reviews.count}
              status={this.props.reviews.status}
            />
          ) : (
            <NewBadge>New</NewBadge>
          )}
        </Link>

        <SaveButton title="Like" onClick={this.handleToggleSave}>
          <CardSaveIcon isSaved={this.state.isSaved} />
        </SaveButton>
      </Wrap>
    );
  }
}
