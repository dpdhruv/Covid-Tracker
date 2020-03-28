import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"

const DataComp = ({data,loading}) => {
  if(loading){
    console.log('Loading',loading);
  }else{
    console.log(loading)
  }
  return (
    <React.Fragment>
      <div
        className="row-flex-container"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <FontAwesomeIcon className="globe-space" icon={faGlobe} />
        <div
          className="row-flex-container data-items"
          style={{ alignItems: "center" }}
        >
          <div>
            <h4>Confirmed</h4>
            <h4>{loading ? "-" : null}</h4>
            <h4>{data?.latest?.confirmed}</h4>
          </div>
          <div>
            <h4>Recovered</h4>
            <h4>{data?.latest?.recovered}</h4>
          </div>
          <div>
            <h4>Deaths</h4>
            <h4>{data?.latest?.deaths}</h4>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
};

DataComp.propTypes = {
  
};

export default DataComp;