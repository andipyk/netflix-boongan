import React, {Component} from 'react';
import data from '../assets/data.json'
// Component
import Card from '../components/Card/Card';

class List extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            loading: true,
        }
    }

    async componentDidMount(){
        try {
            // const movies = await fetch(data);
            const moviesJSON = await data;
            console.log(moviesJSON)

            if (moviesJSON) {
                this.setState({
                    data: moviesJSON,
                    loading: false,
                })
            }
                
        } catch (err) {
            console.log(err.message);
        }
                  

        console.log('end componentDidMount')
    }

    render(){
       const {data, loading} = this.state;

       if (loading) {
           return <div>Loading...</div>
       }

    //    return data.map(movie => <Card key={movie.id} movie={movie} />)
        return(
            <div className='row'>
                {data.map(movie => <div className='col-sm-2'>
                        <Card key={movie.id} movie={movie} />
                    </div>
            )}
            </div>
        )
    }
}

export default List;