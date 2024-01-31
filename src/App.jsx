import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'

function App() {
  // Carregamento de Dados direto via Codigo
  // const item1 = {
  //   name: 'Ricky sanchez',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  // }
  // const item2 = {
  //   name: 'Morty Smith',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  // }
  // const item3 = {
  //   name: 'Summer Smith',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  // }
  // const item4 = {
  //   name: 'Beth Smith',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
  // }

  // const itens = [item1, item2, item3, item4]

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
