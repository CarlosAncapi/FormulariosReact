import { useRef } from "react";

const NoControlado = () => {

    const form = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("me diste click");
        console.log(form.current);
    }
    return (
        <form onSubmit={handleSubmit} ref={form}>
            <input 
                type="text" 
                placeholder="Igresa todo" 
                className="form-control mb-2"
                name="title"
            />
            <textarea 
                className="form-control mb-2" 
                placeholder="Ingrese descripcion"
                name="description"
            />
            <select 
                className="form-select mb-2" 
                name="state">
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

export default NoControlado;
