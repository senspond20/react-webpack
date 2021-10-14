import React, {Component} from "react";

class App extends Component {
    state = {
        text : '관리자님! 어서오세요~! 반갑습니다',
    };
    render(){
        return (
            <>
                <h1>{this.state.text}</h1>
            </>
        )
    }
}
export default App;