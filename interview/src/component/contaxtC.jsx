// import React from 'react'

// export default function contaxtC(props) {
//   return (
//     <div>contextC
//       <h1>{props.nameB}</h1>
//     </div>

//   )
// }


import React from 'react';
import {myContext} from "./contaxtA"

export default function ContaxtC() {
  return (
    <div>contextC
    <myContext.Consumer>
    {data => <h1>{data.roll}</h1>}
    </myContext.Consumer>
    </div>

  )
}