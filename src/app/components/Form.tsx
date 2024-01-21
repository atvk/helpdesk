const Form = ({ form }) => {
  return (
    <div>
      <div className="mt-6 flex items-center justify-center gap-x-6">
        <div>{form.id}</div>
        <button
          type="button"
          className="rounded-md px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Reject
        </button>
        <button
          type="submit"
          className="rounded-md px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Approve
        </button>
      </div>
    </div>
  );
};

export default Form;
