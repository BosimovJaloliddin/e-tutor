import { styled } from "styled-components";
import { ReactComponent as cpu } from "../../../assets/icons/cpu.svg";
import { ReactComponent as BugDroid } from "../../../assets/icons/BugDroid.svg";
import { ReactComponent as Camera } from "../../../assets/icons/Camera.svg";
import { ReactComponent as ChartBarHorizontal } from "../../../assets/icons/ChartBarHorizontal.svg";
import { ReactComponent as CreditCard } from "../../../assets/icons/CreditCard.svg";
import { ReactComponent as FirstAidKit } from "../../../assets/icons/FirstAidKit.svg";
import { ReactComponent as Handshake } from "../../../assets/icons/Handshake.svg";
import { ReactComponent as Headphones } from "../../../assets/icons/Headphones.svg";
import { ReactComponent as MegaphoneSimple } from "../../../assets/icons/MegaphoneSimple.svg";
import { ReactComponent as Receipt } from "../../../assets/icons/Receipt.svg";
import { ReactComponent as PenNib } from "../../../assets/icons/PenNib.svg";
import { ReactComponent as Package } from "../../../assets/icons/Package.svg";
import { ReactComponent as arrow } from "../../../assets/icons/arrow-right.svg";

const Container = styled.div`
  margin: 80px auto;
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: -0.01em;
  text-align: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2%;

  margin: 40px 0;
`;
const ContentWrap = styled.div`
  flex: 0 0 23.5%;
  max-width: 23.5%;

  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  margin-top: 24px;
  background-color: ${({ $bg }) => $bg && $bg};
  box-shadow: ${({ $shadow }) => $shadow && "0 0 8px #1D20261A"};
`;
const IconWrap = styled.div`
  padding: 8px;
  background-color: ${({ $bg }) => ($bg ? $bg : "#ffffff")};
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const ContentTitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #1d2026;
`;
const ContentSubtitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #6e7485;
`;
const GoPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.01em;
    text-align: center;
    color: #4e5566;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;

    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.01em;
    text-align: center;
    color: #ff6636;
    cursor: pointer;
  }
`;

const Icon = styled.div``;

Icon.Cpu = styled(cpu)``;
Icon.BugDroid = styled(BugDroid)``;
Icon.Camera = styled(Camera)``;
Icon.ChartBarHorizontal = styled(ChartBarHorizontal)``;
Icon.CreditCard = styled(CreditCard)``;
Icon.FirstAidKit = styled(FirstAidKit)``;
Icon.Handshake = styled(Handshake)``;
Icon.Headphones = styled(Headphones)``;
Icon.MegaphoneSimple = styled(MegaphoneSimple)``;
Icon.Receipt = styled(Receipt)``;
Icon.PenNib = styled(PenNib)``;
Icon.Package = styled(Package)``;
Icon.Arrow = styled(arrow)``;

export {
  Container,
  Wrapper,
  Title,
  ContentWrap,
  IconWrap,
  Content,
  ContentTitle,
  ContentSubtitle,
  Icon,
  GoPage,
};
