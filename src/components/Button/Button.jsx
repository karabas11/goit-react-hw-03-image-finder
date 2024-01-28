/* eslint-disable react/prop-types */
import { ButtonLoader } from './Button.styled';

const Loader = ({ onClickButton }) => (
  <ButtonLoader type="button" onClick={onClickButton}>
    Load more
  </ButtonLoader>
);

export default Loader;
