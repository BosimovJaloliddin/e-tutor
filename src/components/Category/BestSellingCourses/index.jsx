import Course from "../../Course";
import { courses } from "../../mock/courses";
import { Container, Title, Wrapper } from "./style";

const BastSellingCourses = () => {
  return (
    <Container className="container">
      <Title>Best selling courses in Web Development</Title>
      <Wrapper>
        {courses?.slice(0, 5).map((v) => {
          return <Course key={v.id} data={v} />;
        })}
      </Wrapper>
    </Container>
  );
};

export default BastSellingCourses;
