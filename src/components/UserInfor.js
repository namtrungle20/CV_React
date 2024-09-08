import React from "react";

class UserInfor extends React.Component{
    state = {
        name: 'Nam Lee',
        address: 'Người dưng',
        age: 22
    };

    handleClick(event){
        console.log(event);
        console.log("ten toi la ", this.state.name);
        console.log("random", Math.floor((Math.random()*100)+1))

        this.setState({
            name: 'Trung Nam',
        })
        this.setState({
            age: Math.floor((Math.random()*100)+1)
        })
    }
    handleClickOver(event){
        console.log(event.pageX);
    }

    handleClickChange(event){
        this.setState({
            name: event.target.value
        })

        console.log(event, event.target.value);
    }

    handleClickSubmit(event){
        event.preventDefault();//ko tải lại trang
        console.log(this.state)
    }

    handleClickAge(event){

        //bad code
        //this.state.age = event.target.value

        this.setState({
            age: event.target.value
        })
    }
    render(){
        return(
            <div>
                Demo đầu Component
                Tên tôi là {this.state.name} và tôi tuoi {this.state.age}
                <button onClick={(event)=> {this.handleClick(event)}}>click me</button>

                <form onSubmit={(event)=> this.handleClickSubmit(event)}>
                <input
                value={this.state.name}
                type="Text"
                onChange={(event)=> this.handleClickChange(event)}
                ></input>
                <button>Submit</button>
                </form>

                <form onSubmit={(event)=> this.handleClickSubmit(event)}>
                <input
                value={this.state.age}
                type="Text"
                onChange={(event)=> this.handleClickAge(event)}
                ></input>
                <button>Submit</button>
                </form>
            </div>
        );
    }
}
export default UserInfor;