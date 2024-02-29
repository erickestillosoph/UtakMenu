import PropTypes from "prop-types";
import styled from "styled-components";
import { font } from "../../../settings/font";
import { colors } from "../../../settings/colors";
import { radius } from "../../../settings/radius";
import IconComponent from "../Icon/Icon";

function Button({
  position,
  indexButton,
  text,
  type,
  colorMode,
  iconName,
  iconHeight,
  iconWidth,
  buttonWidth,
}) {
  const handleClick = () => {};

  const iconPosition = (pos) => {
    switch (true) {
      case pos === "leading":
        return { isPositionLeading: false, isPositionTrailing: true };
      case pos === "trailing":
        return { isPositionLeading: true, isPositionTrailing: false };
      default:
        return { isPositionLeading: true, isPositionTrailing: true };
    }
  };
  return (
    <Container>
      <ButtonEl
        typebuttons={type}
        colormodebutton={colorMode}
        onClick={handleClick}
        buttonwidth={buttonWidth}
        indexButton={indexButton}
      >
        <div hidden={iconPosition(position).isPositionLeading}>
          <IconComponent
            iconName={iconName}
            height={iconHeight}
            width={iconWidth}
          />
        </div>
        <Text>{text}</Text>
        <div hidden={iconPosition(position).isPositionTrailing}>
          <IconComponent
            iconName={iconName}
            height={iconHeight}
            width={iconWidth}
          />
        </div>
      </ButtonEl>
    </Container>
  );
}

export default Button;

Button.propTypes = {
  // Solves the error of prop type of validating
  position: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  colorMode: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  buttonWidth: PropTypes.string.isRequired,
  iconHeight: PropTypes.number.isRequired,
  iconWidth: PropTypes.number.isRequired,
  indexButton: PropTypes.number.isRequired,
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  font-family: ${font.family};
  font-size: ${font.size.base}px;
  font-weight: 400;
  white-space: nowrap;
`;

const ButtonEl = styled.button`
  display: flex;
  height: fit-content;
  justify-content: center;
  gap: 6px;
  border-width: 1px;
  border-style: solid;
  padding: 8px 16px;
  transition: 0.2s ease-in-out;
  border-radius: ${radius.small}px;

  width: ${({ buttonwidth }) => {
    if (buttonwidth === "wide") {
      return "100%";
    }
    return "fit-content";
  }};

  color: ${({ typebuttons, colormodebutton }) => {
    if (typebuttons === "hollow" && colormodebutton === "light") {
      return `${colors.accentColor.ac1}`;
    }
    if (typebuttons === "hollow" && colormodebutton === "dark") {
      return `${colors.primaryColor.pc3}`;
    }
    if (typebuttons === "solid" && colormodebutton === "light") {
      return `${colors.secondaryColor.sc4}`;
    }
    if (typebuttons === "solid" && colormodebutton === "dark") {
      return `${colors.secondaryColor.sc4}`;
    }
    return `${colors.accentColor.ac1}`;
  }};

  background-color: ${({ typebuttons, colormodebutton }) => {
    if (typebuttons === "hollow" && colormodebutton === "light") {
      return `${colors.secondaryColor.sc5}`;
    }
    if (typebuttons === "hollow" && colormodebutton === "dark") {
      return `${colors.secondaryColor.sc5}`;
    }
    if (typebuttons === "solid" && colormodebutton === "light") {
      return `${colors.accentColor.ac1}`;
    }
    if (typebuttons === "solid" && colormodebutton === "dark") {
      return `${colors.primaryColor.pc1}`;
    }
    return `${colors.accentColor.ac1}`;
  }};

  border-color: ${({ typebuttons, colormodebutton }) => {
    if (typebuttons === "hollow" && colormodebutton === "light") {
      return `${colors.accentColor.ac1}`;
    }
    if (typebuttons === "hollow" && colormodebutton === "dark") {
      return `${colors.primaryColor.pc4}`;
    }
    if (typebuttons === "solid" && colormodebutton === "light") {
      return `${colors.accentColor.ac1}`;
    }
    if (typebuttons === "solid" && colormodebutton === "dark") {
      return `${colors.primaryColor.pc4}`;
    }
    return `${colors.accentColor.ac1}`;
  }};

  &:hover {
    background-color: ${({ typebuttons, colormodebutton }) => {
      if (typebuttons === "hollow" && colormodebutton === "light") {
        return `${colors.accentColor.ac1}`;
      }
      if (typebuttons === "hollow" && colormodebutton === "dark") {
        return `${colors.primaryColor.pc1}`;
      }
      if (typebuttons === "solid" && colormodebutton === "light") {
        return `${colors.accentColor.ac3}`;
      }
      if (typebuttons === "solid" && colormodebutton === "dark") {
        return `${colors.primaryColor.pc2}`;
      }
      return `${colors.boxShadows.bs1}`;
    }};
    color: ${({ typebuttons, colormodebutton }) => {
      if (typebuttons === "hollow" && colormodebutton === "light") {
        return `${colors.secondaryColor.sc4}`;
      }
      if (typebuttons === "hollow" && colormodebutton === "dark") {
        return `${colors.secondaryColor.sc4}`;
      }
      if (typebuttons === "solid" && colormodebutton === "light") {
        return `${colors.secondaryColor.sc4}`;
      }
      if (typebuttons === "solid" && colormodebutton === "dark") {
        return `${colors.secondaryColor.sc4}`;
      }
      return `${colors.secondaryColor.sc4}`;
    }};
  }
`;
