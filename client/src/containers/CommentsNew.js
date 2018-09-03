import React, { Component } from 'react'
import { connect } from 'react-redux';

import { addComment } from '../actions/commentActions';

class CommentsNew extends Component {
  constructor() {
    super();
    this.state = {
      content: '',
    };
  }

  handleChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addComment(this.state.content, this.props.petitionId)
    this.setState({
       content: ''
     });
  }

  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <p>
            <label>New Comment</label>
            <input type="text" name="content" onChange={(event) => this.handleChange(event)}/>
          </p>
          <input type="submit" />
        </form>
        {this.state.content}
      </div>
    )
  }
}


export default connect(null, { addComment })(CommentsNew);
