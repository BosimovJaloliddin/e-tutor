import {
  Container,
  Filter,
  Icon,
  Items,
  SearchInput,
  SearchWrap,
  Select,
  SelectWrap,
  Subtitle,
  Suggestion,
  Wrapper,
} from "./style";

const FilterAllCourse = () => {
  return (
    <Container className="container">
      <Wrapper>
        <Items $gap={24}>
          <Filter>
            <Icon.Filter />
            <span className="name">Filter</span>
            <span className="number">0</span>
          </Filter>
          <SearchWrap>
            <Icon.Search />
            <SearchInput type="text" placeholder="search" />
          </SearchWrap>
        </Items>
        <Items $gap={24}>
          <Subtitle>Sort by:</Subtitle>
          <SelectWrap>
            <Select name="trend" id="trand">
              <option value="1">trend 1</option>
              <option value="2">trend 2</option>
              <option value="3">trend 3</option>
            </Select>
          </SelectWrap>
        </Items>
      </Wrapper>
      <Wrapper $mt={24}>
        <Items $gap={12}>
          <Subtitle $col="#1D2026">Suggestion:</Subtitle>
          <Suggestion>user interface</Suggestion>
          <Suggestion>user experience</Suggestion>
          <Suggestion>web design</Suggestion>
          <Suggestion>interface</Suggestion>
          <Suggestion>app</Suggestion>
        </Items>
        <Items>
          <Subtitle>
            <b>3,145,684</b> results find for “ui/ux design”
          </Subtitle>
        </Items>
      </Wrapper>
    </Container>
  );
};

export default FilterAllCourse;
