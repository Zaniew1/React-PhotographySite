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
// export type CheckDateButtonType = {
//   class: string | null;
// };
export type SelectedFileToUpload = null | SelectedPictureeToUpload
export type SelectedPictureeToUpload = {
  name: string,
  size: number,
  type: string,
  lastModified: number,
}
export type UploadError = any;
export type UploadProgress = number | null;
export type UploadUrl = string | null;
export type SetFile = (param: any) => void