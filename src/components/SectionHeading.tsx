import { motion } from "framer-motion";

interface SectionHeading {
  heading: string;
  subHeading: string;
}

const SectionHeading = ({ heading, subHeading }: SectionHeading) => {
  return (
    <motion.div
      initial={{ y: 90, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.3 }}
      className="text-center"
    >
      <p className="text-lg text-primary font-lora italic mb-3 capitalize">
        {subHeading}
      </p>
      <h2 className="text-5xl md:text-4xl text-black font-poppins font-semibold capitalize">
        {heading}
      </h2>
    </motion.div>
  );
};

export default SectionHeading;
