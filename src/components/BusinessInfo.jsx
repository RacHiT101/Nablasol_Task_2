import { useState } from "react";
import { FaCheck, FaTimes, FaArrowRight } from "react-icons/fa";
import { FaCircleQuestion } from "react-icons/fa6";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { IoIosArrowForward, IoIosArrowBack  } from "react-icons/io";

const BusinessInfo = ({ goNext, goBack }) => {
  const [formData, setFormData] = useState({
    brandName: "",
    brandType: "",
    address: "",
    city: "",
    zipCode: "",
    taxIDNumber: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errors = {};

    if (!formData.brandName) errors.brandName = "Brand name is required";
    if (!formData.brandType) errors.brandType = "Brand type is required";
    if (!formData.address) errors.address = "Address is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.zipCode) errors.zipCode = "Zip code is required";
    if (!formData.taxIDNumber) errors.taxIDNumber = "Tax ID number is required";

    return errors;
  };

  const documents = [
    {
      name: "Electronically sign the agreement(s)",
      status: "complete",
    },
    {
      name: "Non adult beverage Kroger market supplier waiver and release",
      status: "incomplete",
    },
    {
      name: "COI PDF UPLOAD",
      status: "complete",
    },
  ];

  const renderStatusIcon = (status) => {
    if (status === "complete") {
      return <FaCheck className="text-green-500" />;
    } else if (status === "incomplete") {
      return <FaTimes className="text-red-500" />;
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      localStorage.setItem("formData", JSON.stringify(formData));
      goNext();
    } else {
      setErrors(errors);
    }
  };

  return (
    <>
      <div className="text-center px-28">
        <h2 className="text-md text-slate-600">Step 2</h2>
        <h1 className="text-xl text-slate-900">Business Information</h1>
        <span className="text-md text-slate-700">
          Please enter your information about your company.
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        <span className="px-28 text-sky-500">GENERAL INFORMATION</span>
        <div className="grid px-28 mt-1 grid-cols-1 md:grid-cols-2 gap-4 mb-2">
          <div>
            <label className="block text-sm font-md">
              Brand Name<span className="text-slate-600">*</span>
            </label>
            <input
              type="text"
              name="brandName"
              value={formData.brandName}
              onChange={handleChange}
              className={`mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 ${
                errors.brandName ? "border-red-500" : ""
              }`}
            />
            {errors.brandName && (
              <p className="text-red-500 text-xs">{errors.brandName}</p>
            )}
          </div>
          <div>
            <div className="flex items-center gap-1">
              <label className="block text-sm font-md">
                Brand Type<span className="text-slate-600">*</span>
              </label>
              <div className="group relative flex justify-center">
                <FaCircleQuestion size="12px" />
                <span className="absolute top-5 scale-0 transition-all w-[400px] rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                  Local: Brands with distribution in 3 divisions or less OR
                  multiple divisions but a total of 150 stores or less.
                  <br />
                  <br />
                  National: Brands with distribution in 4 or more divisions or
                  in more than 150 stores.
                </span>
              </div>
            </div>

            <input
              type="text"
              name="brandType"
              value={formData.brandType}
              onChange={handleChange}
              className={`mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 ${
                errors.brandType ? "border-red-500" : ""
              }`}
            />
            {errors.brandType && (
              <p className="text-red-500 text-xs">{errors.brandType}</p>
            )}
          </div>
        </div>

        <div className="px-28 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-2">
            <label className="block text-sm font-md">
              Address<span className="text-slate-600">*</span>
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={`mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 ${
                errors.address ? "border-red-500" : ""
              }`}
            />
            {errors.address && (
              <p className="text-red-500 text-xs">{errors.address}</p>
            )}
          </div>
          <div className="mb-2">
            <label className="block text-sm font-md">
              City<span className="text-slate-600">*</span>
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 ${
                errors.city ? "border-red-500" : ""
              }`}
            />
            {errors.city && (
              <p className="text-red-500 text-xs">{errors.city}</p>
            )}
          </div>
        </div>
        <div className="px-28 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="">
            <label className="block text-sm font-md">
              Zip Code<span className="text-slate-600">*</span>
            </label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className={`mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 ${
                errors.zipCode ? "border-red-500" : ""
              }`}
            />
            {errors.zipCode && (
              <p className="text-red-500 text-xs">{errors.zipCode}</p>
            )}
          </div>
          <div className="">
            <label className="block text-sm font-md">
              Tax ID Number<span className="text-slate-600">*</span>
            </label>
            <input
              type="text"
              name="taxIDNumber"
              value={formData.taxIDNumber}
              onChange={handleChange}
              className={`mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 ${
                errors.taxIDNumber ? "border-red-500" : ""
              }`}
            />
            {errors.taxIDNumber && (
              <p className="text-red-500 text-xs">{errors.taxIDNumber}</p>
            )}
          </div>
        </div>

        <div className="px-28 w-full">
          {documents.map((doc, index) => (
            <div key={index} className=" flex items-end">
              <div className="w-full mt-3">
                {index === 0 && (
                  <>
                    <div className="text-sky-500">DOCUMENTS</div>
                    <div className="text-gray-600 mb-2 text-sm">
                      Once the documents are signed, you will be ready to get
                      started
                    </div>
                  </>
                )}
                {index === 2 && (
                  <>
                    <div className="text-sky-500">COI PDF UPLOAD</div>
                    <div className="text-gray-600 mb-2 text-sm">
                      Once the documents are signed, you will be ready to get
                      started
                    </div>
                  </>
                )}
                <div className="flex items-center justify-between py-1 px-2 border border-gray-300 rounded-lg shadow-sm">
                  <span>{doc.name}</span>
                  <div className="flex items-center space-x-4">
                    {renderStatusIcon(doc.status)}
                  </div>
                </div>
              </div>
              <BsFillArrowRightSquareFill
                size="35px"
                className="text-blue-500 ml-4 flex items-end"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-4 px-28 mt-4 mb-4">
          <button
            type="button"
            onClick={goBack}
            className="py-2 flex px-2 gap-1 items-center bg-white text-purple-600 border border-purple-600 rounded-md shadow-sm hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
           <IoIosArrowBack /> Previous Step 
          </button>
          <button
            type="submit"
            className="py-2 px-2 gap-1 flex items-center bg-purple-600 text-white border border-purple-600 rounded-md shadow-sm hover:bg-white hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Next Step <IoIosArrowForward />
          </button>
        </div>
      </form>
    </>
  );
};

export default BusinessInfo;
