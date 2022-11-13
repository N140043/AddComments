import './index.css'

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {
    bgNameColor,
    commentDetails: {id, name, comment, isLike},
    onChangeReaction,
    onDeleteComment,
  } = props

  const commentAt = formatDistanceToNow(new Date())
  const likeImgUrl = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likedBtn = isLike ? 'liked-btn' : ''

  const clickLikeBtn = () => {
    onChangeReaction(id)
  }

  const clickDeleteComment = () => {
    onDeleteComment(id)
  }

  return (
    <li className="comment-item-container">
      <div className="comment-container">
        <button className={`profile-btn ${bgNameColor}`} type="button">
          {name[0]}
        </button>
        <div className="comment-details-container">
          <p className="name">
            {name}
            <span className="comment-at"> {commentAt}</span>
          </p>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="reaction-container">
        <button
          type="button"
          className={`like-btn ${likedBtn}`}
          onClick={clickLikeBtn}
        >
          <img src={likeImgUrl} alt="like" /> Like
        </button>
        <button
          type="button"
          onClick={clickDeleteComment}
          className="delete-btn"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
