import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import CreateCamiseta from './CriarCamiseta'
import ReadCamisetas from './ListarCamiseta'
import UpdateCamiseta from './AlterarCamiseta'
import Landing from './Landing/Landing'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
            <Routes>
                  <Route path="/" element={ <Landing/> }/>
                  <Route path='/camisetas/home' element={ <Home/>}/>
                  <Route path="/camiseta/cadastrar" element={ <CreateCamiseta/> }/>
                  <Route path="/camisetas" element={ <ReadCamisetas/> }/>
                  <Route path="/camisetas/alterar" element={ <UpdateCamiseta/>}/>
            </Routes> 
      </BrowserRouter>
  </React.StrictMode>,
)



