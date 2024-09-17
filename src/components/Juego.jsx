import {useState, useEffect, useRef} from "react";
import BtnJuego from "./BtnJuego";
import Alert from "./Alert";
import HeaderJuego from "./HeaderJuego";
import { colores } from "../consts";

/**
 * El componente Juego representa la lógica principal del juego Simon Says y su interfaz de usuario.
 * 
 * @component
 * @example
 * return (
 *   <Juego />
 * )
 * 
 * @returns {JSX.Element} El componente renderizado.
 * 
 * @description
 * Este componente gestiona el estado y la lógica de un juego Simon Says. Incluye:
 * - `secuencia`: La secuencia de colores que el jugador debe seguir.
 * - `secuenciaJugador`: La posición actual en la secuencia que el jugador ha alcanzado.
 * - `comienzo`: Un booleano que indica si el juego ha comenzado.
 * - `dificultad`: El nivel de dificultad, que afecta la velocidad de la visualización de la secuencia.
 * - `alerta`: Un booleano que indica si se debe mostrar una alerta.
 * 
 * El componente también incluye varias funciones para manejar la lógica del juego:
 * - `handleCambiarDificultad`: Cambia el nivel de dificultad.
 * - `ReiniciarJuego`: Reinicia el estado del juego.
 * - `AgregarColor`: Añade un nuevo color a la secuencia.
 * - `handleSiguiente`: Inicia el juego y añade el primer color a la secuencia.
 * - `handleColorSeleccionado`: Maneja la selección de color del jugador y verifica si coincide con la secuencia.
 * 
 * El componente utiliza `useRef` para referenciar los botones de colores y `useEffect` para mostrar la secuencia al jugador.
 * 
 * @returns {JSX.Element} El componente renderizado.
 */
const Juego = () => {


    const [secuencia, setSecuencia] = useState([]);
    const [secuenciaJugador, setSecuenciaJugador] = useState(0);
    const [comienzo, setComienzo] = useState(false);
    const [dificultad, setDificultad] = useState(1000);
    const [alerta, setAlerta] = useState(false);


    const handleCambiarDificultad = (e) => {
        setDificultad(e);
    }


    const ReiniciarJuego = () => {
        setSecuencia([]);
        setComienzo(false);
        setSecuenciaJugador(0);
      };


    const AgregarColor = () => {
        const color = colores[Math.floor(Math.random() * 4)];
        const nuevaSecuencia = [...secuencia, color];
        setSecuencia(nuevaSecuencia);
    }


    const handleSiguiente = () => {
        if (!comienzo) {
            setComienzo(true);
            AgregarColor();
        }
    }

    const handleColorSeleccionado = (e) => {
        if (comienzo) {
          e.target.classList.add("scale-95");
          e.target.classList.add("brightness-[2]");
    
          setTimeout(() => {
            e.target.classList.remove("scale-95");
            e.target.classList.remove("brightness-[2]");
    
            const clickColor = e.target.getAttribute("color");
    
            if (secuencia[secuenciaJugador] === clickColor) {
              if (secuenciaJugador === secuencia.length - 1) {
                setTimeout(() => {
                  setSecuenciaJugador(0);
                  AgregarColor();
                }, 150);
              }
    
              else {
                setSecuenciaJugador(secuenciaJugador + 1);
              }
            }
        else {
            setAlerta(true);
            setTimeout(() => {
            ReiniciarJuego();
        }, 2000);
       
        }

        }, 120);
    }
    }; 

    const verdeRef  = useRef(null);
    const rojoRef  = useRef(null);
    const amarilloRef  = useRef(null);
    const azulRef  = useRef(null);


    useEffect(() => {
        if (secuencia.length > 0) {
            
            const mostrarSecuencia = (index = 0) => {
                let ref = null;
    
                if (secuencia[index] === "verde") {
                    ref = verdeRef;
                }
    
                if (secuencia[index] === "rojo") {
                    ref = rojoRef;
                }
    
                if (secuencia[index] === "amarillo") {
                    ref = amarilloRef;
                }
    
                if (secuencia[index] === "azul") {
                    ref = azulRef;
                }
    
                setTimeout(() => {
                    ref.current.classList.add("brightness-[2.5]")
    
                    setTimeout(() => {
                        ref.current.classList.remove("brightness-[2.5]")
                        if (index < secuencia.length - 1) {
                            mostrarSecuencia(index + 1);
                        }
                    },dificultad);
                }, dificultad);
            }
            mostrarSecuencia();
        }
    }, [secuencia, dificultad]);

    return (
        <div className="flex justify-center items-center bg-neutral-800 w-screen h-screen">
             {!comienzo && <HeaderJuego onChangeDificultad={handleCambiarDificultad}/>}
             {alerta && <Alert message="Intenta de nuevo." onClose={() => setAlerta(false)} />}
             <div className="relative flex flex-col justify-center items-center mt-16">
                <div>
                    <BtnJuego color="verde" colorProp={"bg-green-700"} bordes={"rounded-3xl"} ref={verdeRef} onClick={handleColorSeleccionado}/>
                    <BtnJuego color="rojo" colorProp={"bg-red-700"} bordes={"rounded-3xl"} ref={rojoRef} onClick={handleColorSeleccionado}/>
                </div> 
                <div> 
                    <BtnJuego color="amarillo" colorProp={"bg-yellow-500"} bordes={"rounded-3xl"} ref={amarilloRef} onClick={handleColorSeleccionado}/>
                    <BtnJuego color="azul" colorProp={"bg-blue-700"} bordes={"rounded-3xl"} ref={azulRef} onClick={handleColorSeleccionado}/>
                </div>

                <button className="absolute bg-neutral-800 text-white text-xl sm:text-2xl font-bold rounded-full w-[120px] sm:w-[140px] h-[120px] sm:h-[140px]"
                        onClick={handleSiguiente}>
                    {comienzo ? secuencia.length : "Comenzar"} 
                </button>
             </div>
        </div>
    )

}

export default Juego;