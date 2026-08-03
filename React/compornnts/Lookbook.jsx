import React from "react";
import Card from "./Card.jsx";

const lookbook = [
  {
    id: "lb1",
    image: "https://images.unsplash.com/photo-1520975682031-a5a390a0f2f7?auto=format&fit=crop&w=1000&q=80",
    title: "休日はリラックス感を強める",
    desc: "トップスに余白を作り、パンツか靴で引き締める。楽だけどだらしなく見えないバランスです。",
    tags: ["weekend","black"]
  },
  {
    id: "lb2",
    image: "https://images.unsplash.com/photo-1513267048331-5611cad62e41?auto=format&fit=crop&w=1000&q=80",
    title: "夜の外出は素材で差を出す",
    desc: "黒の中でも、ウール、レザー、ナイロンを混ぜると立体感が出ます。アクセサリーは控えめで十分。",
    tags: ["night","city"]
  }
];

export default function Lookbook() {
  return (
    <div className="lookbook">
      {lookbook.map(item => <Card key={item.id} {...item} />)}
    </div>
  );
}