import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "styled-theming";

import { colors } from "src/styles/theme/colors";
import { rem } from "src/utils/px-to-rem";

const backgroundColor = theme("mode", {
  light: colors.white,
  dark: colors.grey.nine,
});

export const Main = styled.main`
  background-color: ${backgroundColor};
  margin-left: 240px;
  padding: ${rem(10)} ${rem(20)} ${rem(10)} ${rem(10)};
`;

export const LinkNoStyle = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const Title = styled.h1`
  font-size: ${rem(32)};
  font-weight: 700;
  line-height: 1;
  padding: 1rem 0 2rem;
  color: ${colors.secondary.regular};
`;

export const TextFielset = styled.div`
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  display: inline-block;
  font-size: ${rem(14)};
  font-weight: 700;
  line-height: 1.2;
  margin-right: 0.5rem;
`;

export const BorderContainer = styled.div`
  border: 1px solid ${colors.grey.one};
  border-radius: 1rem;
  padding: 1rem;
`;

export const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${rem(10)};
`;
