import PropTypes from "prop-types";
import { useState } from "react";
import styled from "styled-components";
import { font } from "../../settings/font";
import { radius } from "../../settings/radius";
import { colors } from "../../settings/colors";
import { spacing } from "../../settings/spacing";
import { Button } from "../Elements/Button";
import { InputField } from "../Form";
import { Tabs } from "../Elements/Tabs";

function FormLayout({ image }) {
  const [cardOnClick, setCardOnClick] = useState(true);
  const cardClickHandler = () => {
    setCardOnClick((prevCardOnClick) => !prevCardOnClick);
  };
  return (
    <Container onClick={cardClickHandler} cardOnClick={cardOnClick}>
      <FormTexLabel>Form</FormTexLabel>
      <ContentWrapper>
        <ContentImageWrapper>
          <Image src={image} />
          <Section>
            <TextName>Upload Image</TextName>
            <Wrapper>
              <Button
                indexButton={0}
                position="trailing"
                iconHeight={14}
                iconWidth={14}
                iconName="clip"
                text="Upload"
                type="solid"
                colorMode="dark"
                buttonWidth="compact"
              />
              <Button
                indexButton={0}
                position="trailing"
                iconHeight={14}
                iconWidth={14}
                iconName="trash"
                text="Remove"
                type="solid"
                colorMode="dark"
                buttonWidth="compact"
              />
            </Wrapper>
          </Section>
        </ContentImageWrapper>
        <ContentName>
          <InputField label="Item Name" placeholder="Enter item name" />
          <Wrapper>
            <InputField
              label="Category Name"
              placeholder="Enter category name"
            />
            <InputField label="Cost" placeholder="Enter the cost" />
          </Wrapper>
        </ContentName>
        <ContentName>
          <Wrapper>
            <InputField label="Price" placeholder="Enter the price" />
            <InputField label="Amount in Stock" placeholder="Amount in stock" />
          </Wrapper>
        </ContentName>
        <ContentTabs>
          <Tabs tabIndex={0} />
        </ContentTabs>
        <ContentButtons>
          <Button
            indexButton={0}
            position="trailing"
            iconHeight={14}
            iconWidth={14}
            iconName="trash"
            text="Delete"
            type="solid"
            colorMode="dark"
            buttonWidth="compact"
          />
          <Button
            indexButton={0}
            position="trailing"
            iconHeight={14}
            iconWidth={14}
            iconName="save"
            text="Save"
            type="solid"
            colorMode="light"
            buttonWidth="compact"
          />
        </ContentButtons>
      </ContentWrapper>
    </Container>
  );
}

export default FormLayout;

FormLayout.propTypes = {
  // Solves the error of prop type of validating
  image: PropTypes.string.isRequired,
};
const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.medium.m}px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
  gap: ${spacing.medium.m}px;
  width: 100%;
`;

const ContentImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${spacing.xxlarge.xx}px;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 96%;
  @media screen and (max-width: 980px) {
    width: 100% !important;
    justify-content: center;
    width: 96% !important;
    margin: 0 auto;
  }
  @media screen and (max-width: 400px) {
    display: grid;
    justify-content: center;
    width: min-content;
  }
`;
const ContentName = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xlarge.x}px;
`;
const ContentTabs = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContentButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 28px;
  gap: ${spacing.xlarge.x}px;
  background-color: ${colors.secondaryColor.sc5};
  border: 1px solid ${colors.primaryColor.pc4};
  border-radius: ${radius.medium}px;

  @media screen and (max-width: 400px) {
    width: min-content;
  }
`;
const Image = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: ${radius.large}px;
`;

const TextName = styled.p`
  font-family: ${font.family};
  font-size: ${font.size.base}px;
  font-weight: 400;
  color: ${colors.primaryColor.pc3};
  line-height: 1.2 !important;
`;

const FormTexLabel = styled.h6`
  font-family: ${font.family};
  font-size: ${font.size.heading3}px;
  font-weight: 600;
  line-height: 1.8;
  margin-bottom: 16px;
`;
