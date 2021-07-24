import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { rem } from "src/utils/px-to-rem";

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const NavLink = styled(Link)`
  margin-bottom: ${rem(10)};
  text-decoration: none;
  color: inherit;
  fontsize: ${rem(18)};
  &:last-child {
    margin-bottom: 0;
  }
`;

export const NavIcon = styled(FontAwesomeIcon)`
  margin-right: ${rem(10)};
`;
