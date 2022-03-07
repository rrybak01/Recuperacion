import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import uuid from 'react-uuid';

class Ejercicio2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listaChistes: [] };
  }

  async componenteDidMount() {
    const JokeAPI = require('sv443-joke-api');
    JokeAPI.getJokes()
      .then((res) => res.json())
      .then((data) => this.setState({ listaLibros: data }));
    /**fetch('https://v2.jokeapi.dev/joke/Any?lang=es&type=twopart&amount=3')
      .then((resp) => resp.json())
      .then((data) => this.setState({ listaLibros: data }));**/
  }

  render() {
    return (
      <div id="ej2">
        <h2>Segunda Evaluación</h2>
        <ul>
          <li>
            Utiliza la API REST de chistes{' '}
            <a href="https://sv443.net/jokeapi/v2/#try-it">Joke API</a> para
            generar una lista de elementos. La API se ha de llamar con los
            siguientes parámetros<b> (3,5 puntos)</b>:
            <ul>
              <li>Idioma: español</li>
              <li>Tipo de chiste: twopart</li>
              <li>Número máximo de resultados: 3</li>
            </ul>
            Los elementos de la lista tendrán el formato siguiente:
            <ul>
              <li>setup - delivery</li>
            </ul>
          </li>
          <li>
            Utiliza los datos que devuelve la API del ejercicio anterior para
            generar elementos{' '}
            <a href="https://react-bootstrap.github.io/components/accordion/">
              Accordion
            </a>{' '}
            de React Bootstrap, de forma que<b> (3,5 puntos)</b>:
          </li>
          <ul>
            <li>
              Cada elemento ha de tener una clave única generada con el
              componente de react-uuid
            </li>
            <li>
              En el campo Accordion.Header se mostrará el campo "setup" de la
              respuesta
            </li>
            <li>
              En el campo Accordion.Body se mostrará el campo "delivery" de la
              respuesta
            </li>
          </ul>
          <li>
            Añade un formulario con una lista desplegable que permita
            seleccionar el idioma de los chistes devueltos por la API y un botón
            que actualice el listado de chistes<b> (1,5 puntos)</b>
          </li>
          <li>
            Genera la lista desplegable del apartado anterior a partir del
            resultado devuelto por el endpoint de la API{' '}
            <a href="https://v2.jokeapi.dev/languages">/languages</a> (campo
            jokeLanguages)<b> (1,5 puntos)</b>
          </li>
        </ul>

        <div>
          <h1>LISTA DE CHISTES</h1>

          <ul>
            {this.state.listaChistes.map(function generaElemento(item) {
              return (
                <li>
                  {item.setup} - {item.delivery}
                </li>
              );
            })}
          </ul>

          <Accordion defaultActiveKey="0">
            {this.state.listaChistes.map(function generaElemento(item) {
              return (
                <Accordion.Item eventKey={uuid()}>
                  <Accordion.Header>{item.setup}</Accordion.Header>
                  <Accordion.Body>{item.delivery}</Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </div>
      </div>
    );
  }
}

export default Ejercicio2;
