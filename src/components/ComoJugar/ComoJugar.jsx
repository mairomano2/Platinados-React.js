import { Link } from "react-router-dom"
import "./comoJugar.css"

export function ComoJugar(){
  return(
    <div className="div-general">
      <h1 className="titulo titulo--margen">Cómo jugar</h1>
      <div className="distribucion">
        <section className="estilo-misiones distribucion">
          <article>
            <h2 className="subtitulos">Concepto del juego</h2>
            <p className="parrafos">Platinados concive la vida como un juego. Cada persona tiene una misión general en este mundo y nos la autoasignamos a medida que vamos viviendo. Para algunos puede ser tener un buen trabajo, formar una familia, viajar, ayudar a otras personas. En fin, hay una enorme variedad de sentidos que podemos darle a nuestras vidas, y en mayor parte, está en nuestras manos llegar a cumplir esos objetivos que tanto soñamos alcanzar.</p>
            <p className="parrafos">A este objetivo que da sentido a nuestra vida nos gusta llamarlo "Mision general" y es allí donde ponemos mayor esfuerzo y planificación para hacerlo realidad. Pero ¿existe un único propósito que nos mueve en el día a día para hacer todo lo que hacemos? Nosotros pensamos que no. Creemos que en la cotidianidad tenemos una enorme cantidad de pequeños objetivos que son tan importantes para nuestra felicidad como las misiones generales que ejegimos. Estas son las "Misiones secundarias".</p>
            <p className="parrafos">Esta plataforma está para ayudarte a cumplir tus misiones secundarias y motivarte a platinar el juego de la vida. Como su nombre lo indica, las misiones secundarias que proponemos probablemente no sumen mucho a tu objetivo mayor pero pueden ser un disparador para ayudarte a mejorar algunas de tus habilidades o hacer esas cosas que venís posponiendo hace mucho tiempo. Platinados te ofrece una serie de misiones pensadas por nosotros, pero también podés crear tus propias misiones y personalizar esta experiencia.</p>
            <p className="parrafos">Esperamos poder ayudarte a completar el tablero de las misiones secundarias del juego de tu vida. ¡A por todo, aventurero!</p>
          </article>
        </section>
        <img src="imagenes/gummy-gameboy.png" className="img-deco" />
      </div>
        <section className="estilo-misiones">
          <article>
            <h2 className="subtitulos">Instructivo</h2>
            <p className="parrafos">¡Gracias por unirte a Platinados! Primero que nada vas a necesitar <Link to="/">registrate</Link> para que guardar tu progreso.</p>
            <p className="parrafos">Para comenzar a jugar tenés que acceder a la sección <Link to="/misiones">misiones</Link>. Podés empezar haciendo las misiones que te proponemos (verás que son muy variadas: hay de cocina, salud, finanzas personaes, etc.) o crear una misión personalizada. A las misiones personalizadas deberás asignales un titulo, una descripción y un puntaje.</p>
            <p className="parrafos">Todas las misiones que quieras hacer se agregan a tu <Link to="/misionesCompletadas">lista de metas</Link> se suman haciendo click en el botón <img src="imagenes/add.png" width="20px" /> que hay en cada misión a excepción de las misiones personalizadas que se agregan automáticamente una vez cargados todos los datos.</p>
            <p className="parrafos">Cada misión que marques como completada sumará la cantidad de puntos que indica. Estos puntos son exclusivamente para vos, no tienen valor de competencia para ningun otro jugador ya que este juego no se trata de la competitividad sino del desarollo personal. Por último te aconsejamos tener honestidad con vos mismo y marcar como completadas las misiones que sientas que realmente hayas termiando y sientas que lograste un buen resultado.</p>
          </article>
        </section>
        <Link to="/misiones">
          <button className="boton-personalizado">Comenzar a jugar</button>
        </Link>
    </div>
  )
}