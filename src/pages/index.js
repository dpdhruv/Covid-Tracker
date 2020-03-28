import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import onClickOutside from 'react-onclickoutside'
import DataComponent from '../components/DataComp';
import LocationDropDown from '../components/LocationDropDown'

const IndexPage = () => {

  const [coronaData,setCoronaData] = useState(0);
  const [locations, setLocations] = useState([]);
  const [filteredLocations,setFilteredLocations] = useState([]); 
  const [openDropDown,setDropDownStatus] = useState(false);
  const [filtering,setFiltering] = useState(false);
  const [loading,setLoading] = useState(true);
  console.log(locations);
  useEffect(()=>{
    fetch(`${process.env.GATSBY_API_URL}/locations`).then(res=>res.json()).then(res=>setLocations(res.locations.map(loc=>loc.country)))
    console.log(locations)
    fetch(`${process.env.GATSBY_API_URL}/latest`).then(res=>res.json()).then(res=>setCoronaData(res))
    console.log(coronaData)
    setLoading(false);
    if(locations.length>0){
      console.log('loading false')
    }
  },[])

  const searchLocation = (event) =>{
    if(event.target.value.length>3){
      setFiltering(true);
      let filteredLocations = locations.filter(loc=>loc.country.toLowerCase().includes(event.target.value.toLowerCase()));
      setFilteredLocations(filteredLocations);
    }else{
      setFiltering(false);
    }   
  }

  return (
    <Layout style={{ position: "relative" }}>
      <div style={{ position: "absolute" }} className="sidebar">
        <div className="sidebar-container">
          <h2>List of countries</h2>
          {loading ? <h3>Loading...</h3> : locations.map(loc => <h3>{loc}</h3>)}
        </div>
      </div>
      <div className="container">
        {/* <FontAwesomeIcon icon={faSearchLocation}/> */}
        {/* <div className="searchInput text-center">
          <input
            placeholder="Search for country..."
            onChange={event => searchLocation(event)}
            onClick={() => setDropDownStatus(true)}
          />
        </div> */}
        <div className="text-center dataCompContainer">
          <DataComponent data={coronaData} loading={loading} />
        </div>
      </div>
    </Layout>
  )
  
}

export default IndexPage
