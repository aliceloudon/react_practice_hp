import React from 'react'

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
        console.log(request.responseText)
        const jsonString = request.responseText
        const data = JSON.parse(jsonString)
        this.setState({ characters: data, selectedCharacter: data[0] })
      }
    }
    request.send()
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