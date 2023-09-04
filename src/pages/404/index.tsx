import { Link } from "react-router-dom";

import { Container } from "./style";

export const PageDefault = () => {
    return(
        <Container>
            <h1>404</h1>
            <Link to="/blog-react-ts/">
                pagina não encontrada, clique aqui para voltar para o inicio
            </Link>
        </Container>
    )
}