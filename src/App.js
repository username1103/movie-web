import React from "react";

function Food({ favorite }) {
  return <h3>나는 {favorite}를 좋아해</h3>;
}

function App() {
  return (
    <div>
      <h1>안녕!</h1>
      <Food favorite="김치" />
      <Food favorite="라면" />
      <Food favorite="삼겹살" />
      <Food favorite="쭈꾸미" />
    </div>
  );
}

export default App;
