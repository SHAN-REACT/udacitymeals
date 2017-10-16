import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addRecipe, removeFromCalendar } from '../actions';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        Hello World
      </div>
    )
  }
}

function mapStateToProps(cal) {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  return {
    calendar : dayOrder.map( (day) => ({
      day , 
      meals: Object.keys(cal[day]).reduce( (meals, meal) => {
        meals[meal] = cal[day][meal] ? cal[day][meal] : null
        return meals;
      }, {})
    }))
  }
}

function mapDispatchToProps (dispatch) {
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);