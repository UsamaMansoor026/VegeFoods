import { PageHeader } from "../components";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <PageHeader title="Contact us" />

      <section className="global-padding py-7 flex md:flex-col gap-5">
        {/* Company Information */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="w-1/2 md:w-full font-poppins flex flex-col gap-4"
        >
          {/* Address */}
          <div className="flex flex-col gap-1">
            <span className="text-gray">Address:</span>
            <p className="text-black text-[13px]">
              A-159 BLOCK 12 GULISTAN-E-JOHOR, <br /> Islamabad, Pakistan
            </p>
          </div>
          {/* Phone */}
          <div className="flex flex-col gap-1">
            <span className="text-gray">Phone:</span>
            <p className="text-black text-[13px]">+92 333 3333333</p>
          </div>
          {/* Email */}
          <div className="flex flex-col gap-1">
            <span className="text-gray">Email:</span>
            <p className="text-black text-[13px]">vegefoods@gmail.com</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="w-1/2 md:w-full"
        >
          {/* Contact Form */}
          <ContactForm />
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
