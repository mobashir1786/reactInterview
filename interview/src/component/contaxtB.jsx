// import React from 'react';
// import ContaxtC from './contaxtC'


// export default function (props) {
//   return (
//     <div>
//       <ContaxtC nameB={props.nameA} />
//     </div>
//   )
// }


import React from 'react';
import { myContext } from "./contaxtA"


export default function ContaxtB() {
  return (
    <div>contaxtB
      <myContext.Consumer>
        {data => <h1>{data.name}</h1>}
      </myContext.Consumer>
    </div>
  )
}