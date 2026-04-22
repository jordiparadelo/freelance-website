"use client";
// ModalContext.js
import type React from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface ModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
  setModalComponent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
};

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalComponent, setModalComponent] = useState<React.ReactNode>(null);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);
  const toggleModal = useCallback(() => setIsModalOpen((prev) => !prev), []);

  useEffect(() => {
    if (!isModalOpen) {
      const timer = setTimeout(() => {
        setModalComponent(null);
      }, 300); // Add a small delay to allow for exit animations

      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

  const handleModalClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        closeModal();
      }
    },
    [closeModal],
  );

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        toggleModal,
        setModalComponent,
      }}
    >
      {children}
      {isModalOpen && (
        <div className="modal">
          <button
            type="button"
            className="modal__overlay"
            onClick={handleModalClick}
            aria-label="Close modal"
          />
          {modalComponent}
        </div>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useModalContext();
  return context;
};
