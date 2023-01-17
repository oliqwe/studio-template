import { motion } from 'framer-motion'

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

function Lunch() {
  return (
    <>
      {/*Lines*/}
      <motion.g
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              duration: 2,
            },
            transitionEnd: {
              opacity: 0,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        <motion.path
          d="M295.6 129.6L295.6 214.8"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          strokeWidth={0.1}
          stroke="black"
          fill="none"
          transition={{
            duration: 1,
            ease: 'easeInOut',
            // repeat: Infinity,
            // repeatType: 'loop',
            // repeatDelay: 1,
          }}
        />
        <motion.path
          d="M429.1 129.6L429.1 214.8"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          strokeWidth={0.1}
          stroke="black"
          fill="none"
          transition={{
            duration: 1,
            ease: 'easeInOut',
            // repeat: Infinity,
            // repeatType: 'loop',
            // repeatDelay: 1,
          }}
        />
        <motion.path
          d="M289.4 150.8L433.6 150.8"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          strokeWidth={0.1}
          stroke="black"
          fill="none"
          transition={{
            duration: 1,
            ease: 'easeInOut',
            // repeat: Infinity,
            // repeatType: 'loop',
            // repeatDelay: 1,
          }}
        />
        <motion.path
          d="M289.4 150.8L433.6 150.8"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          strokeWidth={0.1}
          stroke="black"
          fill="none"
          transition={{
            duration: 1,
            ease: 'easeInOut',
            // repeat: Infinity,
            // repeatType: 'loop',
            // repeatDelay: 1,
          }}
        />
        <motion.path
          d="M289.4 184L433.6 184"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          strokeWidth={0.1}
          stroke="black"
          fill="none"
          transition={{
            duration: 1,
            ease: 'easeInOut',
            // repeat: Infinity,
            // repeatType: 'loop',
            // repeatDelay: 1,
          }}
        />
      </motion.g>

      {/*Fade In Word*/}
      <motion.g
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              delay: 0.5,
              staggerChildren: 0.1,
              delayChildren: 2,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        <motion.path
          variants={item}
          d="M296,184.1v-33.3h7v27.5h14.3v5.8H296z"
        />
        <motion.path
          variants={item}
          d="M337.9,173.5v-14.4h6.9v25h-6.7v-4.5H338c-0.6,1.5-1.5,2.6-2.8,3.5c-1.3,0.9-2.9,1.3-4.8,1.3c-1.7,0-3.1-0.4-4.4-1.1
		c-1.3-0.8-2.3-1.8-3-3.2c-0.7-1.4-1.1-3.1-1.1-5v-15.9h6.9v14.7c0,1.5,0.4,2.6,1.2,3.5c0.8,0.9,1.8,1.3,3.1,1.3
		c0.8,0,1.6-0.2,2.3-0.6c0.7-0.4,1.3-1,1.8-1.7S338,174.6,337.9,173.5z"
        />
        <motion.path
          variants={item}
          d="M357.3,169.7v14.5h-6.9v-25h6.6v4.4h0.3c0.6-1.5,1.5-2.6,2.8-3.5s2.9-1.3,4.7-1.3c1.7,0,3.2,0.4,4.5,1.1
		c1.3,0.8,2.3,1.8,3,3.2c0.7,1.4,1.1,3.1,1.1,5v15.9h-6.9v-14.7c0-1.5-0.4-2.7-1.2-3.6c-0.8-0.9-1.9-1.3-3.3-1.3
		c-0.9,0-1.8,0.2-2.5,0.6c-0.7,0.4-1.3,1-1.7,1.7C357.6,167.7,357.3,168.6,357.3,169.7z"
        />
        <motion.path
          variants={item}
          d="M390.2,184.6c-2.6,0-4.8-0.5-6.6-1.6c-1.8-1.1-3.2-2.6-4.2-4.5c-1-1.9-1.5-4.2-1.5-6.7c0-2.6,0.5-4.8,1.5-6.7
		s2.4-3.4,4.2-4.5c1.8-1.1,4-1.6,6.5-1.6c2.2,0,4.1,0.4,5.7,1.2c1.6,0.8,2.9,1.9,3.9,3.3s1.5,3.1,1.6,5h-6.5c-0.2-1.2-0.7-2.3-1.5-3
		c-0.8-0.8-1.8-1.1-3.1-1.1c-1.1,0-2,0.3-2.8,0.9c-0.8,0.6-1.4,1.4-1.9,2.5c-0.4,1.1-0.7,2.4-0.7,4c0,1.6,0.2,3,0.7,4.1
		c0.4,1.1,1.1,2,1.9,2.6c0.8,0.6,1.7,0.9,2.8,0.9c0.8,0,1.5-0.2,2.1-0.5c0.6-0.3,1.2-0.8,1.6-1.4c0.4-0.6,0.7-1.4,0.8-2.3h6.5
		c-0.1,1.9-0.6,3.6-1.6,5s-2.2,2.6-3.8,3.4C394.3,184.2,392.4,184.6,390.2,184.6z"
        />
        <motion.path
          variants={item}
          d="M412.7,169.7v14.5h-6.9v-33.3h6.7v12.7h0.3c0.6-1.5,1.5-2.6,2.7-3.5c1.3-0.8,2.8-1.3,4.7-1.3c1.7,0,3.3,0.4,4.5,1.1
		c1.3,0.8,2.3,1.8,3,3.2c0.7,1.4,1.1,3.1,1.1,5v15.9H422v-14.7c0-1.5-0.4-2.7-1.2-3.6c-0.8-0.9-1.9-1.3-3.3-1.3
		c-0.9,0-1.8,0.2-2.5,0.6c-0.7,0.4-1.3,1-1.7,1.7C413,167.7,412.8,168.6,412.7,169.7z"
        />
        <motion.path
          variants={item}
          d="M438.5,184.5c-1.1,0-2-0.4-2.8-1.1c-0.8-0.8-1.1-1.7-1.1-2.8c0-1.1,0.4-2,1.1-2.7c0.8-0.8,1.7-1.1,2.8-1.1
		c1,0,2,0.4,2.7,1.1c0.8,0.8,1.2,1.7,1.2,2.7c0,0.7-0.2,1.4-0.5,2c-0.4,0.6-0.8,1.1-1.4,1.4S439.2,184.5,438.5,184.5z"
        />
      </motion.g>

      {/*Word outlined Animation*/}
      <g>
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          strokeWidth={0.2}
          stroke="black"
          fill="none"
          transition={{
            transitionEnd: { display: 'none' },
            duration: 2,
            ease: 'easeInOut',
          }}
          d="M296,184.1v-33.3h7v27.5h14.3v5.8H296z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          strokeWidth={0.2}
          stroke="black"
          fill="none"
          transition={{
            transitionEnd: { display: 'none' },
            duration: 2,
            ease: 'easeInOut',
          }}
          d="M337.9,173.5v-14.4h6.9v25h-6.7v-4.5H338c-0.6,1.5-1.5,2.6-2.8,3.5c-1.3,0.9-2.9,1.3-4.8,1.3c-1.7,0-3.1-0.4-4.4-1.1
		c-1.3-0.8-2.3-1.8-3-3.2c-0.7-1.4-1.1-3.1-1.1-5v-15.9h6.9v14.7c0,1.5,0.4,2.6,1.2,3.5c0.8,0.9,1.8,1.3,3.1,1.3
		c0.8,0,1.6-0.2,2.3-0.6c0.7-0.4,1.3-1,1.8-1.7S338,174.6,337.9,173.5z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          strokeWidth={0.2}
          stroke="black"
          fill="none"
          transition={{
            transitionEnd: { display: 'none' },
            duration: 2,
            ease: 'easeInOut',
          }}
          d="M357.3,169.7v14.5h-6.9v-25h6.6v4.4h0.3c0.6-1.5,1.5-2.6,2.8-3.5s2.9-1.3,4.7-1.3c1.7,0,3.2,0.4,4.5,1.1
		c1.3,0.8,2.3,1.8,3,3.2c0.7,1.4,1.1,3.1,1.1,5v15.9h-6.9v-14.7c0-1.5-0.4-2.7-1.2-3.6c-0.8-0.9-1.9-1.3-3.3-1.3
		c-0.9,0-1.8,0.2-2.5,0.6c-0.7,0.4-1.3,1-1.7,1.7C357.6,167.7,357.3,168.6,357.3,169.7z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          strokeWidth={0.2}
          stroke="black"
          fill="none"
          transition={{
            transitionEnd: { display: 'none' },
            duration: 2,
            ease: 'easeInOut',
          }}
          d="M390.2,184.6c-2.6,0-4.8-0.5-6.6-1.6c-1.8-1.1-3.2-2.6-4.2-4.5c-1-1.9-1.5-4.2-1.5-6.7c0-2.6,0.5-4.8,1.5-6.7
		s2.4-3.4,4.2-4.5c1.8-1.1,4-1.6,6.5-1.6c2.2,0,4.1,0.4,5.7,1.2c1.6,0.8,2.9,1.9,3.9,3.3s1.5,3.1,1.6,5h-6.5c-0.2-1.2-0.7-2.3-1.5-3
		c-0.8-0.8-1.8-1.1-3.1-1.1c-1.1,0-2,0.3-2.8,0.9c-0.8,0.6-1.4,1.4-1.9,2.5c-0.4,1.1-0.7,2.4-0.7,4c0,1.6,0.2,3,0.7,4.1
		c0.4,1.1,1.1,2,1.9,2.6c0.8,0.6,1.7,0.9,2.8,0.9c0.8,0,1.5-0.2,2.1-0.5c0.6-0.3,1.2-0.8,1.6-1.4c0.4-0.6,0.7-1.4,0.8-2.3h6.5
		c-0.1,1.9-0.6,3.6-1.6,5s-2.2,2.6-3.8,3.4C394.3,184.2,392.4,184.6,390.2,184.6z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          strokeWidth={0.2}
          stroke="black"
          fill="none"
          transition={{
            transitionEnd: { display: 'none' },
            duration: 2,
            ease: 'easeInOut',
          }}
          d="M412.7,169.7v14.5h-6.9v-33.3h6.7v12.7h0.3c0.6-1.5,1.5-2.6,2.7-3.5c1.3-0.8,2.8-1.3,4.7-1.3c1.7,0,3.3,0.4,4.5,1.1
		c1.3,0.8,2.3,1.8,3,3.2c0.7,1.4,1.1,3.1,1.1,5v15.9H422v-14.7c0-1.5-0.4-2.7-1.2-3.6c-0.8-0.9-1.9-1.3-3.3-1.3
		c-0.9,0-1.8,0.2-2.5,0.6c-0.7,0.4-1.3,1-1.7,1.7C413,167.7,412.8,168.6,412.7,169.7z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          strokeWidth={0.2}
          stroke="black"
          fill="none"
          transition={{
            transitionEnd: { display: 'none' },
            duration: 2,
            ease: 'easeInOut',
          }}
          d="M438.5,184.5c-1.1,0-2-0.4-2.8-1.1c-0.8-0.8-1.1-1.7-1.1-2.8c0-1.1,0.4-2,1.1-2.7c0.8-0.8,1.7-1.1,2.8-1.1
		c1,0,2,0.4,2.7,1.1c0.8,0.8,1.2,1.7,1.2,2.7c0,0.7-0.2,1.4-0.5,2c-0.4,0.6-0.8,1.1-1.4,1.4S439.2,184.5,438.5,184.5z"
        />
      </g>
    </>
  )
}

export default Lunch
