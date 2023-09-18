import Course from "../../Course";
import { courses } from "../../mock/courses";
import { Bg, Container, Title, Wrapper } from "./style";

const CourseHome = () => {
  return (
    <Bg>
      <Container className="container">
        <Title>Best selling courses</Title>
        <Wrapper>
          {courses.map((v) => {
            return <Course key={v.id} data={v} />;
          })}
        </Wrapper>
      </Container>
    </Bg>
  );
};

export default CourseHome;
