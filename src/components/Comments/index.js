import './index.css'

import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLike: false,
    }
    this.setState(prev => ({
      commentsList: [...prev.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeReaction = id => {
    this.setState(prev => ({
      commentsList: prev.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLike: !eachComment.isLike}
        }
        return eachComment
      }),
    }))
  }

  onDeleteComment = id => {
    const {commentsList} = this.state
    const updateCommentsList = commentsList.filter(
      eachComment => eachComment.id !== id,
    )
    this.setState({commentsList: updateCommentsList})
  }

  onName = event => {
    this.setState({name: event.target.value})
  }

  onComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {commentsList, name, comment} = this.state
    // console.log(commentsList)

    return (
      <div className="home">
        <div className="top-container">
          <div className="comments-container">
            <h1>Comments</h1>
            <p>Say something about 4.O Technologies</p>
            <form onSubmit={this.onAddComment} className="form-container">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={this.onName}
                className="form-name-input"
              />
              <textarea
                cols="50"
                rows="10"
                value={comment}
                onChange={this.onComment}
                placeholder="Your Comment"
                className="form-comment-input"
              />
              <button type="submit" className="submit-btn">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comment-image"
          />
        </div>
        <div className="bottom-container">
          <p className="comments-para">
            <span className="comments-count">{commentsList.length}</span>{' '}
            Comments
          </p>
          <ul className="comment-items-container">
            {commentsList.map(eachComment => (
              <CommentItem
                bgNameColor={
                  initialContainerBackgroundClassNames[
                    Math.floor(
                      Math.random() *
                        initialContainerBackgroundClassNames.length,
                    )
                  ]
                }
                commentDetails={eachComment}
                key={eachComment.id}
                onChangeReaction={this.onChangeReaction}
                onDeleteComment={this.onDeleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
