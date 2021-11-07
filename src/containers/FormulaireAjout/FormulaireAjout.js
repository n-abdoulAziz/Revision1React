import React,{Component} from "react";
import livre from "../Livres/Livre/Livre";
import Bouton from "./../../components/Bouton/Bouton"

class FormulaireAjout extends Component{

    state={
        titreSaisi:"",
        auteurSaisi:"",
        nbPagesSaisi:"",
    }
    handleValidationForm=(event)=>{
        event.preventDefault();
        this.props.validation();
    }
    render(){
        return (
            <>
                <h2 className="text-center text-primary" style={{fontFamily:'Sigmar One'}}> Affichage du formulaire d'Ajout </h2>
                <form>
                    <div className="form group">
                        <label htmlFor="titre" >Titre du livre</label>
                        <input type ="text" 
                        className="form-control" 
                        value={this.state.titreSaisi}
                        onChange={(event)=>this.setState({titreSaisi:event.target.value})}
                        id="titre" 
                        placeholder="titre"/>
                    </div>
                    <div className="form group">
                        <label htmlFor="auteur" >Auteur</label>
                        <input type ="text" 
                        className="form-control" 
                        value={this.state.auteurSaisi}
                        onChange={(event)=>this.setState({auteurSaisi:event.target.value})}
                        id="auteur" 
                        placeholder="auteur"/>
                    </div>
                    <div className="form group">
                        <label htmlFor="nbPages" >Nombre de pages</label>
                        <input type ="number" 
                        className="form-control" 
                        value={this.state.nbPagesSaisi}
                        onChange={(event)=>this.setState({nbPagesSaisi:event.target.value})}
                        id="nbPages" 
                        placeholder="nbPages"/>
                    </div>
                    <Bouton type="Submit" typeBtn="btn-primary" Clic={this.handleValidationForm}> Valider</Bouton>
                </form>
            </>
        );
    }
}
export default FormulaireAjout;

