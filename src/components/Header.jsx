import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const navigation = [
  {
    title: "Services",
    path: "/services",
    current: false,
  },
  {
    title: "Blogs",
    path: "/blogs",
    current: false,
  },
  {
    title: "Career",
    path: "/career",
    current: false,
  },
  {
    title: "Company",
    path: "/company",
    current: false,
  },
  {
    title: "FAQs",
    path: "/faqs",
    current: false,
  },
  {
    title: "Contact",
    path: "/contact",
    current: false,
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = ({ bgColor }) => {
  return (
    <Disclosure as="nav" className={`sticky z-10 p-2 bg-[${bgColor}]`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-app px-2">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center justify-between lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch lg:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link
                    href="/"
                    className="flex items-center justify-center gap-2"
                  >
                    <Image
                      src="/assets/navlogo.svg"
                      height="30"
                      width="60"
                      alt="ant logo"
                    />
                    <span className=" hidden sm:flex text-lg font-bold">
                      ANT Information Technologies
                    </span>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 lg:block">
                  <div className="flex space-x-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.title}
                        href={item.path}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-900 hover:bg-gray-700 hover:text-white ",
                          "rounded-md px-3 py-2 text-sm font-semibold cursor-pointer"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className=" hidden absolute inset-y-0 right-0 md:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className=" flex items-center justify-center rounded-full bg-gray-800 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="">Get Started Now</span>
                  <ChevronRightIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className=" relative lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 shadow-lg rounded-md">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.title}
                  as="a"
                  href={item.path}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-700 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.title}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
