import { styled } from "styled-components";
import { ReactComponent as logo } from "../../assets/logo.svg";
import { ReactComponent as loop } from "../../assets/icons/loop.svg";
import { ReactComponent as heart } from "../../assets/icons/heart.svg";
import { ReactComponent as bell } from "../../assets/icons/bell.svg";
import { ReactComponent as shop } from "../../assets/icons/shopp.svg";

const Bg = styled.div`
  background-color: #1d2026;
`;
const Container = styled.div`
  max-width: 1920px;
  padding: 0 30px;
  margin: auto;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ $gap }) => $gap && `${$gap}%`};
`;
const NavItems = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;
const NavItem = styled.li`
  font-size: 16px;
  font-weight: 400;
  padding: 16px;
  color: #8c94a3;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    box-shadow: 0px 2px 0px 0px #ff6636 inset;
  }
`;
const NavSelect = styled.select`
  display: inline-block;
  width: ${({ $w }) => $w && `${$w}px`};
  height: ${({ $h }) => $h && `${$h}px`};
  font-size: 16px;
  font-weight: 400;
  padding: 8px;
  margin-left: 16px;
  border: ${({ $b }) => ($b ? "1px solid #e9eaf0" : 0)};
  color: #8c94a3;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`;

const Content = styled.div`
  flex: 0 0 48%;
  max-width: 48%;

  display: flex;
  align-items: center;
  justify-content: ${({ $jc }) => $jc && $jc};
  padding: 24px 0;
`;
const NavInput = styled.input`
  display: inline-block;
  width: ${({ $w }) => $w && `${$w}px`};
  height: ${({ $h }) => $h && `${$h}px`};
  border: 1px solid #e9eaf0;
  padding: 12px;
  margin-left: 16px;
  outline: none;
`;
const NavBtn = styled.button`
  width: ${({ $w }) => $w && `${$w}px`};
  height: 48px;
  padding: 0 24px;
  background-color: #ff6636;
  color: #ffffff;
  margin-left: ${({ $ml }) => $ml && `${$ml}px`};
  border: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #ffeee8;
    color: #ff6636;
  }
`;

const Icon = styled.div``;

Icon.Logo = styled(logo)`
  width: 153px;
  height: 24px;
  margin-right: 50px;
`;
Icon.Loop = styled(loop)`
  width: 24px;
  height: 24px;
`;
Icon.Heart = styled(heart)`
  width: 24px;
  height: 24px;
  margin-left: 24px;
`;
Icon.Bell = styled(bell)`
  width: 24px;
  height: 24px;
`;
Icon.Shop = styled(shop)`
  width: 24px;
  height: 24px;
  margin: 0 24px;
`;

export {
  Bg,
  Container,
  Wrapper,
  NavItems,
  NavItem,
  NavSelect,
  Content,
  NavInput,
  NavBtn,
  Icon,
};
