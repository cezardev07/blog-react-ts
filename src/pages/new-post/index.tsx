import { 
    useContext, 
    useEffect, 
    useState
} from "react"

import { Container } from "./style"
import { MyContext } from "../../context/provider"

export const CreatedPost = () => {
    const [valueAvatar, setValueAvatar] = useState<string>("")
    const [valueTitle, setValueTitle] = useState<string>("")
    const [valueContent, setValueContent] = useState<string>("")

    const { artigos, setArtigos } = useContext(MyContext)

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault()
        setArtigos((prev) => [
            ...prev,{
                id: artigos.length + 10,
                avatar: valueAvatar !== "" ? valueAvatar : "https://img.freepik.com/vetores-gratis/zebra-bonito-trabalhando-na-ilustracao-do-icone-dos-desenhos-animados-do-laptop_138676-2795.jpg?size=626&ext=jpg",
                title: valueTitle,
                content: valueContent,
                date: `${new Date().getDate()} / ${new Date().getMonth() + 1} / ${new Date().getFullYear()}`,
                commits: []
            } 
        ])
        setValueAvatar("")
        setValueTitle("")
        setValueContent("")

    }

    useEffect(() => {
        /*
            como não estou utilizando nenhum banco de dados é nem uma api simulando um banco em memoria,
            estou fazendo isso para evitar um possivel bug de reload para o usuario,
            por questões logicas não e recomendado,
            mas só estou fazendo isso porque estou usando localStorage,

            sobre o bug para entender melhor,
            quando o usuario faz um reload (refresh) na pagina 
            os dados que estão salvo no localStorage são deletados é
            acaba resetando o context para o padrão inicial,

            isso seria muito facil de resolve usando um banco de dados,
            ou consultando uma api simulando um banco em memoria.
        */
        if(artigos.length > 1){
            localStorage.setItem("articles", JSON.stringify(artigos))
        }
    },[artigos])
    
    return(
        <Container>
            <div className="wrapper-content">
                <form onSubmit={handleSubmit}>
                    <div className="wrapper-input">
                        <label htmlFor="avatar">Avatar<span>(</span>opcional<span>)</span> :</label>
                        <input value={valueAvatar} onChange={({target}) => setValueAvatar(target.value)} id="avatar" type="text" placeholder="coloque aqui a url do seu avartar"/>
                    </div>
                    <div className="wrapper-input">
                        <label htmlFor="title">Titulo<span>*</span> :</label>
                        <input required value={valueTitle} onChange={({target}) => setValueTitle(target.value)} id="title" type="text" placeholder="digite aqui o seu titulo"/>
                    </div>
                    <div className="wrapper-input">
                        <label htmlFor="content">Conteúdo<span>*</span> :</label>
                        <textarea required value={valueContent} onChange={({target}) => setValueContent(target.value)} name="content" id="content" placeholder="digite aqui o seu conteudo"></textarea>
                    </div>
                    <button type="submit">publicar novo artigo</button>
                </form>
            </div>
        </Container>
    )

}