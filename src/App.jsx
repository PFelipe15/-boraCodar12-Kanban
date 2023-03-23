import { useState } from 'react'
import tablet from '.././src/assets/nav/tablet-portrait.svg'
import people from '.././src/assets/nav/people.svg'
import cog from '.././src/assets/nav/cog.svg'
import document from '.././src/assets/nav/document-text.svg'
import filter from '.././src/assets/filter.svg'
import caneta from '.././src/assets/Caneta.svg'
import perfil from '.././src/assets/perfil.png'
import Vector from '.././src/assets/Vector.svg'
import Search from '.././src/assets/Search.svg'
import './App.css'

function App() {


  return (
    <div className="App">
      <div className="menu">

        <img id='logoId' src={Vector} alt="" />

        <div className="menu-nav">
          <ul>
            <li><button><img src={tablet} alt="" />Boards</button>  </li>
            <li><button><img src={people} alt="" />Equipes</button></li>
            <li><button><img src={document} alt="" />Relatórios</button></li>
            <li><button><img src={cog} alt="" />Ajustes</button></li>
          </ul>
        </div>

      </div>
      <div className="main-container">
        <div className="main">
          <div className="main-header">
            <div className="title-kaban">
              <h1>Meu kaban</h1> <button>
                <img src={caneta} alt="Icone caneta" />
              </button>
            </div>
            <img src={perfil} alt="" />
          </div>

          <div className="main-filter">
            <button>
              <img src={filter} alt="" />Filtrar
            </button>
            <div className="container-search">
              <img src={Search} alt="" /> <input placeholder='Busque por cards, assuntos ou responsáveis...' type="search" />

            </div>
          </div>
        </div>

        <div className="main-kanbans">

        </div>
      </div>
    </div>
  )
}

export default App
