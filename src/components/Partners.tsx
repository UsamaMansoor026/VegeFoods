import { partners } from "../assets/constants";

const Partners = () => {
  return (
    <section className="global-padding mb-16 mt-40 grid grid-cols-5 xsm:grid-cols-2 gap-5">
      {partners?.length > 0 &&
        partners.map((partner: string, index: number) => (
          <img
            key={index}
            src={partner}
            alt="Partners"
            className="px-5 w-[180px]"
          />
        ))}
    </section>
  );
};

export default Partners;
