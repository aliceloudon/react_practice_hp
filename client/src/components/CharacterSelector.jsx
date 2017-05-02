import React from 'react'

class CharacterSelector extends React.Component {

  constructor(props){
    super(props)
  }

  handleChange(event) {
    this.props.setSelectedCharacter(this.props.characters[event.target.value])
    this.props.setSelectedIndex(event.target.value)
  }

  render() {

    const options = this.props.characters.map( (character, index) => {
      return <option value={index} key={index}>{character.name}</option>
    })

    return(
      <select id='characters' value={this.props.selectedIndex} onChange={this.handleChange.bind(this)}>
        <option value='-1' disabled>Select a character</option>
        { options }
      </select>
    )
  }

}

export default CharacterSelector