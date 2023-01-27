import { useState } from "react";

const Controlado = () => {

    const [title, setTitle ] = useState('');
    const [description, setDescription ] = useState('');
    const [state, setState ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, description, state);
        
    }
    return (
        <form onSubmit={handleSubmit} >
            <input 
                type="text" 
                placeholder="Igresa todo" 
                className="form-control mb-2"
                name="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <textarea 
                className="form-control mb-2" 
                placeholder="Ingrese descripcion"
                name="description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <select 
                className="form-select mb-2" 
                name="state"
                value={state}
                onChange={e => setState(e.target.value)}
            >
                    <option  value="pendiente">Pendiente</option>
                    <option  value="completado">Completado</option>
            </select>
            <button 
                type="submit"
                className="btn btn-primary">
                    Procesar
            </button>
        </form>
    )
};

export default Controlado;
