import { specialCourse } from "../../mock/specialCourse";
import SpacialCourse from "../../SpecialCourse";
import { Container, Subtitle, Title, Wrapper } from "./style";

const SpecialCourseHome = () => {
  return (
    <Container className="container">
      <Wrapper $mb={40}>
        <Title>Our feature courses</Title>
        <Subtitle>
          Vestibulum sed dolor sed diam mollis maximus vel nec dolor. <br />
          Donec varius purus et eleifend porta.
        </Subtitle>
      </Wrapper>
      <Wrapper>
        {" "}
        {specialCourse.map((v) => {
          return <SpacialCourse key={v.id} data={v} />;
        })}
      </Wrapper>
    </Container>
  );
};

export default SpecialCourseHome;
