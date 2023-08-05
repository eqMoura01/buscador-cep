import { useState } from 'react'

import { FiSearch } from 'react-icons/fi'
import './styles.css'

import api from './services/api'

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState([])

  async function searchHandle() {
    if (input === '') {
      alert("Preencha um CEP")
      return
    }

    try {
      const response = await api.get(`${input}/json/`)
      console.log(response)

      setCep(response.data)
      setInput('')

    } catch (error) {
      alert("ERRO AO BUSCAR CEP")
      setInput('')
      return
    }

  }

  return (
    <div className='container'>
      <h1 className='title'>Buscador CEP</h1>

      <div className='containerInput'>
        <input type="text" value={input} placeholder='Digite seu CEP' onChange={(e) => setInput(e.target.value)} />

        <button className='buttonSearch' onClick={searchHandle}>
          <FiSearch size={25} color='#FFF' />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className='main'>
          <h2>CEP: {cep.cep}</h2>

          <span>Rua: {cep.logradouro}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>Cidade: {cep.localidade}</span>
          <span>Estado: {cep.uf}</span>

        </main>
      )}

    </div>
  )
}

export default App
