export default function Navbar() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <div className='flex items-center justify-between flex-wrap bg-zinc-600 p-6'>
        <div className='flex items-center flex-shrink-0 text-white mr-6'>
          <span className='font-semibold text-xl tracking-tight'>
            Rebecca Shesser
          </span>
        </div>
        <div>
          <a
            href='www.cnn.com'
            className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-zinc-600 hover:bg-white mt-4 lg:mt-0'
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
