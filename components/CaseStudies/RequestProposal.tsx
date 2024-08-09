export default function RequestProposal() {
  return (
    <div className="bg-[url('/images/case-study/bg.6c71c758.jpeg')] bg-fixed bg-cover bg-no-repeat bg-center">
      <div className="bg-black/50 w-full px-8 py-28 gap-2 flex flex-col items-center justify-center">
        <h1 className="font-bold text-4xl text-white text-center">
          Request a Proposal
        </h1>
        <p className="text-lg text-gray-300 text-center">
          We are here to help you with your project. Fill out the form below to
          get a free proposal.
        </p>
        <button className="px-4 py-3 text-white bg-indigo-600 text-md mt-3 hover:bg-indigo-700 rounded-md">
          Schedule a meeting
        </button>
      </div>
    </div>
  );
}
