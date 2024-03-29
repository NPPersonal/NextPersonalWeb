// import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import {
  LazyLoadComponent,
  LazyLoadComponentProps,
} from "react-lazy-load-image-component";
// import makeStyles from "@mui/styles/makeStyles";
import React from "react";
import { PersonAvatar } from "./SizeAvatarStyle";

type LazyLoadComponentIgnoredProps = Omit<
  LazyLoadComponentProps,
  "placeholder" | "children"
>;
type SizeAvatarProps = LazyLoadComponentIgnoredProps & {
  caption?: React.ReactNode;
  size?: number | string;
  ringColor?: string;
  ringWidth?: number;
  src?: string;
  placeholderSrc?: string;
};

/**
 * Component SizeAvatar
 *
 * Display avatar with caption underneath
 *
 * Customizable size, ring color and ring width
 *
 * Wrapped LazyLoadComponent
 * https://www.npmjs.com/package/react-lazy-load-image-component
 *
 * @param {SizeAvatarProps} props
 * @returns
 */
const SizeAvatar: React.FC<SizeAvatarProps> = (props: SizeAvatarProps) => {
  const {
    src,
    placeholderSrc,
    caption,
    size = 44,
    ringColor = "lightgrey",
    ringWidth = 1,
    ...rest
  } = props;

  // const classes = makeStyles(style)({
  //   size,
  //   ringColor,
  //   ringWidth,
  // });

  // const avatarClasses = {
  //   root: classes.root,
  // };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <LazyLoadComponent
        placeholder={
          <PersonAvatar
            size={size}
            ringColor={ringColor}
            ringWidth={ringWidth}
            src={placeholderSrc}
          />
        }
        {...rest}
      >
        <PersonAvatar
          size={size}
          ringColor={ringColor}
          ringWidth={ringWidth}
          src={src}
        />
      </LazyLoadComponent>
      {caption}
    </Box>
  );
};

export default SizeAvatar;
