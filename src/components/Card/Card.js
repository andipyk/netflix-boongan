import React,{Component} from 'react';

const Card = ({movie}) => {
    return (
        <div>
            <h2>{ `#${movie.ranking} - ${ movie.title } - (${ movie.year })` }</h2>
            <img src={`srcnp${movie.img.src}`} alt={movie.img.alt} width='200' />
            <p> { `Distributor : ${movie.distributor}` } </p>
            <p> {`Amount : ${movie.amount}` } </p>
        </div>
    );
}
// class Card extends Component {
//     render(){
//         return <h2>Ini Card</h2>
//     }
// }

export default Card;