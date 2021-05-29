import React from 'react'

export const TextError = ({ children }) => {
   return (
      <div style={{color : 'red', fontWeight : 'bold', margin: '2px'}}>
         {children}
      </div>
   )
}

