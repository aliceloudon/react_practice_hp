import React from 'react'

class CharacterSelectorFilter extends React.Component {

  handleChange(event) {
    this.props.setFilteredCategory(event.target.value)
  }

  render() {

    return (
      <select onChange={this.handleChange.bind(this)}>
        <option value={''} key={1}>All</option>
        <option value={'Gryffindor'} key={2}>Gryffindor</option>
        <option value={'Slytherin'} key={3}>Slytherin</option>
        <option value={'Hufflepuff'} key={4}>Hufflepuff</option>
        <option value={'Ravenclaw'} key={5}>Ravenclaw</option>
      </select>
    )

  }

}

export default CharacterSelectorFilter