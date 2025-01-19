interface SectionHeading {
  heading: string;
  subHeading: string;
}

const SectionHeading = ({ heading, subHeading }: SectionHeading) => {
  return (
    <div className="text-center">
      <p className="text-lg text-primary font-lora italic mb-3 capitalize">
        {subHeading}
      </p>
      <h2 className="text-5xl md:text-4xl text-black font-poppins font-semibold capitalize">
        {heading}
      </h2>
    </div>
  );
};

export default SectionHeading;
