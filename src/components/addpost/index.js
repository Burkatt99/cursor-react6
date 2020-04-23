import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "../post";
import { ADD_ITEM_TODO } from "../../constatns/todo_type";
import me from "../../images/author-min.jpg";
import man from "../../images/man-min.jpg";

import "./main.css";

class AddPost extends Component {
  state = {
    text: "",
    image: "",
    author: "",
    photo: "",
    data: [],
  };
  handleSubmit(event) {
    event.preventDefault();
  }
  changeText = (e) => {
    this.setState({ text: e.target.value });
  };
  changeImg = (e) => {
    this.setState({ image: e.target.value });
  };
  changeAuthor = (e) => {
    this.setState({ author: e.target.value });
    if (e.target.value === "Tetiana Bura") {
      this.setState({ photo: me });
    } else if(e.target.value === 'Anonim'){
      this.setState({ photo: man });
    }
  };
  addPost = () => {

    this.props.dispatch({
      type: "ADD_ITEM_TODO",
      text: this.state.text,
      image: this.state.image,
      author: this.state.author,
      photo: this.state.photo,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.changeText}
            placeholder="Text..."
          ></input>
          <input
            type="text"
            value={this.state.image}
            onChange={this.changeImg}
            placeholder="Link to image..."
          ></input>
          <select
            name="author"
            value={this.state.author}
            onChange={this.changeAuthor}
          >
            <option value="Tetiana Bura">Tetiana Bura</option>
            <option value="Anonim">Anonim</option>
          </select>
          <button onClick={this.addPost}>Add</button>
        </form>
        <Post />
      </div>
    );
  }
}

export default connect()(AddPost);
