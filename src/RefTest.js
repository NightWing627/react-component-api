import React, {Component} from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.callRef = React.createRef();
        this.addingRefInput = this.addingRefInput.bind(this);
    }

    addingRefInput = () => {
        this.callRef.current.focus();
    }

    render() {
        return (
            <div>
                <h2>Adding Ref to DOM element</h2>
                <input 
                    type="text" ref={this.callRef}/>
                &nbsp;&nbsp;
                <input 
                    type="button" value="focus input"
                    onClick={this.addingRefInput} />
            </div>
        );
    }
}

export default App;