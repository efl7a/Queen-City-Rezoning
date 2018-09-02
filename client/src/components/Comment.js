import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div>
      <hr/>
      {comment.content}
      <hr/>
    </div>
  )
}


export default Comment
