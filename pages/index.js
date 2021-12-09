import Link from 'next/link'
import YTVideo from '../components/YTVideo'
import styles from '../styles/index.module.scss'

const Home = () => (
  <div className={styles.home}>
    <h1 className="title">
      <span className="smaller-text">Coding Intro:</span>
      <br />
      Making a Game
    </h1>
    <span className="intro-card">
      <YTVideo url="-jRREn6ifEQ" thumbnail="/images/poetry-of-programming.jpg" />
      Coding is a lot like human language, and they both need diversity
    </span>
    <p>
      In this course I will explain how to visualize coding & how we can use it to make awesome
      things. I will teach you the basics of the JavaScript language, and show you how to make your
      own text based game and share it with your friends :)
    </p>
    <h2>Sections</h2>
    <ol className="toc sections">
      <li>
        <Link href="/vision">
          <a>👀 Visualizing Logic Models</a>
        </Link>
      </li>
      <li>
        <Link href="/toying">
          <a>👐 Toying with Logic Models</a>
        </Link>
      </li>
      <li>
        <Link href="/coding">
          <a>💻 Learning to Code</a>
        </Link>
      </li>
      <li>
        <Link href="/rpg">
          <a>🎮 Building an RPG</a>
        </Link>
      </li>
    </ol>
    <div className="extras">
      {
        null /*<Link href="/faq">
      <a>Frequently Asked Questions</a>
</Link>*/
      }
      <Link href="/resources">
        <a>Remember to check out the resource section if you get stuck</a>
      </Link>
    </div>
  </div>
)

export default Home
