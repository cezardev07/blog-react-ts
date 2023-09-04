import { styled } from "styled-components";

export const Container = styled.li`
    display: grid;
    grid-template-columns: 55px auto;
    border-top: solid 1px rgb(238, 238, 238);

    padding: 20px 0;

    .wrapper-img{
        width: 55px;
        height: 55px;
        white-space: nowrap;
        img{
            padding: 2px;
            border-radius: 4px;
            border-radius: 50%;
            width: 100%;
            height: 100%;
            object-fit: cover;
            background: rgb(10, 197, 212);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            color: #fff;
        }
    }
    .context{
        margin-left: 20px;
        .wrapper{
            a{
                display: inline-block;
                color: #666;
                font-size: 16px;
                font-weight: 500;
                text-decoration: none;
            }
            a:hover{
                color: #138882;
                text-decoration: underline;
            }
            p{
                display: block;
                margin: 15px 0;
                color: #7C7B7B;
                font-size: 14px;
                font-weight: 500;
                white-space: pre-line;
            }
            .plus{
                display: flex;
                align-items: center;
                justify-content: space-between;
                span{
                    width: 100%;
                    color: #666;
                    font-size: 12px;
                    font-weight: 300;
                    font-style: italic;
                }
                button{
                    margin-left: 10px;
                    cursor: pointer;
                    padding: 3px 7px;
                    border: solid 1px #7C7B7B;
                    background: #fff;
                    border-radius: 3px;
                }
                button:hover{
                    background: #87fef817;
                }
                button:active{
                    scale: .9;
                }
            }
        }
        ul.comentarios{
            margin-top: 10px;
            input{
                width: 100%;
                padding: 5px;
                outline: none;
            }
            ul{
                margin-top: 10px;
                li{
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    .perfil{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 5px;

                        img{
                            width: 30px;
                            height: 30px;
                            border-radius: 50%;
                        }
                    }
                    .wrapper{
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        button{
                            padding: 3px 10px;
                            font-size: 12px;
                            cursor: pointer;
                            background: #ff2a70;
                            color: #fff;
                            border: none;
                            border-radius: 3px;
                        }
                        button:hover{
                            background: #d30f4f;
                        }
                    }
                }
            }
        }
        .close{
            display: none;
        }
    }
`