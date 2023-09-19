 
import './campo.css'

const Campo = (props) =>{  
    
    const placeholderModificado = `${props.placeholder}...`

    //Destructuración
    const { type='texto' } = props;

    const manejarCambio =(e)=>{  
        props.actualizarValor(e.target.value); 
    }

    return  <div className={`campo campo-${type}`}>
                <label>{props.titulo}</label>
                <input   
                    type={type} 
                    placeholder={placeholderModificado} 
                    required={props.required} 
                    value={props.valor}
                    onChange={manejarCambio} 
                />
            </div>
}
export default Campo