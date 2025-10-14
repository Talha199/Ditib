/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon3Icon(props: Icon3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {})
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.29 18.254c7.547 0 11.675-6.253 11.675-11.675 0-.178-.004-.354-.012-.53A8.339 8.339 0 0020 3.924a8.165 8.165 0 01-2.356.646 4.12 4.12 0 001.804-2.27 8.198 8.198 0 01-2.606.996A4.104 4.104 0 009.85 7.039a11.652 11.652 0 01-8.458-4.287 4.101 4.101 0 001.27 5.477 4.058 4.058 0 01-1.858-.513l-.001.052a4.104 4.104 0 003.292 4.023 4.107 4.107 0 01-1.853.07 4.107 4.107 0 003.833 2.85 8.233 8.233 0 01-5.096 1.757A8.33 8.33 0 010 16.411a11.614 11.614 0 006.29 1.843"
        }
      ></path>
    </svg>
  );
}

export default Icon3Icon;
/* prettier-ignore-end */
