import { useState } from 'react'
import data from "./data.json"
import './app.css'
import PowerSlap from "./video/Anime-Background.mp4"

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
      {/* <video
      autoPlay 
      loop
      muted
      style={{
        position: "absolute",
        width: "100vh",
        left: "50%",
        top: "50%",
        height: "100vh",
        objectFit: "cover",
        transform: "translate(-50%, 50%)",
        zIndex: "-1"
      }}
      >
        <source src={PowerSlap} type="video/mp4"/>
      </video> */}
       {filterArr.length > 0 ?(<div className="filters">
        <div className="choice-btns"></div>
        <button className="clear-btn">Clear</button>
      </div>): null}
      <section className="animes" style={{marginTop: filterArr.length > 0 ? "40px": "232px"}}>
        {animes.map((anime)=>{
          return(
            <div className="anime" key={anime.id} style={{backgroundImage: `url(${anime.background})`}}>
              <div className="anime-left">
                <img src={anime.logo} alt="" />
                <div className="original-name">{anime.originalName}</div>
                <div>
                  <div className="info-header" style={{color: anime.id > 4 ? "white": "black"}}>
                  
                  <h3 className="info">Written by - <span>{anime.artist}</span></h3>
                  <h3 className="info">Directed by - <span>{anime.director}</span></h3>
                  <h3 className="info">Produced by - <span>{anime.studio}</span></h3>
                  <h3 className="info">Realesed in <span>{anime.year}</span></h3>
                  </div>
                  <div className="info-footer">
                  {anime.new ? <div className="new-anime">new</div>: null}
                  {anime.ongoing ?<div className="ongoing">ongoing</div>: null}
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
