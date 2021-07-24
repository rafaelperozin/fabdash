import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import theme from "styled-theming";

import { colors } from "src/styles/theme/colors";
import { rem } from "src/utils/px-to-rem";

const backgroundColor = theme.variants("mode", "type", {
  TIP: { light: colors.primary.light },
  SUCCESS: { light: colors.success.light },
  WARNING: { light: colors.warning.light },
  ERROR: { light: colors.error.light },
});
const fontColor = theme.variants("mode", "type", {
  TIP: { light: colors.primary.regular },
  SUCCESS: { light: colors.success.regular },
  WARNING: { light: colors.warning.regular },
  ERROR: { light: colors.error.regular },
});
export interface NotificationTypeProps {
  type: "TIP" | "SUCCESS" | "WARNING" | "ERROR";
}

export const NotificationWrap = styled.div<NotificationTypeProps>`
  background-color: ${backgroundColor};
  padding: ${rem(10)};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NotificationIcon = styled(FontAwesomeIcon)<NotificationTypeProps>`
  display: inline-block;
  font-size: ${rem(20)};
  color: ${fontColor};
  margin-right: ${rem(6)};
`;

export const NotificationTitle = styled.span<NotificationTypeProps>`
  display: inline-block;
  font-size: ${rem(14)};
  color: ${fontColor};
  text-transform: uppercase;
  font-weight: 700;
  margin-right: ${rem(4)};
`;

export const NotificationText = styled.span<NotificationTypeProps>`
  display: inline-block;
  font-size: ${rem(14)};
  color: ${fontColor};
`;
