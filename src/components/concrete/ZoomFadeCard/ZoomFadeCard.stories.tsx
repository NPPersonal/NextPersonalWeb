import React from "react";
import ZoomFadeCard from "./ZoomFadeCard";

export default {
  title: "Zoom Fade Card",
};

export const Default = () => {
  return (
    <ZoomFadeCard
      thumbnailSrc="https://i.imgur.com/SZ7Uk7L.png"
      width={320}
      maskTitle="Project Title"
      maskCategory="Project Category"
    />
  );
};

export const ZoomOnly = () => {
  return (
    <ZoomFadeCard
      thumbnailSrc="https://i.imgur.com/SZ7Uk7L.png"
      width={320}
      zoomOnly
      maskTitle="Project Title"
      maskCategory="Project Category"
    />
  );
};
