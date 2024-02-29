import styled from "styled-components";
import { spacing } from "../../settings/spacing";
import CategoryLayout from "./CategoryLayout";
import ItemLayout from "./ItemLayout";
import placeholder from "../../assets/images/placeholder-image.jpg";
import { font } from "../../settings/font";
import { colors } from "../../settings/colors";
import FormLayout from "./FormLayout";

function MainLayout() {
  return (
    <Container>
      <CategoryTexLabel>Burgers | Ultimate Burger</CategoryTexLabel>
      <BodyLayoutContainer>
        <CategoryLayout />
        <ItemLayout logo={placeholder} />
        <FormLayout image={placeholder} />
      </BodyLayoutContainer>
    </Container>
  );
}

export default MainLayout;

const Container = styled.div`
  display: grid;
`;
const BodyLayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 3fr;
  gap: ${spacing.xxlarge.xx}px;

  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const CategoryTexLabel = styled.h1`
  font-family: ${font.family};
  font-size: ${font.size.heading1}px;
  font-weight: 600;
  line-height: 1.2;
  margin-left: 16px;
  margin-top: 24px;
  margin-bottom: 16px;
  color: ${colors.accentColor.ac1};
`;
