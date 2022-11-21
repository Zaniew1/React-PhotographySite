export type BooleanElement = { drops: boolean };
export type NavigationLinkType = {
  text: string;
  classLi: string;
  classLink: string;
  classLinkActive: string;
  path: string;
};
export type dropDownNav = boolean;
export type UiContextType = {
  drop: dropDownNav;
  desktopResolution: boolean;
  dropDownNav: (dropNav: dropDownNav) => void;
};
