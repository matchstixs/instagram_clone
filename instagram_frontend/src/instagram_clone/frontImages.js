import React, {Component} from 'react';

class frontImages extends Component {
    constructor(props) {
        super(props)
        this.data = []
        // images: 
    };

componentDidMount() {
    fetch('/images')
        .then(res => {
            alert("THIS IS IMAGES COMPONENT")
        })
}

render() {
    return(
        <p>
    "THIS IS IMAGES FRONT END COMPONENT"
        </p>
    )
}


}
export default frontImages;