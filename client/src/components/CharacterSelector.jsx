import React from 'react'

class CharacterSelector extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      selectedIndex: undefined
    }
  }

  render() {

    const options = this.props.characters.map( (character, index) => {
      return <option value={index} key={index}>{character.name}</option>
    })

    return(
      <select id='characters' value={this.state.selectedIndex}>
        { options }
      </select>
    )
  }

}

export default CharacterSelector