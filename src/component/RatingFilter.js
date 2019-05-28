import React from 'react'
import Rating from './Rating'
import {connect} from 'react-redux'
import {filterrating} from '../actions/actionRatingFilter'
function RatingFilter(props) {
    return (
      <div className="rating-filter">
          <span className="rating-filter-text">Minimum rating</span>
          <a href="#" className="stars">
            <Rating count={props.rating} filterrating={props.filterrating}/>
          </a>
      </div>
    )
  }

const mapStateToProps = state =>({rating: state.Ratingreducer})

const mapDispatchToProps=dispatch =>({
    filterrating: payload => dispatch (filterrating(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(RatingFilter)
