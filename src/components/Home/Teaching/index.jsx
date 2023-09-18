import {
  Bg,
  Btn,
  Container,
  ContentItem,
  ContentItems,
  Icon,
  Subtitle,
  Title,
  Wrapper,
} from "./style";

const Teaching = () => {
  return (
    <Bg>
      <Container className="container">
        <Wrapper $bg="#CC522B, #FF6636">
          <Title $col="#FFFFFF">Become an instructor</Title>
          <Subtitle $fs={14} $col="#FFFFFF" $mt={8}>
            Instructors from around the world teach millions of students on
            Udemy. We provide the tools and skills to teach what you love.
          </Subtitle>
          <Btn>
            Start teaching <Icon.Arrow />
          </Btn>
        </Wrapper>
        <Wrapper>
          <Title $col="#1D2026">Your teaching & earning steps</Title>
          <ContentItems $mt={27}>
            <ContentItem $col="#564FFD" $bg="#EBEBFF">
              <span>1</span> <p>Apply to become instructor</p>
            </ContentItem>
            <ContentItem $col="#FF6636" $bg="#FFF0F0">
              <span>2</span> <p>Build & edit your profile</p>
            </ContentItem>
          </ContentItems>

          <ContentItems $mt={20}>
            <ContentItem $col="#FF6636" $bg="#FFF0F0">
              <span>3</span> <p>Create your new course</p>
            </ContentItem>
            <ContentItem $col="#23BD33" $bg="#E1F7E3">
              <span>4</span> <p>Start teaching & earning</p>
            </ContentItem>
          </ContentItems>
        </Wrapper>
      </Container>
    </Bg>
  );
};

export default Teaching;
