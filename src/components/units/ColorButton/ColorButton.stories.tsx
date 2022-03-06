import React from "react";
import ColorButton from "./ColorButton";

export default {
  title: "ColorButton",
};

export const Default = () => {
  return <ColorButton>Download CV</ColorButton>;
};

export const NoRipple = () => {
  return <ColorButton>Download CV</ColorButton>;
};

export const NoShadow = () => {
  return <ColorButton shadow={false}>Download CV</ColorButton>;
};

export const Color = () => {
  return (
    <ColorButton bgColor="lightblue" hoverColor="cyan">
      Download CV
    </ColorButton>
  );
};

export const TitleColor = () => {
  return (
    <ColorButton
      disableRipple
      bgColor="lightblue"
      hoverColor="cyan"
      titleColor="purple"
    >
      Download CV
    </ColorButton>
  );
};
