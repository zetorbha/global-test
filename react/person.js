import React from 'react'

// class person extends Component {
//     render(){
//         return (
//             <div>
//                 <p>I am  {this.props.name} and i am {this.props.age} years old</p> 
//                 <p>{this.props.children}</p>
//             </div>
//         )
//     }

// } 



const person = ({name, age, children,click})=>{
    return(
     
    <div>
        <p onClick={click}>I am  {name} and i am {age} years old</p>
    <p>{children}</p>
    </div>
    )
}

export default person
