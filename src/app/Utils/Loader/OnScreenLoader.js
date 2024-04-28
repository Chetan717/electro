"use client";
import React from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Loader from "./Loader";

export default function OnScreenLoader({ status }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal
        radius={`none`}
        shadow={`none`}
        className="bg-white "
        size={`xs`}
        backdrop={`opaque`}
        isOpen={status}
        placement={`center`}
        closeButton={false}
      >
        <ModalContent shadow={`none`} className="bg-white p-10 rounded-lg">
        <Spinner/>
          <p className="text-black font-semibold text-xs">Please wait your order is processing ...... </p>
        </ModalContent>
      </Modal>
    </>
  );
}
