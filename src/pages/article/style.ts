import { styled } from "styled-components";

export const Container = styled.section`
    max-width: 1170px;
    margin: 0 auto;
    padding: 30px;


    .default{
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
    }
`