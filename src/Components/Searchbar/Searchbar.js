import React, { Component } from 'react'
import ImageGallery from '../ImageGallery/ImageGallery'
import apiPhoto from '../../services/apiPhoto'
import Spinner from '../Spinner/Spinner'


export default class Searchbar extends Component {
  state = {
    allPhoto: [],
    input: "",
    loading: true,
    error: null
  }
//пустой масив не приходит...есть одна лишка
  async componentDidMount() {
    // window.scrollTo({
    //   top: document.documentElement.scrollHeight,
    //   behavior: 'smooth',
    // });
    if(this.state.input === ""){
      console.log("pysto")
      this.axiosArticle(this.state.input)
    }
    
  }

  axiosArticle=(query)=>{
    apiPhoto(`${query}`)
    .then(data => {
      this.setState({ allPhoto: data.data.hits })
      console.log('this.state.input',this.state)
    })
    .catch(error => this.setState({ error: error }))
    .finally(() => this.setState({ loading: false }))
  }

  handleSabmit = (e) => {
    e.preventDefault()
    this.axiosArticle(this.state.input)
  }

  handleChange = (e) => {
    const { value } = e.target
    this.setState({
      input: value
    })
  }

  render() {
    const { loading, allPhoto, error, input } = this.state
    return (
      <>
        {error && <Spinner massage={error} />}
        {(loading) ? (<div>Loading ...</div>)
          : (<div>
            <header className="Searchbar">
              <form className="SearchForm" onSubmit={this.handleSabmit}>
                <button type="submit" className="SearchForm-button">
                  <span className="SearchForm-button-label">Search</span>
                </button>
                <input
                  className="SearchForm-input"
                  type="text"
                  autocomplete="off"
                  autoFocus
                  placeholder="Search images and photos"
                  value={input}
                  onChange={this.handleChange}
                />
              </form>
            </header>
            {allPhoto.length > 0 && (<ImageGallery photo={this.state.allPhoto} />)}
            {allPhoto.length > 0 && (<button type="button">load more</button>)}
          </div>)}


      </>
    )
  }
}

