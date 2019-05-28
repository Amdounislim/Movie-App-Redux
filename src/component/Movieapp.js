import React, { Component } from 'react'
import Card from './Card';
import {connect} from 'react-redux'
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Modals from './Modals';
import RatingFilter from './RatingFilter';

class Movieapp extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            search:'',
        }
      }

      handelChange = (e) => {
          this.setState ({
            search: e.target.value 
          })
      }
    render() {
        return (
        <div className="App">
            <div className="movie-app">
                <div className="movie-app-header">
                    <div className="name-filter">
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Type movie name to search"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={this.state.search} 
                            onChange={(e)=>this.handelChange(e)}
                            />
                            <InputGroup.Append>
                                <InputGroup.Text id="basic-addon2" >Search</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                    <Modals />
                    <RatingFilter />
                </div>
                    <div className="main">
                        {this.props.moviesToDisplay.filter(el => el.rating >= this.props.rating &&
                                                            el.title.toUpperCase().includes(this.state.search.toUpperCase().trim()))
                                                            .map(el=> <Card movie={el}/>)}
                    </div>
            </div>
        </div>
        )
    }
}
const mapStateToProps = state =>({moviesToDisplay: state.Moviereducer,
                                rating: state.Ratingreducer})
const Connectapp= connect(
    mapStateToProps
)(Movieapp)
export default Connectapp