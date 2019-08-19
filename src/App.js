import React, { Component, Fragment} from 'react';
import Header from './Components/Header'; 
import ListaNoticias from './Components/ListaNoticias';

class App extends Component {
state = {
  noticias: []
}
componentDidMount(){
 this.consultarNoticias();
}
consultarNoticias = async () =>{
  const url = `https://newsapi.org/v2/top-headlines?country=co&category=business&apiKey=16e84bcacb254f83bdd95663952d61df`;

  const respuesta = await fetch(url);
  const noticias = await respuesta.json();

 this.setState({
    noticias: noticias.articles
  })

}

  render() {
    return (
     <Fragment>
       <Header
        titulo = 'Noticias React API'
       />
       <div className="container white contenedor-noticias">
         <ListaNoticias
          noticias={this.state.noticias}
         />
       </div>
     </Fragment>
    );
  }
}

export default App;