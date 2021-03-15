import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "김치",
    url:
      "https://image.shutterstock.com/image-photo/korea-food-top-view-chinese-600w-1755822044.jpg",
    rating: 5.0,
  },
  {
    id: 2,
    name: "라면",
    url:
      "https://image.shutterstock.com/image-photo/steam-smoke-instant-noodles-bowl-600w-1654396696.jpg",
    rating: 4.3,
  },
  {
    id: 3,
    name: "삼겹살",
    url:
      "https://image.shutterstock.com/image-photo/raw-pork-belly-isolated-on-600w-1595467555.jpg",
    rating: 4.7,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h3>나는 {name}를 좋아해</h3>
      <h4>등급: {rating} / 5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function renderFood(dish) {
  return (
    <Food
      key={dish.id}
      name={dish.name}
      picture={dish.url}
      rating={dish.rating}
    />
  );
}

function App() {
  return <div>{foodILike.map(renderFood)}</div>;
}

export default App;
