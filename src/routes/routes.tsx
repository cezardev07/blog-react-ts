import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/index";
import { Header } from "../components/header";
import { CreatedPost } from "../pages/new-post";
import { Article } from "../pages/article";
import { PageDefault } from "../pages/404";
import { Admin } from "../pages/admin";

export const Rotas = () => {
    return(
        <BrowserRouter>
            <Header/> 
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/new-post" element={<CreatedPost/>}/>
                    <Route path="/admin" element={<Admin/>}/>
                    <Route path="/artigo/:id" element={<Article/>}/>
                    <Route path="*" element={<PageDefault/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    )
}