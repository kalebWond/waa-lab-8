import React from 'react'

function Comments({comments}) {
  return (
    <ul className="ml-10">
        {comments.map(comment => <li>{comment.name}</li>)}
    </ul>
  )
}

export default Comments