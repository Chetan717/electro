import Hero from "./CompUtils/Hero.tsx/Hero";
import PopularProd from "./PopularProd/PopularProd";
import Categoriespro from "./Featuresutils/Categories";
import Offer from "../app/Offer/Offer";
import { ToastContainer, toast } from "react-toastify";
export default function page() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex flex-col justify-center items-center lg:gap-5 gap-5 p-2">
        {/* <Categoriespro /> */}
        {/* <Hero /> */}
        <Offer link={`https://d2xamzlzrdbdbn.cloudfront.net/bg/622cc7cb-6df1-4588-a77f-c8bfa18f738824080457.webp`} />
        <PopularProd />
      </div>
    </>
  );
}
