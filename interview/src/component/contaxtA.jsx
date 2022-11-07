// import React from 'react'
// import ContaxtB from './contaxtB'

// export default function ContaxtA(props) {
//   return (
//     <div>
//       <ContaxtB nameA={props.name} />
//     </div>
//   )
// }

import React from 'react'
import ContaxtC from './contaxtC';
import ContaxtB from './contaxtB';

export const myContext = React.createContext();
export default function ContaxtA(props) {
  
  return (
    <div>
      <myContext.Provider value={props}>
         <ContaxtB/>
         <ContaxtC/>
       
      </myContext.Provider>
    </div>
  )
}