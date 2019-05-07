import React from "react";
import Modal from "react-modal";

const OptionModal = ({
  openModal,
  handleCloseModal,
  result,
  noValue,
  tryAgain
}) => {
  return (
    <Modal
      isOpen={openModal}
      contentLabel="Example Modal"
      onRequestClose={handleCloseModal}
      closeTimeoutMS={noValue ? 200 : 0}
      className="ourModal"
    >
      {noValue ? (
        <>
          <h4 className="mate">Choose an Answer</h4>
          <button
            onClick={handleCloseModal}
            className="btn waves-light noValue-btn"
          >
            Try again
          </button>
        </>
      ) : (
        <>
          <h4 className="mate">Hello mate</h4>
          <p>
            your result is <span>{result + "/4"}</span>
          </p>
          <button onClick={handleCloseModal} className="btn waves-light">
            Okay
          </button>
          <a
            onClick={tryAgain}
            class="btn-floating btn-large waves-effect waves-light green replay"
          >
            <i class="material-icons" style={{ margin: "0px" }}>
              replay
            </i>
          </a>
        </>
      )}
    </Modal>
  );
};

export default OptionModal;
