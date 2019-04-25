import React from 'react'


class One extends React.Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount = () => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
    }
    finalClick = (data) => {
        console.log("one clicked", data)
        this.componentDidMount()
    }

    render(){
        return (
            <div>

            </div>
        )
    }
}

export default One;