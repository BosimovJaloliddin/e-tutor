import { Bg, Btn, Content, HeaderImg, Subtitle, Title, Wrapper } from "./style";
import headerImg from "../../../assets/img/header-img.png";

const Header = () => {
  return (
    <Bg>
      <Wrapper className="container">
        <Content $p="true">
          <Title>Learn with expert anytime anywhere</Title>
          <Subtitle>
            Our mision is to help people to find the best course online and
            learn with expert anytime, anywhere.
          </Subtitle>
          <Btn>create acount</Btn>
        </Content>
        <HeaderImg src={headerImg} />
      </Wrapper>
    </Bg>
  );
};

export default Header;
