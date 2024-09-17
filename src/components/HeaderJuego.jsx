/**
 * Componente HeaderJuego
 * 
 * Este componente representa el encabezado del juego y contiene un componente RadioBtnDificultades
 * que permite cambiar la dificultad del juego.
 * 
 * @param {Object} props - Las propiedades del componente.
 * @param {function} props.onChangeDificultad - Función que se ejecuta cuando se cambia la dificultad.
 * 
 * @returns {JSX.Element} El componente HeaderJuego.
 */
import RadioBtnDificultades from "./RadioBtnDificultades";



// eslint-disable-next-line react/prop-types
const HeaderJuego = ({onChangeDificultad}) => {
    return (
        <header className="absolute top-0 left-0 right-0 flex justify-center items-center p-4 mt-10 animate-pulse">
              <RadioBtnDificultades onChangeDificultad={onChangeDificultad}/> 
        </header>
    );
    
}

export default HeaderJuego;