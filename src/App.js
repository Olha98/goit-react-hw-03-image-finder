import React, { Component } from 'react'
import Searchbar from './Components/Searchbar/Searchbar'
import ImageGallery from './Components/ImageGallery/ImageGallery'
import services from './services/apiPhoto'
import Modal from './Components/Modal/Modal'
import Spinner from '../src/Components/Spinner/Spinner'
import style from './App.module.css'



export default class App extends Component {
  state = {
    photo: [],
    loading: false,
    showModal: false,
    error: null,
    src: '',
    alt: '',
    input: '',
    page: 0,
  }


  componentDidMount() {
    this.setState({loading: true});
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.input;
    const nextQuery = this.state.input;

    if (prevQuery !== nextQuery) {
      this.axiosApi()
    }
  }

  axiosApi = () => {

    const { input, page } = this.state;
    console.log(input)
    console.log(page)
    services
      .apiPhoto(input, page)
      .then(data => {
        this.setState(prevState => ({
          photo: [...prevState.photo, ...data.data.hits],
          page: prevState.page + 1,
        }))
        console.log('data.data.hits', data.data.hits)
      })
      .catch(error => this.setState({ error: error }))
      .finally();
  }


  handleSearchFormSubmit = query => {
    console.log("query", query)
    this.setState({
      input: query,
      page: 1,
      articles: [],
    });
  };

  onClick = (url, alt) => {
    this.setState({ src: url, alt: alt, showModal: true });
  }

  onClose = () => {
    this.setState({ showModal: false });
  }



  render() {
    const { photo, showModal, src, alt, loading} = this.state
    return (
      <>
      
        {loading && <div className={style.loading_style}><Spinner /></div> }
        {showModal && <Modal src={src} alt={alt} onClose={this.onClose} />}
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        <ImageGallery photo={photo} onClick={this.onClick} />
        {photo.length > 0 && <button type="submit" onClick={this.axiosApi}>load more</button>}
      </>
    )
  }
}


