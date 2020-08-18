import React, { Component } from 'react'


export default class Searchbar extends Component {
  state = {
    inputVelue: "",
  }


  handleSabmit = (e) => {
    e.preventDefault()

    this.props.onSubmit(this.state.inputVelue)
    this.setState({ inputVelue: '' });
  }

  handleChange = (e) => {
    const { value } = e.target
    this.setState({
      inputVelue: value
    })
  }


  render() {
    const { loading, allPhoto, error, input } = this.state

    return (
      <>
        {/* {error && <Spinner massage={error} />} */}
        {/* {(loading) ? (<div>Loading ...</div>) */}

        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSabmit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>
            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={input}
              onChange={this.handleChange}
            />
          </form>
        </header>
      </>
    )
  }
}

