import React from "react";

class DisplayInfor extends React.Component{
    render(){
        const {listUser} = this.props;
        console.log(listUser)
        return(
            <div>
                {listUser.map((user)=> {
                    // console.log(user)
                    return(
                        <div key={user.id}>
                            <div>Ten t la {user.name}</div>
                        </div>
                    )
                })}
            </div>
        );
    }
}
export default  DisplayInfor;