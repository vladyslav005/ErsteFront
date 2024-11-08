import React, {createContext, useState} from 'react';


interface MenuDrawerContextInterface {
  open: boolean;
  setOpen: (open: boolean) => void;
}


export const MenuDrawerContext = createContext<MenuDrawerContextInterface>({
  open: false,
  setOpen: () => {
  },
})

interface MenuDrawerProviderProps {
  children: React.ReactNode;
}

export const MenuState = (props: MenuDrawerProviderProps) => {
  const [open, setOpen] = useState(false);

  const contextValue: MenuDrawerContextInterface = {
    open,
    setOpen
  };

  return (
      <MenuDrawerContext.Provider value={contextValue}>
        {props.children}
      </MenuDrawerContext.Provider>
  );

}
