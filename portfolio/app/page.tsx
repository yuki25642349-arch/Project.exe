export default function Home() {
  return (
    <main>
      {/* Header */}
      <header>
        <div>MY PORTFOLIO</div>

        <nav>
          <a href="#about">ABOUT</a>
          <a href="#skills">SKILLS</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      {/* Hero */}
      <section>
        <div>
          <p>WEB APPLICATION DEVELOPER</p>

          <h1>
            I BUILD
            <br />
            <span>WEB</span>
            <br />
            EXPERIENCES.
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

      {/* About */}
      <section id="about">
        <div>
          <p>01 — ABOUT</p>

          <h2>
            TURNING
            <br />
            <span>IDEAS</span>
            <br />
            INTO PRODUCTS.
          </h2>
        </div>

        <div>
          <p>
            私はWebアプリケーション開発を中心に学んでいる
            エンジニアです。
          </p>

          <p>
            フロントエンドからバックエンドまで幅広い技術に触れ、
            ユーザーにとって使いやすく、実際に価値を提供できる
            アプリケーションの開発を目指しています。
          </p>

          <p>
            現在はReact / Next.js / JavaScriptを中心に、
            モダンなWeb開発について学習しています。
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <div>
          <p>02 — SKILLS</p>
          <h2>TECH<br />STACK</h2>
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

      {/* Projects */}
      <section id="projects">
        <div>
          <p>03 — SELECTED WORKS</p>

          <h2>
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

      {/* Development Log */}
      <section>
        <div>
          <p>04 — DEVELOPMENT LOG</p>

          <h2>
            ALWAYS
            <br />
            <span>LEARNING.</span>
          </h2>
        </div>

        <div>
          <article>
            <span>2026.08</span>
            <h3>React / Next.js</h3>
            <p>
              コンポーネント設計やAPI連携、
              Server Componentsについて学習。
            </p>
          </article>

          <article>
            <span>2026.07</span>
            <h3>JavaScript</h3>
            <p>
              非同期処理、Promise、API通信などを学習。
            </p>
          </article>

          <article>
            <span>2026.06</span>
            <h3>Web Development</h3>
            <p>
              HTML / CSS / JavaScriptを使った
              Webアプリケーション開発を開始。
            </p>
          </article>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <p>05 — CONTACT</p>

        <h2>
          LET'S
          <br />
          BUILD
          <br />
          SOMETHING.
        </h2>

        <button>CONTACT ME →</button>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 MY PORTFOLIO</p>
        <p>WEB APPLICATION DEVELOPER</p>
      </footer>
    </main>
  );
}
