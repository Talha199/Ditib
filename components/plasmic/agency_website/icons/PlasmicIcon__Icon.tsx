/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconIcon(props: IconIconProps) {
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
          "M.516 19.639h3.896V7.296H.516v12.343zM2.365 5.752h-.028a2.153 2.153 0 01-2.325-2.14 2.376 2.376 0 112.353 2.14zM20 19.64h-4.417v-6.388c0-1.672-.692-2.816-2.211-2.816-.954 0-1.803.608-2.11 1.512-.09.328-.122.67-.09 1.009v6.683H6.791s.056-11.315 0-12.344h4.376v1.937c.259-.846 1.657-2.056 3.888-2.056 2.769 0 4.945 1.776 4.945 5.599v6.864z"
        }
      ></path>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */
