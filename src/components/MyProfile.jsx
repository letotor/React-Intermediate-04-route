import React from 'react'

const MyProfile = () => {

    const prenom = "Victor"
    const ecole = "Wild"    
    const user= `${prenom} ${ecole}`


  return (
    <div>
          <h1>MyProfile</h1>
          <p>{prenom} etudie a la {ecole}</p> 
      
    </div>
  )
}

export default MyProfile