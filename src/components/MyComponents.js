import React from "react";
import AddInfor from "./AddInfor";
import DisplayInfor from "./DisplayInfo";
import { getValue } from "@testing-library/user-event/dist/utils";

class MyCompornents extends React.Component{
    state = {
        listUser: [
            {id : 1,name :"Nam", age:"22"},
            {id : 2,name :"Ngao", age:"16"},
            {id : 3,name :"Cho", age:"10"},
        ]
    }

    handleAddNewUser=(userObj)=>{
        //Cach 1
        console.log(">>> Check data" ,userObj)
        this.setState({
            listUser: [userObj, ...this.state.listUser]
        })
    }

//JSX: là 1 cú pháp đặt biệt, cho phép code js vào html
    render(){
        // console.table(listUser)
        // {
        //     key= getValue
        // }
        return(
            <div>
                <AddInfor
                handleAddNewUser={this.handleAddNewUser}/>
                <br></br>
                <DisplayInfor listUser ={this.state.listUser}
                />
            </div>
        );
}
}
export default MyCompornents;