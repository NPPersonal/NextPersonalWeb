import React from "react";
import LinearProgressColor from "./LinearProgressColor";

export default {
  title: "Linear Progress Bar",
};

export const Default = () => {
  return <LinearProgressColor />;
};

export const BorderRadius = () => {
  return <LinearProgressColor barRadius="50%" />;
};

export const Color = () => {
  return <LinearProgressColor barColor="lightblue" progressColor="blue" />;
};

export const Determinate = () => {
  return (
    <LinearProgressColor
      variant="determinate"
      barColor="blue"
      progressColor="lightblue"
      value={44}
    />
  );
};

export const Indeterminate = () => {
  return (
    <LinearProgressColor
      variant="indeterminate"
      barColor="blue"
      progressColor="lightblue"
    />
  );
};

export const Buffer = () => {
  return (
    <LinearProgressColor
      variant="buffer"
      barColor="blue"
      progressColor="lightblue"
      value={50}
      valueBuffer={80}
    />
  );
};

export const Width = () => {
  return (
    <LinearProgressColor
      barColor="blue"
      progressColor="lightblue"
      barWidth={150}
    />
  );
};

export const Height = () => {
  return (
    <LinearProgressColor
      barColor="blue"
      progressColor="lightblue"
      barHeight={20}
    />
  );
};
