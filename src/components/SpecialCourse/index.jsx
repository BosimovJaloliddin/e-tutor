import {
  Container,
  Content,
  CourseImg,
  CourseName,
  Icon,
  Info,
  Level,
  Price,
  Seen,
  Time,
  UserInfo,
  Wrapper,
  WrapperItems,
} from "./style";
import noImg from "../../assets/img/no-img.jpg";

const SpacialCourse = (prop) => {
  const { img, courseName, newPrice, beforPrice, info, after } = prop.data;

  return (
    <Container>
      <CourseImg src={img || noImg} />
      <WrapperItems>
        <Wrapper>
          <CourseName>{courseName}</CourseName>
          <Price>
            <span className="new">${newPrice}</span>
            <span className="befor">${beforPrice}</span>
          </Price>
        </Wrapper>
        <Info>{info}</Info>
        <Wrapper $mt={17} $mb={20}>
          <Content $gap={12}>
            <Icon.User />
            <UserInfo>{after}</UserInfo>
          </Content>
          <Content $gap={4}>
            <Icon.Star />
            <span className="like">5.0</span>
            <span className="seen">(357,914)</span>
          </Content>
        </Wrapper>
        <Wrapper $b="true" $pt={18}>
          <Seen>
            <Icon.UserIcon />
            <span className="seen">265.7K</span>
            <span className="student">students</span>
          </Seen>
          <Level>
            <Icon.Bar />
            <span>Begginar</span>
          </Level>
          <Time>
            <Icon.Clock />
            <span>5 hour</span>
          </Time>
        </Wrapper>
      </WrapperItems>
    </Container>
  );
};

export default SpacialCourse;
