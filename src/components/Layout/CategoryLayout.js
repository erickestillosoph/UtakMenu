import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";
import { spacing } from "../../settings/spacing";
import { font } from "../../settings/font";
import { Button } from "../Elements/Button";

const DRAG_BUFFER = 1;
const buttonsArray = Array(20)
  .fill()
  .map((_, index) => ({
    key: `${index + 1}`,
    text: `Button ${index + 1}`,
  }));

function CategoryLayout() {
  const [breakpointWindow, setBreakpointWindow] = useState("compact");
  const [withWidthValue, setWidthValue] = useState("100vw");
  const [dragOption, setDragOption] = useState("none" || false);
  const [buttonIndex, setButtonIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && buttonIndex < buttonsArray.length - 2) {
      setButtonIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && buttonIndex > 0) {
      setButtonIndex((pv) => pv - 1);
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
      let value;
      let dragFlag;
      let widthValue;
      if (width >= 980) {
        value = "wide";
        widthValue = "88%";
        dragFlag = false;
      } else {
        value = "compact";
        dragFlag = "x";
        widthValue = "100vw";
        setButtonIndex(0);
      }
      setWidthValue(widthValue);
      setBreakpointWindow(value);
      setDragOption(dragFlag);
    };

    const resetButtonIndexOnFullscreenChange = () => {
      if (!document.fullscreenElement) {
        // Full-screen mode is exited, reset buttonIndex
        setButtonIndex(0);
      }
    };

    document.addEventListener(
      "fullscreenchange",
      resetButtonIndexOnFullscreenChange,
    );

    // Add event listener to update button count on window resize
    window.addEventListener("resize", updateBreakPoint);
    updateBreakPoint(); // Call initially

    return () => {
      window.removeEventListener("resize", updateBreakPoint);
      document.removeEventListener(
        "fullscreenchange",
        resetButtonIndexOnFullscreenChange,
      );
    };
  }, []);

  return (
    <Container>
      <CategoryTexLabel>Categories</CategoryTexLabel>
      {isMobile ? (
        <CategoryWrapperMobile>
          {buttonsArray.map((button) => (
            <Button
              indexButton={0}
              key={button.key}
              position="none"
              iconHeight={14}
              iconWidth={14}
              iconName="clip"
              text={button.text}
              type="hollow"
              colorMode="dark"
              buttonWidth={breakpointWindow}
            />
          ))}
        </CategoryWrapperMobile>
      ) : (
        <OverflowContainer>
          <motion.div
            drag={dragOption}
            dragConstraints={{ right: 0, left: 0, top: 0, bottom: 0 }}
            style={{ x: dragX, width: withWidthValue }}
            animate={{
              translateX: `-${buttonIndex * 10}%`,
            }}
            className="motion_div"
            onDragEnd={onDragEnd}
          >
            <CategoryWrapperDesktop>
              {buttonsArray.map((button) => (
                <Button
                  indexButton={0}
                  key={button.key}
                  position="none"
                  iconHeight={14}
                  iconWidth={14}
                  iconName="clip"
                  text={button.text}
                  type="hollow"
                  colorMode="dark"
                  buttonWidth={breakpointWindow}
                />
              ))}
            </CategoryWrapperDesktop>
          </motion.div>
        </OverflowContainer>
      )}
    </Container>
  );
}

export default CategoryLayout;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const CategoryWrapperDesktop = styled.div`
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${spacing.large.l}px;
  overflow-y: scroll;
  height: 72vh;

  @media screen and (max-width: 980px) {
    flex-direction: row !important;
    width: 100%;
    height: unset !important;
    overflow-y: unset !important;
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
const CategoryWrapperMobile = styled.div`
  width: 100vw;
  overflow-x: scroll;
  // margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: ${spacing.large.l}px;

  justify-content: start !important;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  > :first-child {
    padding-left: 16px;
  }
  > :last-child {
    padding-right: 16px;
  }
`;

const CategoryTexLabel = styled.h6`
  font-family: ${font.family};
  font-size: ${font.size.heading3}px;
  font-weight: 600;
  line-height: 1.8;
  margin-left: 16px;
  margin-bottom: 16px;
`;

const OverflowContainer = styled.div`
  position: relative;
  overflow-x: hidden;
  display: flex;

  justify-content: center;
`;
