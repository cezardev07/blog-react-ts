import { Rotas } from "./routes/routes";

import { Provider } from "./context/provider";

export const App = () => {
    
    return(
        <Provider>             
            <Rotas/>
        </Provider>
    )
}