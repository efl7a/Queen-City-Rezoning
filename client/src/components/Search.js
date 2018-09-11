import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchPetitions } from '../actions/petitionActions'
class Search extends Component {

  constructor() {
    super();

    this.state = {
    content: ''
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    searchPetitions(this.state.content);
    this.setState({
      content: ''
    })
  }

  handleOnChange = event => {
    this.setState({
      content: event.target.value
    });
  }

  render() {
    return (
      <form>
        <input type="text" value={this.state.content} onChange={this.handleOnChange} placeholder="search"/>
        <input type="submit" value="Search"/>
      </form>
    )
  }

}

export default connect(null, { searchPetitions })(Search)
