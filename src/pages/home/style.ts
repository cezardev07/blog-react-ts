import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    .heading{
        width: 100%;
        background-image: linear-gradient(135deg, rgb(10, 197, 212) 0%, rgb(16, 179, 196) 50%, rgb(54, 149, 194) 100%);
        
        padding: 0 20px;
        .context{
            max-width: 1170px;
            margin: 0 auto;
            padding: 30px 0;

            display: flex;
            flex-direction: column;
            gap: 30px;

            h1{
                font-size: 32px;
                color: #fff;
            }
            h2{
                color: #fff;
                font-size: 22px;
                font-weight: 300;
            }
        }
    }

    article{
        max-width: 1170px;
        margin: 0 auto;
        padding: 30px;

        .title{

            h2{
                color: #666;
                font-size: 28px;
                font-weight: 600;
                line-height: 30px;
                margin-bottom: 30px;
            }
        }

        .cards{
            .context{
                .wrapper{ 
                    p{
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                        -webkit-box-orient: vertical; 
                    }
                }
            }
        }
    }
`