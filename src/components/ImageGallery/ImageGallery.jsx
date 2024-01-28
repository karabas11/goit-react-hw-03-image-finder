/* eslint-disable react/prop-types */
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGaleryList } from './ImageGallery.styled';

const ImageGallery = ({ images }) => (
  <ImageGaleryList>
    {images.map(({ id, webformatURL, largeImageURL, tags }) => (
      <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        tags={tags}
      />
    ))}
  </ImageGaleryList>
);

export default ImageGallery;
