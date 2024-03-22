import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div id="contact" className="max-w-5xl mx-auto px-3 pt-36">
      <div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-4xl md:text-6xl font-gaegu font-bold text-center uppercase">
            Contact
          </h3>
          <p className="text-center mt-4 text-gray-700">
            This information will be displayed publicly so be careful what you
            share.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto mt-10">
        <div className="w-full md:w-1/2 space-y-5">
          <div className="flex">
            <Phone className="w-6 h-6 text-gray-700 mr-2" />
            <p>5949330202</p>
          </div>
          <div className="flex">
            <Mail className="w-6 h-6 text-gray-700 mr-2" />
            <p>martimisu@mail.com</p>
          </div>
          <div className="flex">
            <MapPin className="w-6 h-6 text-gray-700 mr-2" />
            <p>Cairns, QLD</p>
          </div>
        </div>
        <form className="w-full md:w-1/2">
          <div className="pb-4 ">
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
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
                  About
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a something.
                </p>
              </div>
            </div>
          </div>
          {/* SUBMIT */}
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
