import React, { Fragment, useEffect, useState } from "react";
import Header from "./Componnets/Header";
import Formulario from "./Componnets/Formulario";
import ListadoNoticias from "./Componnets/ListadoNoticias";
function App() {

  const[categoria,setCategoria] = useState('')
  const[noticias,setNoticias] =useState([])

  useEffect(()=>{
    const consultarAPI= async()=>
    {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=4396d990f40e4f7e86091f57a7a886a9`

      const response =  await fetch(url)
      if(!response.ok)return;
      const data = await response.json()
      setNoticias(data.articles)
    }
    consultarAPI()
  },[categoria])

  return (
    <Fragment>
      <Header titulo="Ultimas noticias en Mexico" />
      <div className="container white">
        <Formulario
        setCategoria={setCategoria}
        />
        <ListadoNoticias
        noticias={noticias}/>
      </div>
    </Fragment>
  );
}

export default App;
