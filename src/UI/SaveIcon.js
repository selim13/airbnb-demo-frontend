import styled from 'styled-components';

import Icon from './Icon';

export default styled(Icon).attrs({ icon: 'outlinedHeart' })`
  fill: ${props => (props.isSaved ? '#ff5a5f' : '#ffffff')};
  color: ${props => (props.isSaved ? '#ff5a5f' : '#767676')};
  transition: fill 0.3s, color 0.3s;
`;
