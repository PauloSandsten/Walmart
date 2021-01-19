import { FunctionComponent, SVGProps } from "react";

export type IconLink = {
  name: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  linkTo: string;
};
