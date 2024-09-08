import React from "react";
import UserInfor from "./UserInfor";

class MyCompornents extends React.Component{


//JSX: là 1 cú pháp đặt biệt, cho phép code js vào html
    render(){
        return(
            <div>
                <UserInfor/>
            </div>
        );
}
}
export default MyCompornents;