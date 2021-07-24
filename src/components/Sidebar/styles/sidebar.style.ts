import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "styled-theming";

import { colors } from "src/styles/theme/colors";
import { rem } from "src/utils/px-to-rem";

const backgroundColor = theme("mode", {
  light: colors.primary.lighter,
});
const fontColor = theme("mode", {
  light: colors.secondary.regular,
});

export const Aside = styled.aside`
  background-color: ${backgroundColor};
  box-sizing: border-box;
  color: ${fontColor};
  border-radius: 1rem;
  padding: ${rem(20)};
  width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  left: ${rem(10)};
  top: ${rem(10)};
  bottom: ${rem(10)};
`;

export const ToggleMenu = styled(FontAwesomeIcon)`
  display: block;
  margin-bottom: ${rem(20)};
  color: ${colors.tertiary.regular};
`;

export const BrandLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const BrandName = styled.h2`
  letter-spacing: ${rem(5)};
  font-size: ${rem(35)};
`;
