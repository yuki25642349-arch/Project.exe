import React from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import StyleGrid from "./components/StyleGrid.jsx";
import Lookbook from "./components/Lookbook.jsx";
import Guide from "./components/Guide.jsx";
import Stylist from "./components/Stylist.jsx";

export default function App() {
  return (
    <main className="site">
      <Nav />
      <Hero />
      <section className="section" id="styles">
        <div className="section-head">
          <div>
            <p className="eyebrow">Selected outfits</p>
            <h2>おすすめメンズスタイル</h2>
          </div>
          <p>色数を抑えて、シルエットと素材感で差を出すラインナップ。気分や予定に合わせて絞り込めます。</p>
        </div>
        <StyleGrid />
      </section>

      <section className="section" id="lookbook">
        <div className="section-head">
          <div>
            <p className="eyebrow">Lookbook</p>
            <h2>雰囲気で選ぶ</h2>
          </div>
          <p>服単体ではなく、場面に合わせた印象で選ぶと失敗しにくくなります。</p>
        </div>
        <Lookbook />
      </section>

      <section className="section" id="guide">
        <Guide />
      </section>

      <section className="section" id="stylist">
        <Stylist />
      </section>

      <footer className="footer">BLACK THREAD / Men's fashion introduction site</footer>
    </main>
  );
}