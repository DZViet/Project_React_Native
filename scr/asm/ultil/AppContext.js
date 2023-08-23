import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) =>{
    const {children} = props;
    //data sử dụng chung
    const [isLogin, setisLogin] = useState(false);
    const [infoUser, setinfoUser] = useState({});
    const [updatenew, setupdatenew] = useState({});

    return(
        <AppContext.Provider value={{isLogin, setisLogin, infoUser, setinfoUser,updatenew,setupdatenew}}>
            {children}
        </AppContext.Provider>
    )
}