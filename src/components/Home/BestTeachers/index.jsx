import {
  Container,
  Icon,
  Like,
  Seen,
  SeenAll,
  Title,
  UserImg,
  UserInfo,
  UserName,
  Wrapper,
  WrapperItem,
  WrapperItems,
} from "./style";
import userImg1 from "../../../assets/img/user-img1.png";
import userImg2 from "../../../assets/img/user-img2.png";
import userImg3 from "../../../assets/img/user-img3.png";
import userImg4 from "../../../assets/img/user-img4.png";

const BestTeachers = () => {
  return (
    <Container className="container">
      <Title>Top instructor of the month</Title>
      <WrapperItems>
        <WrapperItem>
          <UserImg src={userImg1} />
          <UserName>Ahmad</UserName>
          <UserInfo>Senior Developer</UserInfo>
          <Wrapper>
            <Like>
              <Icon.Star />
              <span>4.5</span>
            </Like>
            <Seen>
              <span className="seen">343,434</span>
              <span className="student">students</span>
            </Seen>
          </Wrapper>
        </WrapperItem>
        <WrapperItem>
          <UserImg src={userImg2} />
          <UserName>Darrell Steward</UserName>
          <UserInfo>Digital Product Designer</UserInfo>
          <Wrapper>
            <Like>
              <Icon.Star />
              <span>4.9</span>
            </Like>
            <Seen>
              <span className="seen">543,434</span>
              <span className="student">students</span>
            </Seen>
          </Wrapper>
        </WrapperItem>
        <WrapperItem>
          <UserImg src={userImg4} />
          <UserName>Jane Cooper</UserName>
          <UserInfo>UI/UX Designer</UserInfo>
          <Wrapper>
            <Like>
              <Icon.Star />
              <span>4.8</span>
            </Like>
            <Seen>
              <span className="seen">443,434</span>
              <span className="student">students</span>
            </Seen>
          </Wrapper>
        </WrapperItem>
        <WrapperItem>
          <UserImg src={userImg3} />
          <UserName>Albert Flores</UserName>
          <UserInfo>Adobe Instructor</UserInfo>
          <Wrapper>
            <Like>
              <Icon.Star />
              <span>4.7</span>
            </Like>
            <Seen>
              <span className="seen">543,434</span>
              <span className="student">students</span>
            </Seen>
          </Wrapper>
        </WrapperItem>
        <WrapperItem>
          <UserImg src={userImg2} />
          <UserName>Kathryn Murphy</UserName>
          <UserInfo>Lead Developer</UserInfo>
          <Wrapper>
            <Like>
              <Icon.Star />
              <span>4.2</span>
            </Like>
            <Seen>
              <span className="seen">3,434</span>
              <span className="student">students</span>
            </Seen>
          </Wrapper>
        </WrapperItem>
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

export default BestTeachers;
