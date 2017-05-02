import React from 'react'

class CharacterSelector extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      selectedIndex: undefined
    }
  }

  handleChange(event) {
    this.setState({ selectedIndex: event.target.value })
    this.props.setSelectedCharacter(this.props.characters[event.target.value])
  }

  render() {

    const options = this.props.characters.map( (character, index) => {
      return <option value={index} key={index}>{character.name}</option>
    })

    return(
      <select id='characters' value={this.state.selectedIndex} onChange={this.handleChange.bind(this)}>
        { options }
      </select>
    )
  }

}

export default CharacterSelector