import React, { Component } from 'react'
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash';

class App extends Component {

  state = {
    searchTerm: '',
    imageList: [],
  }

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
        params: { query: term },
      })
      this.setState({ imageList: response.data.results })
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: "2em" }}>
        <SearchBar
          onSearchSubmit={this.onSearchSubmit}
        />
        <ImageList
          imageList={this.state.imageList}
        />
      </div>
    )
  }
}

export default App;
