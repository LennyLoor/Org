 
import './miOrg.css'

const MiOrg = (props) => { 
    return  <section className="org__section">
                <h3 className='title' >Mi organización</h3>
                <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
            </section>
}
export default MiOrg