import { useEffect, useState } from "react";
import BestTeachers from "../../BestTeachers";
import { bestTeacher } from "../../mock/bestTeacher";
import { Container, Icon, SeenAll, Title, WrapperItems } from "./style";

const HomeBestTeachers = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(bestTeacher);
  }, []);
  return (
    <Container className="container">
      <Title>Top instructor of the month</Title>
      <WrapperItems>
        {data.length ? (
          data?.slice(0, 5).map((v) => {
            return <BestTeachers key={v.id} data={v} />;
          })
        ) : (
          <h1>NO DATA</h1>
        )}
      </WrapperItems>
      <SeenAll>
        <p>
          Thousands of students waiting for a instructor. Start teaching &
          earning now!. <span>Become Instructor</span>
        </p>
        <Icon.Arrow />
      </SeenAll>
    </Container>
  );
};

export default HomeBestTeachers;
