export default function Techstack() {
  return (
    <section className='flex dark:bg-zinc-800  dark:text-gray-100'>
      <div className='container p-6 mx-auto space-y-6 text-center justify-center lg:p-8 lg:space-y-8'>
        <h2 className='text-3xl font-bold'>The technologies I work with</h2>
        <p className='justify-center'>
          <img
            src='https://skillicons.dev/icons?i=js,ts,py,html,css,react,redux,tailwind,remix,nodejs,express,mongodb,mysql,postgres,graphql,jest,webpack,github,kubernetes,docker,aws&perline=7'
            alt='icons'
          />
        </p>
      </div>
      <div className='bg-indigo-500'>
        <h2 className='text-3xl font-bold text-black'>Connect with Me</h2>
      </div>
    </section>
  );
}
