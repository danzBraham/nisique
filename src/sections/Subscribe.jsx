import { Button } from "../components";

const Subscribe = () => {
  return (
    <section
      id="subscribe"
      className="max-container flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-center"
    >
      <h2 className="font-palanquin text-4xl font-bold capitalize">
        Sign Up for
        <br />
        <span className="text-coral-red">Updates </span> & Newsletter
      </h2>
      <form className="flex items-center justify-between rounded-full border border-slate-gray p-2 lg:w-3/5 xl:w-2/5">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="w-full rounded-full border-none py-2 pl-3 text-sm outline-none sm:pl-5 sm:text-lg"
        />
        <Button label="Sign Up" />
      </form>
    </section>
  );
};

export default Subscribe;
