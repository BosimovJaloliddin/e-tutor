import { styled } from "styled-components";

const Container = styled.div`
  margin: 100px auto 80px auto;
`;
const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: -0.01em;
  text-align: center;
  color: #1d2026;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 60px;
`;

export { Container, Title, Wrapper };
