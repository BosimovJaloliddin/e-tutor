import { Outlet, useNavigate } from "react-router-dom";
import {
  Bg,
  Container,
  Content,
  Icon,
  NavBtn,
  NavInput,
  NavItem,
  NavItems,
  NavSelect,
  Wrapper,
} from "./style";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Bg>
        <Container>
          <Wrapper>
            <NavItems>
              <NavItem onClick={() => navigate("/home")}>Home</NavItem>
              <NavItem onClick={() => navigate("/category")}>Category</NavItem>
              <NavItem>About</NavItem>
              <NavItem>Contact</NavItem>
              <NavItem>Become an Instructor</NavItem>
            </NavItems>
            <NavItems>
              <NavSelect>
                <option value="usd">USD</option>
                <option value="rus">RUB</option>
                <option value="uzb">SUM</option>
              </NavSelect>
              <NavSelect>
                <option value="eng">Eng</option>
                <option value="rus">Rus</option>
                <option value="uzb">Uzb</option>
              </NavSelect>
            </NavItems>
          </Wrapper>
        </Container>
      </Bg>
      <Container>
        <Wrapper $gap={4}>
          <Content $jc="flex-start">
            <Icon.Logo />
            <NavSelect $w={200} $h={48} $b="true">
              <option value="eng">Eng</option>
              <option value="rus">Rus</option>
              <option value="uzb">Uzb</option>
            </NavSelect>
            <NavInput
              $w={424}
              $h={48}
              placeholder="What do you want learn..."
            />
          </Content>
          <Content $jc="flex-end">
            <Icon.Bell />
            <Icon.Heart />
            <Icon.Shop />
            <NavBtn $w={168} $bg="#FFEEE8" $cl="#FF6636">
              Create Acount
            </NavBtn>
            <NavBtn $w={100} $bg="#FF6636" $cl="#FFFFFF" $ml={12}>
              Sign In
            </NavBtn>
          </Content>
        </Wrapper>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
