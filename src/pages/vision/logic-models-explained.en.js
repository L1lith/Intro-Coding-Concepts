import BooleanDef from '../../components/Dictionary/en/BooleanDef'
import Output from '../../components/Dictionary/en/Output'
import Software from '../../components/Dictionary/en/Software'
import Stack from '../../components/Dictionary/en/Stack'
import EasterEgg from '../../components/EasterEgg'
import Link from '../../components/TranslatedLink'
import YTVideo from '../../components/YTVideo'
import hoverVideo from '../../functions/hoverVideo'
import {
  logicModelChart,
  trafficStop
} from '../../styles/vision/logic-models-explained.module.scss'
import { Helmet } from 'react-helmet'

export default function LogicModelsExplained() {
  return (
    <div className="logic-models">
      <Helmet>
        <meta name="description" content="Arranging Logic Models" />
        <title>🧠 Logic Models Explained</title>
      </Helmet>
      <h2>#1.2 🧠 Logic Models Explained</h2>
      <br />
      <span className="introCard">
        <video autoPlay {...hoverVideo()} muted>
          <source src="/video/redstoneContraption.webm" type="video/webm" />
        </video>
        Minecraft is a great place to start your adventure &#58;&#41;
      </span>
      <p>
        Next you will learn about <BooleanDef /> logic and how to visualize them. Visualizing
        logical systems is very useful. The entire world uses logic; like how you do your job, how
        you cross the street, or how you explore a website. We make a lot of decisions without
        realizing that we made them.
      </p>
      {
        null /*<span className="introCard">
      <img src="/images/spaghettiBowl.jpeg" alt="SLC Spaghetti Bowl" />
      Nothing gets the blood pumping quite like being tail-gated around a 90° turn on the freeway.
      <span className="smallerText">
        {' '}
        Credit to <a target="_blank" href="https://www.utahseagull.com/2019/10/">Utah Seagull</a>
      </span>
    </span> */
      }
      <p>
        All logic models have 3 basic components
        <ol className={logicModelChart}>
          <li>
            <span className="bold">Input Data: </span>An incoming source of data to your logic model
            which you can use to make decisions.
          </li>
          <li>
            <span className="bold">Rules:</span> This is the "logic" or "code" of your model. The
            rules are used to decide what the result (or output) of our model is based on the input.
          </li>
          <li>
            <span className="bold">Output Data: </span>What the result of your logic model is.
          </li>
        </ol>
        <br />
        <br />
        Imagine you are a civil engineer trying to optimize the flow of traffic through a very busy
        area. Our input data is the cars going into the freeway and where they want to go. Our{' '}
        <Output /> is the cars going out of the freeway. A civil engineer's logic model decides how
        the cars will get to their destination. This will not only help someone get to work quickly,
        but their decisions will also save lives when reckless driving happens.
        <br />
        <br />
        While watching this video try to notice all the things civil engineers must pay attention to
        when designing highways.
      </p>
      <YTVideo url="9XIjqdk69O4" thumbnail="/images/highway-geometry.jpg" />
      <p>
        "That's great... but how does this apply to coding?" I'm glad you asked! When we are coding
        we too are writing a logic system to handle the input flow of data (like keyboard and mouse
        clicks when exploring a webpage) and the <Output /> flow of information (like displaying a
        webpage or a video-game). As a coder you write (or "code") the logical rules of the system
        (like when the user clicks this link, take them to that page). While creating a computer or
        a roadway from scratch might be very hard, all kinds of engineers take advantage of the
        tools and techniques that have been been in development for longer than we have been alive.
      </p>
      Here's a table describing the logic model we use when we are at a traffic light. Your brain
      provides the decision-making rules of the logic model.
      <table className={trafficStop}>
        <thead>
          <th>Input (Geographical Area)</th>
          <th>Output (Road Type)</th>
        </thead>
        <tr>
          <td>A relatively flat countryside</td>
          <td>A long, straight, and fast-moving highway</td>
        </tr>
        <tr>
          <td>A steep mountainside</td>
          <td>A winding, slow-moving road with a lot of signs</td>
        </tr>
        <tr>
          <td>A crowded city</td>
          <td>A very wide freeway with lots of entrances and exits</td>
        </tr>
      </table>
      <p>
        In coding we have a set of <Software /> and methodology that makes describing our logical
        system much easier. In the world of website development, we call this a <Stack />. Much like
        a civil engineer must consider the effectiveness of a roadway system, when building a
        website we must consider many aspects of the system, like cyber safety (allowing unsafe
        input data has led to many people getting hacked), user experience, and visual appeal. By
        better understanding the logic models behind our <Software /> we better understand where the
        issues arise, preventing terrible database leaks and user rage-quits before they ever
        happen.
      </p>
      <YTVideo url="qybUFnY7Y8w" thumbnail="/images/this-too-shall-pass.jpg" />
      <span className="italic">it works perfectly 60% of the time!</span>
      <p>
        When coding it's important to think about our project from the beginning all the way to end.
        Most bugs stem from coders thinking "it's not my job" or not putting that extra effort to
        consider edge cases because "it worked when I ran it". You must remember the 3 components of
        your logic model, so first consider your users' <span className="bold">input</span>. When
        exploring a site the user gives many inputs, like clicking a link, scrolling the page,
        logging in, or submitting a form.
        <br />
        <br />
        Next you must think about every step in your code, and how these{' '}
        <span className="bold">rules</span> ultimately handle your users' input and translates them
        into the program's <Output />. Don't cut corners or leave problems for someone else to deal
        with. Building the best <Software /> you can the first time (you'll definitely write some
        messy code starting out, but after you make your first draft of something try to come back
        and look for ways to improve it) will save you a lot of time later on. Understand the deep
        inner workings of your <Stack /> by{' '}
        <span className="underline">toying around with it and asking questions</span>
        !
        <br />
        <br />
        The <Output /> is what the users of your app experience (this is a{' '}
        <span className="underline">critical</span> aspect of your logic model), so when coding you
        must always think about what your users are trying to achieve, and not only all the possible
        issues and bugs they could run into, but also how to make your <Software /> straightforward
        and convenient. Like good road design, your <Software /> should effectively serve your
        users, instead of forcing your users to be focused trying to deal with your poorly designed{' '}
        <Software />. Take responsibility as an coder for avoidable crashes and other issues that
        arise with your <Software />.
      </p>
      <Link className="next" to="/toying">
        Next: #2.0 🧩 Playing around with Logic Puzzles
      </Link>
      <br />
      <br />
      <EasterEgg>
        <p>Bonus: Liked the Rube Goldberg Machine?</p>
        <YTVideo url="Av07QiqmsoA" thumbnail="/images/lifes-lemons.jpg" />
      </EasterEgg>
    </div>
  )
}
