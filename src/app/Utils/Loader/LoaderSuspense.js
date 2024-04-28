import React from "react";
import "./styles/loader.css";
import {
  Button,
  Spinner,

} from "@nextui-org/react";
export default function LoaderSuspense() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
      <Spinner/>
      </div>
    </>
  );
}
