import React, { Component } from "react";
import { connect } from "react-redux";
import "../addpost/main.css";
import like from "../../images/like.png";
import comment from "../../images/comment.png";
import repost from "../../images/repost.png";
import save from "../../images/save.png";
import "./style.css";
class Post extends Component {
  render() {
    console.log(this.props.posts);
    return (
      <div className="postBlock">
        {this.props.posts.map((el) => {
          return (
            <div className="post">
              <div className="mainInfAutor">
                <div id="photo">
                  <img alt="author_photo" src={el.photo} />
                </div>
                <div class="author">
                  <span id="name">{el.name} • </span>
                  <span id="data">{el.date}</span>
                  <br />
                  <span id="msg">{el.content} </span>
                </div>
              </div>
              <div class="imgPost">
                <img src={el.image} alt="post" />
              </div>
              <div class="icons">
                <img id="like" alt="like" src={like} />
                <span>432</span>
                <img id="comment" alt="comment" src={comment} />
                <span>187</span>
                <img id="repost" alt="repost" src={repost} />
                <span>48</span>
                <img id="save" alt="save" src={save} />
                <span>16</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.todo,
  };
}
export default connect(mapStateToProps)(Post);
