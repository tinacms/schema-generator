/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Logo = () => (
  <svg viewBox="0 0 447 190" className="w-24 h-24" fill="none">
    <path
      d="M169.691 90.186v14.443h24.913v69.806H213.5v-69.806h24.914V90.186h-68.723zM256.378 82.243v15.285h19.618V82.243h-19.618zm-10.351 38.995h12.638v53.197h17.211v-67.399h-29.849v14.202zM314.344 116.664v-9.628h-15.766v67.399h17.331v-38.754c0-10.471 5.055-16.008 14.202-16.008s12.999 4.815 12.999 13.601v41.161h17.331v-46.457c0-16.368-10.11-23.349-23.71-23.349-12.878 0-18.174 4.814-20.581 12.035h-1.806zM423.066 163.483v10.952h23.229v-14.081h-8.064v-33.7c0-13.359-8.906-22.025-28.765-22.025-18.535 0-27.682 9.628-28.645 22.386h16.73c.722-5.777 4.934-9.508 12.758-9.508 8.906 0 11.313 4.935 11.313 9.027v1.805c0 2.527-1.083 4.574-6.138 5.536l-18.294 3.009c-12.276 1.926-19.498 8.546-19.498 20.22 0 11.314 7.823 18.896 21.785 18.896 10.711 0 18.895-5.296 22.386-12.517h1.203zm-1.444-15.045c0 8.185-5.777 15.286-15.887 15.286-6.86 0-10.351-2.889-10.351-8.425 0-4.935 2.528-7.703 8.064-9.027l10.832-2.407c2.769-.602 4.935-1.444 6.139-2.768h1.203v7.341zM87.964 84.403c9.23-7.637 13.321-52.771 17.317-68.995C109.276-.816 125.802.007 125.802.007s-4.29 7.469-2.54 13.043C125.012 18.623 137 23.605 137 23.605l-2.586 6.82s-5.399-.692-8.612 5.737 4.025 69.431 4.025 69.431-21.27 38.753-21.27 54.839S116.169 190 116.169 190h-10.681s-15.669-18.653-18.882-27.974c-3.213-9.322-1.928-18.644-1.928-18.644s-17.032-.964-32.134 0-25.174 13.951-26.992 21.215c-1.818 7.265-2.57 25.403-2.57 25.403h-8.446c-5.14-15.868-9.223-21.555-7.008-29.568 6.135-22.193 4.93-34.781 3.51-40.387C9.616 114.439 0 109.545 0 109.545c4.71-9.6 9.52-14.214 30.204-14.695 20.684-.481 48.529-2.81 57.76-10.447z"
      fill="#EC4815"
    />
    <path
      d="M32.662 159.503S34.844 179.705 46.438 190h9.936c-9.936-11.259-11.02-40.608-11.02-40.608-5.053 1.646-11.386 7.109-12.692 10.111z"
      fill="#EC4815"
    />
  </svg>
);

export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-white border-b border-gray-200">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center">
                      <Logo />
                    </div>
                  </div>
                  <div className="-mr-2 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                          : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
                        "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="py-10">
          <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">
                Tina Schema Generator
              </h1>
            </div>
          </header>
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              {/* Replace with your content */}
              <div className="px-4 py-8 sm:px-0">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex justify-center align-middle	">
                  <div className="space-y-1 text-center m-auto">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a Markdown file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      Only .md files supported at this time
                    </p>
                  </div>
                </div>
              </div>
              {/* /End replace */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
