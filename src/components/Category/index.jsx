import BastSellingCourses from "./BestSellingCourses";
import FilterAllCourse from "./FilerAllCourse";
import PopularInstructors from "./PopularInstructors";
import PopularTools from "./PopularTools";
import { Container } from "./style";

const Category = () => {
  return (
    <Container>
      <BastSellingCourses />
      <PopularTools />
      <PopularInstructors />
      <FilterAllCourse />
    </Container>
  );
};

export default Category;
