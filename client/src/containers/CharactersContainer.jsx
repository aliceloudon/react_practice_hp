import React from 'react'

class CharactersContainer {

  constructor(props) {
    super(props)
    this.state = {
      characters: [],
      selectedCharacter: null
    }
  }


  render() {

    return(
      <div>
        <h2>Dave and Alice's Great Harry Potter Page</h2>
        <CharacterSelector />
        <CharacterDetail />
      </div>
    )

  }

}

export default CharactersContainer