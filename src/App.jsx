import { useState } from 'react'

import './App.css'

function App() {


  return (
    <div className="App">
      <div className="menu">

        <img id='logoId' src="../src/assets/Vector.svg" alt="" />

        <div className="menu-nav">
          <ul>
            <li><button><img src="../src/assets/nav/tablet-portrait.svg" alt="" />Boards</button>  </li>
            <li><button><img src="../src/assets/nav/people.svg" alt="" />Equipes</button></li>
            <li><button><img src="../src/assets/nav/document-text.svg" alt="" />Relatórios</button></li>
            <li><button><img src="../src/assets/nav/cog.svg" alt="" />Ajustes</button></li>
          </ul>
        </div>

      </div>
      <div className="main-container">
        <div className="main">
          <div className="main-header">
            <div className="title-kaban">
              <h1>Meu kaban</h1> <button>
                <img src="../src/assets/Caneta.svg" alt="Icone caneta" />
              </button>
            </div>
            <img src="../src/assets/perfil.png" alt="" />
          </div>

          <div className="main-filter">
            <button>
              <img src="../src/assets/filter.svg" alt="" />Filtrar
            </button>
            <div className="container-search">
              <img src="../src/assets/search.svg" alt="" /> <input placeholder='Busque por cards, assuntos ou responsáveis...' type="search" />

            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default App
