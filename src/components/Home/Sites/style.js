import { styled } from "styled-components";
import { ReactComponent as google } from "../../../assets/icons/company-site/google.svg";
import { ReactComponent as lenovo } from "../../../assets/icons/company-site/lenovo.svg";
import { ReactComponent as lexmark } from "../../../assets/icons/company-site/lexmark.svg";
import { ReactComponent as microsoft } from "../../../assets/icons/company-site/microsoft.svg";
import { ReactComponent as netflix } from "../../../assets/icons/company-site/netflix.svg";
import { ReactComponent as slack } from "../../../assets/icons/company-site/slack.svg";
import { ReactComponent as verizon } from "../../../assets/icons/company-site/verizon.svg";
import { ReactComponent as youtube } from "../../../assets/icons/company-site/youtube.svg";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2%;
`;
const Wrapper = styled.div`
  flex: 0 0 ${({ $f }) => $f && `${$f}%`};
  max-width: ${({ $f }) => $f && `${$f}%`};

  display: ${({ $fx }) => $fx && `${$fx}%`};
  flex-direction: ${({ $fd }) => $fd && `${$fd}%`};
`;
const SiteItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2%;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;
const SiteItem = styled.div`
  flex: 0 0 23.5%;
  max-width: 23.5%;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
  box-shadow: 0px 0px 32px 0px #091a4412;
  cursor: pointer;
`;
const Title = styled.h2`
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #1d2026;
`;
const Subtitle = styled.p`
  max-width: 312px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #6e7485;
  margin-top: 24px;
`;

const Icon = styled.div``;
Icon.Google = styled(google)``;
Icon.Lenovo = styled(lenovo)``;
Icon.Lexmark = styled(lexmark)``;
Icon.Microsoft = styled(microsoft)``;
Icon.Netflix = styled(netflix)``;
Icon.Slack = styled(slack)``;
Icon.Verizon = styled(verizon)``;
Icon.Youtube = styled(youtube)``;

export { Container, Wrapper, SiteItems, SiteItem, Title, Subtitle, Icon };
