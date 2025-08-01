// import React from 'react'
// import {motion} from 'framer-motion'
// const Recruiting = () => {
//   return (
//     <div className="relative min-h-screen text-white overflow-hidden">
        
//         <div className="relative max-w-7xl mx-auto px-4 bg-[#2D1E2F] sm:px-6 lg:px-8 py-24">
//         <div className="text-center mb-16">
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-[#F5B638] font-medium mb-4"
//           >
//             Recruiting
//           </motion.p>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-6xl font-bold mb-6"
//           >
//             Recruitment management software 
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-xl text-gray-300 max-w-3xl mx-auto"
//           >
//             The ATS that lets everyone- from recruiters and hiring managers to department heads- hire more efficiently.
//           </motion.p>
//         </div>

//         <div className="items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="space-y-8"
//           >
//             <div className="flex justify-center items-center space-x-4">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 px-6 py-4 bg-white/10 rounded-lg text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-[#F5B638]"
//               />
//               <button className="px-6 py-4 bg-[#F5B638] text-black rounded-lg hover:bg-[#E5A628] font-medium">
//                 See Pract**
//               </button>
//             </div>
//             <p className="mt-3 text-sm text-gray-400">
//                 By clicking "See Pract**," you agree to our terms and privacy policy.
//               </p>
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="mt-24 text-center"
//         >
//           <div className="inline-flex items-center space-x-2 bg-white/5 rounded-full px-4 py-2">
//             <span className="text-[#F5B638]">#1</span>
//             <span>HR Product of 2024 on G2</span>
//           </div>
//         </motion.div>
//       </div>
//       <div className="bg-gray-100 py-16">
//        <div className='text-center text-black  mb-10'>
//         <p>Connect your employees payroll with their login time </p>

//         <h6 className='text-center font-bold mt-10 text-center'>Other systems are error-prone and take hours of
//            manual work to reconcile. With Pract**, approved 
//            hours automatically flow into Payroll—reducing manual data entry and errors.</h6>
//        </div>
//       </div>
//         </div>

//   )
// }

// export default Recruiting



import React from 'react'
import { motion } from 'framer-motion'

const Recruiting = () => {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 bg-[#3c1f3f] sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#F5B638] font-medium mb-4"
          >
            Recruiting
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl font-bold mb-6"
          >
            Recruitment management software 
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            The ATS that lets everyone—from recruiters and hiring managers 
            to department heads—hire more efficiently.
          </motion.p>
        </div>

        {/* Centered container for input and button */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Flex row with input and button */}
            <div className="flex justify-center items-center space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="appearance-none
                    max-w-md
                    px-16
                    py-4
                    bg-white/10
                    rounded-lg
                    text-white
                    placeholder-gray-400
                    border
                    border-gray-600
                    focus:outline-none
                    focus:border-[#F5B638]
                    text-base
                    leading-normal
                  "/>
                <button className="w-3/4 h-[58px] bg-[#F5B638] text-black rounded-lg hover:bg-[#E5A628] font-medium">
                              See Pract**
                            </button>
            </div>

            <p className="mt-3 text-sm text-gray-400 text-center">
              By clicking "See Pract**," you agree to our terms and privacy policy.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-white/5 rounded-full px-4 py-2">
            <span className="text-[#F5B638]">#1</span>
            <span>HR Product of 2024 on G2</span>
          </div>
        </motion.div>
      </div>

      <div className="bg-gray-100 py-16">
        <div className="text-center text-black mb-10">
          <p>Connect your employees' payroll with their login time</p>
          <h6 className="text-center font-bold mt-10">
            Other systems are error-prone and take hours of manual work to reconcile. 
            With Pract**, approved hours automatically flow into Payroll—reducing manual 
            data entry and errors.
          </h6>
        </div>
      </div>
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-8 text-center text-black"
          >
            Turn your entire org into a hiring machine
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-black">
            {/* 1. Align recruiting with every team */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-4"
            >
              <h3 className="text-xl font-semibold mb-2">
                Align recruiting with every team
              </h3>
              <p className="text-gray-600">
                Sync your ATS with every team so you can automatically 
                update changes and streamline communication.
              </p>
            </motion.div>

            {/* 2. Build a repeatable process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-4"
            >
              <h3 className="text-xl font-semibold mb-2">
                Build a repeatable process
              </h3>
              <p className="text-gray-600">
                Let every team customize their hiring process while safeguarding 
                your data’s integrity—and your employees’ time.
              </p>
            </motion.div>

            {/* 3. Unlock the recruiter in everyone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-4"
            >
              <h3 className="text-xl font-semibold mb-2">
                Unlock the recruiter in everyone
              </h3>
              <p className="text-gray-600">
                Department heads, hiring managers, and recruiters all get 
                automatic access to the data and tools they need.
              </p>
            </motion.div>

            {/* 4. Go beyond basic reporting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-4"
            >
              <h3 className="text-xl font-semibold mb-2">
                Go beyond basic reporting
              </h3>
              <p className="text-gray-600">
                Build powerful, custom reports that tie multiple data sources 
                into one single view.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div>
      <div className="bg-white py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 ml-16 items-center">
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-black"
          >
            <h2 className="text-4xl font-bold mb-6">
              Customize the interview process for every role
            </h2>
            <p className="text-gray-700">
              Choose from pre-built pipeline templates, or create custom interview 
              stages that map to company-wide milestones—ensuring there's no gap 
              in your data.
            </p>
          </motion.div>

          {/* RIGHT COLUMN: TIMELINE / PIPELINE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* A simple vertical pipeline list */}
            <div className="border-l border-dashed border-gray-300 ml-32">
              {/* Example steps: adjust to match your own steps and times */}
              {[
                { step: 'Application review', time: '0 - 30 min' },
                { step: 'Recruiter screen', time: '30 min' },
                { step: 'Technical screen', time: '30 min' },
                // { step: 'Onsite', time: '1 - 2 hr' },
                // { step: 'Presentation', time: '1 hr' },
                // { step: 'Sales panel', time: '1 hr' },
                { step: 'Offer', time: 'N/A' }
              ].map((item, idx) => (
                <div key={idx} className="relative flex items-start mb-10">
                  {/* The circle / step number */}
                  <div className="w-10 h-10 rounded-full bg-[#F5B638] text-black flex items-center justify-center font-bold mr-4 -ml-6">
                    0{idx + 1}
                  </div>
                  {/* Step info */}
                  <div>
                    <h3 className="font-semibold text-black">
                      {item.step}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Recruiting;
