

/**
 * Componente de alerta que muestra un mensaje y un botón de cierre.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.message - El mensaje a mostrar en la alerta.
 * @param {Function} props.onClose - Función que se ejecuta al hacer clic en el botón de cierre.
 * @returns {JSX.Element} El componente de alerta.
 */
// eslint-disable-next-line react/prop-types
const Alert = ({ message, onClose }) => {
    return (
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded z-50 max-w-lg w-full" role="alert">
        <strong className="font-bold">¡Perdiste!   </strong>
        <span className="block sm:inline">{message}</span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg
            className="fill-current h-6 w-6 text-red-500 cursor-pointer"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            onClick={onClose}
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
          </svg>
        </span>
      </div>
    );
  };
  
  export default Alert;
  