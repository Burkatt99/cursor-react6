import { ADD_ITEM_TODO } from "../constatns/todo_type";
import myPhoto from "../images/author-min.jpg";
import dog from "../images/dog.png";
import course from "../images/po.png";
import pazzle from "../images/pazzle-min.jpg";
import books from "../images/books-min.jpg";
const posts = [
  {
    name: "Bura Tetiana",
    photo: myPhoto,
    content:
      "I dream so much about this little miracle!! This sweet puppy deserves your likes!",
    image: dog,
    date: "22 April",
  },
  {
    name: "Bura Tetiana",
    photo: myPhoto,
    content:
      "I love reading detectives. And what do you choose? Is adventure, fantasy, horror, or maybe something romantic?",
    image: books,
    date: "22 April",
  },
  {
    name: "Bura Tetiana",
    photo: myPhoto,
    content:
      "During quarantine, everyone opens new hobbies. I started to make the second picture, and you??",
    image: pazzle,
    date: "22 April",
  },
  {
    name: "Bura Tetiana",
    photo: myPhoto,
    content:
      "I found new cool courses from Cursor. I hope that by the end of my studies I will become a real programmer!",
    image: course,
    date: "22 April",
  },
];
export default (state = posts, action) => {
  switch (action.type) {
    case ADD_ITEM_TODO:
      return [
        ...state,
        {
          content: action.text,
          image: action.image,
          name: action.author,
          photo: action.photo,
          date: "22 April",
        },
      ];
    default:
      return state;
  }
};
