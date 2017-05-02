import React from 'react'

const CharacterDetail = (props) => {
  if ( !props.selectedCharacter ){
    return null
  }
  return (
    <div>
      <h3>
        { props.selectedCharacter.name }
      </h3>
      <p>
        House: { props.selectedCharacter.house }
      </p>
      <p>
        Wand Length: { props.selectedCharacter.wand.length }
      </p>
    </div>
  )
}

export default CharacterDetail
