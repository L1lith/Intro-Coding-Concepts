import Link from 'next/link'
//import BooleanGame from "../../components/BooleanGame";
import { NextSeo } from 'next-seo'

export default () => (
  <div className="toying-intro">
    <NextSeo title="#2.0 Logic Puzzles" />
    <h1 className="title">Section 2: 👐 Toying with Logic Models</h1>
    <ol className="toc pages">
      <h2>Pages</h2>
      <li>
        <Link href="/toying#lesson">
          <a>#2.0 🧩 Playing around with Logic Puzzles</a>
        </Link>
      </li>
      <li>
        <Link href="/toying/level-one">
          <a>#2.1 Level 1: 💬 Basic "Or" Expressions</a>
        </Link>
      </li>
      <li>
        <Link href="/toying/level-two">
          <a>#2.2 Level 2: 🚫 Whats "Not" Allowed</a>
        </Link>
      </li>
      <li>
        <Link href="/toying/level-three">
          <a>#2.3 Level 3: 💻 Booleans for Coding Apps</a>
        </Link>
      </li>
    </ol>
    <br />
    <br />
    <h2 id="lesson">#2.0 🧩 Playing around with Logic Puzzles</h2>
    <br />
    <span className="intro-card">
      <img src="/images/milleniumPuzzle.webp" />
      <br />
      *course not guaranteed to unlock the secrets of any card game universe*
    </span>
    <br />
    <br />
    <p>
      Now that you've got a grasp on how to visualize your logic model, you will apply those
      concepts to build your own logic model while playing a puzzle game. This hands-on problem
      solving lesson will put you in a coding mindset before reading or writing a single line of
      code.
    </p>
    <Link href="/toying/level-one">
      <a className="next">Next: Level 1: Basic "Or" Boolean Logic</a>
    </Link>
  </div>
)
