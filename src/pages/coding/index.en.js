import Expression from '../../components/Dictionary/en/Expression'
import Interpreter from '../../components/Dictionary/en/Interpreter'
import Link from '../../components/TranslatedLink'
import YTVideo from '../../components/YTVideo'
import { Helmet } from 'react-helmet'

export default function CodingIntro() {
  return (
    <div className="coding-intro">
      <h1 className="title">Chapter 3</h1>
      <Helmet>
        <title>🛣️ Stepping into Coding</title>
        <meta name="description" content="An introduction to coding in JavaScript" />
      </Helmet>
      <ol className="toc pages">
        <li>
          <Link to="/coding#lesson">#3.0 🛣️ Stepping into Coding</Link>
        </li>
        <li>
          <Link to="/coding/primitives">#3.1 📊 Basic Data Types</Link>
        </li>
        <li>
          <Link to="/coding/essential-tools">#3.2 🔨 Essential Tools</Link>
        </li>
      </ol>
      <h2 id="lesson">#3.0 🛣️ Stepping into Coding</h2>
      <br />
      <span className="introCard">
        <YTVideo url="MAlSjtxy5ak" thumbnail="/images/coding-tutorial-meme.jpg" />
        (this video is a joke)
      </span>

      <p>
        How is JS (JavaScript) code written? JavaScript code is just a series of logical{' '}
        <Expression>expressions</Expression> (like little logic models) that are run by the{' '}
        <Interpreter>JavaScript Interpreter</Interpreter> in a particular order. Each line is
        evaluated one at a time from top to bottom and left-to-right like English. The{' '}
        <Interpreter /> also understands and applies the rules of{' '}
        <a target="_blank" href="https://www.mathsisfun.com/operation-order-pemdas.html">
          PEMDAS
        </a>
        . Every line of code you write should combine cohesively in order to form a well functioning
        program.
        <br />
        <br />
        Coding doesn't have to be frustrating, let's try to have some fun with it. In this section I
        hope it will become clear how you can take an approach based on logic models to write basic
        code. I'm going to be providing many examples, and if you get stuck it's okay to continue on
        and come back later. Try to get a feel for what is going on overall by toying with the code.
      </p>
      <Link className="next" to="/coding/primitives">
        Next: #3.1 📊 Basic Data Types
      </Link>
    </div>
  )
}
