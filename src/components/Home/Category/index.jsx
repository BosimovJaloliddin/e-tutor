import {
  Container,
  Content,
  ContentSubtitle,
  ContentTitle,
  ContentWrap,
  GoPage,
  Icon,
  IconWrap,
  Title,
  Wrapper,
} from "./style";

const Category = () => {
  return (
    <Container className="container">
      <Title>Browse top category</Title>
      <Wrapper>
        <ContentWrap $bg="#ebebff">
          <IconWrap>
            <Icon.Cpu />
          </IconWrap>
          <Content>
            <ContentTitle>Label</ContentTitle>
            <ContentSubtitle>63,476 Courses</ContentSubtitle>
          </Content>
        </ContentWrap>
        <ContentWrap $bg="#E1F7E3">
          <IconWrap>
            <Icon.Handshake />
          </IconWrap>
          <Content>
            <ContentTitle>Label</ContentTitle>
            <ContentSubtitle>63,476 Courses</ContentSubtitle>
          </Content>
        </ContentWrap>
        <ContentWrap $bg="#FFF2E5">
          <IconWrap>
            <Icon.CreditCard />
          </IconWrap>
          <Content>
            <ContentTitle>Label</ContentTitle>
            <ContentSubtitle>63,476 Courses</ContentSubtitle>
          </Content>
        </ContentWrap>
        <ContentWrap $bg="#FFF0F0">
          <IconWrap>
            <Icon.ChartBarHorizontal />
          </IconWrap>
          <Content>
            <ContentTitle>Label</ContentTitle>
            <ContentSubtitle>63,476 Courses</ContentSubtitle>
          </Content>
        </ContentWrap>
        <ContentWrap $bg="#FFFFFF" $shadow="true">
          <IconWrap $bg="#FF6636">
            <Icon.BugDroid />
          </IconWrap>
          <Content>
            <ContentTitle>Label</ContentTitle>
            <ContentSubtitle>63,476 Courses</ContentSubtitle>
          </Content>
        </ContentWrap>
        <ContentWrap $bg="#F5F7FA">
          <IconWrap>
            <Icon.Receipt />
          </IconWrap>
          <Content>
            <ContentTitle>Label</ContentTitle>
            <ContentSubtitle>63,476 Courses</ContentSubtitle>
          </Content>
        </ContentWrap>
        <ContentWrap $bg="#EBEBFF">
          <IconWrap>
            <Icon.MegaphoneSimple />
          </IconWrap>
          <Content>
            <ContentTitle>Label</ContentTitle>
            <ContentSubtitle>63,476 Courses</ContentSubtitle>
          </Content>
        </ContentWrap>
        <ContentWrap $bg="#F5F7FA">
          <IconWrap>
            <Icon.Camera />
          </IconWrap>
          <Content>
            <ContentTitle>Label</ContentTitle>
            <ContentSubtitle>63,476 Courses</ContentSubtitle>
          </Content>
        </ContentWrap>
        <ContentWrap $bg="#FFF2E5">
          <IconWrap>
            <Icon.Package />
          </IconWrap>
          <Content>
            <ContentTitle>Label</ContentTitle>
            <ContentSubtitle>63,476 Courses</ContentSubtitle>
          </Content>
        </ContentWrap>
        <ContentWrap $bg="#FFEEE8">
          <IconWrap>
            <Icon.PenNib />
          </IconWrap>
          <Content>
            <ContentTitle>Label</ContentTitle>
            <ContentSubtitle>63,476 Courses</ContentSubtitle>
          </Content>
        </ContentWrap>
        <ContentWrap $bg="#E1F7E3">
          <IconWrap>
            <Icon.FirstAidKit />
          </IconWrap>
          <Content>
            <ContentTitle>Label</ContentTitle>
            <ContentSubtitle>63,476 Courses</ContentSubtitle>
          </Content>
        </ContentWrap>
        <ContentWrap $bg="#FFF2E5">
          <IconWrap>
            <Icon.Headphones />
          </IconWrap>
          <Content>
            <ContentTitle>Label</ContentTitle>
            <ContentSubtitle>63,476 Courses</ContentSubtitle>
          </Content>
        </ContentWrap>
      </Wrapper>
      <GoPage>
        <p>We have more category & subcategory.</p>
        <div>
          Browse All <Icon.Arrow />
        </div>
      </GoPage>
    </Container>
  );
};

export default Category;
