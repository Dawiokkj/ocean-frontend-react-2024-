import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'

function App() {
    const [itens, setItens] = useState([])

  // Carregamento de Dados via API (Backend)
  async function carregarDadosAPI(){
    const apiURl = 'https://rickandmortyapi.com/api/character/'
  
    //Preparar a Requisição
    const response = await fetch(apiURl)
    
    const body = await response.json()
    
    //Extrair a propriedade resultus do body
    const results = body.results

    console.log(results)

    setItens(results)
  }

  useEffect(function (){
    // Chamando função que Carrega dados da API
    carregarDadosAPI()
  }, [])



  return (
      <>
        <div className='cards'> 
          {itens.map(item => <Card item={item} />)}
        </div>    
     </>
  )
}

export default App
