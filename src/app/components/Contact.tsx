import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import S_4 from "./shapes/S_4";
import S_5 from "./shapes/S_5";
export default function Contact() {
  return (
    <div id="contact" className="max-w-5xl mx-auto px-3 py-36 relative">
      <div className="absolute top-0">
        <S_4 className="fill-green-200 w-44 h-44" />
      </div>
      <div className="absolute bottom-0 right-0">
        <S_5 className="fill-pink-200 w-44 h-44" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto mt-10 gap-x-5">
        <div className="w-full md:w-1/2 self-start ">
          <div className="w-full flex flex-col items-start">
            <h3 className="text-4xl md:text-5xl font-gaegu font-bold text-center uppercase">
              Contact
            </h3>
            <p className="text-left text-gray-700 pr-10">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
          <div className="space-y-4 ">
            <div className="flex mt-10">
              <Phone className="w-5 h-5 text-gray-700 mr-2" />
              <p>5949330202</p>
            </div>
            <div className="flex">
              <Mail className="w-5 h-5 text-gray-700 mr-2" />
              <p>martimisu@mail.com</p>
            </div>
            <div className="flex">
              <MapPin className="w-5 h-5 text-gray-700 mr-2" />
              <p>Cairns, QLD</p>
            </div>
          </div>
        </div>
        {/* FORM */}
        <form className="w-full md:w-1/2 mt-16 md:mt-0">
          <h4 className="font-medium">Do you have any specific request?</h4>
          <p className="text-sm text-gray-700">Compile the form</p>
          <div className="pb-4 ">
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
              <div className="col-span-1">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Full name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Request
                </label>
                <div className="mt-2">
                  <textarea
                    id="request"
                    name="request"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* SUBMIT */}
          <div className="mt-2 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-orange-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
