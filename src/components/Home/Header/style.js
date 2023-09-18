import { styled } from "styled-components";

const Bg = styled.div`
  background: linear-gradient(#f0f2f500, #f0f2f5);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6%;
  padding-right: 0;
  overflow: hidden;
`;
const Content = styled.div`
  flex: 0 0 47%;
  max-width: 47%;

  padding: ${({ $p }) => $p && "94px 0 100px 0"};
`;
const Title = styled.h1`
  font-size: 56px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: -0.02em;
  text-align: left;
`;
const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin: 24px 0;
`;
const HeaderImg = styled.img`
  flex: 0 0 47%;
  max-width: 47%;
  background-position: top left;
  background-size: contain;
  padding-right: 0;
`;
const Btn = styled.button`
  font-size: 18px;
  font-weight: 600;
  line-height: 56px;
  letter-spacing: -0.01em;
  text-align: left;
  padding: 0 32px;
  text-transform: capitalize;
  color: #ffffff;
  background-color: #ff6636;
  border: 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #cc522b;
    box-shadow: 0px 6px 20px 0px #cc522b80;
  }
`;

export { Bg, Wrapper, Content, Title, Subtitle, HeaderImg, Btn };
