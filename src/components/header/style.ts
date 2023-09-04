import { styled } from "styled-components";

export const Container = styled.header`
    width: 100%;
    background: #fff;
    background-image: linear-gradient(135deg, rgb(10, 197, 212) 0%, rgb(16, 179, 196) 50%, rgb(54, 149, 194) 100%);

    position: sticky;
    top: 0;
    z-index: 10;
    border-bottom: solid .5px #ffffff2f;

    padding: 20px 0;
    nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        flex-wrap: wrap;
        gap: 10px;
    

        a{
            padding: 8px 15px;
            color: #fff;
            border: solid 1.5px #fff;
            text-decoration: none;
            border-radius: 5px;
            text-transform: capitalize;
        }
        a:hover{
            background: #dddddd2e;
        }
        a:focus{
            background: #dddddd2e;
        }


        .logo{
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            padding: 10px;
            border: none;
            svg{
               width: 30px;
               height: 30px;
            }
        }

        ul{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .mobile{
            display: none;
        }
    }
    @media screen and (max-width: 443px) {
        nav{
            ul.none{
                display: none;
            }
            ul{
                width: 100%;
                a{
                    width: 100%;
                }
            }
            .mobile{
                display: block;
                flex: 1;
                button{
                    cursor: pointer;
                    background: #ffffff;
                    border: none;
                    padding: 10px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    float: right;
                    border-radius: 3px;
                }
            }
        }
    }
`