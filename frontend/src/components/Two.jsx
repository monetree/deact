import React from 'react'


class Two extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    
    handleClick = (data) => {
        this.props.shareData(data)
    }

    render(){
        return (
            <div>
                <br/>
                <button className="btn btn-info" onClick={() => this.handleClick('hellow')}>click</button>
            </div>
        )
    }
}

export default Two;