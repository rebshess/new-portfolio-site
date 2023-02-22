export default function Techstack() {
  return (
    <div className='flex basis-1/2 dark:bg-zinc-800  dark:text-gray-100'>
      <div className='container p-6 mx-auto text-center justify-center lg:p-8 lg:space-y-8'>
        <h2 className='flex justify-center items-center text-3xl font-bold'>
          The technologies I work with
        </h2>
        <p className='flex justify-center items-center '>
          <img
            src='https://skillicons.dev/icons?i=js,ts,py,html,css,react,redux,tailwind,remix,nodejs,express,mongodb,mysql,postgres,graphql,jest,webpack,github,kubernetes,docker,aws&perline=7'
            alt='icons'
          />
        </p>
      </div>
    </div>
  );
}
