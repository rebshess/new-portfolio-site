import Greenhouse from 'public/Greenhouse.png';

type GreenhouseProps = {
  openGreenhouse: Boolean;
  setOpenGreenhouse: Function;
};

export default function GreenhouseExp({
  openGreenhouse,
  setOpenGreenhouse,
}: GreenhouseProps) {
  return openGreenhouse ? (
    <section className='dark:bg-gray-800 dark:text-gray-100 mx-auto'>
      <div className='container flex flex-col-reverse mx-auto lg:flex-row'>
        <div className='flex flex-col rounded-sm sm:p-8 lg:p-12 dark:bg-indigo-500 dark:text-gray-900'>
          <div className='flex space-x-2 sm:space-x-4'>
            <div className='space-y-2'>
              <p className='text-lg font-medium leading-snug'>
                Manager, Sales Development | August 2019 - April 2020
              </p>
              <p className='leading-snug'>
                • Onboarded and managed team of 15 outbound SDRs to prospect,
                message and qualify leads to drive revenue
                <br />
                • Trained reps on Force Management sales ideology for successful
                objection handling and opportunity conversion
                <br />• Held structured twice-weekly 1:1s to reinforce
                processes, metrics, aggressive goals and career ladders across
                team <br /> • Acted as hiring manager to structure searching,
                screening and interviewing of candidates and new hires <br />{' '}
                <br />
              </p>
            </div>
          </div>
          <div className='flex space-x-2 sm:space-x-4'>
            <div className='space-y-2'>
              <p className='text-lg font-medium leading-snug'>
                Customer Success Manager | May 2018 – July 2019
              </p>
              <p className='leading-snug'>
                • Managed 200+ clients over the course of my time with
                Greenhouse carrying out technical implementations and requests{' '}
                <br />• Wrote custom VBA and SQL scripts to pull platform
                recruiting metrics and to provide data-driven strategy to drive
                client revenue
                <br />• Worked alongside the engineering and product teams to
                build out roadmaps for product features based on client requests
                <br />• Partnered with client’s BI teams to integrate Tableau
                into Greenhouse’s recruiting platform to provide custom
                reporting
                <br />• Developed customized technical reports with clients in
                order to measure and iterate on recruiting strategy
                <br />• Featured speaker at Greenhouse Open 2019 and Namely HR
                Redefined 2019 conferences <br /> <br />
              </p>
            </div>
          </div>
          <div className='flex space-x-2 sm:space-x-4'>
            <div className='space-y-2'>
              <p className='text-lg font-medium leading-snug'>
                Implementation Manager | July 2017– April 2018
              </p>
              <p className='leading-snug'>
                • Partnered with over 150 customers for the first 60 days of
                their contract to fully implement Greenhouse
                <br />
                • Provided best-practice driven guidance to clients in order to
                support successful and long-lasting ATS structure
                <br />
                • Ensured smooth implementation with the goal of user adoption,
                upsell opportunity, and eventual contract renewal <br /> <br />
              </p>
            </div>
          </div>
          <div className='flex space-x-2 sm:space-x-4'>
            <div className='space-y-2'>
              <p className='text-lg font-medium leading-snug'>
                Team Lead, Sales Development | August 2016 – June 2017
              </p>
              <p className='leading-snug'>
                • Mentored reps with the goal of performance improvement and
                100% quota attainment <br />
                • A/B tested and launched messaging cadences and content to
                improve team open and reply rates <br />
                • Created and delivered trainings to improve team cold calling,
                prospecting, emailing, and lead qualification skills <br />
                <br />
              </p>
            </div>
          </div>
          <div className='flex space-x-2 sm:space-x-4'>
            <div className='space-y-2'>
              <p className='text-lg font-medium leading-snug'>
                Sales Development Representative | August 2015 – July 2016
              </p>
              <p className='leading-snug'>
                • Consistently hit 100%+ of quota and generated leads resulting
                in $500K+ of closed ARR throughout tenure
                <br /> • Managed, researched, and converted pipeline of leads to
                engage them in Greenhouse’s sales process <br />• Cold called,
                emailed, and networked with individuals in the talent
                acquisition space to share Greenhouse’s value <br />
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className='flex lg:w-1/4 xl:w-1/4 dark:bg-gray-800 justify-center items-center'>
          <div className='flex flex-col items-center justify-center p-4 md:p-8 lg:p-12'>
            <img
              src={Greenhouse}
              alt='gh-logo'
              className='rounded-lg shadow-lg'
            />
          </div>
        </div>
      </div>
    </section>
  ) : null;
}
