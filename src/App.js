import './App.css';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Pelicula from './components/Pelicula';





function App() {
  return (
    <Container>
      <Row>
        <Pelicula
          img="../img/1.jpg"
          titulo="Angry Birds 2: The movie"
          descripcion="Los amigos emplumados deben unirse a los cerdos verdes cuando las agresivas aves planean destruirlos a ambos."
        ></Pelicula>

        <Pelicula
          img="../img/2.webp"
          titulo="Toy Story"
          descripcion=" Woody, el juguete favorito de Andy, se siente amenazado por la inesperada llegada de Buzz Lightyear, el guardián del espacio."
        ></Pelicula>

        <Pelicula
          img="../img/3.webp"
          titulo="Jurassic World: Dominion"
          descripcion="Tiempo después de los sucesos de Fallen Kingdom, los dinosaurios han vuelto a tomar el control en toda la tierra y los humanos tendrán que aprender a convivir con ellos mientras que un nuevo problema pondrá alta tensión a la situación. Owen Grady y Claire Dearing unirán fuerzas junto con la ayuda del famoso paleontólogo Alan Grant, la doctora Ellie Satler y el Doctor Ian Malcolm para resolverlo."
        ></Pelicula>

        <Pelicula
          img="../img/4.jpg"
          titulo="El Origen de los Guardianes"
          descripcion=" Una oscura amenaza pretende robarles a los niños sus esperanzas y sus sueños: es el perverso Sombra, que quiere conquistar el mundo sembrando el miedo. Los guardianes solicitan ayuda al reticente Jack Escarcha para enfrentarse a Sombra."
        ></Pelicula>

        <Pelicula
          img="../img/5.webp"
          titulo="Angry birds: The Movie"
          descripcion=" La historia se desarrolla en una isla poblada por aves felices que no vuelan. En este paraíso, Red, un pájaro con muy mal genio, el veloz Chuck y el volátil Bomb nunca encajaron. Todo cambia cuando llegan a la isla unos misteriosos cerditos verdes."
        ></Pelicula>

        <Pelicula
          img="../img/6.jpg"
          titulo="Avatar"
          descripcion="En un exuberante planeta llamado Pandora viven los Na'vi, seres que aparentan ser primitivos pero que en realidad son muy evolucionados. Debido a que el ambiente de Pandora es venenoso, los híbridos humanos/Na'vi, llamados Avatares, están relacionados con las mentes humanas, lo que les permite moverse libremente por Pandora. Jake Sully, un exinfante de marina paralítico se transforma a través de un Avatar, y se enamora de una mujer Na'vi."
        ></Pelicula>

        <Pelicula
          img="../img/7.webp"
          titulo="Pinocho"
          descripcion="Pepe Grillo cuenta la historia de una marioneta de madera que tiene la oportunidad de convertirse en un chico real."
        ></Pelicula>

        <Pelicula
          img="../img/32.jpg"
          titulo="Actividad Paranormal"
          descripcion="La historia se centra en una joven pareja conformada por Katie y Micah, que es atormentada por un ente paranormal en su propia casa. La cinta es presentada como un documental, usando el material registrado por la cámara que los protagonistas instalaron (de manera similar a las películas The Blair Witch Project y The Last Broadcast). Aunque esta vez, en vez de estar orientada a crear terror, se centra más en el suspenso."
        ></Pelicula>

        <Pelicula
          img="../img/9.jpg"
          titulo="Guardianes de la Galaxia"
          descripcion="Un aventurero espacial se convierte en la presa de unos cazadores de tesoros después de robar el orbe de un villano traicionero. Cuando descubre su poder, debe hallar la forma de unir a unos rivales para salvar al universo."
        ></Pelicula>

        <Pelicula
          img="../img/10.webp"
          titulo="Soul"
          descripcion="Un profesor de música que ha perdido la pasión se transporta fuera de su cuerpo al Gran Antes y debe encontrar el camino de regreso con la ayuda de un alma infantil que aprende sobre sí misma."
        ></Pelicula>

        <Pelicula
          img="../img/11.jpg"
          titulo="Avengers: EndGame"
          descripcion="Los Vengadores restantes deben encontrar una manera de recuperar a sus aliados para un enfrentamiento épico con Thanos, el malvado que diezmó el planeta y el universo."
        ></Pelicula>

        <Pelicula
          img="../img/12.jpg"
          titulo="Joker"
          descripcion="Arthur Fleck adora hacer reír a la gente, pero su carrera como comediante es un fracaso. El repudio social, la marginación y una serie de trágicos acontecimientos lo conducen por el sendero de la locura y, finalmente, cae en el mundo del crimen."
        ></Pelicula>

      </Row>
    </Container>
  );
}

export default App;
