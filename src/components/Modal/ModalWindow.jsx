/* eslint-disable react/prop-types */
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    // position: 'fixed',
    // top: 0,
    // left: 0,
    // width: '100vw',
    // height: '100vh',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ModalWindow = ({
  isModalOpen,
  largeImageURL,
  tags,
  onCloseModal,
}) => {
  return (
    <Modal
      isOpen={isModalOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={onCloseModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img src={largeImageURL} alt={tags} onClick={onCloseModal} />
    </Modal>
  );
};
