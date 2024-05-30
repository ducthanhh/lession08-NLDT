import React, { Component } from 'react'
import NLDTProductAdd from './components/NLDTProductAdd';
import NLDTProductlist from './components/NLDTProductlist';





export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      products :[
        {title:'nguyen le duc thanh',id:2210900065,status:1},
        {title:'garlic',id:2,status:0},
        {title:'apple',id:3,status:0},
        {title:'samsung',id:4,status:1},
      ]
    }
  }
  nldtHandldSumit=(param)=>{
    console.log("App:",param);
    let {products}=this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1>nguyen le duc thanh -render data -event form</h1>
        <hr/>
        <NLDTProductlist renderProducts={this.state.products}/>
        <hr/>
        <NLDTProductAdd onSummit={this.nldtHandldSumit}/>
      </div>
    )
  }
}