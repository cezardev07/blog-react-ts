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
                    <Route path="/blog-react-ts/" element={<Home/>}/>
                    <Route path="/blog-react-ts/new-post" element={<CreatedPost/>}/>
                    <Route path="/blog-react-ts/admin" element={<Admin/>}/>
                    <Route path="/blog-react-ts/artigo/:id" element={<Article/>}/>
                    <Route path="*" element={<PageDefault/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    )
}