import { NavLink } from '@remix-run/react';
import { useState } from 'react';

import GreenhouseExp from './experience/GreenhouseExp';
import AttentiveExp from './experience/AttentiveExp';
import VisiQLExp from './experience/VisiQLExp';

import Greenhouse from 'public/Greenhouse.png';
import Attentive from 'public/Attentive.png';
import VisiQL from 'public/VisiQL.png';

export default function Experience() {
  const [openGreenhouse, setOpenGreenhouse] = useState(false);
  const [openAttentive, setOpenAttentive] = useState(false);
  const [openVisiQL, setOpenVisiQL] = useState(false);

  return (
    <section className='my-10 dark:text-gray-100'>
      <div className='container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12'>
        <h1 className='p-2 text-4xl font-semibold leading-none text-black'>
          Professional Experience
        </h1>
      </div>
      <div className='container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10'>
        {/* @ts-ignore */}
        <NavLink
          onClick={(e) => {
            e.preventDefault();
            if (openVisiQL) setOpenVisiQL(false);
            if (!openVisiQL) setOpenVisiQL(true);
          }}
        >
          <div className='flex flex-col max-w-sm mx-4 my-6 shadow-lg hover:scale-105'>
            <div className='px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-zinc-800'>
              <p className='relative px-6 py-1 text-lg italic text-center dark:text-gray-100'>
                VisiQL is an open-source project that I am working on with a
                small team of engineers. The application is an all-in-one
                GraphQL schema and resolver generator and SQL database
                visualizer.
              </p>
            </div>

            <div className='flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-indigo-500 dark:text-gray-900'>
              <img
                src={VisiQL}
                alt='VisiQL Logo'
                className='w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700'
              />
              <p className='text-xl font-semibold leading-tight'>VisiQL</p>
              <p className='text-sm uppercase'>New York, NY</p>
              <p>2022 - Present</p>
            </div>
          </div>
        </NavLink>
        <VisiQLExp openVisiQL={openVisiQL} setOpenVisiQL={setOpenVisiQL} />
        {/* @ts-ignore */}
        <NavLink
          onClick={(e) => {
            e.preventDefault();
            if (openAttentive === true) setOpenAttentive(false);
            if (openAttentive === false) setOpenAttentive(true);
          }}
        >
          <div className='flex flex-col max-w-sm mx-4 my-6 shadow-lg hover:scale-105'>
            <div className='px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-zinc-800'>
              <p className='relative px-6 py-1 text-lg italic text-center dark:text-gray-100'>
                Attentive is the leader in conversational commerce, reinventing
                business-to-consumer communication. Attentive's text message
                marketing solution drives 18.5% of total online revenue for
                leading brands.
              </p>
            </div>
            <div className='flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-indigo-500 dark:text-gray-900'>
              <img
                src={Attentive}
                alt='Attentive Logo'
                className='w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700'
              />
              <p className='text-xl font-semibold leading-tight'>
                Attentive Mobile
              </p>
              <p className='text-sm uppercase'>New York, NY</p>
              <p>2020 - 2023</p>
            </div>
          </div>
        </NavLink>
        <AttentiveExp
          openAttentive={openAttentive}
          setOpenAttentive={setOpenAttentive}
        />

        {/* @ts-ignore */}
        <NavLink
          onClick={(e) => {
            e.preventDefault();
            if (openGreenhouse === true) setOpenGreenhouse(false);
            if (openGreenhouse === false) setOpenGreenhouse(true);
          }}
        >
          <div className='flex flex-col max-w-sm mx-4 my-6 shadow-lg hover:scale-105'>
            <div className='px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-zinc-800'>
              <p className='relative px-6 py-1 text-lg italic text-center dark:text-gray-100'>
                Greenhouse is the hiring operating system for people-first
                companies. Our software and structured hiring approach will help
                you get better at hiring, so you have the technology you need to
                take on what’s next.
              </p>
            </div>
            <div className='flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-indigo-500 dark:text-gray-900'>
              <img
                src={Greenhouse}
                alt='Greenhouse Logo'
                className='w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700'
              />
              <p className='text-xl font-semibold leading-tight'>
                Greenhouse Software
              </p>
              <p className='text-sm uppercase'>New York, NY</p>
              <p>2015 - 2020</p>
            </div>
          </div>
        </NavLink>
        {/* @ts-ignore */}
        <GreenhouseExp
          openGreenhouse={openGreenhouse}
          setOpenGreenhouse={setOpenGreenhouse}
        />
      </div>
    </section>
  );
}
