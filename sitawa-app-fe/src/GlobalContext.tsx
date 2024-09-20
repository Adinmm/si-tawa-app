import React, { createContext, useState, ReactNode, Dispatch, SetStateAction, useContext } from 'react';
import { repliesType } from './data/data';
import { pengaduan } from './components/TabelPengaduan';


interface State {
  actionHapusPengaduan:boolean
  actionHapusPerangkat:boolean
  yearChoiceed?:string
  actionLogOut : boolean
  actionAddData:boolean
  getId?:number
  path:string
  loadingProduksi:boolean
  dataReplies : Array<repliesType>
  dataComplaints: Array<pengaduan>

}


interface GlobalContextType {
  state: State;
  setState: Dispatch<SetStateAction<State>>;
}


export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);


interface GlobalProviderProps {
  children: ReactNode;
}
export const globalState = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error
  }
  return context;
};

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [state, setState] = useState<State>({
    actionHapusPengaduan:false,
    actionHapusPerangkat:false,
    yearChoiceed:"2024",
    actionLogOut:false,
    actionAddData:false,
    getId: undefined,
    path:"",
    loadingProduksi:false, 
    dataReplies:[],
    dataComplaints:[]
  });

  

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
  
};
