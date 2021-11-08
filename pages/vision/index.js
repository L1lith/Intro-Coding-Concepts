import Link from 'next/link'
import styles from '../../styles/vision/index.module.scss'
import { NextSeo } from 'next-seo'
import YTVideo from '../../components/YTVideo'

export default () => (
  <div className={styles['vision-intro']}>
    <NextSeo description="Getting in the coding mindset" title="🗺️ Planning it out" />
    <h1 className="title">Chapter 1</h1>
    <ol className="toc pages">
      <li>
        <Link href="/vision#lesson">
          <a>#1.0 🗺️ Planning it out</a>
        </Link>
      </li>
      <li>
        <Link href="/vision/logic-models-explained">
          <a>#1.1 🧠 Logic Models Explained</a>
        </Link>
      </li>
    </ol>
    <h2 id="lesson">#1.0 🗺️ Planning it out</h2>
    <span className="intro-card">
      <YTVideo url="wiaamJZ-hHI" />
      Take coding at your own pace and take time for yourself
    </span>
    <p>
      If you believe what you hear on the internet, you might be inclined to believe the modern
      programmer might be more easily replaced by a gang of monkeys randomly hammering away on
      type-writers, and sometimes you might be right. Many beginners meet their demise after hearing
      "just read the docs" (docs is short for documentation), and aren't given a proper chance to
      understand why coders do what they do.
      <br />
      <br />
      Documentation sites like{' '}
      <Link href="https://nodejs.org/docs/latest-v15.x/api/">
        <a>this one</a>
      </Link>{' '}
      can be a valuable glossary to experienced programmers, but as a learning tool it's the
      equivalent of throwing a thesaurus at your students' foreheads. This can often leave the
      reader confused & frustrated, as it fails to explain fundamental programming concepts and why
      we use them.
      <br />
      <br />
      Another barrier to learning is the lack of approachable hands-on work. In this section I will
      guide you through fundamental coding concepts (like problem solving, logic rules, and working
      with data).
    </p>
    <Link href="/vision/logic-models-explained">
      <a className="next">Next: #1.1 Logic Models Explained</a>
    </Link>
  </div>
)
