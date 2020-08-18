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
    src: '',
    alt: '',
    input: '',
    page: 0,
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.input;
    const nextQuery = this.state.input;

    if (prevQuery !== nextQuery) {
      this.axiosApi()
    } 
  };

  axiosApi = () => {
    this.setState({loading: true});
    const { input, page } = this.state;
    services
      .apiPhoto(input, page)
      .then(data => {
        this.setState(prevState => ({
          photo: [...prevState.photo, ...data.data.hits],
          page: prevState.page + 1,
        }))
        
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => console.log(error))
      .finally(()=>this.setState({loading: false}));
  };

  handleSearchFormSubmit = query => {
    this.setState({
      input: query,
      page: 1,
      photo: [],
    });
  };

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };

  onClick = (url, alt) => {
    this.setState({ src: url, alt: alt, showModal: true });
  };

  onClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { photo, showModal, src, alt, loading} = this.state
    return (
      <>
        {loading && <div className={style.loading_style}><Spinner /></div> }
        {showModal && <Modal src={src} alt={alt} onClose={this.onClose} />}
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        <ImageGallery photo={photo} onClick={this.onClick} />
        {photo.length > 0 && <div className={style.BtnBox}>
          <button type="submit" className={style.BtnMore} onClick={this.axiosApi}>load more</button>
          </div>}
      </>
    )
  }
};


