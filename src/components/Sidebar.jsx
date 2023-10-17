import {ArrowUpIcon, BellIcon, ChartBarIcon, CreditCardIcon, DocumentSearchIcon, ExternalLinkIcon, HomeIcon, MailIcon} from "@heroicons/react/solid"

const Sidebar = () => {
  return (
    <div className='bg-slate-800 flex-none w-14 sm:w-20 h-screen'>
        <div className='h-20 items-center flex'>
            <HomeIcon width={40} className='text-gray-300 left-3 sm:left-6 fixed cursor-pointer' />
        </div>
        <div className='fixed left-3 sm:left-6 top-[100px]'>
          <ChartBarIcon width={40} className="bg-gray-600 text-gray-300 p-2 mb-4 rounded-lg cursor-pointer" />
          <DocumentSearchIcon width={40} className="bg-gray-600 text-gray-300 p-2 mb-4 rounded-lg cursor-pointer" />
          <MailIcon width={40} className="bg-gray-600 text-gray-300 p-2 mb-4 rounded-lg cursor-pointer" />
          <CreditCardIcon width={40} className="bg-gray-600 text-gray-300 p-2 mb-4 rounded-lg cursor-pointer" />
          <BellIcon width={40} className="bg-gray-600 text-gray-300 p-2 mb-4 rounded-lg cursor-pointer" />
        </div>
        <div className='fixed bottom-4 left-3 sm:left-6'>
          <a href="#top">
          <ArrowUpIcon width={40} className="bg-gray-600 text-gray-300 p-2 mb-4 rounded-lg cursor-pointer"/>
          </a>
          <ExternalLinkIcon width={40} className="bg-gray-600 text-gray-300 p-2 mb-4 rounded-lg cursor-pointer"/>
        </div>
    </div>
  )
}

export default Sidebar