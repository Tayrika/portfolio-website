// "use client";

// import React from "react";
// import SectionHeading from "./section-heading";
// // import { FaPaperPlane } from "react-icons/fa";
// import { motion } from "framer-motion";
// // import { sendEmail } from "@/actions/sendEmail";

// export default function Contact() {
//   return (
//     <motion.section 
//       className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center" 
//       id="contact"
//       initial={{
//         opacity: 0,
//       }}
//       whileInView={{
//         opacity: 1,
//       }}
//       transition={{
//         duration: 1,
//       }}
//       viewport={{
//         once: true,
//       }}
//     >
//       <SectionHeading>Contact</SectionHeading>
//       <p className="text-gray-700 -mt-6 dark:text-white/80">
//         Please contact me directly at <a className="underline" href="mailto:rikamyt7@gmail.com">rikamyt7@gmail.com</a> or through this form.
//       </p>

//       {/* <form 
//         className="mt-10 flex flex-col dark:text-black"
//         action={async (formData) => {
//           await sendEmail(formData);
//         }}  
//       >
//         <input 
//           className="h-14 px-4 rounded-lg borderBlack text-gray-900 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
//           name="senderEmail" 
//           type="email"
//           required
//           maxLength={500}
//           placeholder="Your email"
//         />
//         <textarea 
//           className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
//           name="message"
//           placeholder="Your message" 
//           required
//           maxLength={5000}
//         />
//         <button 
//           type="submit"
//           className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
//           dark:bg-white dark:bg-opacity-10"
//         >
//           Submit <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" /></button>
//       </form> */}
//     </motion.section>
//   );
// }
