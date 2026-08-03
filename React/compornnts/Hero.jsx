import React from "react";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Men's fashion edit</p>
        <h1>BLACK THREAD</h1>
        <p>
          黒をベースに、清潔感と都会感を両立するメンズ服を紹介。ストリート、ミニマル、スマートカジュアルまで、明日そのまま着られる組み合わせを集めました。
        </p>
        <div className="hero-actions">
          <a className="primary" href="#styles">コーデを見る</a>
          <a className="ghost" href="#stylist">AIに相談</a>
        </div>
      </div>
      <div className="hero-visual" role="img" aria-label="黒基調のメンズファッション">
        <div className="hero-badge">
          <div className="badge">
            <strong>12</strong>
            <span>厳選スタイル</span>
          </div>
          <div className="badge">
            <strong>3</strong>
            <span>着こなし軸</span>
          </div>
          <div className="badge">
            <strong>AI</strong>
            <span>スタイル相談</span>
          </div>
        </div>
      </div>
    </section>
  );
}