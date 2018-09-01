import React, { Component }  from 'react';
import { connect } from 'react-redux';

import { fetchComments } from '../actions/commentActions';
import Comment from '../components/Comment'

class CommentsPage extends Component {

  componentDidMount() {
    this.props.fetchComments()
  };
  render(){
    const pertinentComments = this.props.comments.filter(comment => comment.petition_id === +this.props.petitionId)
    const renderComments = pertinentComments.map(comment => <Comment comment={comment}/>)
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

export default  connect(mapStateToProps, { fetchComments } )(CommentsPage);
