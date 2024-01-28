/* eslint-disable react/prop-types */
import { Component } from 'react';
import { ModalWindow } from 'components/Modal/ModalWindow';
import { GaleryItem, GaleryItemImage } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const { webformatURL, largeImageURL, tags } = this.props;

    return (
      <GaleryItem>
        <GaleryItemImage
          src={webformatURL}
          alt={tags}
          onClick={this.openModal}
        />
        <ModalWindow
          onCloseModal={this.closeModal}
          largeImageURL={largeImageURL}
          alt={tags}
          isModalOpen={isModalOpen}
        />
      </GaleryItem>
    );
  }
}

export default ImageGalleryItem;
