import { useEffect, useState } from "react";
import { bestTeacher } from "../../mock/bestTeacher";
import BestTeacher from "../../BestTeachers";
import { Bg, Container, Title, WrapperItems } from "./style";

const PopularInstructors = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(bestTeacher);
  }, []);
  return (
    <Bg>
      <Container className="container">
        <Title>Popular instructor in Web Development</Title>
        <WrapperItems>
          {data.length ? (
            data?.map((v) => {
              return <BestTeacher key={v.id} data={v} />;
            })
          ) : (
            <h1 style={{ textAlign: "center" }}>NO DATA</h1>
          )}
        </WrapperItems>
      </Container>
    </Bg>
  );
};

export default PopularInstructors;
