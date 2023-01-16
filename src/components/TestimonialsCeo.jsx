import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

function TestimonialsCeo() {
  return (
    <div className=" pt-16 lg:py-24">
      <div className="bg-indigo-600 pb-16 lg:relative lg:z-10 lg:pb-0">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
          <div className="relative lg:-my-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1/2  lg:hidden"
            />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
              <div className="aspect-w-10 aspect-h-6 sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none overflow-hidden rounded-xl shadow-xl lg:h-full">
                <img
                  className="object-cover lg:h-full lg:w-full"
                  src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
              <p className="font-display text-2xl text-blue-50 text-slate-900">
                I'm <b>Corina Copaceanu</b>
                <br /> And I'll introduce you to your tech team
              </p>
              <blockquote>
                <div>
                  <p className="text-1xl mt-6 font-light text-white">
                    I've been creating technology for 15 years, always aiming to
                    achieve 10x more in less time. You may think I'm
                    hyper-focused on productivity above everything else, and in
                    a sense, I am. But all I want is to get technology out of
                    the way to concentrate on the actual work: understanding
                    humans and businesses and coming up with creative solutions.
                  </p>
                </div>
                <footer className="mt-6">
                  <Button color="white" variant="solid">
                    <span>
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      Join me on LinkedIn
                    </span>
                  </Button>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsCeo
