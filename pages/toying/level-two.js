import LevelTwo from '../../components/BooleanGame/levels/LevelTwo'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

export default () => (
  <div className="level-2">
    <NextSeo title={'#2.2 "Not" Expressions'} />
    <h2>#2.2 Level 2: Whats "Not" Allowed 🚫</h2>
    <br />
    <div className="youtube-container">
      <iframe
        src="https://www.youtube.com/embed/fhIdbRp6xeg"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
    <br />
    <h2>The "Not" Operator</h2>
    <p>
      Now that we've learned the most basic expression OR, it's time to move onto NOT. The NOT
      operator outputs false when it's input is true, and true when it's input is false. You can
      think of this like an inversion, returning what was NOT specified.
    </p>
    <p>
      When playing the second level, make sure NOT to select any colors or shapes that are prefixed
      with "not".
    </p>
    <LevelTwo />
    <Link href="/toying/level-three">
      <a className="next">Up next: Level 3: Boolean Logic & the Coding Mindset</a>
    </Link>
  </div>
)
