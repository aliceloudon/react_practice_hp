import React from 'react'

const CharacterDetail = (props) => {
  if ( !props.selectedCharacter ){
    return null
  }
  return (
    <h3>
      { props.selectedCharacter.name }
    </h3>
  )
}

export default CharacterDetail
