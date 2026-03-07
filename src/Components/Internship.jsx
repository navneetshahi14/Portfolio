import React from "react";
import { motion } from "framer-motion";
import InternshipCard from "./InternshipCard";
import Intern from "../assets/Intern";

const containerVarient = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const Internship = () => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center"
        id="experience"
      >
        <motion.h2
          initial="hidden"
          whileInView={"visible"}
          variants={containerVarient}
          viewport={{ once: true }}
          className="mt-20 text-center text-4xl font-semibold"
        >
          Experience
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={containerVarient}
          viewport={{ once: true }}
          className="flex flex-wrap px-10 py-8 gap-4 justify-center"
        >
          {Intern.map((item, i) => (
            <InternshipCard
              name={item.name}
              description={item.description}
              technology={item.technology}
              role={item.role}
              location={item.location}
              date={item.date}
              img={item.img}
              link={item.link}
              type={item.type}
            />
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Internship;
