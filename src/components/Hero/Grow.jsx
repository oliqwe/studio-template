import { motion } from 'framer-motion'

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

function Grow() {
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
              delayChildren: 2,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        <motion.path
          variants={item}
          fill="#1f2937"
          d="M479.4,161.6c-0.2-0.8-0.5-1.5-1-2.1c-0.4-0.6-0.9-1.1-1.5-1.6s-1.3-0.8-2-1c-0.8-0.2-1.6-0.3-2.5-0.3
		c-1.7,0-3.2,0.4-4.5,1.3c-1.3,0.8-2.3,2.1-3,3.7c-0.7,1.6-1.1,3.6-1.1,5.9c0,2.3,0.4,4.3,1.1,5.9c0.7,1.6,1.7,2.9,3,3.7
		c1.3,0.9,2.8,1.3,4.6,1.3c1.6,0,3-0.3,4.1-0.9c1.1-0.6,2-1.4,2.6-2.4c0.6-1,0.9-2.3,0.9-3.7l1.4,0.2h-8.6v-5.3h13.9v4.2
		c0,2.9-0.6,5.4-1.9,7.5c-1.2,2.1-2.9,3.7-5.1,4.8c-2.2,1.1-4.7,1.7-7.5,1.7c-3.1,0-5.9-0.7-8.2-2.1c-2.4-1.4-4.2-3.4-5.5-5.9
		c-1.3-2.6-2-5.6-2-9.1c0-2.7,0.4-5.1,1.2-7.2c0.8-2.1,1.9-3.9,3.3-5.4c1.4-1.5,3.1-2.6,5-3.4s3.9-1.2,6.1-1.2
		c1.9,0,3.6,0.3,5.3,0.8c1.6,0.5,3.1,1.3,4.3,2.3s2.3,2.2,3.1,3.6c0.8,1.4,1.3,2.9,1.5,4.5H479.4z"
        />
        <motion.path
          fill="#1f2937"
          variants={item}
          d="M492,184.1v-25h6.7v4.4h0.3c0.5-1.6,1.2-2.7,2.3-3.5c1.1-0.8,2.3-1.2,3.7-1.2c0.3,0,0.7,0,1.1,0.1c0.4,0,0.8,0.1,1.1,0.2
		v6.2c-0.3-0.1-0.8-0.2-1.4-0.3c-0.6-0.1-1.1-0.1-1.6-0.1c-1,0-1.9,0.2-2.7,0.7s-1.4,1-1.9,1.8s-0.7,1.7-0.7,2.7v14.1H492z"
        />
        <motion.path
          fill="#1f2937"
          variants={item}
          d="M520.8,184.6c-2.5,0-4.7-0.5-6.5-1.6s-3.3-2.6-4.3-4.5s-1.5-4.2-1.5-6.7c0-2.6,0.5-4.8,1.5-6.8s2.4-3.4,4.3-4.5
		c1.8-1.1,4-1.6,6.5-1.6c2.5,0,4.7,0.5,6.6,1.6c1.8,1.1,3.3,2.6,4.3,4.5s1.5,4.2,1.5,6.8c0,2.6-0.5,4.8-1.5,6.7s-2.4,3.4-4.3,4.5
		C525.5,184.1,523.4,184.6,520.8,184.6z M520.9,179.2c1.2,0,2.1-0.3,2.9-1c0.8-0.7,1.4-1.6,1.7-2.7c0.4-1.1,0.6-2.4,0.6-3.9
		c0-1.5-0.2-2.8-0.6-3.9c-0.4-1.1-1-2-1.7-2.7c-0.8-0.7-1.7-1-2.9-1c-1.2,0-2.1,0.3-2.9,1c-0.8,0.7-1.4,1.6-1.8,2.7
		c-0.4,1.1-0.6,2.4-0.6,3.9c0,1.5,0.2,2.8,0.6,3.9s1,2,1.8,2.7S519.7,179.2,520.9,179.2z"
        />
        <motion.path
          fill="#1f2937"
          variants={item}
          d="M542,184.1l-6.8-25h7l3.9,16.8h0.2l4-16.8h6.9l4.1,16.7h0.2l3.8-16.7h7l-6.8,25h-7.3l-4.3-15.7h-0.3l-4.3,15.7H542z"
        />
        <motion.path
          fill="#1f2937"
          variants={item}
          d="M576.7,184.5c-1.1,0-2-0.4-2.8-1.1c-0.8-0.8-1.1-1.7-1.1-2.8c0-1.1,0.4-2,1.1-2.7c0.8-0.8,1.7-1.1,2.8-1.1
		c1,0,2,0.4,2.7,1.1c0.8,0.8,1.2,1.7,1.2,2.7c0,0.7-0.2,1.4-0.5,2c-0.4,0.6-0.8,1.1-1.4,1.4S577.4,184.5,576.7,184.5z"
        />
      </motion.g>
      {/*Outlined Word Animation*/}
      <g>
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          strokeWidth={0.2}
          stroke="#1f2937"
          fill="none"
          transition={{
            transitionEnd: { display: 'none' },
            duration: 2,
            ease: 'easeInOut',
          }}
          d="M479.4,161.6c-0.2-0.8-0.5-1.5-1-2.1c-0.4-0.6-0.9-1.1-1.5-1.6s-1.3-0.8-2-1c-0.8-0.2-1.6-0.3-2.5-0.3
		c-1.7,0-3.2,0.4-4.5,1.3c-1.3,0.8-2.3,2.1-3,3.7c-0.7,1.6-1.1,3.6-1.1,5.9c0,2.3,0.4,4.3,1.1,5.9c0.7,1.6,1.7,2.9,3,3.7
		c1.3,0.9,2.8,1.3,4.6,1.3c1.6,0,3-0.3,4.1-0.9c1.1-0.6,2-1.4,2.6-2.4c0.6-1,0.9-2.3,0.9-3.7l1.4,0.2h-8.6v-5.3h13.9v4.2
		c0,2.9-0.6,5.4-1.9,7.5c-1.2,2.1-2.9,3.7-5.1,4.8c-2.2,1.1-4.7,1.7-7.5,1.7c-3.1,0-5.9-0.7-8.2-2.1c-2.4-1.4-4.2-3.4-5.5-5.9
		c-1.3-2.6-2-5.6-2-9.1c0-2.7,0.4-5.1,1.2-7.2c0.8-2.1,1.9-3.9,3.3-5.4c1.4-1.5,3.1-2.6,5-3.4s3.9-1.2,6.1-1.2
		c1.9,0,3.6,0.3,5.3,0.8c1.6,0.5,3.1,1.3,4.3,2.3s2.3,2.2,3.1,3.6c0.8,1.4,1.3,2.9,1.5,4.5H479.4z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          strokeWidth={0.2}
          stroke="#1f2937"
          fill="none"
          transition={{
            transitionEnd: { display: 'none' },
            duration: 2,
            ease: 'easeInOut',
          }}
          d="M492,184.1v-25h6.7v4.4h0.3c0.5-1.6,1.2-2.7,2.3-3.5c1.1-0.8,2.3-1.2,3.7-1.2c0.3,0,0.7,0,1.1,0.1c0.4,0,0.8,0.1,1.1,0.2
		v6.2c-0.3-0.1-0.8-0.2-1.4-0.3c-0.6-0.1-1.1-0.1-1.6-0.1c-1,0-1.9,0.2-2.7,0.7s-1.4,1-1.9,1.8s-0.7,1.7-0.7,2.7v14.1H492z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          strokeWidth={0.2}
          stroke="#1f2937"
          fill="none"
          transition={{
            transitionEnd: { display: 'none' },
            duration: 2,
            ease: 'easeInOut',
          }}
          d="M520.8,184.6c-2.5,0-4.7-0.5-6.5-1.6s-3.3-2.6-4.3-4.5s-1.5-4.2-1.5-6.7c0-2.6,0.5-4.8,1.5-6.8s2.4-3.4,4.3-4.5
		c1.8-1.1,4-1.6,6.5-1.6c2.5,0,4.7,0.5,6.6,1.6c1.8,1.1,3.3,2.6,4.3,4.5s1.5,4.2,1.5,6.8c0,2.6-0.5,4.8-1.5,6.7s-2.4,3.4-4.3,4.5
		C525.5,184.1,523.4,184.6,520.8,184.6z M520.9,179.2c1.2,0,2.1-0.3,2.9-1c0.8-0.7,1.4-1.6,1.7-2.7c0.4-1.1,0.6-2.4,0.6-3.9
		c0-1.5-0.2-2.8-0.6-3.9c-0.4-1.1-1-2-1.7-2.7c-0.8-0.7-1.7-1-2.9-1c-1.2,0-2.1,0.3-2.9,1c-0.8,0.7-1.4,1.6-1.8,2.7
		c-0.4,1.1-0.6,2.4-0.6,3.9c0,1.5,0.2,2.8,0.6,3.9s1,2,1.8,2.7S519.7,179.2,520.9,179.2z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          strokeWidth={0.2}
          stroke="#1f2937"
          fill="none"
          transition={{
            transitionEnd: { display: 'none' },
            duration: 2,
            ease: 'easeInOut',
          }}
          d="M542,184.1l-6.8-25h7l3.9,16.8h0.2l4-16.8h6.9l4.1,16.7h0.2l3.8-16.7h7l-6.8,25h-7.3l-4.3-15.7h-0.3l-4.3,15.7H542z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          strokeWidth={0.2}
          stroke="#1f2937"
          fill="none"
          transition={{
            transitionEnd: { display: 'none' },
            duration: 2,
            ease: 'easeInOut',
          }}
          d="M576.7,184.5c-1.1,0-2-0.4-2.8-1.1c-0.8-0.8-1.1-1.7-1.1-2.8c0-1.1,0.4-2,1.1-2.7c0.8-0.8,1.7-1.1,2.8-1.1
		c1,0,2,0.4,2.7,1.1c0.8,0.8,1.2,1.7,1.2,2.7c0,0.7-0.2,1.4-0.5,2c-0.4,0.6-0.8,1.1-1.4,1.4S577.4,184.5,576.7,184.5z"
        />
      </g>

      {/*  Lines */}
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
          d="M451.2 130.3L451.2 215.4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          strokeWidth={0.1}
          stroke="#1f2937"
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
          d="M451.2 130.3L451.2 215.4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          strokeWidth={0.1}
          stroke="#1f2937"
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
          d="M584.7 130.3L584.7 215.4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          strokeWidth={0.1}
          stroke="#1f2937"
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
          d="M445 150.2L589.2 150.2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          strokeWidth={0.1}
          stroke="#1f2937"
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
          d="M445 184.6L589.2 184.6"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          strokeWidth={0.1}
          stroke="#1f2937"
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
    </>
  )
}

export default Grow
