import { styled } from "styled-components";
import { ReactComponent as arrow } from "../../../assets/icons/arrow-right.svg";

const Container = styled.div`
  margin: 80px auto 40px auto;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2%;
  margin-top: 40px;
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: -0.01em;
  text-align: center;
  color: #1d2026;
`;
const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  height: 48px;
  padding: 0 24px;
  margin: 40px auto;
  color: #ff6636;
  background-color: #ffeee8;
  border: 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 4px #ff6636;
  }

  &:active {
    transform: scale(0.96);
  }
`;
const Icon = styled.div``;
Icon.Arrow = styled(arrow)``;

export { Container, Wrapper, Title, Btn, Icon };
