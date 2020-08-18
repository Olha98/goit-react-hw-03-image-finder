import React, { Component } from 'react';
import './Modal.modal.css'

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('click', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    document.addEventListener('click', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape' || e.target.nodeName !== "IMG") {
      this.props.onClose();
    }
  };

  handleCloseModule = e => {
    this.props.onClose();
  };

  render() {
    const { src, alt } = this.props
    return (
      <div className="Backdrop" >
        <div className="Modal">
          <img className="Modal_img" src={src} alt={alt} />
          <button className="Modal_btn" onClick={this.handleCloseModule}>X</button>
        </div>
      </div>
    );
  }
}