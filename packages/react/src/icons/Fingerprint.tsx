import * as React from "react";
import { ZakIconProps } from "../types";

export const Fingerprint = React.forwardRef<SVGSVGElement, ZakIconProps>(
  ({ size = 24, strokeWidth = 2, color = "currentColor", className = "", children, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
        {...props}
      >
        <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4m-1.09 6A8 8 0 0 1 8 12c0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.5-.5 3.5-1 5m-1-3.9a3 3 0 0 0-1.82-2.6M2 16h.01m19.79 0c.2-1.3.2-2.6.2-4 0-4.4-3.6-8-8-8"/>
        {children}
      </svg>
    );
  }
);

Fingerprint.displayName = "Fingerprint";
