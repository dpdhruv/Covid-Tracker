import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import onClickOutside from "react-onclickoutside"
import DataComponent from "../components/DataComp"
import LocationDropDown from "../components/LocationDropDown"
import RegionalCard from "../components/regionalDataCard"

const IndexPage = () => {
  const [coronaData, setCoronaData] = useState(0)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    console.log("loading", loading)
    fetch(`${process.env.GATSBY_API_URL}/stats/latest`)
      .then(res => res.json())
      .then(res => setCoronaData(res.data))
    setLoading(false)
    console.log("loading", loading)
  }, [])
  return (
    <Layout>
      <div className="container">
        <div className="text-center dataCompContainer">
          <DataComponent data={coronaData} loading={loading} />
          <div className="regionalDataGrid">
            {coronaData?.regional?.map(reg => (
              <RegionalCard data={reg} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
