import { css, styled } from "styled-components";
import { ReactComponent as user } from "../../assets/icons/user.svg";
import { ReactComponent as star } from "../../assets/icons/star.svg";
import { ReactComponent as bar } from "../../assets/icons/bar-chart.svg";
import { ReactComponent as clock } from "../../assets/icons/clock.svg";
import { ReactComponent as userIcon } from "../../assets/icons/user-icon.svg";

const Container = styled.div`
  flex: 0 0 49%;
  max-width: 49%;
  height: 188px;

  display: flex;
  border: 1px solid #e9eaf0;
  margin-top: 26px;

  &:hover {
    box-shadow: 0 0 7px #e9eaf0;
  }
`;
const WrapperItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-bottom: ${({ $mb }) => $mb && `${$mb}px`};
`;
const CourseImg = styled.img`
  width: 260px;
  height: 100%;
  overflow: hidden;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;

  margin-top: ${({ $mt }) => $mt && `${$mt}px`};
  margin-bottom: ${({ $mb }) => $mb && `${$mb}px`};
  padding-top: ${({ $pt }) => $pt && `${$pt}px`};
  border-top: ${({ $b }) => $b && "1px solid #E9EAF0"};
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ $gap }) => $gap && `${$gap}px`};

  .like {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #1d2026;
  }
  .seen {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #8c94a3;
  }
`;
const CourseName = styled.span`
  display: inline-block;
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0px;
  text-align: left;
  padding: 4px 6px;
  color: #15711f;
  background-color: #e1f7e3;
`;
const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  .new {
    display: inline-block;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: -0.015em;
    color: #1d2026;
  }
  .befor {
    display: inline-block;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0em;
    color: #a1a5b3;
    text-decoration: line-through;
  }
`;
const Info = styled.p`
  width: 100%;
  height: 22px;
  overflow: hidden;

  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 10px;
  padding: 0 24px;
`;
const UserInfo = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: #4e5566;
`;

const info = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #4e5566;
`;

const Seen = styled.div`
  ${info}
  .seen {
    font-weight: 500;
  }
  .student {
    color: #8c94a3;
  }
`;
const Level = styled.div`
  ${info}
`;
const Time = styled.div`
  ${info}
`;

const Icon = styled.div``;
Icon.User = styled(user)`
  width: 28px;
  height: 28px;
`;
Icon.Star = styled(star)`
  width: 20px;
  height: 20px;
`;

Icon.Bar = styled(bar)`
  width: 20px;
  height: 20px;
`;
Icon.Clock = styled(clock)`
  width: 20px;
  height: 20px;
`;
Icon.UserIcon = styled(userIcon)`
  width: 20px;
  height: 20px;
`;
export {
  Container,
  WrapperItems,
  Wrapper,
  Content,
  CourseName,
  Price,
  Info,
  UserInfo,
  CourseImg,
  Seen,
  Level,
  Time,
  Icon,
};
