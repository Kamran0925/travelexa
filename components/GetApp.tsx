"use client";

import React from "react";
import Button from "./Button";
import Image from "next/image";
import { motion } from "framer-motion";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="get-app"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12"
        >
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Download the App Today
          </h2>
          <p className="regular-16 text-gray-10">
            Start your adventure — available on iOS & Android
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="Download on App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              title="Get it on Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-1 items-center justify-end"
        >
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetApp;
