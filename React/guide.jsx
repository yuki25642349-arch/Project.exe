import React from "react";

export default function Guide() {
  return (
    <div className="guide">
      <div className="guide-image" role="img" aria-label="メンズ服のディテール"></div>
      <div className="guide-copy">
        <p className="eyebrow">Style guide</p>
        <h2>黒基調をかっこよく見せる3つのルール</h2>
        <ul>
          <li>上下どちらかにゆとりを作り、全身を細くしすぎない。</li>
          <li>黒、白、グレーに1色だけアクセントを足す。</li>
          <li>靴、バッグ、時計などの小物で素材感を足す。</li>
        </ul>
      </div>
    </div>
  );
}