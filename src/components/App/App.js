import React, { Component } from 'react';
import './App.css';
import Login from '../Login/Login'
import Header from '../Header/Header'
import AreaContainer from "../AreaContainer/AreaContainer"
import capHill from "../../images/capitol-hill.png"
import loHi from "../../images/LoHi.png"
import parkHill from "../../images/Park-Hill.jpg"
import riNo from "../../images/Rino.jpg"

import { NavLink, Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: '',
      areas: []
    }
  }

  componentDidMount(){
    fetch("https://vrad-api.herokuapp.com/api/v1/areas")
    .then(response => response.json())
    .then(areaData => {
      const areaPromises = areaData.areas.map(area=>{
        return fetch(`https://vrad-api.herokuapp.com${area.details}`)
        .then(response => response.json())
        .then(neighborhood => {
          const listingInfoPromises = neighborhood.listings.map(listing=>{
            return fetch(`https://vrad-api.herokuapp.com${listing}`)
            .then(response => response.json())
            .then(info =>{
              return {id: info.listing_id,
                      area_id: info.area_id,
                      name: info.name,
                      address: info.address,
                      details: info.details,
                      dev_id: info.dev_id,
                      area: info.area,
                      db_connect: info.db_connect
                      }
            })
          })
          return Promise.all(listingInfoPromises).then(listingInfo=>{
            return { area: area.area,
              fullname: neighborhood.name,
              about: neighborhood.about,
              listings: listingInfo}
            })
        })
      })
      console.log('areaPromises', areaPromises)
      Promise.all(areaPromises).then(completedAreaData => {
        completedAreaData.forEach(area=>{
          if (area.area === "RiNo"){
              area.image = riNo
          }
          if (area.area === "Park Hill"){
            area.image = parkHill
          }
          if (area.area === "LoHi"){
              area.image = loHi
          }
          if (area.area === "Cap Hill"){
            area.image = capHill
          }
        })

        this.setState({areas: completedAreaData})
      })
    })
    .catch(err => console.error(err))
  }

  addUser = (person) => {
    this.setState({user: person})
  }

  removeUser = () => {
    this.setState({user: ''})
  }

  //updates state to include current user's name and purpose

  render() {
    console.log('state', this.state.areas)
  return (
    <section className="App">

      <Switch>
        <Route path="/" exact render={ () => <Login addUser={this.addUser}/>}/>
        {/* {this.state.user !== '' &&} */}
        <Route path="/area"  render={ () => <> <Header removeUser={this.removeUser}/> <AreaContainer data={this.state.areas} /> </>}/>
      </Switch>
    </section>
  )
 }
}

export default App;
