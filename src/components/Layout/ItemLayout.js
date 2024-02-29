import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";
import { spacing } from "../../settings/spacing";
import { Card } from "../Elements/Card";
import { font } from "../../settings/font";

const DRAG_BUFFER = 1;
const cardsArray = Array(20)
  .fill()
  .map((_, index) => ({
    key: `${index + 1}`,
    text: `Button ${index + 1}`,
  }));

function ItemLayout({ logo }) {
  const [dragOption, setDragOption] = useState("none" || false);
  const [withWidthValue, setWidthValue] = useState("100vw");
  const [cardIndex, setCardIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && cardIndex < cardsArray.length - 2) {
      setCardIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && cardIndex > 0) {
      setCardIndex((pv) => pv - 1);
    }
  };

  useEffect(() => {
    const { userAgent } = navigator;
    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent,
      ),
    );
  }, []);

  useEffect(() => {
    const updateBreakPoint = () => {
      const width = window.innerWidth;

      let dragFlag;
      let widthValue;
      if (width >= 980) {
        dragFlag = false;
        widthValue = "100%";
      } else {
        dragFlag = "x";
        widthValue = "100vw";
        setCardIndex(0);
      }
      setWidthValue(widthValue);
      setDragOption(dragFlag);
    };

    const resetCardIndexOnFullscreenChange = () => {
      if (!document.fullscreenElement) {
        // Full-screen mode is exited, reset cardIndex
        setCardIndex(0);
      }
    };

    document.addEventListener(
      "fullscreenchange",
      resetCardIndexOnFullscreenChange,
    );

    // Add event listener to update button count on window resize
    window.addEventListener("resize", updateBreakPoint);
    updateBreakPoint(); // Call initially

    return () => {
      window.removeEventListener("resize", updateBreakPoint);
      document.removeEventListener(
        "fullscreenchange",
        resetCardIndexOnFullscreenChange,
      );
    };
  }, []);

  return (
    <Container>
      <ItemTexLabel>Item</ItemTexLabel>
      {isMobile ? (
        <ItemWrapperMobile>
          {cardsArray.map((button) => (
            <Card
              key={button.key}
              amountStock={12000}
              buttonLabel="Edit"
              image={logo}
              name="Ultimate Burger"
              cost="Php 120.00"
              price="Php 3,000,000.00"
            />
          ))}
        </ItemWrapperMobile>
      ) : (
        <OverflowContainer>
          <motion.div
            drag={dragOption}
            dragConstraints={{ right: 0, left: 0, top: 0, bottom: 0 }}
            style={{ x: dragX, width: withWidthValue }}
            animate={{
              translateX: `-${cardIndex * 40}%`,
            }}
            onDragEnd={onDragEnd}
          >
            <ItemWrapperDesktop>
              {cardsArray.map((button) => (
                <Card
                  key={button.key}
                  amountStock={12000}
                  buttonLabel="Edit"
                  image={logo}
                  name="Ultimate Burger"
                  cost="Php 120.00"
                  price="Php 3,000,000.00"
                />
              ))}
            </ItemWrapperDesktop>
          </motion.div>
        </OverflowContainer>
      )}
    </Container>
  );
}

export default ItemLayout;
ItemLayout.propTypes = {
  // Solves the error of prop type of validating
  logo: PropTypes.string.isRequired,
};
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ItemWrapperDesktop = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${spacing.large.l}px;
  overflow-y: scroll;
  height: 72vh;
  justify-content: space-around;
  @media screen and (max-width: 980px) {
    flex-direction: row !important;
    width: 100%;
    height: unset !important;
    overflow-y: unset !important;
    flex-wrap: nowrap;
    > :first-child {
      margin-left: 16px;
    }
    > :last-child {
      margin-right: 16px;
    }
  }
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;
const ItemWrapperMobile = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: ${spacing.large.l}px;
  overflow-x: scroll;
  justify-content: start !important;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  > :first-child {
    margin-left: 16px;
  }
  > :last-child {
    margin-right: 16px;
  }
`;

const OverflowContainer = styled.div`
  position: relative;
  overflow-x: hidden;
  display: grid;
  justify-content: center;
`;

const ItemTexLabel = styled.h6`
  font-family: ${font.family};
  font-size: ${font.size.heading3}px;
  font-weight: 600;
  line-height: 1.8;
  margin-left: 16px;
  margin-bottom: 16px;
`;
