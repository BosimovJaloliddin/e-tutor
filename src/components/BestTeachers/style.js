import { styled } from "styled-components";
import { ReactComponent as star } from "../../assets/icons/star.svg";

const WrapperItem = styled.div`
  flex: 0 0 19%;
  max-width: 19%;
  border: 1px solid #e9eaf0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 14px #1d20261a;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-top: 1px solid #e9eaf0;
`;
const UserImg = styled.img`
  width: 100%;
  height: 244px;
`;
const UserName = styled.h4`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  color: #1d2026;
  margin-top: 8px;
  padding: 0 12px;
`;
const UserInfo = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.01em;
  text-align: center;
  color: #8c94a3;
  margin-bottom: 12px;
  padding: 0 12px;
`;
const Like = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  .span {
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    color: #4e5566;
  }
`;
const Seen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  .seen {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.01em;
    text-align: left;
    color: #4e5566;
  }
  .student {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.01em;
    text-align: left;
    color: #8c94a3;
  }
`;

const Icon = styled.div``;

Icon.Star = styled(star)`
  width: 20px;
  height: 20px;
`;

export { WrapperItem, Wrapper, UserImg, UserName, UserInfo, Like, Seen, Icon };
