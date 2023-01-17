import { motion } from 'framer-motion'

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

function Build() {
  return (
    <>
      {/*Fade in Bold Words*/}
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
          d="M160.4,184.1v-33.3h13.3c2.5,0,4.5,0.4,6.1,1.1c1.6,0.7,2.9,1.7,3.7,3c0.8,1.3,1.2,2.8,1.2,4.4c0,1.3-0.3,2.4-0.8,3.4
		c-0.5,1-1.2,1.8-2.1,2.4c-0.9,0.6-1.9,1.1-3.1,1.3v0.3c1.3,0.1,2.5,0.4,3.6,1.1c1.1,0.7,2,1.6,2.7,2.8c0.7,1.2,1,2.6,1,4.2
		c0,1.8-0.4,3.3-1.3,4.7c-0.9,1.4-2.2,2.5-3.9,3.3c-1.7,0.8-3.8,1.2-6.3,1.2H160.4z M167.5,164.7h5.2c1,0,1.8-0.2,2.6-0.5
		s1.4-0.8,1.8-1.5c0.4-0.6,0.7-1.4,0.7-2.3c0-1.2-0.4-2.2-1.3-2.9c-0.9-0.7-2.1-1.1-3.6-1.1h-5.4V164.7z M167.5,178.4h5.7
		c2,0,3.4-0.4,4.3-1.1s1.4-1.8,1.4-3c0-0.9-0.2-1.7-0.7-2.4c-0.4-0.7-1.1-1.3-1.9-1.7c-0.8-0.4-1.8-0.6-2.9-0.6h-5.9V178.4z"
        />
        <motion.path
          variants={item}
          d="M206.7,173.5v-14.4h6.9v25H207v-4.5h-0.3c-0.6,1.5-1.5,2.6-2.8,3.5c-1.3,0.9-2.9,1.3-4.8,1.3c-1.7,0-3.1-0.4-4.4-1.1
		c-1.3-0.8-2.3-1.8-3-3.2c-0.7-1.4-1.1-3.1-1.1-5v-15.9h6.9v14.7c0,1.5,0.4,2.6,1.2,3.5c0.8,0.9,1.8,1.3,3.1,1.3
		c0.8,0,1.6-0.2,2.3-0.6c0.7-0.4,1.3-1,1.8-1.7S206.7,174.6,206.7,173.5z"
        />
        <motion.path
          variants={item}
          d="M222.7,155.9c-1,0-1.9-0.3-2.7-1c-0.7-0.7-1.1-1.5-1.1-2.5c0-1,0.4-1.8,1.1-2.5c0.7-0.7,1.6-1,2.6-1c1,0,1.9,0.3,2.7,1
		c0.7,0.7,1.1,1.5,1.1,2.5c0,1-0.4,1.8-1.1,2.5C224.6,155.6,223.7,155.9,222.7,155.9z M219.2,184.1v-25h6.9v25H219.2z"
        />
        <motion.path variants={item} d="M238.6,150.8v33.3h-6.9v-33.3H238.6z" />
        <motion.path
          variants={item}
          d="M253.3,184.5c-1.9,0-3.6-0.5-5.2-1.5c-1.5-1-2.8-2.4-3.6-4.3c-0.9-1.9-1.3-4.3-1.3-7.1c0-2.9,0.5-5.2,1.4-7.2
		c0.9-1.9,2.2-3.3,3.7-4.3s3.2-1.4,5.1-1.4c1.4,0,2.6,0.2,3.5,0.7c0.9,0.5,1.7,1.1,2.3,1.8c0.6,0.7,1,1.4,1.3,2.1h0.2v-12.5h6.9
		v33.3h-6.8v-4h-0.3c-0.3,0.7-0.8,1.4-1.4,2.1s-1.4,1.2-2.3,1.7C255.8,184.3,254.7,184.5,253.3,184.5z M255.5,179
		c1.1,0,2.1-0.3,2.8-0.9c0.8-0.6,1.4-1.5,1.8-2.6s0.6-2.4,0.6-3.9c0-1.5-0.2-2.8-0.6-3.9c-0.4-1.1-1-1.9-1.8-2.5s-1.7-0.9-2.8-0.9
		c-1.1,0-2.1,0.3-2.9,0.9c-0.8,0.6-1.4,1.5-1.8,2.6s-0.6,2.4-0.6,3.8c0,1.5,0.2,2.7,0.6,3.8c0.4,1.1,1,2,1.8,2.6
		C253.4,178.7,254.4,179,255.5,179z"
        />
        <motion.path
          variants={item}
          d="M277.3,184.5c-1.1,0-2-0.4-2.8-1.1c-0.8-0.8-1.1-1.7-1.1-2.8c0-1.1,0.4-2,1.1-2.7c0.8-0.8,1.7-1.1,2.8-1.1
		c1,0,2,0.4,2.7,1.1c0.8,0.8,1.2,1.7,1.2,2.7c0,0.7-0.2,1.4-0.5,2c-0.4,0.6-0.8,1.1-1.4,1.4S278,184.5,277.3,184.5z"
        />
      </motion.g>

      {/*FadeIn Lines*/}
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
          d="M160.4 129.6L160.4 214.8"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          strokeWidth={0.1}
          stroke="black"
          fill="none"
          transitionEnd={{ pathLength: 0, opacity: 0 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            // repeat: Infinity,
            // repeatType: 'loop',
            // repeatDelay: 1,
          }}
        />
        <motion.path
          d="M267.6 129.6L267.6 214.8"
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
          d="M148.2 148.9L283.7 148.9"
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
          d="M148.2 184.1L283.7 184.1"
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

      {/*Outlined Word Animation*/}
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
          d="M160.4,184.1v-33.3h13.3c2.5,0,4.5,0.4,6.1,1.1c1.6,0.7,2.9,1.7,3.7,3c0.8,1.3,1.2,2.8,1.2,4.4c0,1.3-0.3,2.4-0.8,3.4
		c-0.5,1-1.2,1.8-2.1,2.4c-0.9,0.6-1.9,1.1-3.1,1.3v0.3c1.3,0.1,2.5,0.4,3.6,1.1c1.1,0.7,2,1.6,2.7,2.8c0.7,1.2,1,2.6,1,4.2
		c0,1.8-0.4,3.3-1.3,4.7c-0.9,1.4-2.2,2.5-3.9,3.3c-1.7,0.8-3.8,1.2-6.3,1.2H160.4z M167.5,164.7h5.2c1,0,1.8-0.2,2.6-0.5
		s1.4-0.8,1.8-1.5c0.4-0.6,0.7-1.4,0.7-2.3c0-1.2-0.4-2.2-1.3-2.9c-0.9-0.7-2.1-1.1-3.6-1.1h-5.4V164.7z M167.5,178.4h5.7
		c2,0,3.4-0.4,4.3-1.1s1.4-1.8,1.4-3c0-0.9-0.2-1.7-0.7-2.4c-0.4-0.7-1.1-1.3-1.9-1.7c-0.8-0.4-1.8-0.6-2.9-0.6h-5.9V178.4z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          strokeWidth={0.2}
          stroke="black"
          fill="none"
          transition={{
            duration: 2,
            ease: 'easeInOut',
            // repeat: Infinity,
            // repeatType: 'loop',
            // repeatDelay: 1,
          }}
          d="M206.7,173.5v-14.4h6.9v25H207v-4.5h-0.3c-0.6,1.5-1.5,2.6-2.8,3.5c-1.3,0.9-2.9,1.3-4.8,1.3c-1.7,0-3.1-0.4-4.4-1.1
		c-1.3-0.8-2.3-1.8-3-3.2c-0.7-1.4-1.1-3.1-1.1-5v-15.9h6.9v14.7c0,1.5,0.4,2.6,1.2,3.5c0.8,0.9,1.8,1.3,3.1,1.3
		c0.8,0,1.6-0.2,2.3-0.6c0.7-0.4,1.3-1,1.8-1.7S206.7,174.6,206.7,173.5z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          strokeWidth={0.2}
          stroke="black"
          fill="none"
          transition={{
            duration: 2,
            ease: 'easeInOut',
            // repeat: Infinity,
            // repeatType: 'loop',
            // repeatDelay: 1,
          }}
          d="M222.7,155.9c-1,0-1.9-0.3-2.7-1c-0.7-0.7-1.1-1.5-1.1-2.5c0-1,0.4-1.8,1.1-2.5c0.7-0.7,1.6-1,2.6-1c1,0,1.9,0.3,2.7,1
		c0.7,0.7,1.1,1.5,1.1,2.5c0,1-0.4,1.8-1.1,2.5C224.6,155.6,223.7,155.9,222.7,155.9z M219.2,184.1v-25h6.9v25H219.2z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          strokeWidth={0.2}
          stroke="black"
          fill="none"
          transition={{
            duration: 2,
            ease: 'easeInOut',
            // repeat: Infinity,
            // repeatType: 'loop',
            // repeatDelay: 1,
          }}
          d="M238.6,150.8v33.3h-6.9v-33.3H238.6z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          strokeWidth={0.2}
          stroke="black"
          fill="none"
          transition={{
            duration: 2,
            ease: 'easeInOut',
            // repeat: Infinity,
            // repeatType: 'loop',
            // repeatDelay: 1,
          }}
          d="M253.3,184.5c-1.9,0-3.6-0.5-5.2-1.5c-1.5-1-2.8-2.4-3.6-4.3c-0.9-1.9-1.3-4.3-1.3-7.1c0-2.9,0.5-5.2,1.4-7.2
		c0.9-1.9,2.2-3.3,3.7-4.3s3.2-1.4,5.1-1.4c1.4,0,2.6,0.2,3.5,0.7c0.9,0.5,1.7,1.1,2.3,1.8c0.6,0.7,1,1.4,1.3,2.1h0.2v-12.5h6.9
		v33.3h-6.8v-4h-0.3c-0.3,0.7-0.8,1.4-1.4,2.1s-1.4,1.2-2.3,1.7C255.8,184.3,254.7,184.5,253.3,184.5z M255.5,179
		c1.1,0,2.1-0.3,2.8-0.9c0.8-0.6,1.4-1.5,1.8-2.6s0.6-2.4,0.6-3.9c0-1.5-0.2-2.8-0.6-3.9c-0.4-1.1-1-1.9-1.8-2.5s-1.7-0.9-2.8-0.9
		c-1.1,0-2.1,0.3-2.9,0.9c-0.8,0.6-1.4,1.5-1.8,2.6s-0.6,2.4-0.6,3.8c0,1.5,0.2,2.7,0.6,3.8c0.4,1.1,1,2,1.8,2.6
		C253.4,178.7,254.4,179,255.5,179z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          strokeWidth={0.2}
          stroke="black"
          fill="none"
          transition={{
            duration: 2,
            ease: 'easeInOut',
            // repeat: Infinity,
            // repeatType: 'loop',
            // repeatDelay: 1,
          }}
          d="M277.3,184.5c-1.1,0-2-0.4-2.8-1.1c-0.8-0.8-1.1-1.7-1.1-2.8c0-1.1,0.4-2,1.1-2.7c0.8-0.8,1.7-1.1,2.8-1.1
		c1,0,2,0.4,2.7,1.1c0.8,0.8,1.2,1.7,1.2,2.7c0,0.7-0.2,1.4-0.5,2c-0.4,0.6-0.8,1.1-1.4,1.4S278,184.5,277.3,184.5z"
        />
      </g>
    </>
  )
}
export default Build
