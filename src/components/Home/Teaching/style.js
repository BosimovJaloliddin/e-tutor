import { styled } from "styled-components";
import { ReactComponent as arrow } from "../../../assets/icons/arrow-right.svg";

const Bg = styled.div`
  background-color: #f5f7fa;
  padding: 80px 0;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2%;
`;
const Wrapper = styled.div`
  flex: 0 0 49%;
  max-width: 49%;
  padding: 40px;
  background: ${({ $bg }) =>
    $bg ? "linear-gradient(to right, #cc522b, #ff6636)" : "#ffffff"};
`;
const ContentItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4%;
  margin-top: ${({ $mt }) => $mt && `${$mt}px`};
`;
const ContentItem = styled.div`
  flex: 0 0 48%;
  max-width: 48%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;

  span {
    width: 39px;
    height: 39px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: center;

    color: ${({ $col }) => $col && $col};
    background: ${({ $bg }) => ($bg ? $bg : "#ffffff")};
    border-radius: 50%;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #1d2026;
  }
`;
const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: -0.01em;
  text-align: left;
  color: ${({ $col }) => $col && $col};
`;
const Subtitle = styled.p`
  font-size: ${({ $fs }) => ($fs ? `${$fs}px` : "16px")};
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.01em;
  text-align: left;
  color: ${({ $col }) => $col && $col};
  margin-top: ${({ $mt }) => $mt && `${$mt}px`};
`;
const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  height: 48px;
  padding: 0 24px;
  margin-top: 24px;
  color: #ff6636;
  background-color: #ffffff;
  border: 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 4px #ffffff;
  }

  &:active {
    transform: scale(0.96);
  }
`;
const Icon = styled.div``;
Icon.Arrow = styled(arrow)``;

export {
  Bg,
  Container,
  Wrapper,
  ContentItems,
  ContentItem,
  Title,
  Subtitle,
  Btn,
  Icon,
};
