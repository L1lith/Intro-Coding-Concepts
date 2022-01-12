import Link from '../../components/TranslatedLink'
import YTVideo from '../../components/YTVideo'
import { Helmet } from 'react-helmet'

export default function Publishing() {
  return (
    <div className="publishing">
      <Helmet>
        <title>🏆 Compartiendo tu juego RPG</title>
      </Helmet>
      <h2>#4.2 🏆 Compartiendo tu juego RPG</h2>
      <br />
      <div className="introCard">
        <YTVideo url="_nuS86ITjIM" thumbnail="/images/sanctuary-rpg.jpg" />
        Tu imaginación es tu límite
      </div>
      <p>
        ¡Felicitaciones, has aprendido JavaScript básico y estás listo para crear tu propio juego!
        Para comenzar a trabajar, abra el{' '}
        <Link className="to-editor" to="/rpg/editor">
          Editor de juegos
        </Link>
        . ¡Asegúrate de guardar tu URL para no perder tu juego para siempre! ¡Puedes compartir la
        URL con tus amigos y ellos pueden jugar tu juego!
        <br />
        <br />
        ¿Hiciste un juego de rol genial? Envía una solicitud para que tu juego aparezca en este
        sitio web{' '}
        <a
          className="bold"
          href="https://github.com/L1lith/Your-First-RPG/issues/new?assignees=&labels=rpg+display&template=display-your-project-on-the-site.md">
          aquí
        </a>{' '}
        😊
      </p>
      <Link className="next" to="/rpg/editor">
        #4.3 🛠️ La editora de juegos
      </Link>
    </div>
  )
}
