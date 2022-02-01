import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'
import Footer from '../footer/footer'
import Header from '../header/header'
import SideMenue from '../sideMenu/sideMenu'

import './layout.scss'
export class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskInformation:[]
     
    }


  }

 c=()=> {
    this.setState({taskInformation:[]})
  }
  render() {
    return (
      <>
        <div >
        <div>
         <Header   />
         </div> 
         <div className='d-flex'> 
         <div>
         <SideMenue  pathName={this.props.location.pathname}/>
         </div>
         <div className='w-100'> {this.props.children }</div>
        
         </div>
      
         <div>
        <Footer pathName={this.props.location.pathname} />
         </div>
       
        </div>

        {}
      </>
    )
  }
}


export default withRouter(Layout)
