import React, { useState } from "react";

export default function Stylist() {
  const [scene, setScene] = useState("休日");
  const [taste, setTaste] = useState("黒基調");
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("予定や好みを入力すると、コーデ提案を表示します。");

  function handleSubmit(e) {
    e.preventDefault();
    // 簡易なローカル提案ロジック（API 未設定時のフォールバック）
    const lines = [
      `シーン: ${scene} / 好み: ${taste}`,
      `入力: ${prompt || "指定なし"}`,
      "",
      "提案:",
      taste.includes("黒") ? "黒を軸に、質感で差をつける。トップスをゆったりめにして、細めのパンツでバランスを取るのがおすすめです。" : "明るめのインナーで抜け感を出すと良いです。"
    ];
    setOutput(lines.join("\n"));
  }

  return (
    <div className="stylist">
      <div className="stylist-copy">
        <p className="eyebrow">AI Stylist</p>
        <h2>服選びをAIに相談</h2>
        <p>身長、雰囲気、予定、手持ちの服を入れると、コーデの方向性を提案します。API未設定でも簡易提案が動きます。</p>
      </div>

      <form className="stylist-form" onSubmit={handleSubmit} aria-labelledby="stylist-form-title">
        <div className="form-row">
          <select id="sceneInput" aria-label="予定" value={scene} onChange={e => setScene(e.target.value)}>
            <option value="休日">休日</option>
            <option value="デート">デート</option>
            <option value="通学">通学</option>
            <option value="仕事">仕事</option>
          </select>
          <select id="tasteInput" aria-label="好み" value={taste} onChange={e => setTaste(e.target.value)}>
            <option value="黒基調">黒基調</option>
            <option value="ストリート">ストリート</option>
            <option value="ミニマル">ミニマル</option>
            <option value="きれいめ">きれいめ</option>
          </select>
        </div>
        <textarea id="stylePrompt" placeholder="例: 黒パンツと白Tを持っています。夏に使えるコーデを教えて" value={prompt} onChange={e => setPrompt(e.target.value)} />
        <button className="primary" type="submit" id="askStylist">提案してもらう</button>
        <pre className="ai-output" id="stylistOutput" aria-live="polite">{output}</pre>
      </form>
    </div>
  );
}