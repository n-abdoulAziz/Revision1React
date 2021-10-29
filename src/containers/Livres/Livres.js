import React, { Component } from 'react';
import Livre from "./Livre/Livre";

class Livres extends Component {
    state = {
        livres : [
            {id:1, titre:"L'afrique de demain", auteur:"Aziz ndiaye", nbPages:350},
            {id:2, titre:"Une si longue lettre", auteur: "Mariama ba", nbPages: 500},
            {id:3, titre:"la longue marche", auteur: "Madiba nelson Mandela", nbPages: 250},
            {id:4, titre:"Mon pays ma patrie", auteur: "Dabah", nbPages: 320},
            {id:5, titre:"La souvreneté ", auteur: "Wade", nbPages: 420},
            
        ]
    }
    handleSuppressionLivre=(id)=>{
        const livreIndexTab=this.state.livres.findIndex(l=>{
            return l.id===id;
        })
        const newLivres=[...this.state.livres];
        newLivres.splice(livreIndexTab,1);
        this.setState({livres:newLivres});
    }
    
    render() {
        return (
            <table className="table text-center">
                <thead>
                    <tr className="table-dark">
                        <th>Titre</th>
                        <th>Auteur</th>
                        <th>Nombre de pages</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.livres.map(livre => {
                            return (
                               <tr key={livre.id}>
                                    <Livre 
                                        titre={livre.titre}
                                        auteur={livre.auteur}
                                        nbPages={livre.nbPages}
                                        suppression={()=>this.handleSuppressionLivre(livre.id)}
                                       
                                    />
                               </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        );
    }
}

export default Livres;