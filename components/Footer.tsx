"use client";

import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const bounceIn = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  }),
};

const Footer = () => {
  return (
    <footer className="flexCenter bg-gradient-to-br from-[#162015] via-[#1f2e1a] to-[#0d1410] text-white py-20 px-6 sm:px-10 md:px-20 lg:px-32 rounded-t-3xl border-t border-green-900 shadow-[inset_0_10px_20px_rgba(0,0,0,0.2)]">
      <div className="max-container flex w-full flex-col gap-16">
        <div className="flex flex-col items-start justify-center gap-14 md:flex-row md:justify-between">
          <Link href="/" className="mb-6">
            <h4 className="text-3xl font-bold font-serif">
              Travel<span className="text-green-500">exa</span>
            </h4>
          </Link>

          <div className="flex flex-wrap gap-10 md:flex-1 justify-between">
            {FOOTER_LINKS.map((columns, i) => (
              <FooterColumn title={columns.title} key={columns.title}>
                <motion.ul
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="regular-14 flex flex-col gap-4 text-gray-300"
                >
                  {columns.links.map((link, idx) => (
                    <motion.li
                      key={link}
                      variants={fadeIn}
                      custom={idx}
                      className="hover:text-green-400 transition-colors duration-300"
                    >
                      <Link href="/">{link}</Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </FooterColumn>
            ))}

            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
              {FOOTER_CONTACT_INFO.links.map((link) => (
                <div
                  key={link.label}
                  className="flex gap-4 md:flex-col lg:flex-row text-gray-300"
                >
                  <p className="whitespace-nowrap">{link.label}:</p>
                  <p className="medium-14 whitespace-nowrap text-white">
                    {link.value}
                  </p>
                </div>
              ))}
            </FooterColumn>

            <FooterColumn title={SOCIALS.title}>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex gap-4 items-center"
              >
                {SOCIALS.links.map((link, i) => (
                  <motion.li
                    key={link}
                    variants={bounceIn}
                    custom={i}
                    className="hover:scale-110 transition-transform duration-300"
                  >
                    <Link href="/">
                      <Image
                        src={link}
                        alt="social-icon"
                        width={30}
                        height={30}
                        className="object-contain invert"
                      />
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </FooterColumn>
          </div>
        </div>

        <div className="h-px w-full bg-white/10" />
        <p className="regular-14 w-full text-center text-gray-400">
          © {new Date().getFullYear()} Travelexa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5 min-w-[150px]">
      <h4 className="bold-18 text-white whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
