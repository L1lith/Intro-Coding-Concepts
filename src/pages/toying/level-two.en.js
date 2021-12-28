import LevelTwoGame from '../../components/BooleanGame/levels/LevelTwo'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import YTVideo from '../../components/YTVideo'
import Operator from '../../components/Dictionary/Operator'

export default function LevelTwo() {
  return (
    <div className="level-2">
      <Helmet>
        <title>🚫 Whats "Not" Allowed</title>
      </Helmet>
      <h2>#2.2 🚫 Whats "Not" Allowed</h2>
      <br />
      <span className="introCard">
        <YTVideo url="fhIdbRp6xeg" thumbnail="/images/borat-not-joke.jpg" />
      </span>
      <br />
      <h2>The "Not" Operator</h2>
      <p>
        Now that we've learned the most basic <Operator /> OR, it's time to move onto NOT. The NOT
        {' ' + ''}
        <Operator /> returns false when it's input is true, and true when it's input is false. You
        can think of this like an inversion (inversion meaning it returns the opposite).
      </p>
      <p>
        When playing the second level, make sure NOT to select any colors or shapes that are
        prefixed with "not".
      </p>
      <LevelTwoGame />
      <Link href="/toying/level-three">
        <a className="next">Next: #2.3 💻 Booleans for coding Apps</a>
      </Link>
    </div>
  )
}
