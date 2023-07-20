
import './App.css';
import {useState} from 'react'
import {Icon } from '@tremor/react';
import {HomeIcon,BellIcon,LogoutIcon ,SearchIcon,UserIcon,MenuIcon,NewspaperIcon} from '@heroicons/react/outline'
import Graph from './Components/Graph/Graph';
import SelectTab from './Components/Select/SelectTab';
import { CircularBar } from './Components/Circularbar/CircularBar';


function App() {
  const [range,setrange]=useState('27');
  const [age,setAge]=useState('50');


  return (
    <div className='body flex flex-col md:flex-row  '>
      <div className="nav w-[100vw] fixed bottom-1  h-[20px] flex flex-row justify-evenly items-center sm:left-0 sm:flex-col sm:top-0 sm:h-[100vh] sm:justify-between sm:pl-1 sm:w-fit">
        <div className='invisible w-0 h-0 sm:h-[80px] sm:flex sm:flex-col sm:justify-around sm:mt-2 sm:w-fit sm:visible'>
                <img className='h-10' src='https://svgsilh.com/svg/2034617-3f51b5.svg'/>
                <div className=' hover:shadow-lg duration-[250ms] rounded-sm  hover:bg-[#205cbd]'>
                <Icon className=' text-gray-400' size='sm' icon={SearchIcon}/>
                </div>
        </div>
        <div className='icons w-[100vw]  bottom-1  h-[20px] flex flex-row justify-evenly items-center sm:left-0 sm:flex-col sm:h-[250px] sm:justify-between sm:w-[35px]'>
              <div className=' hover:shadow-lg duration-[250ms] rounded-sm  hover:bg-[#205cbd]'>
                  <Icon className=' text-gray-400' size='lg' icon={HomeIcon}/>
              </div>
                <div className=' hover:shadow-lg duration-[250ms] rounded-sm  hover:bg-[#205cbd]'>
                  <Icon className=' text-gray-400' size='lg' icon={NewspaperIcon}/>
                </div>
                <div className='hover:shadow-lg duration-[250ms] rounded-sm  hover:bg-[#205cbd]'>
                <Icon className=' text-gray-400' size='lg' icon={MenuIcon}/>
                </div>
                <div className='hover:shadow-lg duration-[250ms] rounded-sm  hover:bg-[#205cbd]'>
                  <Icon className=' text-gray-400' size='lg' icon={UserIcon}/>
                </div>
                
              <div className='hover:shadow-lg duration-[250ms] rounded-sm  hover:bg[#205cbd] sm:hidden'>
                <Icon className=' text-gray-400'size='lg' icon={SearchIcon}/>
              </div>
       </div>
       <div className='invisible w-0 h-0  sm:visible  sm:h-[80px] sm:flex sm:flex-col sm:items-center sm:justify-around '> 
              <div className=' hover:shadow-lg duration-[250ms] rounded-sm  hover:bg-[#205cbd] '>
                <Icon className=' text-gray-400 ' size='sm' icon={BellIcon}/>
              </div>
              <div className=' shadow-lg rounded-sm duration-[250ms] hover:bg-[#205cbd] '>
                <Icon className=' text-gray-400' size='md' icon={LogoutIcon}/>
              </div>
       </div>
        
      </div>
      <div className='md:h-[100vh] md:w-[200px]'></div>
       <div className="profile  w-[90%] my-[10%]  m-auto  flex flex-col items-center  ">
        
        <div className='user w-[100%] my-2  flex flex-row space-x-4'>
            <img className='h-[60px] rounded-[50%]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7rAXspe1a2jEJ0Ml5kaRrz0SUQsyJv2vHSFbzHXxeVw&s" alt="" />
            <div className='flex flex-col'>
            <span className='text-3xl font-serif'>Hi Mike</span>
            <span className='text-[8px] font-mono'>welcome back</span>
            </div>
        </div>
        <div className="data my-4 rounded-md w-[100%] flex flex-col bg-[#f2f4f7]  ">
            <div className='px-2 flex mt-2 mb-4 flex-col '>
                <span className='text-[15px] font-serif font-bold text-gray-500'>Today</span>
                <span className='font-bold text-3xl font-mono text-black'> $19,892</span>
                <span className='text-[11px] font-sans font-medium text-gray-500'>Account balance</span>
            </div>
            <div className='px-2 mb-4 flex flex-row space-x-10'>
              <div className='flex flex-col '>
                  <span className='font-bold font-mono text-2xl text-black '> $4,000</span>
                  <span className='text-[11px] font-sans font-medium text-gray-500'>Year-to-Date</span>
              </div>
              <div className='flex flex-col'>
                <span className='font-bold font-mono text-2xl text-black '> $4,000</span>
                <span className='text-[11px] font-sans font-medium text-gray-500'>Year-to-Date</span>
              </div>
            </div>
            <button className='px-2 mb-3 bg-[#205cbd] m-auto text-white h-10 rounded-md w-[80%]'> I want to...</button>

        </div>
        <div className='transaction rounded-md w-[100%] flex flex-col bg-[#f2f4f7]'>
          <h1 className='text-[15px] px-4 py-4 font-sans font-bold text-gray-500'>Recent Transactions</h1>
          <div className='withdrawal px-4  flex flex-col'>
            <span className='text-[11px] font-sans font-medium text-gray-500'> 2020-07-01</span>
            <span className='font-bold text-sm border-b  py-[4px] mb-2 border-gray-200  font-sans text-black'>Withdrawal Transfer to Bank-XX11</span>
          </div>
          <div className='withdrawal px-4  flex flex-col'>
            <span className='text-[11px] font-sans font-medium text-gray-500'> 2020-07-01</span>
            <span className='font-bold text-sm border-b py-[4px] mb-2 border-gray-200  font-sans text-black'>Withdrawal Transfer to Bank-XX11</span>
          </div>
        </div>
      </div>
      <div className="stat  my-[10%] w-[90%]  m-auto  flex flex-col ">
      <h1 className='text-[15px] px-4  font-sans font-bold text-[#205cbd]'>Retirement Income</h1>
      <h1 className='text-[20px] px-4 pb-4 font-mono font-bold text-black'>Starting Year 2056</h1>
      <div className='flex flex-row flex-wrap justify-between px-4'>
          <div className='flex flex-col w-[100%] py-2 border-b border-[#205cbd]'>
              <span className='font-bold font-mono text-2xl text-black '>$3000,000</span>
              <span className='text-[11px] font-sans font-medium text-gray-500'>My Goal</span>
          </div>
          <div className='flex flex-col w-[40%] py-2 border-b border-[#205cbd]'>
              <span className='font-bold font-mono text-2xl text-black '>59%</span>
              <span className='text-[11px] font-sans font-medium text-gray-500'>Goal Achieved</span>
          </div>
          <div className='flex flex-col w-[40%] py-2 border-b border-[#205cbd]'>
              <span className='font-bold font-mono text-2xl text-black '>$300</span>
              <span className='text-[11px] font-sans font-medium text-gray-500'>Est. Monthly Income</span>
          </div>
      </div>
      <span className='text-[18px] px-4 mb-4 font-sans font-bold mt-10'>Contributions Overtime</span>
      <div className=' graph-protion px-4 flex flex-row justify-between z-10 pb-8'>
              <div className='flex flex-col'>
                    <div className='h-[10px] bg-[#104191] w-[15px] rounded-md'></div>
                    <span className='text-[11px] font-sans font-medium text-gray-500'>Employer</span>
                    <span className='font-bold font-mono text-2xl text-black'>$73,500</span>
              </div>
              <div className='flex flex-col'>
                    <div className='h-[10px] bg-[#205cbd] w-[15px] rounded-md'></div>
                    <span className='text-[11px] font-sans font-medium text-gray-500'>Employee</span>
                    <span className='font-bold font-mono text-2xl text-black'>$52,500</span>
              </div>
              <div className='flex flex-col'>
              <div className='h-[10px] bg-[#598bde] w-[15px] rounded-md'></div>
                    <span className='text-[11px] font-sans font-medium text-gray-500'>Total Interest</span>
                    <span className='font-bold font-mono text-2xl text-black'>$244,213</span>
                </div>
      </div>
      <div className='graph w-[100%] px-4 '>
          <Graph/>
      </div>

      </div>
      <div className="performance w-[90%] my-[10%]  m-auto  flex flex-col  ">
        <div className=' px-4 mb-4 flex flex-col'>
            <span className='text-[18px]  font-sans font-bold '>How do I compare to my peers</span>
            <span className='text-[11px] font-sans font-medium text-gray-500'>These numbers represent current goal achievement</span>
        </div>
        <div className='selector px-4 flex flex-col w-[100%] '>
          <div className='flex flex-row pb-2 border-b'>
              <span className='text-[15px] w-[40px] font-sans font-bold pt-4'>
                Age: 
              </span>
              <SelectTab type="Under 30" />
          </div>
          <div className='flex flex-row pb-2 border-b  '>
              <span className='text-[15px] w-[40px] font-sans font-bold pt-4'>
                Salary: 
              </span>
              <SelectTab type="K20 - k30" />
          </div>
          <div className='flex flex-row pb-2 border-b'>
              <span className='text-[15px] w-[40px] font-sans font-bold pt-4'>
                Gender: 
              </span>
              <SelectTab  type="Male" />
          </div>
          <div className='flex my-8 flex-row justify-between'>
             <div className='w-[100px]'>
                <CircularBar value={75}/>
             </div>
             <div className='w-[100px]'>
                <CircularBar value={56}/>
             </div>
             <div className='w-[100px]'>
                <CircularBar value={96}/>
             </div>
          </div>
        </div>
        <div className='strategy px-4 flex flex-col'>
        <span className='text-[18px]  font-sans font-bold pb-4 '>Retirement Strategy</span>
        <span className='text-[15px]  font-sans font-bold pb-2' >Employee Contribution</span>
        <div className='flex flex-row justify-between pb-4'>
            <input className='w-[80%]' value={range} onChange={e=>setrange(e.target.value)}  type="range" min={0} max={100} />
             <span className='text-[15px]  font-sans font-bold'>{range} %</span>
        </div>
        <span className='text-[15px]  font-sans font-bold pb-2' >Retirement Age</span>
        <div className='flex flex-row justify-between pb-4'>
            <input className='w-[80%]' value={age} onChange={e=>setAge(e.target.value)}  type="range" min={0} max={100} />
             <span className='text-[15px]  font-sans font-bold'>{age} </span>
        </div>
        <div className='flex flex-row justify-between pb-4'>
             <span className='text-[15px]  font-sans font-bold'> Employer Contribution</span>
             <span className='text-[15px]  font-sans font-bold'>8.4% </span>
        </div>
        <div className='flex flex-row justify-between pb-4'>
             <span className='text-[15px]  font-sans font-bold'> Intreset Rate</span>
             <span className='text-[15px]  font-sans font-bold'>5% </span>
        </div>
        <button className='w-[90%] bg-[#205cbd] text-white font-sans font-semibold rounded-md m-auto text-xl py-2 items-center'>Update</button>
        </div>
      </div> 
      
    </div>
  )
};

export default App;
