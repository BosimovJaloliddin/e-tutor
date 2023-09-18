import { styled } from "styled-components";
import { ReactComponent as star } from "../../assets/icons/star.svg";

const Container = styled.div`
  flex: 0 0 ${({ $w }) => ($w ? `${$w}%` : "19%")};
  max-width: ${({ $w }) => ($w ? `${$w}%` : "19%")};
  margin-bottom: 25px;
  overflow: hidden;
  border: 1px solid #e9eaf0;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  height: ${({ $h }) => $h && `${$h}px`};
  margin-top: ${({ $mt }) => $mt && `${$mt}px`};
  margin-bottom: ${({ $mb }) => $mb && `${$mb}px`};
  border-top: ${({ $bt }) => $bt && `1px solid #E9EAF0`};
  overflow: hidden;
`;
const CourseImg = styled.img`
  width: 100%;
  height: 183px;
`;
const CourseName = styled.span`
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0px;
  text-align: left;

  padding: 4px 6px;
  background-color: #ffeee8;
  color: #993d20;
  text-transform: uppercase;
`;
const Price = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;

  color: #ff6636;
  text-transform: capitalize;
`;
const Info = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.01em;
  text-align: left;
`;
const Like = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-top: 14px;

  span {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.01em;
    text-align: left;
    color: #4e5566;
  }
`;
const Seen = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 14px;

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
const CourseInfo = styled.div`
  padding: 14px;
  background-color: #ffffff;
`;

const Icon = styled.div``;

Icon.Star = styled(star)`
  width: 16px;
  height: 16px;
`;

export {
  Container,
  Wrapper,
  CourseInfo,
  CourseName,
  Price,
  CourseImg,
  Info,
  Like,
  Seen,
  Icon,
};
