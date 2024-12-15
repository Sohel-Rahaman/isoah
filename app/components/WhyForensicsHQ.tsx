'use client';

import React from "react";
import { motion } from "framer-motion";

const WhyForensicsHQ: React.FC = () => {
  // Define animation variants for reuse
  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className=" text-white overflow-hidden py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* Images Section */}
        <motion.div
          className="grid grid-cols-2 gap-5 relative h-full min-h-[220px]"
        // Removed initial and whileInView from parent to allow individual animations
        >
          {/* Audience Image - Fades in from the Left */}
          <motion.img
            src="https://forensicshq.com/wp-content/uploads/2024/11/IMG-20240509-WA0039-1024x770.jpg"
            alt="Audience"
            className="w-full h-auto rounded-lg shadow-lg absolute top-0 left-[0px] max-w-52 md:max-w-80 sm:top-16 sm:left-[10px] md:top-[-30px] xl:top-20 md:left-[70px] xl:left-[0px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          />

          {/* Hacker Image - Fades in from the Bottom */}
          <motion.img
            src="https://forensicshq.com/wp-content/uploads/2024/12/IMG_20241203_133509-1024x768.jpg"
            alt="Hacker"
            className="w-full h-auto rounded-lg shadow-lg absolute top-20 right-[10px] max-w-52 md:max-w-80 sm:top-40 sm:right-[5px] md:top-20 xl:top-48 md:right-[110px] xl:right-[10px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="space-y-6 mt-10 lg:mt-0"
        >
          {/* Heading */}
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Why ForensicsHQ?
          </motion.h2>

          {/* List Items */}
          <ul className="space-y-4">
            <motion.li
              className="flex items-start"
              variants={listItemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <span className="flex-shrink-0 mt-1 text-xl font-semibold">•</span>
              <div className="ml-3">
                <span className="font-semibold text-lg">Expert-Led Digital Forensics Services:</span>
                <p className="mt-1 text-base">
                  ForensicsHQ is powered by a team of industry-leading experts delivering top-notch Digital Forensics consulting, investigations, and education.
                </p>
              </div>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={listItemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <span className="flex-shrink-0 mt-1 text-xl font-semibold">•</span>
              <div className="ml-3">
                <span className="font-semibold text-lg">Comprehensive Forensics Solutions:</span>
                <p className="mt-1 text-base">
                  We specialize in Mobile, Cloud, Computer, IT, and Data Forensics, addressing diverse digital threats with cutting-edge tools and techniques.
                </p>
              </div>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={listItemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <span className="flex-shrink-0 mt-1 text-xl font-semibold">•</span>
              <div className="ml-3">
                <span className="font-semibold text-lg">Education & Practical Training:</span>
                <p className="mt-1 text-base">
                  Our state-of-the-art labs and hands-on educational programs combine theory and practice to equip students with real-world forensics skills.
                </p>
              </div>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={listItemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <span className="flex-shrink-0 mt-1 text-xl font-semibold">•</span>
              <div className="ml-3">
                <span className="font-semibold text-lg">Client-Centric Strategies:</span>
                <p className="mt-1 text-base">
                  We collaborate to develop robust digital threat mitigation plans, ensuring sensitive information remains secure.
                </p>
              </div>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={listItemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <span className="flex-shrink-0 mt-1 text-xl font-semibold">•</span>
              <div className="ml-3">
                <span className="font-semibold text-lg">Innovation & Adaptability:</span>
                <p className="mt-1 text-base">
                  Staying ahead of industry trends, we continuously upgrade our knowledge, tools, and methodologies to provide dynamic, cutting-edge solutions.
                </p>
              </div>
            </motion.li>
          </ul>

          {/* Button */}
          <div className="flex justify-end">
            <motion.button
              className="button-49"
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // Adding cursor pointer for better UX
              style={{ cursor: "pointer" }}
            >
              Click here!
            </motion.button>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default WhyForensicsHQ;
