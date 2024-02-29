import PropTypes from "prop-types";
import { useState } from "react";
import styled from "styled-components";
import { font } from "../../../settings/font";
import { radius } from "../../../settings/radius";
import { colors } from "../../../settings/colors";
import { Button } from "../Button";

function Card({ image, name, amountStock, price, cost, buttonLabel }) {
  const [cardOnClick, setCardOnClick] = useState(true);
  const cardClickHandler = () => {
    setCardOnClick((prevCardOnClick) => !prevCardOnClick);
  };
  return (
    <Container onClick={cardClickHandler} cardOnClick={cardOnClick}>
      <Image src={image} />

      <ContentWrapper>
        <ItemName cardOnClick={cardOnClick}>{name}</ItemName>
        <CostStockWrapper>
          <TextName cardOnClick={cardOnClick}>Cost: {cost}</TextName>
          <TextName cardOnClick={cardOnClick}>Stock: {amountStock}</TextName>
        </CostStockWrapper>
        <TextName cardOnClick={cardOnClick}>{price}</TextName>
        <Button
          indexButton={0}
          position="none"
          iconHeight={14}
          iconWidth={14}
          iconName="trash"
          text={buttonLabel}
          type="solid"
          colorMode="light"
          buttonWidth="compact"
        />
      </ContentWrapper>
    </Container>
  );
}

export default Card;

Card.propTypes = {
  // Solves the error of prop type of validating
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  amountStock: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
};

const Container = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  min-width: 220px;
  background-color: ${(props) =>
    props.cardOnClick === false ? `${colors.primaryColor.pc1}` : "#FFFFFF"};
  border-radius: ${radius.medium}px;
  border: 1px solid ${colors.primaryColor.pc4};
  justify-content: center;
  align-items: center;
  cursor: pointer; // Add cursor pointer for indicating it's clickable

  @media screen and (max-width: 768px) {
    flex-direction: row;
    align-items: start !important;
    max-width: none !important;
    min-width: 300px !important;
    padding: 12px !important;
    gap: 24px;
  }
  @media screen and (max-width: 1428px) {
    max-width: 200px !imprtant;
  }

  &:hover {
    background-color: ${(props) =>
      props.cardOnClick ? "#FFFFFF" : `${colors.primaryColor.pc1}`};
    /* Change the color of child text on hover */
    p {
      color: ${(props) =>
        props.cardOnClick === false ? `${colors.secondaryColor.sc5};` : ""};
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0px;
  justify-content: center;
  text-align: center;
  gap: 12px;
`;

const CostStockWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: ${radius.large}px;
`;

const ItemName = styled.p`
  font-family: ${font.family};
  font-size: ${font.size.base}px;
  font-weight: 700;
  color: ${(props) =>
    props.cardOnClick === true ? `${colors.primaryColor.pc2}` : "#FFFFFF"};
  line-height: 1.2 !important;
`;

const TextName = styled.p`
  font-family: ${font.family};
  font-size: ${font.size.base}px;
  font-weight: 400;
  color: ${(props) =>
    props.cardOnClick === true ? `${colors.primaryColor.pc2}` : "#FFFFFF"};
  line-height: 1.2 !important;
`;
