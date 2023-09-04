import React, { 
    createContext, 
    useState,
    useEffect, 
    SetStateAction,
    Dispatch
} from "react";

import { FakeDataBase } from "../database/FakeDataBase";

interface TypePost{
    avatar: string;
    content: string;
    commits?: {
        avatar?: string;
        id: number;
        mensage: string;
        name: string;
    }[];
    date: string;
    id: number;
    title: string;
}

interface TypeContext{
    artigos: TypePost[]; 
    setArtigos: Dispatch<SetStateAction<TypePost[]>>;
}

export const MyContext = createContext<TypeContext>({} as TypeContext)

export const Provider = ({children} : { children : React.ReactNode }) => {
    const [artigos, setArtigos] = useState<TypePost[]>([...FakeDataBase])
    
    useEffect(() => {
        const storage = localStorage.getItem("articles")
        if(storage){
            setArtigos(JSON.parse(storage))
        }
    },[])

    return(
        <MyContext.Provider value={{
            artigos, setArtigos
        }}>
            {children}
        </MyContext.Provider>
    )
}