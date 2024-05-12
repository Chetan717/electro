import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Input,
  Button,
  Image,
  useDisclosure,
} from "@nextui-org/react";
import { ToastContainer, toast } from "react-toastify";
import support from "../../../support.png";
import { DataProvideBYHook } from "@/app/DataProviderContext/DataProviderContext";

export default function Support() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = DataProvideBYHook();

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data to Formspree endpoint
    const response = await fetch("https://formspree.io/xeqydagr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      onClose();
      toast.success("Form Sumitted Sucessfully !", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: false,
        theme: "light",
        style: {
          borderRadius: 10,
          font: "bold",
          fontSize: 15,
        },
      });
      Route;
      // Handle success, e.g., show a success message or redirect
      console.log("Form submitted successfully");
    } else {
      onClose();
      // Handle errors, e.g., show an error message
      console.error("Form submission failed");
    }
  };

  return (
    <>
     <Button onClick={onOpen} type="submit" className="text-black font-bold" size="sm">
     💬 Inquiry Now
                </Button>
      <Modal size={`sm`} placement={`center`} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col justify-center items-center m-5 gap-5">
                <p className="text-black font-bold text-sm">Inquiry Now!</p>
                <Input
                  label="Name"
                  name="name"
                  placeholder="Enter your name"
                  type="text"
                  maxLength={50}
                  value={formData.name}
                  onChange={handleInputChange}
                  variant="bordered"
                  required
                />
                <Input
                  label="Email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  maxLength={50}
                  value={formData.email}
                  onChange={handleInputChange}
                  variant="bordered"
                  required
                />
                <Input
                  label="Mobile Number"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  type="tel"
                  maxLength={15}
                  value={formData.mobile}
                  onChange={handleInputChange}
                  variant="bordered"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="border rounded p-2"
                  required
                ></textarea>
                <Button type="submit" size="sm">
                  Submit Form
                </Button>
              </div>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
