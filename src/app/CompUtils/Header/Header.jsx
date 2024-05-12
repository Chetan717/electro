"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Order from "../../Utils/Order";
import Cart from "../../Utils/Cart.js";
import Account from "../../Utils/Account";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HandleSearch from "../SearchPro/HandleSearch";
import SignIn from "../../Auth/SignIn";
import SignUp from "../../Auth/SignUp";
import support from "../../../support.png";
import { DataProvideBYHook } from "@/app/DataProviderContext/DataProviderContext";
import Suuport from "./Suuport"
export default function Navbarcom() {
  const [status, setStatus] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [statusca, setStatusca] = React.useState(false);
  const { user } = DataProvideBYHook();
  const router = useRouter();
  return (
    <>
      <Modal size={`sm`} placement={`center`} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="flex flex-col justify-center items-center m-5 gap-5">
                  <p className="text-black font-bold text-sm">Inquery Now !</p>
                  <Input
                    label="City"
                    name="city"
                    placeholder="Enter your city"
                    type="text"
                    maxLength={20}
                    // value={formValue?.city}
                    // onChange={handleAdrsForm}
                    variant="bordered"
                  />
                  <Input
                    label="City"
                    name="city"
                    placeholder="Enter your city"
                    type="text"
                    maxLength={20}
                    // value={formValue?.city}
                    // onChange={handleAdrsForm}
                    variant="bordered"
                  />
                  <Input
                    label="City"
                    name="city"
                    placeholder="Enter your city"
                    type="text"
                    maxLength={20}
                    // value={formValue?.city}
                    // onChange={handleAdrsForm}
                    variant="bordered"
                  />
                  <textarea name="" id=""></textarea>
                  <Button size="sm">Submit Form</Button>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <Navbar className="bg-black" isBordered>
        <NavbarContent justify="start">
          <NavbarBrand className="mr-4">
            <div
              onClick={() => router.push("/")}
              className="flex flex-row gap-2 cursor-pointer justify-center items-center"
            >
              {/* <Image width={50} alt="h" height={50} src="/sbt.png" /> */}
              <p className="text-white inline-flex flex-col  font-bold lg:text-sm text-xs">
                <span className="">ELECTONICS.</span>
              </p>
            </div>
          </NavbarBrand>
        </NavbarContent>

        {user?.name ? (
          <NavbarContent
            as="div"
            className="items-center lg:gap-6 gap-3"
            justify="end"
          >
           
            <HandleSearch />
            <Order />
            <Cart />
            <Account />
            <Suuport/>
          </NavbarContent>
        ) : (
          <NavbarContent as="div" className="items-center gap-6" justify="end">
            <HandleSearch />
            <Cart />
            <SignIn
              setStatusca={setStatusca}
              statusca={statusca}
              setStatus={setStatus}
              status={status}
            />
            <SignUp
              setStatusca={setStatusca}
              statusca={statusca}
              setStatus={setStatus}
            />
           <Suuport/>
          </NavbarContent>
        )}
      </Navbar>
    </>
  );
}
