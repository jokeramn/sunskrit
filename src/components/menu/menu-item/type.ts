import { FunctionComponent, SVGProps } from "react";

export type MenuItemProps = {
  countHuman: number | string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  countHookah: number | string;
  image: string;
  value: number | string;
};
