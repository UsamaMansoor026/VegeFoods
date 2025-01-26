import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="font-poppins flex flex-col gap-4"
    >
      {/* Input Field Name */}
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-gray text-[12px]">
          Your Name
        </label>
        <input
          {...register("name", { required: true })}
          type="text"
          name="name"
          id="name"
          placeholder="Maan Mansoor"
          className="border border-black/30 focus-within:border-black outline-none py-2 px-4"
        />
        {errors.name && (
          <p className="text-[12px] text-red-500">Name is Required</p>
        )}
      </div>
      {/* Input Field Email */}
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-gray text-[12px]">
          Your Email
        </label>
        <input
          {...register("email", { required: true })}
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          className="border border-black/30 focus-within:border-black outline-none py-2 px-4"
        />
        {errors.email && (
          <p className="text-[12px] text-red-500">Email is Required</p>
        )}
      </div>

      {/* Input Field Message */}
      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-gray text-[12px]">
          Message
        </label>
        <textarea
          {...register("message", { required: true })}
          name="message"
          id="message"
          placeholder="Your message"
          className="border border-black/30 focus-within:border-black outline-none py-2 px-4 min-h-[150px]"
        />
        {errors.message && (
          <p className="text-[12px] text-red-500">
            Message field should not be empty
          </p>
        )}
      </div>

      <div>
        <button
          type="submit"
          className="bg-primary border border-primary text-white py-2 px-6 duration-200 hover:bg-transparent hover:text-primary"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
