import React from "react";

export default function Nav() {
  return (
    <nav className="nav" aria-label="メインナビゲーション">
      <a className="brand" href="#top">
        <span className="brand-mark">BT</span>
        <span>BLACK THREAD</span>
      </a>
      <div className="nav-links">
        <a href="#styles">Styles</a>
        <a href="#lookbook">Lookbook</a>
        <a href="#guide">Guide</a>
        <a href="#stylist">AI Stylist</a>
      </div>
    </nav>
  );
}