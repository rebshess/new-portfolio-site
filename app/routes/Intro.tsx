import Rebecca from 'public/Rebecca.png';

export default function Intro() {
  return (
    <section className='dark:bg-zinc-800 dark:text-gray-100'>
      <div className='container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-22 lg:flex-row lg:justify-between'>
        <div className='flex flex-col justify-center p-1 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left'>
          <h1 className='text-5xl font-bold leading-none sm:text-6xl'>
            <span className='dark:text-indigo-500'> Rebecca Shesser </span>
            <br />
            Brooklyn-based full-stack software engineer
          </h1>

          <div className='flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-9'>
            <a
              rel='noopener noreferrer'
              href='#'
              className='px-8 py-3 text-lg font-semibold rounded dark:bg-indigo-500 dark:text-gray-900'
            >
              Resume
            </a>
            <a
              rel='noopener noreferrer'
              href='#'
              className='px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100'
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className='flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128'>
          <img
            src={Rebecca}
            alt=''
            className='object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded'
          />
        </div>
      </div>
    </section>
  );
}
