import { SearchIcon } from '@heroicons/react/solid'
import { TextInput } from '@tremor/react'

const Navbar = () => {
  return (
    <div id="top" className='relative w-full justify-between items-center sm:flex p-2'>
        <h1 className='text-gray-300 font-bold'>Dashboard</h1>
        <div className='py-2'>
            <TextInput icon={SearchIcon} placeholder="Search..." />
        </div>
    </div>
  )
}

export default Navbar