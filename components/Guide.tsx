"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="padding-container max-container w-full pb-24"
      >
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We’re Here to Guide You
        </p>

        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <motion.h2
            variants={fadeInUp}
            className="bold-40 lg:bold-60 xl:max-w-[390px]"
          >
            Your Shortcut to Outdoor Adventures
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="regular-16 text-gray-30 xl:max-w-[520px]"
          >
            With the Travelexa app, you’ll never feel lost again — even offline.
            Explore confidently with our built-in offline maps and location
            tracking. Bring your crew and make unforgettable memories in the
            wild, from the valleys to the mountain peaks.
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="flexCenter max-container relative w-full"
      >
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20"
        >
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />

          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start Point</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Wonorejo Pasuruan
              </h4>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Guide;
