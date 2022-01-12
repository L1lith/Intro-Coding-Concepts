import CodeSandbox from '../../components/CodeSandbox'
import BooleanDef from '../../components/Dictionary/es/BooleanDef'
import Expression from '../../components/Dictionary/es/Expression'
import FunctionDef from '../../components/Dictionary/es/FunctionDef'
import RPG from '../../components/Dictionary/es/RPG'
import Scope from '../../components/Dictionary/es/Scope'
import StringDef from '../../components/Dictionary/es/StringDef'
import Variable from '../../components/Dictionary/es/Variable'
import Link from '../../components/TranslatedLink'
import YTVideo from '../../components/YTVideo'
import { play } from '../../styles/rpg/communication.module.scss'
import { Helmet } from 'react-helmet'

export default function Communication() {
  return (
    <div className="communication">
      <Helmet>
        <title>🗣️ Comunicarse con el jugador</title>
      </Helmet>
      <h2>#4.1 🗣️ Comunicarse con el jugador</h2>
      <span className="introCard">
        <YTVideo
          url="7yeA7a0uS3A"
          query={{ start: 29, cc_lang_pref: 'es', cc_load_policy: '1' }}
          thumbnail="/images/heman-title.jpg"
        />
        Mitad dragón mitad tigre se vende por separado
      </span>
      <p>
        Ahora que hemos establecido los conceptos básicos, apliquémonos y divirtámonos un poco 😊
        Antes de ti construye tu <RPG /> primero debemos aprender cómo obtener información y enviar
        mensajes al jugador. No sirve de nada codificar una aventura si no hay forma de interactuar
        con ella.
      </p>
      <div className="comments">
        <h2>Comments</h2>
        <p>
          Los comentarios nos permiten escribir cosas en nuestro código que son puramente para
          notación (como escribir notas en matemáticas). Cualquier cosa en la misma línea que venga
          después de "//" no se usará mientras se ejecuta el código.
          <br />
          <br />
          Podemos usar comentarios para cosas como agregar un mensaje TODO para que pueda volver a
          agregar algo más tarde, o podemos usarlo para ayudar a explicar cómo funciona nuestro
          código.
        </p>
        <CodeSandbox
          value={"console.log(4 + 6)\n// This part doesn't have to be valid JavaScript code"}
          consoleMode
          disableAutoRun
          className="mini"
        />
      </div>
      <div className="js-io">
        <h2>Input/Output for Communicating with the Player</h2>
        <p>
          Si bien la modificación del contenido de una página web (realizada a través de HTML) está
          fuera del <Scope /> de este proyecto, ¡aún podemos comunicarnos con el reproductor desde
          JavaScript! Podemos hacer esto usando las funciones de aviso y alerta. A partir de ahora,
          si desea ejecutar el código en los editores,{' '}
          <span className="bold">
            primero debe presionar el botón <span className={play}>▶</span>
          </span>
          . Intente ejecutar los siguientes ejemplos:
        </p>
        <h3>Output: Alert</h3>
        <CodeSandbox
          value="alert('Your princess is in another castle')"
          consoleMode
          disableAutoRun
          className="mini"
        />
        <h3>Input: Prompt</h3>
        <p>
          Podemos pedirle a un usuario una entrada y guardarla en una <Variable /> para usarla más
          tarde
        </p>
        <CodeSandbox
          value={
            "var user = prompt('What is your name?')\nalert('Wishing ' + user + ' good fortune 💰')"
          }
          consoleMode
          disableAutoRun
          className="mini"
        />
        <p>
          Nota: En el desarrollo web normal, se desaconseja el uso de las funciones de alerta y
          aviso. Esto se debe a que crear un diálogo dentro de la página (usando HTML) en lugar de
          dentro de los cuadros emergentes de los navegadores son menos discordantes.
        </p>
      </div>
      <div className="flow-control">
        <h2>Flow Control</h2>
        <p>
          El control de flujo nos permite establecer opciones de ramificación en nuestro modelo
          lógico usando lógica <BooleanDef />. Puede decir algo como "si x es cierto, entonces haga
          y, o de lo contrario haga z". Nos permite crear un código flexible que elige la ruta
          adecuada para completar correctamente la tarea. Puede leer más sobre el control de flujo{' '}
          <a
            target="_blank"
            href="https://vanessamarely.medium.com/estructuras-de-control-de-flujo-en-javascript-c848337a5c02">
            aquí.
          </a>
          <br />
        </p>
        <h3>if/else</h3>
        <p>
          Puede usar combinaciones de if y else para crear poderosos modelos de toma de decisiones
          usando <Expression>expressions</Expression> que devuelven{' '}
          <BooleanDef>booleans</BooleanDef> para hacer preguntas de sí o no. Aquí tenemos un ejemplo
          de hacer algo basado en la entrada del usuario
        </p>
        <CodeSandbox
          value={
            '// Notice that any spaces or uppercases will cause the equality to fail, so "YES" will give the wrong result\nif(prompt("Do you like oatmeal raisin cookies?") === "yes") { \n    alert("You have good taste in 🍪")\n} else { // They entered anything besides exactly "yes"\n    alert("Maybe 🍪 just aren\'t your thing?")\n}'
          }
          consoleMode
          disableAutoRun
          className="short"
        />
        <p>También podemos encadenar múltiples si para tener múltiples resultados.</p>

        <CodeSandbox
          value={
            'var favoriteCookie = prompt("What\'s your favorite kind of cookie?")\nif(favoriteCookie === "oatmeal" || favoriteCookie === "oatmeal raisin") { \n    alert("You have good taste in 🍪")\n} else if (favoriteCookie === "chocolate chip") {\n    alert("Chocolate chip is the second best cookie so that\'s understandable")\n} else {\n    alert("Maybe 🍪 just aren\'t your thing?")\n}'
          }
          consoleMode
          disableAutoRun
          className="short"
        />
        <h3>while</h3>
        <p>
          Puede usar el bucle while para seguir haciendo algo hasta que la <BooleanDef />{' '}
          <Expression /> devuelva falso. Mire aquí cómo podemos pedir repetidamente al usuario su
          nombre hasta que devuelva un nombre válido (si falta un nombre, no es válido, si el
          usuario sale del mensaje, el mensaje devuelve nulo, por lo que debemos volver a
          intentarlo).
        </p>
        <CodeSandbox
          disableAutoRun
          consoleMode
          value={
            'var name\nwhile(!name) {\n    name = prompt("What is your name adventurer?")\n}\nalert("You wake up on a strange beach. \'" + name + "\' is written on the inside of your shirt.")'
          }
          className="short"
        />
      </div>
      <div>
        <h2>Better text Handling</h2>
        <p>
          Creé esta <FunctionDef /> para ayudarlo a asegurarse de recibir una entrada válida. Las
          cadenas proporcionan <FunctionDef /> .trim(...) para eliminar todos los espacios al
          principio y al final. Aquí comprobamos que la cadena recortada tiene al menos 1 carácter
          de largo (lo que significa que hay al menos 1 sin espacio personaje). Luego devolvemos la
          cadena recortada ya que probablemente no nos importen los espacios y puede dificultar la
          coincidencia de cadenas más adelante (por ejemplo, "yes" === "yes" devolverá false, pero
          si recortamos el texto no tenemos este problema)
        </p>
        <CodeSandbox
          disableAutoRun
          consoleMode
          value={`function smartPrompt(question) {
    var output = null
    // While will keep running the code inside it over and over until the expression evaluates to false
    while(output === null || output.trim().length < 1) { 
        output = prompt(question)
    }
    return output.trim()
}

var name = smartPrompt("What is your name adventurer?")

alert("You wake up on a strange beach. '" + name + "' is written on the inside of your shirt.")`}
        />
        <p>
          Consola Ejecute el programa para ver su salida Aquí combinamos la <FunctionDef />{' '}
          .toLowerCase (puede usarla para convertir cualquier <StringDef /> en minúsculas) y nuestra{' '}
          <FunctionDef />
          smartPrompt. Observe cómo, cuando lo ejecutamos, aún reconoce una entrada de sí, incluso
          si tiene espacios en blanco alrededor o no está en minúsculas.
        </p>
        <CodeSandbox
          value={`function smartPrompt(question) {
    var output = null
    while(output === null || output.trim().length < 1) {
        output = prompt(question)
    }
    return output.trim()
}
// Now it accepts "  yes  ", "YES", "  yEs   ", etc
if(smartPrompt("Do you like oatmeal raisin cookies?").toLowerCase() === "yes") { \n    alert("You have good taste in 🍪")\n} else {\n    alert("Maybe 🍪 just aren\'t your thing?")\n}`}
          consoleMode
          disableAutoRun
        />
      </div>
      <Link className="next" to="/rpg/publishing">
        Next: #4.2 🏆 Compartiendo tu juego RPG
      </Link>
    </div>
  )
}
