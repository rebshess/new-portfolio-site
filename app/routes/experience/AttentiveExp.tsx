import Attentive from 'public/Attentive.png';

type AttentiveProps = {
  openAttentive: Boolean;
  setOpenAttentive: Function;
};

export default function AttentiveExp({
  openAttentive,
  setOpenAttentive,
}: AttentiveProps) {
  return openAttentive ? (
    <section className='dark:bg-gray-800 dark:text-gray-100 mx-auto sm:p-8'>
      <div className='container flex flex-col-reverse mx-auto lg:flex-row'>
        <div className='flex flex-col rounded-sm lg:p-12 dark:bg-indigo-500 dark:text-gray-900 p-4 sm:text-sm'>
          <div className='flex space-x-2 sm:space-x-4'>
            <div className='space-y-2 '>
              <p className='text-lg font-medium leading-snug'>
                Solutions Engineer & <br />
                Lead Client Strategy Manager
                <br />
                June 2020 - January 2023
              </p>
              <p className='leading-snug'>
                • Executed SQL queries in production database to complete client
                requests and build out custom reports
                <br />
                • Analyzed client data using VBA scripts and SQL functions to
                provide data-driven strategy to drive revenue for clients
                <br /> • Worked directly with client engineering teams to
                develop integrations with Attentive’s proprietary product and
                API
                <br />
                • Managed 30+ top-revenue clients to provide marketing strategy,
                technical troubleshooting, and product support
                <br />
                • Project managed implementations across design, solutions
                engineering, and technical management teams
                <br />
                • Signed new business and owned renewal and upsell processes to
                generate recurring revenue for Attentive
                <br />
                • Consistently exceeded retention and revenue growth goals for
                individual book of business leading to promotion <br />
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className='flex lg:w-25% dark:bg-gray-800 justify-center items-center'>
          <div className='flex flex-col items-center justify-center p-4 md:p-8 lg:p-12'>
            <img
              src={Attentive}
              alt='gh-logo'
              className='rounded-lg shadow-lg'
            />
          </div>
        </div>
      </div>
    </section>
  ) : null;
}
