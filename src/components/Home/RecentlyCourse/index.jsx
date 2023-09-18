import { courses } from "../../mock/courses";
import Course from "../../Course";
import { Btn, Container, Icon, Title, Wrapper } from "./style";

const RecentlyCourse = () => {
  return (
    <Container className="container">
      <Title>Recently added courses</Title>
      <Wrapper>
        {courses.slice(0, 4).map((v) => {
          return <Course key={v.id} w={23.5} data={v} />;
        })}
      </Wrapper>
      <Btn>
        Browse all Course <Icon.Arrow />
      </Btn>
    </Container>
  );
};

export default RecentlyCourse;
