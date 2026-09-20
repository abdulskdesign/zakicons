import * as React from "react";

export interface ZakIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number | string;
  color?: string;
  className?: string;
}

export type IconComponent = React.ForwardRefExoticComponent<
  ZakIconProps & React.RefAttributes<SVGSVGElement>
>;
