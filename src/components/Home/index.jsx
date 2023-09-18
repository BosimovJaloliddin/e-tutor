import Navbar from "../Navbar";
import Category from "./Category";
import CourseHome from "./CoursesHome";
import Header from "./Header";
import RecentlyCourse from "./RecentlyCourse";
import SpecialCourseHome from "./SpecialCourseHome";
import { Container } from "./style";
import Teaching from "./Teaching";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Header />
      <Category />
      <CourseHome />
      <SpecialCourseHome />
      <RecentlyCourse />
      <Teaching />
    </Container>
  );
};

export default Home;
