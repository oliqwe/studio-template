import { Container } from '@/components/Container'
import Image from 'next/future/image'
import backgroundImage from '@/images/background-features.jpg'

function Work() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="transform bg-gray-50 pb-14 sm:pb-12 sm:pt-12 lg:pb-32"
    >
      <Container className="h-max">
        <section className="mt-12 h-max  rounded-lg bg-gradient-to-r from-[#00809e] to-[#00809e91] transition duration-500 hover:scale-105">
          <div className="mx-auto max-w-7xl md:grid md:grid-cols-2 md:px-6 lg:px-8">
            <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 lg:pr-16">
              <div className="relative ml-12 flex h-96 content-center items-center text-lg font-medium text-white md:flex-grow">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
                    TapRm
                  </h2>
                  <div className="text-base font-medium text-indigo-200">
                    Small description about the project
                  </div>
                </div>
              </div>
            </div>
            <div className="border-indigo-900 py-12 px-4 sm:px-6 md:py-16 md:pr-0 md:pl-10 lg:pl-16">
              <div className="mt-6 md:flex md:flex-grow md:flex-col">
                <div className="relative text-lg font-medium text-white md:flex-grow"></div>
                <footer className="mt-8">
                  <div className="flex items-start">
                    <div className="inline-flex flex-shrink-0 rounded-full  border-white"></div>
                    <Image
                      src={'/taprm-logo.png'}
                      alt={'TapRm'}
                      width={120}
                      height={200}
                    />
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </section>
  )
}

export default Work
