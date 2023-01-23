import './App.css';
import Lista from './components/Lista';
import MostrarLista from './components/MostrarLista';
import {useState} from 'react';
import EliEleArre from './hooks/EliEleArr';

function App() {
  const [datosControl,setDatosControl]=useState([false]);
  const [datos,setDatos]=useState([]);
  const auxDatos=(e)=>{
    setDatos(old=>[...old,e]);
  }
  const control=()=>{
    setDatosControl(old=>[...old,false]);
  }
  const eliminarDato=(eliminar)=>{
    setDatos(old=>[...EliEleArre(old,eliminar)]);
    setDatosControl(old=>[...EliEleArre(old,eliminar)]);
  }
  return (
    <div className="App">
        <Lista msg={auxDatos} contro={control}/>
        <MostrarLista add={datos} delete={eliminarDato} checked={datosControl} checkedControl={setDatosControl}/>
    </div>
  );
}

export default App;
