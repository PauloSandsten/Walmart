import { FunctionComponent, SVGProps } from "react";

export type NavLink = {
  display: string;
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
  linkTo: string;
};
