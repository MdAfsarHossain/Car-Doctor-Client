import React from "react";

const Products = () => {
  return (
    <div className="mt-10 mb-10">
      {/* Heading */}
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-[#FF3811] font-bold text-2xl">Popular Products</p>
        <h1 className="text-5xl font-bold">Browse Our Products</h1>
        <p className="w-[750px] text-center">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {/* Card-1 */}
        <div className="border-2 p-5 flex flex-col gap-4 rounded-lg shadow-lg hover:scale-105 transition-all">
          <div className="bg-[#F3F3F3] py-5 rounded-lg">
            <img className="w-36 mx-auto h-full" src="/products/1.png" alt="" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p></p>
            <h1 className="font-bold text-xl">Car Engine Plug</h1>
            <p className="text-[#FF3811]">$20.00</p>
          </div>
        </div>
        
        {/* Card-2 */}
        <div className="border-2 p-5 flex flex-col gap-4 rounded-lg shadow-lg hover:scale-105 transition-all">
          <div className="bg-[#F3F3F3] py-5 rounded-lg">
            <img className="w-36 mx-auto h-full" src="/products/1.png" alt="" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p></p>
            <h1 className="font-bold text-xl">Car Engine Plug</h1>
            <p className="text-[#FF3811]">$20.00</p>
          </div>
        </div>

        {/* Card-3 */}
        <div className="border-2 p-5 flex flex-col gap-4 rounded-lg shadow-lg hover:scale-105 transition-all">
          <div className="bg-[#F3F3F3] py-5 rounded-lg">
            <img className="w-36 mx-auto h-full" src="/products/1.png" alt="" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p></p>
            <h1 className="font-bold text-xl">Car Engine Plug</h1>
            <p className="text-[#FF3811]">$20.00</p>
          </div>
        </div>
        
        {/* Card-4 */}
        <div className="border-2 p-5 flex flex-col gap-4 rounded-lg shadow-lg hover:scale-105 transition-all">
          <div className="bg-[#F3F3F3] py-5 rounded-lg">
            <img className="w-36 mx-auto h-full" src="/products/1.png" alt="" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p></p>
            <h1 className="font-bold text-xl">Car Engine Plug</h1>
            <p className="text-[#FF3811]">$20.00</p>
          </div>
        </div>

        {/* End of Card */}
      </div>
    </div>
  );
};

export default Products;
