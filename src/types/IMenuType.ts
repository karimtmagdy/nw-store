import { ElementType } from "react";
export const FirstTab = "management" as const;
export const SecondTab = "support" as const;
export type IMenuItemType = typeof FirstTab | typeof SecondTab;

export type IMenu = {
  name: string;
  to: string;
  icon: ElementType;
};

export enum Tabs {
  Management = "management",
  Support = "support",
}
export type IMenuItemTypeTab  = Tabs.Management | Tabs.Support;
