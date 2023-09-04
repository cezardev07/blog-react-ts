import { useState } from "react";
import { Container } from "./style";

import { Link } from "react-router-dom";

import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = () => {
    const [statusMobile, setStatusMobile] = useState<boolean>(false)

    const toggleMobile = () => {
        setStatusMobile(!statusMobile)
    }

    return(
        <Container>
            <nav>
                <Link to="/blog-react-ts/" className="logo">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
                        <path d="M20 3H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L12.414 16H20a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM7.5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>
                    </svg>
                </Link>
                <ul className={`${
                    statusMobile === true ? ""
                    : "none"
                }`}>
                    <Link to="/blog-react-ts/">home</Link>
                    <Link to="/blog-react-ts/new-post">add post</Link>
                    <Link to="/blog-react-ts/admin">admin</Link>
                </ul>
                <div className="mobile">
                    <button onClick={toggleMobile}>
                        {
                            statusMobile === true ? (
                                <AiOutlineClose/>
                            )
                            : (
                                <GiHamburgerMenu/>
                            )
                        }
                    </button>
                </div>    
            </nav>
        </Container>
    )
}