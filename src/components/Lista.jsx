import React,{useState}  from "react";

const Lista =(props)=>{
    const [tarea,setTarea]=useState('');
    
    const envio=(e)=>{
        e.preventDefault();
        props.msg(tarea);
        props.contro();
    }
    return(<div>
        <form  onSubmit={envio} className="container">
            <div className="form">
                <label htmlFor="color" className="label-conten">Agregar tarea</label>
                <input className="form_input" type="text" id="color" value={tarea} onChange={(e)=>{
                    setTarea(e.target.value)
                }}/>
                <button className="btn" type="submit">Add</button>
            </div>
        </form>
    </div>)
}

export default Lista