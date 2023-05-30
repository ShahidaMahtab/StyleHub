import React from "react";
import { useRouter } from "next/navigation";
export default function page() {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);
  return (
    <div className="py-6 bg-white sm:py-8 lg:py-12">
      <h1 className="pb-8 text-5xl text-center">Reset</h1>
      <h3 className="text-center text-gray-500">
        Please enter your email address to receive a password reset link.
      </h3>
      <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
        <form className="grid max-w-screen-md gap-4 mx-auto sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              for="email"
              className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
            >
              Email*
            </label>
            <input
              name="email"
              className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none outline-blue-700 bg-gray-50 ring-indigo-300 focus:ring"
            />
          </div>
          <div className="flex items-center justify-between sm:col-span-2">
            <button className="inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-indigo-500 rounded-lg outline-none ring-indigo-300 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
              Reset now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
