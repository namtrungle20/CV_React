import React from "react";

class MyCompornents extends React.Component{
//JSX: là 1 cú pháp đặt biệt, cho phép code js vào html
    render(){
        return(
            <div>
                Demo đầu Component
                {
                    Math.random()
                }
            </div>
        );
}
}
export default MyCompornents;