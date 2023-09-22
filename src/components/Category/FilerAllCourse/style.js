import { styled } from "styled-components";
import { ReactComponent as filter } from "../../../assets/icons/setting.svg";
import { ReactComponent as loop } from "../../../assets/icons/loop.svg";

const Container = styled.div`
  margin: 80px 0;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ $mt }) => $mt && `${$mt}px`};
`;
const Items = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ $gap }) => $gap && `${$gap}px`};
`;
const SearchWrap = styled.div`
  position: relative;
  max-width: 457px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
  border: 1px solid #e9eaf0;
`;
const SearchInput = styled.input`
  height: 46px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  border: 0;
  outline: none;
`;
const Filter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffddd1;
  padding: 0 24px;
  cursor: pointer;
  .name {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: -0.008em;
    text-align: left;
    color: #1d2026;
    margin-left: 8px;
    margin-right: 24px;
  }
  .number {
    width: 20px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 6px;
    background-color: #ffeee8;
    color: #ff6636;
  }

  transition: all 0.3s ease;
  &:active {
    transform: scale(0.96);
  }
`;
const Subtitle = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.01em;
  text-align: left;
  color: ${({ $col }) => ($col ? $col : "#4e5566")};
`;
const SelectWrap = styled.div`
  width: 200px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 16px;
  border: 1px solid #e9eaf0;
  padding: 12px 16px;
`;
const Select = styled.select`
  width: 180px;
  height: 46px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #4e5566;
  border: 0;
  outline: none;
  option {
    padding: 12px;
  }
`;
const Suggestion = styled.span`
  display: inline-block;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #ff6636;
`;

const Icon = styled.div``;

Icon.Filter = styled(filter)``;
Icon.Search = styled(loop)`
  width: 24px;
  height: 24px;
`;

export {
  Container,
  Wrapper,
  Items,
  SearchWrap,
  SearchInput,
  Filter,
  Subtitle,
  SelectWrap,
  Select,
  Suggestion,
  Icon,
};
