import React, {useState, useEffect} from "react";
import axios from "axios";


export default function RestApiRequest() {
const [pokemon, usePokemon] = useState([])

//FETCH
// useEffect(() =>{const getPokemon = async () => {
//   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
//   const pokeData = await response.json()
//   usePokemon(pokeData.results)
// }
//   getPokemon()
// },[])

//AXIOS
useEffect(() => {
  try {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/`)
    .then((res) => {
      usePokemon(res.data.results)
    })
    
  } catch (error) {
    console.error(error)
  }
}, []);



  return(
    <div>
       <ul>
        {
          pokemon.map((poke, i) =>
            (
            <li key={i}>{poke.name}</li>
            )
          )
        }
      </ul>
    </div>
  )
}
/**
 * Una API, o interfaz de programación de aplicaciones, es un conjunto de reglas que determinan cómo las aplicaciones o los dispositivos pueden conectarse y comunicarse entre sí. Una API REST es una API que se ajusta a los principios de diseño de REST, un estilo de arquitectura también denominado transferencia de estado representacional
 */


/*¿Qué es REST?
La transferencia de estado representacional (REST) es una arquitectura de software que impone condiciones sobre cómo debe funcionar una API. 
*/
/*
Los desarrolladores de API pueden diseñar API por medio de varias arquitecturas diferentes. Las API que siguen el estilo arquitectónico de REST se llaman API REST.
*/

/*
A continuación, se presentan algunos de los principios del estilo arquitectónico de REST:
 
1. Interfaz uniforme: Todas las solicitudes de API para el mismo recurso deben ser iguales, independientemente de la procedencia de la solicitud.

2. Separación entre cliente y servidor: En el diseño de API REST, las aplicaciones de cliente y de servidor deben ser completamente independientes entre sí. La única información que la aplicación de cliente debe conocer es el URI del recurso solicitado. 

3. Sin estado. Las API REST son sin estado, lo que significa que cada solicitud debe incluir toda la información necesaria para procesarla.

4. Capacidad de almacenamiento en memoria caché. Siempre que sea posible, los recursos deben poder almacenarse en la memoria caché en el lado del cliente o el servidor. Las respuestas de servidor también necesitan contener información de si el almacenamiento en memoria caché está permitido para el recurso entregado. 

5. Arquitectura de sistema de capas. En las API REST, las llamadas y respuestas pasan por diferentes capas. Como regla general, no debe suponer que las aplicaciones de cliente y de servidor se conectan directamente entre sí.

6. Código bajo demanda (opcional). Generalmente, las API REST envían recursos estáticos, pero en algunos casos, las respuestas también pueden contener un código ejecutable (como applets de Java). En estos casos, el código solo debería ejecutarse bajo demanda.

*/