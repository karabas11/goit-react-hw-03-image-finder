/* eslint-disable react/prop-types */
import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiDocumentMagnifyingGlass } from 'react-icons/hi2';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchbarHeader,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    searchQueru: '',
  };

  handleNameChange = event => {
    this.setState({ searchQueru: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchQueru.trim() === '') {
      toast.error('Write something');
      return;
    }

    this.props.onSubmit(this.state.searchQueru);
    this.setState({ searchQueru: '' });
  };

  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormInput
            type="text"
            placeholder="Search images and photos"
            name="searchQueru"
            value={this.state.searchQueru}
            onChange={this.handleNameChange}
          />
          <SearchFormButton type="submit">
            <span>
              <HiDocumentMagnifyingGlass size="40" />
            </span>
          </SearchFormButton>
        </SearchForm>
      </SearchbarHeader>
    );
  }
}

export default Searchbar;
