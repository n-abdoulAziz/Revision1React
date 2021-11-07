import React, { Component } from 'react';
import TitreH1 from "./components/Titres/TitreH1";
import Bouton from "./components/Bouton/Bouton";
import Livres from "./containers/Livres/Livres"

class App extends Component {
  state={
    AjoutLivre:false
  }

  handleClicAjoutLivre=()=>{
    this.setState((oldState)=>{
      return {AjoutLivre:!oldState.AjoutLivre};
    })
}
  render() {
    return (
      <div className="container">
        <TitreH1>Page listant les livres</TitreH1>
        <Livres AjoutLivre={this.state.AjoutLivre}/>
        <Bouton 
          typeBtn="btn-success" 
          css="w-100" 
          clic={this.handleClicAjoutLivre}>
            {!this.state.AjoutLivre ?"Ajouter":"fermer l Ajout"}
        </Bouton>
      </div>
    );
  }
}

export default App;