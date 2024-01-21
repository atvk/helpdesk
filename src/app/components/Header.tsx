const Header = () => {
  return (
    <header className="lg:flex lg:items-center lg:justify-between m-10">
      <div className="min-w-0 flex-1">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Helpdesk
        </h1>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-300">
            Full-time
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-300">
            Remote
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-300">
            $120k – $140k
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-300">
            Closing on January 9, 2020
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        <span className="sm:ml-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            + Add User
          </button>
        </span>
      </div>
    </header>
  );
};

export default Header;
