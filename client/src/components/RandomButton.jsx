import React from 'react'

class RandomButton extends React.Component {

  constructor(props) {
    super(props)
  }

  handleClick() {
    const number = Math.floor(Math.random() * this.props.characters.length)
    const character = this.props.characters[number]
    this.props.setSelectedIndex(number)
    this.props.setSelectedCharacter(character)
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>Random Character</button>
    )
  } 

}

export default RandomButton