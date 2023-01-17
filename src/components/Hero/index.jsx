import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

import Build from '@/components/Hero/Build'
import Lunch from '@/components/Hero/Lunch'
import Grow from '@/components/Hero/Grow'

// <svg
//     aria-hidden="true"
//     viewBox="0 0 400 120"
//     className="absolute top-2/3 left-0 h-[0.68em] w-full fill-blue-300/70"
//     preserveAspectRatio="none"
// >
//     <motion.path
//         d="M458.5,65.4c-18.7-0.9-38.5-2.5-57.7-4.1c-30.1-2.4-61.3-4.9-88.5-4.9c-2.9,0-5.7,0-8.4,0.1
// 	c-2.6-0.7-6.4-1.1-11.6-1.1c-9.6,0-22.6,1.2-36.3,2.4c-14.2,1.3-29,2.6-40.3,2.6c-10.6,0-16.9-1.2-18.9-3.4c1.9-1,9-4.2,35.7-13.2
// 	c26.2-8.9,26.3-10,26.4-11.2c0-0.5-0.3-1-0.8-1.1c-8.7-1.9-19.7-2.8-32.8-2.8c-43.4,0-102.2,10.1-154,19.1c-5.8,1-11.4,2-16.9,2.9
// 	c44.1-14.1,134.3-24.3,178.1-24.3c5.3,0,9.8,0.1,13.6,0.4c15.4,1.3,16.9,3.9,17,4.6c0.6,4.8-25.6,13.6-39.7,18.4
// 	c-12.5,4.2-15.5,5.3-16,6.5c-0.1,0.3-0.1,0.7,0.1,1c0.2,0.3,0.5,0.4,0.8,0.4c0,0,0.1,0,0.1,0c30.7-2.5,59.7-3.8,88.7-3.8
// 	c41.4,0,84.8,2.5,140.5,8c5.5,0.8,9.9,1.1,13.4,1.4c3.9,0.3,7.3,0.5,7.7,1.3C458.7,64.7,458.7,64.9,458.5,65.4z"
//         strokeLinecap="round"
//         initial={{ pathLength: 0 }}
//         animate={{ pathLength: 0.7 }}
//         strokeWidth={5}
//         stroke="black"
//         fill="none"
//         transition={{
//             duration: 2,
//             ease: 'easeInOut',
//             // repeat: Infinity,
//             // repeatType: 'loop',
//             // repeatDelay: 1,
//         }}
//     />
// </svg>

export function Index() {
  return (
    <Container className="pt-20 pb-16 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl text-5xl font-bold font-medium tracking-tight text-slate-900 sm:text-7xl">
        {/*Accelerated digital innovation with quality beyond software.*/}

        <span className="relative whitespace-nowrap text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            version="1.1"
            viewBox="160 140 420 60"
            xmlSpace="preserve"
          >
            <Build />
            <Lunch />
            <Grow />
          </svg>

          <span className="relative font-bold"> Build. Launch. Grow.</span>
        </span>
      </h1>
      <p className="mx-auto mt-7 max-w-2xl text-xl tracking-tight text-slate-600">
        Custom Software & Web Development to fuel your growth.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          variant="outline"
        >
          <span className="mr-3">See Out Work</span>
          <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none rotate-90 fill-blue-600 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
        </Button>
      </div>
    </Container>
  )
}
