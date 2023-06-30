import React, {Component} from "react";
import "./PkmnCard.css"

const PKMN_API="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree=(number) =>(number <=999? `00${number}`.slice(-3):number)

class PkmnCard extends Component{
    render(){
        let imgSrc=`${PKMN_API}${padToThree(this.props.id)}.png`
        return(
            <div className="PkmnCard">
                <h1 className="PkmnCard-title">{this.props.name}</h1>
                <div className="PkmnCard-image">
                    <img src={imgSrc} alt={this.props.name}></img>
                </div>
                <div className="PkmnCard-Data">type:{this.props.type}</div>
                <div className="PkmnCard-Data">exp:{this.props.exp}</div>
            </div>
        )
    }
}

export default PkmnCard