import React, { useState } from "react";

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState();
  const [modalMessage, setModalMessage] = useState("");
  const [confirmAction, setConfirmAction] = useModal(null);

  const openModal = ({ message, onConfirm }) => {
    setModalMessage(message);
    setConfirmAction(() => onConfirm);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    modalMessage,
    confirmAction,
    openModal,
    closeModal,
  };
};

export default useModal;
