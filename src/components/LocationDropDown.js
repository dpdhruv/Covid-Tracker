import React from 'react'
import PropTypes from 'prop-types'

const LocationDropDown = (props) => {
  console.log(props.filtering);
  const locations = props.filtering? props.filteredLocations : props.locations;
  return (
    <div className="dropDownItemContainer">
      {
        locations?.map(loc=>(
        <div className="location-item">{loc.country}</div>
        ))
      }
    </div>
  )
}

LocationDropDown.propTypes = {

}

export default LocationDropDown
