import {useState, useEffect} from 'react'
import axios from 'axios'
import './style.css';


function Nav(props){
  return(
    <nav className="nav-titulo">
      <i className="material-icons-outlined">pets</i>
      <h1>api.GET(/FRIENDS)</h1>
      {/* <img className="img-patinha" src="patinha.png" alt="internet ruim? :/"></img> */}
      <span className="material-icons-outlined">pets</span>
    
    </nav>
  )
}

function Body(){
  return(
    <div className='sub-title'>
      <h2>Um site para quem ama cachorrinhos!</h2>
    </div>
  )
}

function ImgCachorro(props){
  
  return(
    <img className="img-cachorro" src={props.src} alt="internet ruim? :/" />
  );
}


function  App() {

  const [arrayUrls, setArrayUrls] = useState([]);

    const token = "d062ac8e-fc40-44fe-8ac2-69f042a5d9e4";
    useEffect(() =>{
      axios.get('https://api.thedogapi.com/v1/images/search?size=med&limit=20', {
        headers: {
          "api_key" : `${token}`
        }
      })
      .then(res => {
        console.log(res.data);
        setArrayUrls(res.data);
      })
      .catch((error) => {
        console.error(error);
      })
    }, []);


  return (
    <div>
      <Nav/>
      <Body/>
      {arrayUrls.map(function(obj, i){
        return <ImgCachorro src={obj.url} key={i}/>
      })}
      
    </div>
  );
}

export default App
