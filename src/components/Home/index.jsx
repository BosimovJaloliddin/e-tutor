import Navbar from "../Navbar";
import BestTeachers from "./BestTeachers";
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
      <BestTeachers />
    </Container>
  );
};

export default Home;
