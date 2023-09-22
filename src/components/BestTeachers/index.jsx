import {
  Icon,
  Like,
  Seen,
  UserImg,
  UserInfo,
  UserName,
  Wrapper,
  WrapperItem,
} from "./style";
import noImg from "../../assets/img/no-img.jpg";

const BestTeachers = (prop) => {
  const { name, img, tool, star, seen } = prop.data;
  return (
    <WrapperItem>
      <UserImg src={img || noImg} />
      <UserName>{name || "no name"}</UserName>
      <UserInfo>{tool || "no"}</UserInfo>
      <Wrapper>
        <Like>
          <Icon.Star />
          <span>{star || 0}</span>
        </Like>
        <Seen>
          <span className="seen">{seen || 0}</span>
          <span className="student">students</span>
        </Seen>
      </Wrapper>
    </WrapperItem>
  );
};

export default BestTeachers;
