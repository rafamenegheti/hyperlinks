import { createContext, useContext, ReactNode, useEffect, useState } from "react";



interface ModalContextProvider {
    children: ReactNode;
}
  

const ModalContext = createContext({} as ContextProviderValues);


interface ContextProviderValues {
    handleModal: () => void;
    isModalOpen: boolean;
}

export function ModalContextProvider({
    children,
  }: ModalContextProvider) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModal = () => {
        setIsModalOpen(prev => !prev)
    }

    const values: ContextProviderValues = {
        handleModal,
        isModalOpen
    }

    
    return (
      <ModalContext.Provider value={values}>
        {children}
      </ModalContext.Provider>
    );
  }
  
  
  export const useModalOpen = () => useContext(ModalContext)