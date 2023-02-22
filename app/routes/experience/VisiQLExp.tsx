import VisiQL from 'public/VisiQL.png';

type VisiQLProps = {
  openVisiQL: Boolean;
  setOpenVisiQL: Function;
};

export default function VisiQLExp({ openVisiQL, setOpenVisiQL }: VisiQLProps) {
  return openVisiQL ? (
    <section className='dark:bg-gray-800 dark:text-gray-100 mx-auto sm:p-8'>
      <div className='container flex flex-col-reverse mx-auto lg:flex-row'>
        <div className='flex flex-col rounded-sm lg:p-12 dark:bg-indigo-500 dark:text-gray-900 p-4 sm:text-sm'>
          <div className='flex space-x-2 sm:space-x-4'>
            <div className='space-y-2 '>
              <p className='text-lg font-medium leading-snug'>
                Software Engineer <br />
                September 2022 - Present
              </p>
              <p className='leading-snug'>
                • Wrote front-end and back-end files in TypeScript to take
                advantage of type-checking at compile time to identify and
                prevent bugs
                <br /> • Built authentication routes with Express and Bcrypt to
                hash passwords before storage to safeguard against database
                attacks
                <br />
                • Created GraphQL client to test generated schemas and resolvers
                using GraphiQL’s React components and Apollo Server’s flexible
                GraphQL server due to its ability to interface with any given
                GraphQL client
                <br />
                • Managed user authorization on the front-end with React Hooks
                to update and revoke user authentication status as necessary
                <br />
                • Designed front-end using React Router to create a single page
                app to reduce API calls to the server and allow for fast load
                times
                <br /> • Incorporated D3.js Javascript library to generate an
                interactive and responsive SVG tree of SQL tables, highlighting
                foreign keys and their related tables from backend algorithms
                that parsed through PostgresQL databases <br />
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className='flex lg:w-1/4 xl:w-1/4 dark:bg-gray-800 justify-center items-center'>
          <div className='flex flex-col items-center justify-center p-4 md:p-8 lg:p-12'>
            <img
              src={VisiQL}
              alt='visiql-logo'
              className='rounded-lg shadow-lg'
            />
            <a href='http://www.visiql.dev'>
              <h2 className='text-xl font-bold	hover:text-indigo-500'>
                VisiQL.dev
              </h2>
            </a>
          </div>
        </div>
      </div>
    </section>
  ) : null;
}
