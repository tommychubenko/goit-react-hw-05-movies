import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: black;
  padding: 24px;

  &.active {
    color: orange;
  }
`;
