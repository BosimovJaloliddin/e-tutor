import { styled } from "styled-components";
import { ReactComponent as arrow } from "../../../assets/icons/arrow-right.svg";

const Container = styled.div`
  margin: 80px auto;
`;
const WrapperItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2%;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: -0.01em;
  text-align: center;
  color: #1d2026;
  margin-bottom: 40px;
`;

const SeenAll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-top: 40px;

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.01em;
    text-align: center;
    color: #6e7485;
  }
  span {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.01em;
    text-align: center;
    color: #ff6636;
    cursor: pointer;
  }
`;

const Icon = styled.div``;

Icon.Arrow = styled(arrow)`
  cursor: pointer;
`;

export { Container, WrapperItems, Title, SeenAll, Icon };
