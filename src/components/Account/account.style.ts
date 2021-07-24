import { Link } from "react-router-dom";
import styled from "styled-components";

import { colors } from "src/styles/theme/colors";
import { rem } from "src/utils/px-to-rem";

export const AccActions = styled.div`
  border-top: 1px solid ${colors.grey.one};
  display: flex;
  alig-items: center;
  justify-content: space-around;
  flex-wrap: nowrap;
`;

const linkStyle = `
  padding: 1rem 1rem 0;
  color: inherit;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${rem(14)};
  &:hover {
    color: ${colors.tertiary.regular};
    text-decoration: underline;
  }
`;

export const AccActionLink = styled(Link)`
  ${linkStyle}
`;

export const FakeLink = styled.button`
  ${linkStyle}
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
