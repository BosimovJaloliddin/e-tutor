import {
  Container,
  CourseImg,
  CourseInfo,
  CourseName,
  Icon,
  Info,
  Like,
  Price,
  Seen,
  Wrapper,
} from "./style";

const Course = (prop) => {
  const { urlImg, courseName, price, info } = prop.data;
  return (
    <Container $w={prop.w}>
      <CourseImg src={urlImg} />
      <CourseInfo>
        <Wrapper>
          <CourseName>{courseName || "no name"}</CourseName>
          <Price>${price || "no price"}</Price>
        </Wrapper>
        <Wrapper $h={40} $mt={14} $mb={14}>
          <Info>{info || "no info"}</Info>
        </Wrapper>
        <Wrapper $mt={14} $bt="true">
          <Like>
            <Icon.Star />
            <span>5.0</span>
          </Like>
          <Seen>
            <span className="seen">234.4K</span>
            <span className="student">students</span>
          </Seen>
        </Wrapper>
      </CourseInfo>
    </Container>
  );
};

export default Course;
