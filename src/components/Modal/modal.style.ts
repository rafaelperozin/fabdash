import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { colors } from "src/styles/theme/colors";
import { rem } from "src/utils/px-to-rem";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: 0.8;
  z-index: 11;
`;

export const ModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90%;
  min-width: 50%;
  max-height: 80vh;
  background-color: ${colors.white};
  z-index: 11;
  border-radius: 1rem;
  padding: 3rem;
`;

export const ModalClose = styled(FontAwesomeIcon)`
  position: absolute;
  font-size: ${rem(18)};
  display: flex;
  align-items: center;
  justify-content: center;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  color: ${colors.grey.seven};

  &:hover {
    color: ${colors.black};
  }
`;
