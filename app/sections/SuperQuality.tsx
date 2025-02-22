import Image from "next/image";
import {services} from "../../public/images";
import {Button} from "../components";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          We Provide
          <span className="text-coral-red"> Solution To Many </span>
          <span>Serious Problems facing by IT industry nowdays</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          We decrease tha gap between fresher and experience engineer by
          providing quality level of training in colleges & corporates.
        </p>
        {/* <p className="mt-6 lg:max-w-lg info-text">
          We help in building products and placement in
        </p> */}
        {/* <div className="mt-11">
          <Button label="View details" />
        </div> */}
      </div>

      <div className="flex-1 flex justify-center items-center">
        <Image
          src={services}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
