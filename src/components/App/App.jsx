import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import { AppStyled } from './App.styled';
import { fetchImages } from 'api';
import Loader from 'components/Loader/Loader';

class App extends Component {
  state = {
    searchQueru: '',
    images: [],
    isLoading: false,
    isButtonShow: false,
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchQueru, page } = this.state;

    if (prevState.searchQueru !== searchQueru || prevState.page !== page) {
      try {
        this.setState({ isLoading: true, isButtonShow: true });

        const newSearchQuery = searchQueru.split('/')[1];

        const { hits, totalHits } = await fetchImages(newSearchQuery, page);

        if (!totalHits) {
          this.setState({ isButtonShow: false });
          return toast.warn(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }

        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
        }));
      } catch (error) {
        this.setState({ isButtonShow: false });
        toast.error(
          'Opps! Somathing went wrong! Please try reloading this page'
        );
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleFormSubmit = newSearchQueru => {
    this.setState({
      searchQueru: `${Date.now()}/${newSearchQueru}`,
      page: 1,
      images: [],
      isButtonShow: false,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { images, isLoading, isButtonShow } = this.state;

    return (
      <AppStyled
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
      >
        <Searchbar onSubmit={this.handleFormSubmit} />

        {images.length > 0 && <ImageGallery images={images} />}
        {isLoading && <Loader />}
        {isButtonShow && <Button onClickButton={this.handleLoadMore} />}
        <ToastContainer autoClose={3000} />
      </AppStyled>
    );
  }
}

export default App;
