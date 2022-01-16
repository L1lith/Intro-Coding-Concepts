import RPG from '../components/Dictionary/en/RPG'
import Link from '../components/TranslatedLink'
import YTVideo from '../components/YTVideo'
import { home, extra } from '../styles/index.module.scss'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <div className={home}>
      <Helmet>
        <title>Your First RPG</title>
        <meta
          name="description"
          content="Learn how to make your own online adventure game and share it with your friends!"
        />
      </Helmet>
      <h1 className="title">Your First RPG</h1>
      <p>
        In this course I will explain the basics of coding in JavaScript. You will make your own
        text based <RPG /> game that you can share with your friends 😃 I hope that I can make
        learning to code simple for you.
      </p>
      <h2>Sections</h2>
      <ol className="toc sections">
        <li>
          <Link to="/vision">👀 Visualizing Logic Models</Link>
        </li>
        <li>
          <Link to="/toying">👐 Toying with Logic Models</Link>
        </li>
        <li>
          <Link to="/coding">💻 Learning to Code</Link>
        </li>
        <li>
          <Link to="/rpg">🎮 Building an RPG</Link>
        </li>
      </ol>
      <Link to="/resources">Remember to check out the resource section if you get stuck</Link>
      <div className={extra}>
        <h2>Scared of Coding? Don't be!</h2>
        Check out this inspiring talk by Linda Liukas
        <YTVideo url="-jRREn6ifEQ" thumbnail="/images/poetry-of-programming.jpg" />
      </div>
    </div>
  )
}
