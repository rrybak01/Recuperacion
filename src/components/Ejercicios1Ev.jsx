import React from 'react';
//import '../ev_1_code.js';

class Ejercicio1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="ej1">
        <h2>Primera Evaluación (parte práctica)</h2>
        <p>
          Resuelve los ejercicios propuestos únicamente mediante código
          Javascript. Guarda las respuestas en un fichero con nombre{' '}
          <code>ev_1_code.js</code> en la carpeta /src (descomenta la línea para
          importarlo).{' '}
        </p>
        <ul>
          <li>
            Haz una función que almacene las coordenadas en las que se ha hecho
            click en pantalla las dos últimas veces y calcule la distancia en
            píxeles entre ambas posiciones. Muestra esa salida en el elemento
            mostrado a continuación <b>(3 puntos)</b>:
            <div class="sol-div">
              <ul>
                <li id="penultimo-click">Penúltimo click:</li>
                <li id="ultimo-click">Ultimo click:</li>
                <li id="distancia">Distancia entre los puntos:</li>
              </ul>
            </div>
          </li>
          La fórmula para calcular la distancia entre dos puntos es: <p />
          <img
            width="300"
            src="https://www.neurochispas.com/wp-content/uploads/2021/08/formula-para-la-distancia-en-el-plano-cartesiano.png"
          />
          <li>
            Crea un formulario con los siguientes campos:
            <ul>
              <li>
                Texto: campo de tipo <code>textarea</code>
              </li>
              <li>Palabra a contar: input de tipo texto</li>
              <li>Un botón con el texto "Contar ocurrencias"</li>
            </ul>
            De modo que, al hacer click en el botón, se cuente el número de
            veces que aparece la palabra en el campo "Texto" <b>(3 puntos)</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default Ejercicio1;
