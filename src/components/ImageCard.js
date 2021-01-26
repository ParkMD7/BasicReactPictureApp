import React, { Component } from 'react'

class ImageCard extends Component {
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        console.log('this.imageRef', this.imageRef)
    }

    render() {
        const { description, urls } = this.props.image;
        return (
            <div>
                <img
                    ref={this.imageRef}
                    src={urls.regular}
                    alt={description}
                />
            </div>
        )
    }
};

export default ImageCard;