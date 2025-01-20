const NewsLetter = () => {
  return (
    <section className="global-padding mt-28 mb-28 flex xsm:flex-col items-center justify-between gap-5">
      <div className="font-poppins w-[50%] xsm:w-full">
        <h2 className="text-[22px] textblack">Subcribe to our Newsletter</h2>
        <p className="text-[15px] text-gray">
          Get e-mail updates about our latest shops and special offers
        </p>
      </div>
      <form className="w-[50%] xsm:w-full">
        <label htmlFor="email" className="text-black">
          Your Email
        </label>
        <div className="border border-primary mt-1">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
            className="w-[80%] md:w-[70%] xsm:w-full p-3 border-none outline-none"
          />
          <button
            type="submit"
            className="p-3 bg-primary text-white w-[20%] md:w-[30%] xsm:w-full"
          >
            Subscribe
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewsLetter;
