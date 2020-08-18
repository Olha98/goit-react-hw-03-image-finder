import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  static propTypes={
    onSubmit: PropTypes.func.isRequired,
  }
  
  state = {
    inputVelue: '',
  };

  handleSabmit = (e) => {
    e.preventDefault()

    this.props.onSubmit(this.state.inputVelue)
    this.setState({ inputVelue: '' });
  };

  handleChange = (e) => {
    const { value } = e.target
    this.setState({
      inputVelue: value
    })
  };

  render() {
    const {input } = this.state
    return (
      <>
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
};

