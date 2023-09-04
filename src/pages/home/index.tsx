import { 
    useContext
} from "react"

import { Container } from "./style"
import { Post } from "../../components/post"
import { MyContext } from "../../context/provider"


export const Home = () => {
    const { artigos } = useContext(MyContext)

    return(
        <Container>
            <div className="heading">
                <div className="context">
                    <h1>Artigos sobre Tecnologia para Programadores </h1>
                    <h2>Confira nossos artigos sobre os mais variados temas sobre Tecnologia da Informação. </h2>
                </div>
            </div>
            <article>
                <div className="title">
                    <h2>Últimos lançamentos</h2>
                </div>
                <div className="cards">
                    {
                        artigos.map((artigo, index: number) => {
                            return(
                                <Post key={index} props={artigo}/>
                            )
                        })
                    }
                </div>
            </article>
        </Container>   
    )
}