export type BooleanElementType = { drops: boolean };
export type NavigationLinkType = {
  text: string;
  classLi: string;
  classLink: string;
  classLinkActive: string;
  path: string;
};
export type dropDownNavType = boolean;
export type UiContextType = {
  drop: dropDownNavType;
  desktopResolution: boolean;
  dropDownNav: (dropNav: dropDownNavType) => void;
};
export type UIContextPropsType = {
  children: React.ReactNode
}
export type UploadProgressType = number
export type UploadErrorType = string
export type UploadUrlType = string
export type SnapType = {
  bytesTransferred: number,
  totalBytes: number,
  state: string,

}
export type SelectedFileToUploadType = {
  name: string,
  lastModified: number,
  type: string
} | null

export type SelectedPictureeToUploadType ={

}
export type SetFileType = (param: any) => void