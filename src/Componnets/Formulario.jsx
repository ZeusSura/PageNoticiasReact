import React from "react";
import useSelect from '../Hooks/useSelect'
import styles from './Formulario.module.css'


const Formulario = ({setCategoria}) => {



    const OPCIONES =[
        {value:'general',label:'General' },
        {value:'business',label:'Negocios' },
        {value:'entertainment',label:'Entrenimiento' },
        {value:'health',label:'Salud'},
        {value:'science',label:'Ciencia'},
        {value:'sports',label:'Deportes'},
        {value:'technology',label:'Tecnología'}
    ]
    const[categoria,SelectNoticias] = useSelect('general',OPCIONES)

    //Evento submit
    const buscarCategoria = e =>{
        e.preventDefault()
        setCategoria(categoria)
    }

    return (
        <div className={` row ${styles.buscador}`}>
            <div className="col s12 m8 offset-m2">
                <form
                onSubmit={buscarCategoria}
                >
                    <h2 className={styles.heading}>Encuentra noticias por categoría</h2>
                    <SelectNoticias/>
                    <div className="input-field col s12">
                        <input 
                        type="submit"
                        className={`btn-large amber darken-2 ${styles.btnblock}`}
                        value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    )

};
export default Formulario;
