import React from 'react'
import CharacterSelector from '../components/CharacterSelector'
import CharacterDetail from '../components/CharacterDetail'

class CharactersContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      characters: [],
      selectedCharacter: null
    }
  }

  componentDidMount() {
    const url = 'http://hp-api.herokuapp.com/api/characters'
    const request = new XMLHttpRequest()
    request.open('GET', url)

    request.onload = () => {
      if (request.status === 200) {
        const jsonString = request.responseText
        const data = JSON.parse(jsonString)
        this.setState({ characters: data, selectedCharacter: data[0] })
      }
    }
    request.send()
  }

  setSelectedCharacter(character) {
    this.setState({ selectedCharacter: character })
  }


  render() {
    return(
      <div>
        <h2>Dave and Alice's Great Harry Potter Page</h2>
        <CharacterSelector characters={this.state.characters} setSelectedCharacter={ this.setSelectedCharacter.bind(this) }/> 
        <CharacterDetail selectedCharacter={this.state.selectedCharacter} />
      </div>
      )

  }

}

export default CharactersContainer