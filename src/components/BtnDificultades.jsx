

/**
 * Componente de botón que representa una opción de dificultad.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.text - Texto que se mostrará en el botón.
 * @param {function} props.onClick - Función que se ejecutará al hacer clic en el botón.
 * 
 * @returns {JSX.Element} - Elemento JSX que representa el botón.
 */
// eslint-disable-next-line react/prop-types
const Button = ({text, onClick}) => {
    return (
        <div className="flex-1 text-center ">
                <label className="flex items-center justify-center cursor-pointer rounded-md text-gray-800 transition-all duration-150 ease-in-out">
                    <input type="radio" name="radio" className="hidden peer" onClick={onClick}/>
                    <span className="text-white text-xl sm:text-2xl font-bold flex rounded-xl items-center justify-center peer-checked:bg-neutral-600 peer-checked:text-white peer-checked:w-24 peer-checked:rounded-3xl peer-checked:h-9 transition-all duration-700">{text}</span>
                </label>
            </div>
    );
};

export default Button;
