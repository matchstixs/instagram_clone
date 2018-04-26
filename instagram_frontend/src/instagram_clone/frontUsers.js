import React, {Component} from 'react';

class frontUsers extends Component {
    constructor(props) {
        super(props)
        this.data = []
        // USERS
    };

componenetDidMount() {
    fetch('/users')
        .then(res => {
            alert("THIS IS USERS COMPONENT")
        })
}

render() {
    return(
        <p>
    "THIS IS USERS FRONT END COMPONENT"
        </p>
    )
}


}
export default frontUsers;