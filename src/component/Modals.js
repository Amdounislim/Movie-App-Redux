import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import {addmovie} from '../actions/actionsMovie'



class Modals extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      show: false,
      // title:'',
      // description:'',
      // image:'',
      // rating:0
    }
  }
  handleClose = () => {
    this.setState({ show: !this.state.show });
  }
  handleChange=(e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
}

  render() {
  return (
  <div>  

    <Button className="boutton" variant="primary" onClick={this.handleClose}>
                  Add new movie
    </Button>

    <Modal show={this.state.show} onHide={this.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new movie</Modal.Title>
      </Modal.Header>

          <input type="text" name="title" placeholder="enter title of movie" onChange={this.handleChange}></input>
          <input type="text" name="image" placeholder="enter the url of image" onChange={this.handleChange}></input>
          <input type="text" name="description" placeholder="enter description of movie" onChange={this.handleChange}></input>
          <input type="text" name="rating" placeholder="enter rating less than or equal to 5" onChange={this.handleChange}></input>

      <Modal.Footer>
        <Button variant="secondary" onClick={this.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>{this.handleClose(); this.props.addmovie({title:this.state.title, image:this.state.image, description:this.state.description, rating:this.state.rating})}}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
    
  </div>
  )
}
}


const mapDispatchToProps = dispatch => ({
  addmovie: (payload) => {
    dispatch(addmovie(payload));
  }
});

export default connect(null, mapDispatchToProps)(Modals)