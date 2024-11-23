import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class ErrorComponent extends Component {
constructor(props) {
  super(props)

  this.state = {
     hasError:false,
     error:null
  }
}
    static getDerivedStateFromError(error){
        if(error!=null){
            console.log("coming here with error",error)
            return {
                hasError:true,
                error:error
            }
        }else{
            console.log("coming here with no error",error)
        }
        
    }

    componentDidCatch(error,info){
        
    }

  render() {
    let err=null;
if(this.state.hasError){
return<h1>Something went wrong {this.state.error &&this.state.error.toString()}</h1>
}
else{
console.log("wher is it coming here")
return this.props.children


  }
}
}
