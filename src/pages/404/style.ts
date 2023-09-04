import { styled } from "styled-components";

export const Container = styled.section`

    min-height: calc(100vh - 300px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    
    text-align: center;
    
    a{
        text-decoration: none;
        text-transform: uppercase;
    }
    a:hover{
        text-decoration: underline;
        color: royalblue;
    }
`