import React, { useEffect } from "react";
import { useState } from "react";
type dropDownNav = boolean;
type UiContextType = {
  drop: boolean;
  dropDownNav: (dropNav: dropDownNav) => void;
};

export const UIContext = React.createContext<UiContextType>({
  drop: false,
  dropDownNav: (dropNav: boolean) => {},
});

export const WeatherContextProvider = (props: any) => {
  const [dropDownNav, setDropDownNav] = useState<boolean>(true);
  useEffect(() => {
    if (dropDownNav) setDropDownNav(!dropDownNav);
    else setDropDownNav(dropDownNav);
  }, [dropDownNav]);
  console.log(dropDownNav);

  return (
    <UIContext.Provider
      value={{
        drop: dropDownNav,
        dropDownNav: setDropDownNav,
      }}
    >
      {props.children}
    </UIContext.Provider>
  );
};
