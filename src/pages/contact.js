import Header from "@/components/Header";
import AppLayout from "@/layout/AppLayout";

export default function Contact() {
  return (
    <>
      <div className="bg-[#FEEFE6]">
        <div className="max-w-app m-auto">
          <Header bgColor="#FEEFE6" />
          <div className="px-5 text-center py-20">
            <p className=" font-semibold text-[#F9AF82] text-2xl">
              Contact & Help
            </p>
            <h1 className=" mt-5 lg:text-5xl md:text-3xl text-xl font-bold">
              Outsourcing? Need Help?
            </h1>
            <p className="lg:max-w-xl m-auto mt-3">
              We love to hear from you. Let us help you.
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-white py-20">
        <AppLayout>
          <div className=" flex justify-between flex-col-reverse md:flex-row ">
            <div className=" w-full md:w-1/2 px-6">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="organization"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="phone-number"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Phone number
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="organization"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="howdidyoufindus?"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      How did you find us?
                    </label>

                    <select
                      name="howdidyoufindus?"
                      id="howdidyoufindus?"
                      autoComplete="tel"
                      defaultValue={""}
                      className="block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <optgroup>
                        <option value="">Direct Link</option>
                      </optgroup>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-block rounded-full my-4 bg-neutral-800  px-6 py-2 text-base font-medium  leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="flex flex-col justify-center items-start px-6">
              <div className="mb-5 lg:mt-0 sm:mt-5 text-start">
                <h3 className="font-bold mb-5">Call Us</h3>
                <p>+971 4 399 2295</p>
              </div>
              
              <div className="mb-5 lg:mt-0 sm:mt-5">
                <h3 className="font-bold mb-5">Address</h3>
                <p>Al Tawhidi Building - 1 ,</p>
                <p>Mankhool 5th floor - Bur Dubai</p>
                <p>Dubai - United Arab Emirates</p>
              </div>
            </div>
          </div>
        </AppLayout>
      </div>
    </>
  );
}
