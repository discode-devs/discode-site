function FeatureItems() {
  return (
    <>
      <div className="max-w-3xl flex flex-col justify-center mx-auto bg-white shadow-xl hover:shadow-2xl rounded-xl p-5 m-5 text-center">
        <p className="text-xl sm:text-2xl text-gray-900 inline-block">
          Frameworks
        </p>
        <p className="text-sm sm:text-md text-gray-800 pt-2 w-auto">
          Provides gives general information on web frameworks
        </p>
      </div>
      <div className="max-w-3xl flex flex-col justify-center mx-auto bg-white shadow-xl hover:shadow-2xl rounded-xl p-5 m-5 text-center">
        <p className="text-xl sm:text-2xl text-gray-900 inline-block">
          Languages
        </p>
        <p className="text-sm sm:text-md text-gray-800 pt-2 w-auto">
          Provides top notch information on programming languages
        </p>
      </div>
      <div className="max-w-3xl flex flex-col justify-center mx-auto bg-white shadow-xl hover:shadow-2xl rounded-xl p-5 m-5 text-center">
        <p className="text-xl sm:text-2xl text-gray-900 inline-block">
          People
        </p>
        <p className="text-sm sm:text-md text-gray-800 pt-2 w-auto">
          Information about the people who contributed to the field of programming
        </p>
      </div>
    </>
  )
}

export default FeatureItems;