import React, {Component} from 'react';
// import './App.css'
import data from './data/metal.json'

//components
import Band from './components/Band'
class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      likes: [87,2,38,45,11,77,66,12,86,96,32,44,98,7,52,33,43,76,16,41,55,47,62,61,29,82,75,70,59,49,69,64,42,31,85,60,20,1,94,15,13,97,100,22,71,21,48,8,99,79] 
    }
  }

  //remove a like
  addLike = (index) =>{
    let newArray = this.state.likes
    newArray[index] += 1
    this.setState({
      likes: [...newArray]
    })
  }

  //remove a like
  removeLike = (index) => { 
    let newArray = this.state.likes
    if (newArray[index] > 0) {
      newArray[index] -= 1
      this.setState({
        likes: [...newArray]
      })
    }
  }

  render() {
    return (
      <div>
        <ul>
          <li>FEW 1.2 Final Assessment</li>
          <li>Joey Gaitan</li>
          <li>{data.length}</li>
        </ul>

        <Band bands = {data} button likes = {this.state.likes} addLike = {(index)=>this.addLike(index)} removeLike = {(index)=>this.removeLike(index)} />
        
      </div>
    );
  }
}

export default App; 