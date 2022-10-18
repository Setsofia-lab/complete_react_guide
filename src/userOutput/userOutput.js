import React from "react";

const UserOutput = (props) => {
    return(
        <div>
            <p> Username: {props.userName}</p>
            <p> Some more random data</p>
        </div>
    )
}

export default UserOutput;