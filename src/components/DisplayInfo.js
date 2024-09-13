import React from "react";
import '../components/DisplayInfo.scss';

class DisplayInfor extends React.Component{
    state = {
        isShowListUser: true
    }
    HandleShowHide=()=>{
        this.setState({
            isShowListUser: !this.state.isShowListUser //? true : false
        })
    }
    render(){
        const {listUser} = this.props;
        console.log(listUser)
        return(
            <div>
                <div>
                <span onClick={()=>{
                    this.HandleShowHide()
                }}>
                {this.state.isShowListUser === true ? "Hide" : "Show"}
                </span>
                </div>
                {this.state.isShowListUser &&
            <div>
                {listUser.map((user)=> {
                    // console.log(user)
                    return(
                        <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                            <hr></hr>
                            <div >Ten t la {user.name}</div>
                            <div>Tuoi la {user.age}</div>
                        </div>
                    )
                })}
            </div>
                }
            </div>
        );
    }
}
export default  DisplayInfor;