import styled from 'styled-components';

export default styled.button`
  display: inline-block;
  padding: 0.5rem 1rem;

  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.isActive ? '#008489' : 'rgba(72, 72, 72, 0.2)')};
  border-radius: 4px;

  color: ${props => (props.isActive ? '#ffffff' : '#383838')};
  font-family: inherit;
  font-size: 14px;
  font-weight: normal;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  background-color: ${props => (props.isActive ? '#008489' : '#ffffff')};

  cursor: pointer;
  user-select: none;
  outline: none;

  &:hover,
  &:focus {
    border-color: #008489;
  }

  &:active {
    border-color: #008489;
    color: #ffffff;
    background-color: #008489;
  }
`;
