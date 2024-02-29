import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../../settings/colors";

function Head({ logo }) {
  return (
    <Container>
      <Wrapper>
        <Image src={logo} />
      </Wrapper>
    </Container>
  );
}

export default Head;

Head.propTypes = {
  logo: PropTypes.string.isRequired, // Solves the error of prop type of validating
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 72px;
`;
const Wrapper = styled.div`
  margin: 32px 0px;
  border-bottom: 1px solid ${colors.primaryColor.pc4};
  width: 95%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  display: flex;
  width: 90px;
  height: 28px;
`;
