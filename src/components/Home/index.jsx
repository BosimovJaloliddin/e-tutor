import HomeBestTeachers from "./HomeBestTeachers";
import Category from "./Category";
import CourseHome from "./CoursesHome";
import Header from "./Header";
import RecentlyCourse from "./RecentlyCourse";
import Sites from "./Sites";
import SpecialCourseHome from "./SpecialCourseHome";
import { Container } from "./style";
import Teaching from "./Teaching";

const Home = () => {
  return (
    <Container>
      <Header />
      <Category />
      <CourseHome />
      <SpecialCourseHome />
      <RecentlyCourse />
      <Teaching />
      <HomeBestTeachers />
      <Sites />
    </Container>
  );
};

export default Home;
