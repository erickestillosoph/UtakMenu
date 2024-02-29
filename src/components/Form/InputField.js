import PropTypes from "prop-types";
import styled from "styled-components";
import { font } from "../../settings/font";
import { colors } from "../../settings/colors";
import { radius } from "../../settings/radius";
import { spacing } from "../../settings/spacing";

function InputField({ label, placeholder }) {
  return (
    <Container>
      <TextLabel>{label}</TextLabel>
      <InputTextField placeholder={placeholder} />
    </Container>
  );
}
InputField.propTypes = {
  // Solves the error of prop type of validating
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
export default InputField;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.medium.m}px;
  width: 100%;
`;

const TextLabel = styled.p`
  font-family: ${font.family};
  font-size: ${font.size.base}px;
  font-weight: 400;
  color: ${colors.primaryColor.pc2};
`;

const InputTextField = styled.input`
  background-color: ${colors.primaryColor.pc5};
  border-style: none;
  border-width: 1px;
  min-width: 60px !important;
  padding: ${spacing.medium.m}px ${spacing.large.l}px;
  border-radius: ${radius.small}px;
  border: 1px solid #fff;
  ::placeholder {
    color: ${colors.primaryColor.pc3};
    text-overflow: ellipsis;
  }
  &:focus {
    outline: none;
    border: 1px solid ${colors.accentColor.ac1};
  }
`;
