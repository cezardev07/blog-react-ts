import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 75px);
    padding: 40px 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    
    .wrapper-content{
        width: 1000px;
        margin: 0 auto;

        form{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
    
            .wrapper-input{
                display: flex;
                flex-direction: column;
                width: 100%;
                gap: 10px;
                label{
                    span{
                        color: red;
                    }
                }
                input, textarea{
                    padding: 15px;
                    outline: none;
                    border: solid 1px rgba(37, 58, 68, 0.31);
                    border-radius: 3px;
                }
                input:focus, textarea:focus{
                    box-shadow: 0px 0px 10px 0px rgba(37, 58, 68, 0.31);
                }
                textarea{
                    height: 100px;
                }
            }
    
            button{
                padding: 10px 20px;
                background: #00c35f;
                color: #fff;
                border-radius: 3px;
                border: none;
                font-size: 18px;
                text-transform: capitalize;
                cursor: pointer;
            }
            button:hover{
                background: #09dd70;
            }
            button:active{
                scale: .9;
            }
        }
    }
`