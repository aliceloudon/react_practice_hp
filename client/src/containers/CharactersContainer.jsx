import React from 'react'
import CharacterSelector from '../components/CharacterSelector'
import CharacterDetail from '../components/CharacterDetail'
import CharacterSelectorFilter from '../components/CharacterSelectorFilter'
import RandomButton from '../components/RandomButton'

class CharactersContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      characters: [],
      // filteredCharacters: [],
      selectedCharacter: null,
      filteredCategory: '',
      selectedIndex: -1
    }
  }

  setSelectedIndex(index) {
    this.setState({ selectedIndex: index })
  }

  setFilteredCategory(house) {
    this.setState({ filteredCategory: house })
  }

  createCharacterList(data) {
    if (this.state.filteredCategory === '') {
      return this.state.characters
    }

    return data.filter((character) => {
      return (character.house === this.state.filteredCategory)
    })
  }

  setBackground(character) {
    const body = document.querySelector('body')
    const url = character.image
    body.style.backgroundImage = "url('" + url + "')"
  }

  componentDidMount() {
    const url = 'http://hp-api.herokuapp.com/api/characters'
    const request = new XMLHttpRequest()
    request.open('GET', url)

    request.onload = () => {
      if (request.status === 200) {
        const jsonString = request.responseText
        const data = JSON.parse(jsonString)
        this.setState({ characters: data, filteredCharacters: data, selectedCharacter: data[0] })
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
        <CharacterSelectorFilter setFilteredCategory={ this.setFilteredCategory.bind(this) } createCharacterList={this.createCharacterList.bind(this)} setSelectedIndex={ this.setSelectedIndex.bind(this) }/>
        <CharacterSelector characters={this.createCharacterList(this.state.characters)} setSelectedCharacter={ this.setSelectedCharacter.bind(this)}  setSelectedIndex={ this.setSelectedIndex.bind(this) } selectedIndex={ this.state.selectedIndex } /> 
        <CharacterDetail selectedCharacter={this.state.selectedCharacter} setBackground={ this.setBackground.bind(this) } />
        <RandomButton characters={this.createCharacterList(this.state.characters)} setSelectedCharacter={ this.setSelectedCharacter.bind(this)}  setSelectedIndex={ this.setSelectedIndex.bind(this) }/>
      </div>
      )

  }

}

export default CharactersContainer