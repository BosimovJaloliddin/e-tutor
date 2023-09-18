import {
  Container,
  Icon,
  SiteItem,
  SiteItems,
  Subtitle,
  Title,
  Wrapper,
} from "./style";

const Sites = () => {
  return (
    <Container className="container">
      <Wrapper $f={33}>
        <Title>6.3k trusted companies</Title>
        <Subtitle>
          Nullam egestas tellus at enim ornare tristique. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra.
        </Subtitle>
      </Wrapper>
      <Wrapper $f={65} $fx="flex" $fd="column">
        <SiteItems>
          <SiteItem>
            <Icon.Google />
          </SiteItem>
          <SiteItem>
            <Icon.Lenovo />
          </SiteItem>
          <SiteItem>
            <Icon.Lexmark />
          </SiteItem>
          <SiteItem>
            <Icon.Microsoft />
          </SiteItem>
        </SiteItems>
        <SiteItems>
          <SiteItem>
            <Icon.Netflix />
          </SiteItem>
          <SiteItem>
            <Icon.Slack />
          </SiteItem>
          <SiteItem>
            <Icon.Verizon />
          </SiteItem>
          <SiteItem>
            <Icon.Youtube />
          </SiteItem>
        </SiteItems>
      </Wrapper>
    </Container>
  );
};

export default Sites;
