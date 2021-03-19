import Link from "next/link";
import React from "react";

type LinkToProps = React.ComponentProps<typeof React.Component> & {
  text: string;
  linkTo: string;
  shallow?: boolean;
  display?: "inline" | "block" | "initial";
  underline?: boolean;
  color?: string;
};

const LinkTo: React.FC<LinkToProps> = (props: LinkToProps) => {
  const { text, linkTo, shallow = false, display = "inline", underline, color='blue' } = props;
  return (
    <Link href={linkTo} shallow={shallow}>
      <a style={{ display: display, color: color, textDecoration:underline?'underline':'none'}}>{text}</a>
    </Link>
  );
};

export default LinkTo;
