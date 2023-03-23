import { useEffect } from 'react'
import tablet from '../src/assets/Nav/tablet-portrait.svg'
import people from './assets/Nav/people.svg'
import cog from './assets/Nav/cog.svg'
import Document from './assets/Nav/document-text.svg'
import filter from './assets/filter.svg'
import caneta from './assets/Caneta.svg'
import perfil from './assets/perfil.png'
import Vector from './assets/Vector.svg'
import Search from './assets/search.svg'
import './App.css'
 

function App() {

  useEffect(() => {
    let handleLimit = () => {
      let p = document.querySelectorAll('.card p')
      const limit = 80
      console.log(p)
      for (let ps of p) {
        const aboveLimit = ps.innerHTML.length > limit
        const donstOrEmpty = aboveLimit ? '...' : ''
        ps.innerHTML = ps.innerHTML.substring(0, limit) + donstOrEmpty
      }
    }

    handleLimit()
  })


  return (
    <div className="App">
      <div className="menu">

        <img id='logoId' src={Vector} alt="" />

        <div className="menu-nav">
          <ul>
            <li><button><img src={tablet} alt="" />Boards</button>  </li>
            <li><button><img src={people} alt="" />Equipes</button></li>
            <li><button><img src={Document} alt="" />Relatórios</button></li>
            <li><button><img src={cog} alt="" />Ajustes</button></li>
          </ul>
        </div>
        <small>Desenvolvido por Felipe</small>
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

          <div className="main-kanbans">
            <div className='container-card'>
              <h1>A fazer</h1>
              <div className="card">
                <h3>#boraCodar</h3>
                <p>Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.</p>
                <div className="tags">
                  <small>rocketseat</small>
                  <small>desafio</small>
                </div>

              </div>
              <div className="card">
                <h3>#boraCodar</h3>
                <p>Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.</p>
                <div className="tags">
                  <small>rocketseat</small>
                  <small>desafio</small>
                </div>

              </div>
              <div className="card">
                <h3>#boraCodar</h3>
                <p>Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.</p>
                <div className="tags">
                  <small>rocketseat</small>
                  <small>desafio</small>
                </div>

              </div>
            </div>

            <div className='container-card'>
              <h1>Fazendo</h1>
              <div className="card">
                <h3>#boraCodar</h3>
                <p>Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.</p>
                <div className="tags">
                  <small>rocketseat</small>
                  <small>desafio</small>
                </div>

              </div>

              <div className="card">
                <h3>#boraCodar</h3>
                <p>Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.</p>
                <div className="tags">
                  <small>rocketseat</small>
                  <small>desafio</small>
                </div>

              </div>
            </div>

            <div className='container-card'>
              <h1>Feito</h1>
              <div className="card">
                <h3>#boraCodar</h3>
                <p >Irure exercitation minim anim tempor ut irure ut exercitation sunt. Tempor anim officia quis occaecat occaecat. Nisi enim veniam mollit fugiat. Voluptate non adipisicing id amet aliqua id voluptate. Voluptate magna anim et ipsum amet ut esse cupidatat incididunt pariatur fugiat dolor non. Elit cillum deserunt laborum tempor culpa cupidatat. Ea culpa Lorem incididunt ex do dolore id.Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.</p>
                <div className="tags">
                  <small>rocketseat</small>
                  <small>desafio</small>
                </div>

              </div>

              <div className="card">
                <h3>#boraCodar</h3>
                <p >Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.</p>
                <div className="tags">
                  <small>rocketseat</small>
                  <small>desafio</small>
                </div>

              </div>
            </div>


          </div>
        </div>


      </div>
    </div>
  )
}

export default App
