"use client";

import Image from "next/image";
import profilePicture from "../public/pp.jpg";
import ThemeToggle from "../components/ui/theme-toggle";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import jobPilotImage from "../public/JobPilot.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">
        <motion.header
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-12"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image
              src={profilePicture}
              alt="profile picture"
              className="cursor-pointer transition-all duration-300 hover:scale-110"
            ></Image>
          </div>
          <ThemeToggle />
        </motion.header>

        <main className="space-y-10">
          <section className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-1"
            >
              <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
                Muhammed Bilal K
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Software Engineer
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {" "}
                Bangalore, India
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-3"
            >
              <h2 className="text-lg font-semibold">
                Building scalable solution for Tomorrow
              </h2>
              <p className="text-gray-600 text-sm dark:test-gray-400 max-w-2xl">
                expert in design and implementing large-scale distributed
                systems. wit deep expertise in{" "}
                <span className="text-black dark:text-white">
                  MERN, Kubernetes and Microservices Architecture
                </span>
                .
              </p>
              <p className="text-gray-600 text-sm dark:test-gray-400 max-w-2xl">
                Beyond technical architecture, Im passionate about MERN
                practices and building resilient systems that can scale
                effectively while maintaining high availability and performance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3"
            >
              <Button
                className="rounded-full bg-gradient-to-r
            from-rose-600 to-indigo-600
            text-white transition-transform
              hover:scale-105"
              >
                Resume
              </Button>

              <Link
                href="https://github.com/Muhammed-Bilal-K"
                className="text-gray-600 dark:text-gray-400 
            hover:text-black dark:hover:text-white transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/muhammed-bilal-k-210a931b2/"
                className="text-gray-600 dark:text-gray-400 
            hover:text-black dark:hover:text-white transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400 
            hover:text-black dark:hover:text-white transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </Link>
            </motion.div>
          </section>

          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-slate-500 bg-clip-text text-transparent inline-block">
              Experience
            </h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    August, 2024 - Present
                  </p>
                  <p className="font-medium">Software Engineer</p>
                  <p className="text-blue-600 dark:text-blue-400">Brototype</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Contributed to the development of cloud-native applications
                using DigitalOcean services, working on both frontend and
                backend features. Configured CI/CD pipelines and automated
                deployment processes, enhancing application functionality and
                reducing release cycle times by 60%.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-slate-500 bg-clip-text text-transparent inline-block">
              Education
            </h2>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400 ">
                    June, 2019 - 2023
                  </p>
                  <p className="font-medium">B.Tech - Computer Science</p>
                  <p className="text-blue-600 dark:text-blue-400">
                    CGPA : 6.89
                  </p>
                </div>
              </div>
              {/* <p className="text-gray-600 dark:text-gray-400"></p> */}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-slate-500 bg-clip-text text-transparent inline-block">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image
                    src={jobPilotImage}
                    alt="jobPilot"
                    className="rounded-lg mb-4"
                  />

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="fnt">JobPilot</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        SaaS Software for Job Seeking and Recruiting{" "}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        React, Redux, Tailwind CSS, TypeScript, Mongodb, Node,
                        Express, Socket.io, RabbitMQ, Microservices
                        Architecture, Docker
                      </p>
                    </div>
                    <Button variant="ghost" size="icon">
                      {"->"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <p className="text-gray-500">&copy; 2024 Muhammed Bilal K</p>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
