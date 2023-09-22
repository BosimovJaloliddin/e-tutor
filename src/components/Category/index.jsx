import BastSellingCourses from "./BestSellingCourses";
import PopularInstructors from "./PopularInstructors";
import PopularTools from "./PopularTools";
import { Container } from "./style";

const Category = () => {
  return (
    <Container>
      <BastSellingCourses />
      <PopularTools />
      <PopularInstructors />
    </Container>
  );
};

export default Category;
