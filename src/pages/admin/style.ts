import { styled } from "styled-components";

export const Container = styled.section`
    width: 100%;
    padding: 40px 20px;

    .wrapper{
        max-width: 1200px;
        margin: 0 auto;
        display: grid;

        grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
        gap: 20px;
        
        .artigo{
            min-height: 250px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            padding: 20px;
            flex-direction: column;
            background: #003962d1;
            border-radius: 10px;
            transition: all .3s ease;
            
            .avatar{
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


            .title{
                overflow-y: auto;
                height: 70px;
                text-align: center;
                a{
                    text-decoration: none;
                    color: #fff;
                }
                a:hover{
                    text-decoration: underline;
                }
            }

            .buttons{
                button{
                    padding: 7px 15px;
                    cursor: pointer;
                    font-size: 14px;
                    background: #ff0054;
                    border: none;
                    color: white;
                    border-radius: 5px;
                }
                button:hover{
                    background: #ce114f;
                }
            }
        }
        .artigo:hover{
            transform: translateY(-3px);
            background: #7deffb29;
            a{
                color: #121212;
            }
        }
    }

    @media screen and (max-width: 646px){
        .wrapper{
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        }
    }

`