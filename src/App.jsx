import { useState } from 'react'
import data from "./data.json"
import './app.css'

function App() {
  const [animes, setAnimes]=useState(data);
  const [filterArr, setFilterArr] = useState([]);

  console.log(filterArr);
  const chooseHandler = (obj) => {
    setFilterArr((state) => {
      return [...state, obj];
    });
   }

  return (
    <div className="main">
       {filterArr.length > 0 ?(<div className="filters">
        <div className="choice-btns"></div>
        <button className="clear-btn">Clear</button>
      </div>): null}
      <section className="animes" style={{marginTop: filterArr.length > 0 ? "40px": "232px"}}>
        {animes.map((anime)=>{
          return(
            <div className="anime" key={anime.id} style={{backgroundImage: url(${anime.background})}}>
              <div className="anime-left">
                <img src={anime.logo} alt="" />
                <div>
                  <div className="info-header">
                  <div className="original-name">{anime.originalName}</div>
                  <h3 className="info">Written by - {anime.artist}</h3>
                  <h3 className="info">Directed by - {anime.director}</h3>
                  <h3 className="info">Produced by - {anime.studio}</h3>
                  <h3 className="year">Realesed in {anime.year}</h3>
                  </div>
                  <div className="info-footer">
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default App
