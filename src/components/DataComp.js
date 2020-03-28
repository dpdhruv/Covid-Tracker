import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"

const DataComp = ({ data, loading }) => {
  if (loading) {
    return <h1>Loading....</h1>
  }
  return (
    <React.Fragment>
      <div
        className="row-flex-container"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <h1 style={{ marginRight: "2em" }}>India</h1>
        <div
          className="row-flex-container data-items"
          style={{ alignItems: "center" }}
        >
          <div>
            <h4>Confirmed</h4>
            <h4>{data?.summary?.total}</h4>
          </div>
          <div>
            <h4>Recovered</h4>
            <h4>{data?.summary?.discharged}</h4>
          </div>
          <div>
            <h4>Deaths</h4>
            <h4>{data?.summary?.deaths}</h4>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

DataComp.propTypes = {}

export default DataComp
