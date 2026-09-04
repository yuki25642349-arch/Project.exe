"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const elements =
  document.querySelectorAll<HTMLElement>(
    ".reveal, .reveal-left, .reveal-right"
  );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            // アニメーションをリセット
            element.classList.remove("active");

            // ブラウザに再描画させてアニメーションを再実行
            void element.offsetWidth;

            element.classList.add("active");
          } else {
            // 画面外に出たらリセット
            element.classList.remove("active");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    
    <main>
      {/* ==================== HEADER ==================== */}

      <header>
        <div>MY PORTFOLIO</div>

        <nav>
          <a href="#about">ABOUT</a>
          <a href="#skills">SKILLS</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      {/* ==================== HERO ==================== */}

      <section>
        <div>
          <p>WEB APPLICATION DEVELOPER</p>

          <h1 className="reveal">
            一つ一つの
            <br />
            <span>学びを</span>
            <br />
            大切にする。
          </h1>

          <p>
            React / Next.js / JavaScript
            <br />
            Designing and developing modern web applications.
          </p>

          <div>
            <button>VIEW PROJECTS →</button>
            <button>DEVELOPMENT LOG →</button>
          </div>
        </div>

        <div>
          <p>SCROLL TO EXPLORE</p>
          <div>↓</div>
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}

      <section id="about">
        <div>
          <p>01 — ABOUT</p>

          <h2 className="reveal">
            学びを
            <br />
            <span>積み重ね、</span>
            <br />
            カタチにする。
          </h2>
        </div>

        <div>
          <p className="reveal">
            私はWebアプリケーション開発を中心に学んでいる
            エンジニアです。
          </p>

          <p className="reveal">
            フロントエンドからバックエンドまで幅広い技術に触れ、
            ユーザーにとって使いやすく、実際に価値を提供できる
            アプリケーションの開発を目指します。
          </p>

          <p className="reveal">
            現在はReact / Next.js / JavaScriptを中心に、
            モダンなWeb開発について学習しています。
          </p>
        </div>
      </section>

      {/* ==================== SKILLS ==================== */}

      <section id="skills">
        <div>
          <p>02 — SKILLS</p>

          <h2 className="reveal">
            技術
            <br />
            スタック
          </h2>
        </div>

        <div>
          <div>
            <span>01</span>
            <h3>FRONTEND</h3>
            <p>HTML / CSS / JavaScript / React / Next.js</p>
          </div>

          <div>
            <span>02</span>
            <h3>BACKEND</h3>
            <p>PHP / Laravel / Node.js</p>
          </div>

          <div>
            <span>03</span>
            <h3>DATABASE</h3>
            <p>MySQL / PostgreSQL</p>
          </div>

          <div>
            <span>04</span>
            <h3>TOOLS</h3>
            <p>Git / GitHub / VS Code / Figma</p>
          </div>
        </div>
      </section>

      {/* ==================== PROJECTS ==================== */}

      <section id="projects">
        <div>
          <p>03 — SELECTED WORKS</p>

          <h2 className="reveal">
            MY
            <br />
            PROJECTS
          </h2>
        </div>

        <div>
          <article>
            <span>01</span>

            <h3>PROJECT ONE</h3>

            <p>Web Application</p>
            <p>React / Next.js / API</p>

            <button>VIEW PROJECT →</button>
          </article>

          <article>
            <span>02</span>

            <h3>PROJECT TWO</h3>

            <p>Web Application</p>
            <p>Laravel / PHP / MySQL</p>

            <button>VIEW PROJECT →</button>
          </article>

          <article>
            <span>03</span>

            <h3>PROJECT THREE</h3>

            <p>AI Application</p>
            <p>Python / AI / API</p>

            <button>VIEW PROJECT →</button>
          </article>
        </div>
      </section>

      {/* ==================== DEVELOPMENT LOG ==================== */}

      <section>
        <div>
          <p>04 — DEVELOPMENT LOG</p>

          <h2 className="reveal">
            ALWAYS
            <br />
            <span>LEARNING.</span>
          </h2>
        </div>

        <div>
          <article className="reveal-right">
            <span>2026.08</span>

            <h3>React / Next.js</h3>

            <p>
              コンポーネント設計やAPI連携、
              Server Componentsについて学習。
            </p>
          </article>

          <article className="reveal-left">
            <span>2026.07</span>

            <h3>JavaScript</h3>

            <p>
              非同期処理、Promise、API通信などを学習。
            </p>
          </article>

          <article className="reveal-right">
            <span>2026.06</span>

            <h3>Web Development</h3>

            <p>
              HTML / CSS / JavaScriptを使った
              Webアプリケーション開発を開始。
            </p>
          </article>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}

      <section id="contact">
        <p>05 — CONTACT</p>

        <h2 className="reveal">
          LET&apos;S
          <br />
          BUILD
          <br />
          SOMETHING.
        </h2>

        <button>CONTACT ME →</button>
      </section>

      {/* ==================== FOOTER ==================== */}

      <footer>
        <p>© 2026 MY PORTFOLIO</p>
        <p>WEB APPLICATION DEVELOPER</p>
      </footer>
    </main>
  );
}

