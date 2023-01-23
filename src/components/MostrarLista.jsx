import React from "react";


const MostrarLista =(props)=>{
    const tareas=props.add
    const isChecked=props.checked;
    const comprobar = (position) => {
        const updatedCheckedState = isChecked.map((item, index) =>
          index === position ? !item : item
        );
        props.checkedControl(updatedCheckedState);
    }
       
    return(<div className="container-lista">
            {tareas.map((e,idx)=>{
            return <div className="lista" key={idx}><label><input type="checkbox" checked={isChecked[idx]} onChange={()=>comprobar(idx)} /> {!isChecked[idx]?e:<strike>{e}</strike>}</label><button className="btn-delate" value={e} onClick={()=>props.delete(idx)}>delete</button></div>
            })}
    </div>)
}

export default MostrarLista