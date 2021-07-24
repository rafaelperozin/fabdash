import styled from "styled-components";

import { colors } from "src/styles/theme/colors";
import { rem } from "src/utils/px-to-rem";

export const UserSnippetContainer = styled.div`
  display: flex;
  align-items: center;
  margin: ${rem(30)} ${rem(-20)} ${rem(50)};
  padding: ${rem(7)} ${rem(20)};
  background-color: ${colors.primary.light};
`;

export const UserSnippetFigure = styled.figure`
  width: 48px;
  height: 48px;
  min-width: 48px;
  min-height: 48px;
  margin: 0 ${rem(10)} 0 0;
  border-radius: 50%;
  overflow: hidden;
`;
