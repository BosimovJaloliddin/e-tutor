import Navbar from "../Navbar";
import Category from "./Category";
import CourseHome from "./CoursesHome";
import Header from "./Header";
import SpecialCourseHome from "./SpecialCourseHome";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Header />
      <Category />
      <CourseHome />
      <SpecialCourseHome />
    </Container>
  );
};

export default Home;
