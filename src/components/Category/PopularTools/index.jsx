import {
  Container,
  Keyword,
  KeywordTitle,
  Title,
  Tool,
  ToolSubtitle,
  ToolTitle,
  Wrapper,
} from "./style";

const PopularTools = () => {
  return (
    <Container className="container">
      <Title>Popular tools</Title>
      <Wrapper $jc="space-between" $mt={24}>
        <Tool>
          <ToolTitle>HTML 5</ToolTitle>
          <ToolSubtitle>2,736 Courses</ToolSubtitle>
        </Tool>
        <Tool>
          <ToolTitle>CSS</ToolTitle>
          <ToolSubtitle>2,736 Courses</ToolSubtitle>
        </Tool>
        <Tool>
          <ToolTitle>JavaScropt</ToolTitle>
          <ToolSubtitle>2,736 Courses</ToolSubtitle>
        </Tool>
        <Tool>
          <ToolTitle>SaaS</ToolTitle>
          <ToolSubtitle>2,736 Courses</ToolSubtitle>
        </Tool>
        <Tool>
          <ToolTitle>Larvel</ToolTitle>
          <ToolSubtitle>2,736 Courses</ToolSubtitle>
        </Tool>
        <Tool>
          <ToolTitle>Django</ToolTitle>
          <ToolSubtitle>2,736 Courses</ToolSubtitle>
        </Tool>
      </Wrapper>
      <Wrapper $jc="flex-start" $mt={40}>
        <KeywordTitle>Popular keyword:</KeywordTitle>
        <Keyword type="button">HTML 5</Keyword>
        <Keyword type="button">Web Development</Keyword>
        <Keyword type="button">Responsive Developments</Keyword>
        <Keyword type="button">Developments</Keyword>
        <Keyword type="button">Programing</Keyword>
        <Keyword type="button">Website</Keyword>
        <Keyword type="button">Technology</Keyword>
        <Keyword type="button">Wordpress</Keyword>
      </Wrapper>
    </Container>
  );
};

export default PopularTools;
