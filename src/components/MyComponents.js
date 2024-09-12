import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfo";
import { getValue } from "@testing-library/user-event/dist/utils";

class MyCompornents extends React.Component{
    state = {
        listUser: [
            {id : 1,name :"Nam", age:"22"}
        ]
    }

//JSX: là 1 cú pháp đặt biệt, cho phép code js vào html
    render(){
        
        // {
        //     key= getValue
        // }
        return(
            <div>
                <UserInfor/>
                <br></br>
                <hr></hr>
                <DisplayInfor listUser ={this.state.listUser}
                />
            </div>
        );
}
}
export default MyCompornents;