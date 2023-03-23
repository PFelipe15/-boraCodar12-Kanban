import { useState } from 'react'
import images from './assets/exportImages'
import './App.css'

function App() {


  return (
    <div className="App">
      <div className="menu">

        <img id='logoId' src={images.Vector} alt="" />

        <div className="menu-nav">
          <ul>
            <li><button><img src={images.icons.tablet} alt="" />Boards</button>  </li>
            <li><button><img src={images.icons.people} alt="" />Equipes</button></li>
            <li><button><img src={images.icons.document}alt="" />Relatórios</button></li>
            <li><button><img src={images.icons.cog}alt="" />Ajustes</button></li>
          </ul>
        </div>

      </div>
      <div className="main-container">
        <div className="main">
          <div className="main-header">
            <div className="title-kaban">
              <h1>Meu kaban</h1> <button>
                <img src={images.caneta} alt="Icone caneta" />
              </button>
            </div>
            <img src={images.perfil} alt="" />
          </div>

          <div className="main-filter">
            <button>
              <img src={images.filter} alt="" />Filtrar
            </button>
            <div className="container-search">
              <img src={images.Search} alt="" /> <input placeholder='Busque por cards, assuntos ou responsáveis...' type="search" />

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
