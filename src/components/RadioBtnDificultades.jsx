/**
 * Componente RadioBtnDificultades
 * 
 * Este componente renderiza un conjunto de botones de radio para seleccionar la dificultad del juego.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {function} props.onChangeDificultad - Función que se llama cuando se selecciona una dificultad. 
 * Recibe un parámetro `tiempo` que indica el tiempo asociado a la dificultad seleccionada.
 * 
 * @returns {JSX.Element} Un contenedor con botones de dificultad.
 */
import BtnDificultades from "./BtnDificultades";



// eslint-disable-next-line react/prop-types
const RadioBtnDificultades = ({ onChangeDificultad }) => {
    const handleDificultadClick = (dificultad) => {
        let tiempo;
        switch (dificultad) {
            case "FACIL":
                tiempo = 400;
                break;
            case "MEDIO":
                tiempo = 300;
                break;
            case "DIFICIL":
                tiempo = 120;
                break;
            default:
                tiempo = 400;
        }
        onChangeDificultad(tiempo);
    };

    return (
        <div className=" relative flex flex-wrap justify-center items-center rounded-3xl bg-neutral-500 box-border shadow-sm p-1 w-80 h-11 text-base">
            <BtnDificultades text={"FACIL"} onClick={()=> handleDificultadClick("FACIL")}/>
            <BtnDificultades text={"MEDIO"} onClick={()=> handleDificultadClick("MEDIO")}/>
            <BtnDificultades text={"DIFICIL"} onClick={()=> handleDificultadClick("DIFICIL")}/>
        </div>
    );
};

export default RadioBtnDificultades;
