export default function Feature() {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='flex flex-col justify-center mb-6 lg:flex-row md:mb-10'>
        <div className='lg:w-1/2'>
          <h2 className='max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg text-center'>
            Open source community projects I have been working on
          </h2>
        </div>
      </div>
      <div className='flex justify-center gap-10'>
        <div>
          <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='25'
              fill='currentColor'
              viewBox='0 0 16 16'
            >
              <path d='M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z' />
            </svg>
          </div>
          <h6 className='mb-2 font-semibold leading-5'>The Guest List App</h6>
          <p className='mb-3 text-sm text-gray-900'>
            A single page application to track party <br /> guest contact
            information and RSVP status
          </p>

          <a
            href='/'
            aria-label=''
            className='inline-flex items-center font-semibold transition-colors duration-200 text-indigo-500 hover:text-indigo-800'
          >
            Learn more
          </a>
        </div>
        <div>
          <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='25'
              fill='currentColor'
              className='bi bi-laptop'
              viewBox='0 0 16 16'
            >
              <path d='M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z' />
            </svg>
          </div>
          <h6 className='mb-2 font-semibold leading-5'>CodersOnly</h6>
          <p className='mb-3 text-sm text-gray-900'>
            Social media platform for software engineers <br /> to connect and
            skill build
          </p>
          <a
            href='/'
            aria-label=''
            className='inline-flex items-center font-semibold transition-colors duration-200 text-indigo-500 hover:text-indigo-800'
          >
            Learn more
          </a>
        </div>
        <div>
          <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='25'
              fill='currentColor'
              className='bi bi-list-check'
              viewBox='0 0 16 16'
            >
              <path
                fill-rule='evenodd'
                d='M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z'
              />
            </svg>
          </div>
          <h6 className='mb-2 font-semibold leading-5'>Resolution Evolution</h6>
          <p className='mb-3 text-sm text-gray-900'>
            A pokemon-themed New Year's Resolution <br /> application for
            tracking progress toward goals.
          </p>

          <a
            href='/'
            aria-label=''
            className='inline-flex items-center font-semibold transition-colors duration-200 text-indigo-500 hover:text-indigo-800'
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}
