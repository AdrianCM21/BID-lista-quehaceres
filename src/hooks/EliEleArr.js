const EliEleArre=(arr,eli)=>{
    let nuevoArr;
    nuevoArr=arr.filter((item,index)=> index !== eli);
    return nuevoArr
}

export default EliEleArre
//[...EliEleArre(old,eliminar)]