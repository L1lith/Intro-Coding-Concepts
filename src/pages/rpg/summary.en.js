import LevelOne from '../../components/BooleanGame/levels/LevelOne'
import Link from '../../components/TranslatedLink'
import YTVideo from '../../components/YTVideo'
import { congratulations, dessert } from '../../styles/rpg/summary.module.scss'
import { Helmet } from 'react-helmet'

export default function Summary() {
  return (
    <div className="summary">
      <Helmet>
        <title>🔭 You Won! Further Reading</title>
        <meta name="description" content="Congratulations on creating your RPG game!" />
      </Helmet>
      <h2>#4.4 🔭 You Won! Further Reading</h2>
      <br />
      <div className="introCard">
        <YTVideo
          url="videoseries"
          query={{ list: 'PLRqwX-V7Uu6ZYJC7L-r6rX6utt6wwJCyi' }}
          thumbnail="/images/dan-schiff.jpg"
        />
        Daniel Shiffman has so many good videos
      </div>
      <p className={congratulations}>
        <span className={dessert}>🎂 🍰 🥧</span>
        Congratulations you finished the course
      </p>
      <div className="stuck">
        <h2>Feeling Stuck?</h2>
        Check out the <Link to="/resources">resources page here</Link> to find some help
      </div>
      <br />
      <div className="further-reading">
        <h2>Further Reading</h2>
        Thank you so much for taking my course, I hope you learned something. If you'd like me to
        make more courses (like going into more advanced JavaScript areas like interactive websites
        and scripting) consider supporting me below for free :)
        <br />
        <br />
        So where do I go from here? If you'd like to code websites you can read more about that{' '}
        <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn">
          here
        </a>
        . JavaScript is a great entry point to a lot of different areas, like{' '}
        <a
          target="_blank"
          href="https://www.youtube.com/watch?v=7A-bnPlxj4k&list=PLRqwX-V7Uu6avBYxeBSwF48YhAnSn_sA4"
        >
          discord bots
        </a>
        ,{' '}
        <a target="_blank" href="https://medium.com/edureka/learn-node-js-b3a9c6fb632c">
          Node.js
        </a>{' '}
        scripts (Node.js is how you run JavaScript without a browser, kind of like python, and it
        has a lot of cool functionality), and more. I've also included a list of resources on the{' '}
        <Link to="/#resources">resources page</Link>.
        <br />
        <br />
        If you'd like to suggest an improvement you can open a ticket{' '}
        <a
          target="_blank"
          href="https://github.com/L1lith/Your-First-RPG/issues/new?assignees=&labels=enhancement&template=improvement-idea.md"
        >
          here
        </a>
        , or you can submit a pull request{' '}
        <a target="_blank" href="https://github.com/L1lith/Your-First-RPG/pulls">
          here
        </a>
        .
      </div>
      <Link className="next" to="/support">
        Consider supporting me 💜
      </Link>
    </div>
  )
}
