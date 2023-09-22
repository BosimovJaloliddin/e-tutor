import { styled } from "styled-components";

const Container = styled.div``;
const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #1d2026;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2%;
  margin-top: 24px;
`;
const Tool = styled.div`
  flex: 0 0 15%;
  max-width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 24px 12px;
  border: 1px solid #e9eaf0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 12px #1d20261a;

    h4 {
      color: #ff6636;
    }
  }
`;
const ToolTitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  color: #1d2026;
  transition: all 0.3s ease;
`;
const ToolSubtitle = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: #8c94a3;
`;

export { Container, Title, Wrapper, Tool, ToolTitle, ToolSubtitle };
