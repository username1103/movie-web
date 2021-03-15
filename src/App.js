import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h3>나는 {name}를 좋아해</h3>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "김치",
    url:
      "https://image.shutterstock.com/image-photo/korea-food-top-view-chinese-600w-1755822044.jpg",
  },
  {
    name: "라면",
    url:
      "https://image.shutterstock.com/image-photo/steam-smoke-instant-noodles-bowl-600w-1654396696.jpg",
  },
  {
    name: "삼겹살",
    url:
      "https://image.shutterstock.com/image-photo/raw-pork-belly-isolated-on-600w-1595467555.jpg",
  },
];

function App() {
  return (
    <div>
      <h1>안녕!</h1>
      {foodILike.map((dish) => {
        return <Food name={dish.name} picture={dish.url} />;
      })}
    </div>
  );
}

export default App;
