import { useContext, useEffect, useState} from "react"
import { Post } from "../../components/post"
import { Container } from "./style"
import { MyContext } from "../../context/provider"
import { Link, useParams } from "react-router-dom"

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


export const Article = () => {
    const [ post, setPost] = useState<TypePost>()
    const { artigos } = useContext(MyContext)

    const { id } = useParams()

    useEffect(() => {
        if(artigos){
            if(id){
                const articleSelection = artigos.find((atc) => atc.id == parseInt(id))
                setPost(articleSelection)
            }
        }
    },[artigos, id])

    return(
        <Container>
            <h1>{post && post.title}</h1>
            {
                post ? (
                    <Post key={10} props={post}/>
                ) : (
                    <div className="default">
                        <h1>404</h1>
                        <Link to="/blog-react-ts/">
                            Post não encontrado, clique aqui para voltar para o inicio
                        </Link>
                    </div>
                )
            }
        </Container>
    )
}