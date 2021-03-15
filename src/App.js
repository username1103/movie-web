import React from "react";

const foodILike = [
  {
    id: 1,
    name: "김치",
    url:
      "https://image.shutterstock.com/image-photo/korea-food-top-view-chinese-600w-1755822044.jpg",
  },
  {
    id: 2,
    name: "라면",
    url:
      "https://image.shutterstock.com/image-photo/steam-smoke-instant-noodles-bowl-600w-1654396696.jpg",
  },
  {
    id: 3,
    name: "삼겹살",
    url:
      "https://image.shutterstock.com/image-photo/raw-pork-belly-isolated-on-600w-1595467555.jpg",
  },
];

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.url} />;
}

function Food({ name, picture }) {
  return (
    <div>
      <h3>나는 {name}를 좋아해</h3>
      <img src={picture} alt={name} />
    </div>
  );
}

function App() {
  return <div>{foodILike.map(renderFood)}</div>;
}

export default App;
