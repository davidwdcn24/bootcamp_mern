import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = (props) => {
    const navigate = useNavigate();

    return (
        <div className="container-fluid">
            <div className="row text-center mb-2"><h1>Favorite authors</h1></div>
            <div className="row mb-2 ms-1">
                {
                    props.type === "main" ? 
                    (
                        <button type="button" 
                            className="btn btn-primary"
                            style={{width:"150px"}}
                            onClick={() => navigate("/new", {})}>Add an author</button>
                    ) :
                    (
                        <button type="button" 
                            className="btn btn-primary"
                            style={{width:"150px"}}
                            onClick={() => navigate("/", {})}>Home</button>
                    )
                }
            </div>
            <div className="row mb-2 ms-1">
                {
                    props.type === "main" ? 
                    (<span>We have quotes by:</span>) :
                    (<span>
                        {props.type === "create" ? "Add a new author" : "Edit this author"}
                    </span>)
                }
            </div>
            
        </div>
    )
}

export default Header