import { styled } from "styled-components";

const Bg = styled.div`
  background-color: #f5f7fa;
`;
const Container = styled.div``;
const WrapperItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2%;
  padding-bottom: 80px;
  margin-top: 40px;
`;
const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: -0.01em;
  text-align: center;
  padding-top: 80px;
  color: #1d2026;
`;

export { Bg, Container, WrapperItems, Title };
