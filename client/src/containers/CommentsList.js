import React, { Component }  from 'react';
import { connect } from 'react-redux';

import { fetchComments } from '../actions/commentActions';
import Comment from '../components/Comment'

class CommentsList extends Component {

  componentDidMount() {
    this.props.fetchComments(this.props.petitionId)
  };
  render(){
    const renderComments = this.props.comments.map(comment => <Comment comment={comment}/>)
    return (
      <div>
        {renderComments}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}

export default  connect(mapStateToProps, { fetchComments } )(CommentsList);
