import { styled } from "styled-components";

const Container = styled.div`
  margin: 80px auto;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: -0.01em;
  text-align: center;
  color: #1d2026;
`;
const Subtitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #4e5566;
`;

export { Container, Wrapper, Title, Subtitle };
