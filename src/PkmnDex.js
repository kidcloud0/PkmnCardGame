import React, {Component} from "react";
import PkmnCard from "./PkmnCard";
import "./PkmnDex.css"

class PkmnDex extends Component{
render(){
    let title;
    if(this.props.isWinner){
        title=(
            <h1 className="PkmnDex-winner">winner Hand</h1>
        );
    }else{
        title=<h1 className="PkmnDex-loser">losing Hand</h1>
    }
    return(
    <div className="PkmnDex">
        <h4>Total exp:{this.props.exp}</h4>
        {title}
        <div className="PkmnDex-Cards">
    {this.props.pokemon.map((p)=>(
        <PkmnCard
        key={p.id}
        id={p.id}
        name={p.name}
        type={p.type}
        exp={p.base_exp}
        />
    ))}
    </div>
    </div>
    )
}
}
export default PkmnDex