import {useState, useEffect} from 'react'
import axios from 'axios'
import './style.css';


function Nav(props){
  return(
    <nav className="nav-titulo">
      <span className="material-icons-outlined pata1">pets</span>
      <h1>api.GET(/FRIENDS)</h1>
      {/* <img className="img-patinha" src="patinha.png" alt="Falha ao carregar imagem"></img> */}
      <span className="material-icons-outlined pata2">pets</span>
    
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
    <img className="img-cachorro" src={props.src} alt="Falha ao carregar imagem." />
  );
}


function Mostrar(props){

  function alterarQuantidade(){
    let temp = props.quantidade;
    temp += 8;
    props.setQuantidade(temp);
    console.log(props.quantidade);
  }

  return(
    <div>
        <p className='footer'>Mostrar mais</p>
        <img className='button' onClick={() => alterarQuantidade()} src="seta.png" alt="Falha ao carregar imagem."/>
    </div>
  ); 
}

function App() {

  const [arrayUrls, setArrayUrls] = useState([]);
  const [quantidade, setQuantidade]  = useState(8);

    const token = "d062ac8e-fc40-44fe-8ac2-69f042a5d9e4";
    useEffect(() =>{
      axios.get('https://api.thedogapi.com/v1/images/search?size=med&limit=100', {
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
      <div className='div-pai'>
          {arrayUrls.map(function(obj, i){
            if(i < quantidade){
              return <ImgCachorro src={obj.url} key={i}/>
            }
            return <div  key={i}/>;
          })}
      </div>
      <Mostrar setQuantidade={setQuantidade}  quantidade={quantidade}/>  
    </div>
  );
}

export default App
