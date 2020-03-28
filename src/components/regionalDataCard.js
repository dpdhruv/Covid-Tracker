import React from "react"
const regionalDataCard = ({ data, loading }) => {
  if (loading) {
    return <h1>Loading...</h1>
  }
  return (
    <div className="regionalCard">
      <div className="regionalCardContainer">
        <div className="cardTitle">
          <h1>{data.loc}</h1>
        </div>
        <div className="cardDetails">
          <div className="stats">
            <h3>Confirmed</h3>
            <h3>{data.confirmedCasesIndian + data.confirmedCasesForeign}</h3>
          </div>
          <div className="stats">
            <h3>Recovered</h3>
            <h3>{data.discharged}</h3>
          </div>
          <div className="stats">
            <h3>Deaths</h3>
            <h3>{data.deaths}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
export default regionalDataCard
