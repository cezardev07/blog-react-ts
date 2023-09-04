import { useContext } from "react";
import { MyContext } from "../../context/provider"
import { Container } from "./style"
import { Link } from "react-router-dom";

export const Admin = () => {

    const { artigos, setArtigos } = useContext(MyContext)

    const handleDeletePost = (id: number) => {
        const newArray = artigos.filter(atc => {
            return atc.id !== id
        })

        setArtigos(newArray)
        localStorage.setItem("articles", JSON.stringify(newArray))
    }

    return(
        <Container>
            <div className="wrapper">

                {
                    artigos.length > 0 ? (
                        artigos.map((post, i:number) => {
                            return(
                                <div key={i} className="artigo">
                                    <div className="avatar">
                                        <img src={post.avatar} alt="" title="avatar"/>
                                    </div>
                                    <div className="title" title={post.content}>
                                        <Link to={`/artigo/${post.id}`}>{post.title}</Link>
                                    </div>
                                    <div className="buttons">
                                        <button onClick={() => handleDeletePost(post.id)} >apagar</button>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <h1>sem post para deletar</h1>
                    )
                }
            </div>
        </Container>
    )
}