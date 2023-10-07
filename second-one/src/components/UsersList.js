import React from "react";
import Card from "../UI/Card";

const UsersList = (props) => {
    if(props.data.length !== 0){
        return (
            <Card>                
                <ul>
                    {props.data.map((user) => (
                        <li key={user.username}>{user.username} ({user.age} years old)</li> 
                    ))}
                </ul>
            </Card>
        );
    }
}

export default UsersList;