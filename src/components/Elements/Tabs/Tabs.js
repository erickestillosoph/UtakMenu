import PropTypes from "prop-types";
import styled from "styled-components";
import { font } from "../../../settings/font";
import { colors } from "../../../settings/colors";
import { Button } from "../Button";
import { spacing } from "../../../settings/spacing";

const buttonsArray = Array(3)
  .fill()
  .map((_, index) => ({
    key: `${index + 1}`,
    text: `Option ${index + 1}`,
  }));

function Tabs({ tabIndex }) {
  return (
    <Container>
      <Text>Options</Text>
      <Wrapper>
        {buttonsArray.map((button) => (
          <Button
            key={button.key}
            indexButton={tabIndex}
            position="none"
            iconHeight={14}
            iconWidth={14}
            iconName="none"
            text={button.text}
            type="hollow"
            colorMode="dark"
            buttonWidth="compact"
          />
        ))}
      </Wrapper>
    </Container>
  );
}

export default Tabs;

Tabs.propTypes = {
  // Solves the error of prop type of validating
  tabIndex: PropTypes.number.isRequired,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.small.s}px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${spacing.small.s}px;
`;

const Text = styled.p`
  font-family: ${font.family};
  font-size: ${font.size.base}px;
  font-weight: 400;
  color: ${colors.primaryColor.pc2};
`;
