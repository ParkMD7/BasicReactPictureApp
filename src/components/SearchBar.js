import React, { Component } from 'react'

// basic Controlled component:
// Tenet of a Controlled component is that the React Component knows that the value of inputs are instead of 
// relying on the DOM to know the inputs value
class SearchBar extends Component {
    state = { text: '' };

    // arrow function makes 'this' always equal to our SearchBar
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.text);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            onChange={ e => this.setState({
                                text: e.target.value.toUpperCase()
                            })}
                            value={this.state.text}
                        />
                    </div>
                </form>
            </div>
        )
    }
};

export default SearchBar;
