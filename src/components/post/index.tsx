import { useContext, useEffect, useState } from "react"
import { Container } from "./style"

import { Link } from "react-router-dom";
import { MyContext } from "../../context/provider";

interface TypeProps{
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

interface TypeCommit{
    avatar?: string;
    id: number;
    mensage: string;
    name: string;
}

export const Post = ({props}: {props : TypeProps}) => {
    const [commit, setCommit] = useState<boolean>(true)
    const [value, setValue] = useState<string>("")

    const [commits, setCommits] = useState<TypeCommit[]>([])

    const { artigos } = useContext(MyContext)

    const toggle = () => {
        setCommit(prevCommit => !prevCommit)
    }

    const handleCommits = (event: { preventDefault: () => void }) => {
        event.preventDefault()
        if(value){
            if(props.commits){
                props.commits.push(
                    {
                        id: props.commits.length + 1,
                        name: "adm",
                        mensage: value,
                        avatar:"https://img.freepik.com/vetores-gratis/astronauta-bonito-trabalhando-com-o-laptop-no-espaco-ilustracao-vetorial-icone-dos-desenhos-animados-ciencia-tecnologia_138676-8023.jpg?size=626&ext=jpg"
                    }
                )
                setValue("")
                localStorage.setItem("articles", JSON.stringify(artigos))
            }
        }
    }
    
    const deleteCommit = (id: number) => {
        if(props.commits){
            const filterNewCommit = props.commits.filter((item) => item.id !== id)
            props.commits = [...filterNewCommit]
            setCommits(props.commits)
            localStorage.setItem("articles", JSON.stringify(artigos))
        }
    }


    useEffect(() => {
        if(props.commits){
            setCommits(props.commits)
        }
    },[artigos, props.commits])
    
    return(
        <Container>
            <div className="wrapper-img">
                <img src={props.avatar} alt="avatar" />
            </div>
            <div className="context">
                <div className="wrapper">
                    <Link to={`/blog-react-ts/artigo/${props.id}`}>{props.title}</Link>
                    <p title={props.content}>{props.content}</p>
                    <div className="plus">
                        <span>{props.date}</span> 
                        <button onClick={toggle}>comentários</button>
                    </div>
                </div>
                <ul className={`comentarios ${commit === true && "close"}`}>
                    <form onSubmit={handleCommits}>
                        <input value={value} onChange={({target}) => setValue(target.value)} type="text" placeholder="fazer um comentario" title="fazer um comentario"/>
                    </form>
                    {
                        commits && commits.map((commited, index : number) => {
                            return(
                                <ul key={index}>
                                    <li>
                                        <div className="perfil">
                                            <img src={commited.avatar}/>
                                            <strong>{commited.name}: </strong> 
                                        </div>
                                        <div className="wrapper">
                                            <p>{commited.mensage}</p>
                                            <button onClick={() => deleteCommit(commited.id)}>X</button>
                                        </div>
                                    </li>
                                </ul>
                            )
                        })
                    }
                </ul>
            </div>
        </Container>
    )
}