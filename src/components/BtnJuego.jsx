/**
 * BtnJuego es un componente de botón personalizado que utiliza forwardRef para pasar referencias.
 * 
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.color - El color del botón.
 * @param {string} props.colorProp - Clase CSS adicional para el color del botón.
 * @param {string} props.bordes - Clase CSS para los bordes del botón.
 * @param {function} props.onClick - Función que se ejecuta al hacer clic en el botón.
 * @param {React.Ref} ref - Referencia pasada al botón.
 * 
 * @returns {JSX.Element} Un botón con estilos personalizados.
 */
import {forwardRef} from 'react'



// eslint-disable-next-line react/prop-types
const BtnJuego = forwardRef (({color, colorProp, bordes, onClick}, ref) => (
    <button
     color={color} 
     className={`${bordes} ${colorProp} w-[140px] sm:w-[250px] h-[140px] sm:h-[250px] m-2 sm:m-3  duration-100`}
     onClick={onClick}
     ref={ref}>
     </button>
    
    ));

    BtnJuego.displayName = "BtnJuego";

export default BtnJuego;
