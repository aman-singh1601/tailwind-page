
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
    <div className='body flex flex-col w-[100vw] md:flex-row md:h-fit '>
      <div className="nav bg-white z-30 m-0 w-[100vw] fixed bottom-0 p-2  h-[40px] flex flex-row justify-evenly items-center md:left-0 md:flex-col md:top-0 md:h-[100%]  md:pb-0 md:mb-0 md:justify-between md:pl-1 md:w-fit ">
        <div className='invisible w-0 h-0 md:h-[80px] md:flex md:flex-col md:justify-around md:mt-2 md:w-fit md:visible'>
                <img className='h-10' src='https://svgsilh.com/svg/2034617-3f51b5.svg'/>
                <div className=' hover:shadow-lg duration-[250ms] rounded-sm  hover:bg-[#4935FF]'>
                <Icon className=' text-gray-400' size='sm' icon={SearchIcon}/>
                </div>
        </div>
        <div className='icons w-[100vw]  bottom-1  h-[20px] flex flex-row justify-evenly items-center md:left-0 md:flex-col md:h-[250px] md:justify-between md:w-[35px]'>
              <div className=' hover:shadow-lg duration-[250ms] rounded-sm  hover:bg-[#4935FF]'>
                  <Icon className=' text-gray-400' size='lg' icon={HomeIcon}/>
              </div>
                <div className=' hover:shadow-lg duration-[250ms] rounded-sm  hover:bg-[#4935FF]'>
                  <Icon className=' text-gray-400' size='lg' icon={NewspaperIcon}/>
                </div>
                <div className='hover:shadow-lg duration-[250ms] rounded-sm  hover:bg-[#4935FF]'>
                <Icon className=' text-gray-400' size='lg' icon={MenuIcon}/>
                </div>
                <div className='hover:shadow-lg duration-[250ms] rounded-sm  hover:bg-[#4935FF]'>
                  <Icon className=' text-gray-400' size='lg' icon={UserIcon}/>
                </div>
                
              <div className='hover:shadow-lg duration-[250ms] rounded-sm  hover:bg-[#4935FF] md:hidden'>
                <Icon className=' text-gray-400'size='lg' icon={SearchIcon}/>
              </div>
       </div>
       <div className='invisible w-0 h-0  md:visible  md:h-[80px] md:flex md:flex-col md:items-center md:justify-around '> 
              <div className=' hover:shadow-lg duration-[250ms] rounded-sm  hover:bg-[#4935FF] '>
                <Icon className=' text-gray-400 ' size='sm' icon={BellIcon}/>
              </div>
              <div className=' hover:shadow-lg rounded-sm duration-[250ms] hover:bg-[#4935FF] '>
                <Icon className=' text-gray-400' size='md' icon={LogoutIcon}/>
              </div>
       </div>
        
      </div>
       <div className="profile  w-[90%]   m-auto pb-8 md:pb-0  flex flex-col items-center md:w-[20%] md:ml-[50px] md:bg-[#FAFAFA]  md:m-0 md:pt-8 md:mb-0 md:h-[100vh] ">
        
        <div className='user w-[100%] my-10 md:my-2  flex flex-row space-x-4 md:px-2'>
            <img className='h-[60px] rounded-[50%]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7rAXspe1a2jEJ0Ml5kaRrz0SUQsyJv2vHSFbzHXxeVw&s" alt="" />
            <div className='flex flex-col'>
            <span className='text-3xl font-serif'>Hi Mike</span>
            <span className='text-[8px] font-mono'>welcome back</span>
            </div>
        </div>
        <div className="data my-4 rounded-md w-[100%] flex flex-col bg-[#FAFAFA]  ">
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
            <button className='px-2 mb-3 bg-[#4935FF] m-auto text-white h-10 rounded-md w-[80%]'> I want to...</button>

        </div>
        <div className='transaction rounded-md w-[100%] flex flex-col bg-[#FAFAFA]'>
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
      <div className="stat   w-[90%]  m-auto  flex flex-col md:w-[50%] md:mt-12 md:mb-0 md:h-fit   ">
      <h1 className='text-[15px] px-4  font-sans font-bold text-[#4935FF]'>Retirement Income</h1>
      <h1 className='text-[20px] px-4 pb-4 font-mono font-bold text-black md:pb-[10px]'>Starting Year 2056</h1>
      <div className='flex flex-row flex-wrap justify-between px-4 '>
          <div className='flex flex-col w-[100%] py-2 border-b border-[#205cbd] md:w-[200px] md:py-0'>
              <span className='font-bold font-mono text-2xl text-black '>$3000,000</span>
              <span className='text-[11px] font-sans font-medium text-gray-500'>My Goal</span>
          </div>
          <div className='flex flex-col w-[40%] py-2 border-b border-[#205cbd] md:w-[200px] md:py-0'>
              <span className='font-bold font-mono text-2xl text-black '>59%</span>
              <span className='text-[11px] font-sans font-medium text-gray-500'>Goal Achieved</span>
          </div>
          <div className='flex flex-col w-[40%] py-2 border-b border-[#205cbd] md:w-[200px] md:py-0'>
              <span className='font-bold font-mono text-2xl text-black '>$300</span>
              <span className='text-[11px] font-sans font-medium text-gray-500'>Est. Monthly Income</span>
          </div>
      </div>
      <span className='text-[18px] px-4 mb-4 font-sans font-bold mt-10 md:mt-8'>Contributions Overtime</span>
      <div className=' graph-protion px-4 flex flex-row justify-between md:justify-around z-10 pb-8'>
              <div className='flex flex-col md:flex-row md:items-center md:space-x-1'>
                    <div className='h-[10px] bg-[#0800A3] w-[15px] rounded-md'></div>
                    <span className='text-[11px] font-sans font-medium text-gray-500'>Employer</span>
                    <span className='font-bold font-mono text-lg text-black md:text-sm'>$73,500</span>
              </div>
              <div className='flex flex-col md:flex-row md:items-center md:space-x-1'>
                    <div className='h-[10px] bg-[#4935FF] w-[15px] rounded-md'></div>
                    <span className='text-[11px]  font-sans font-medium text-gray-500'>Employee</span>
                    <span className='font-bold font-mono text-lg md:text-sm text-black md:text-sm'>$52,500</span>
              </div>
              <div className='flex flex-col md:flex-row  md:items-center md:space-x-1'>
              <div className='h-[10px] bg-[#85AFFF] w-[15px] rounded-md'></div>
                    <span className='text-[11px] font-sans font-medium text-gray-500'>Total Interest</span>
                    <span className='font-bold font-mono text-lg  text-black md:text-sm'>$244,213</span>
                </div>
      </div>
      <div className='graph w-[100%] px-4 '>
          <Graph/>
      </div>
      <div className=' empty-div invisible w-[0px] h-[0px] md:visible md:px-4 md:w-[100%] md:h-fit md:pb-0 md:m-0'>
        
        <div className=' px-4 mb-2 flex flex-col w-[100%] h-fit justify-between'>
            <span className='text-[18px]  font-sans font-bold '>How do I compare to my peers</span>
            <span className='text-[11px] font-sans font-medium text-gray-500'>These numbers represent current goal achievement</span>
        </div>
        <div className='selector px-4 h-fit flex flex-row w-[100%] '>
          <div className='flex flex-col'>
          <div className='flex flex-row h-10 border-b '>
              <span className='text-[15px] w-[40px] font-sans font-bold pt-2 '>
                Age: 
              </span>
              <SelectTab type="Under 30" />
          </div>
          <div className='flex flex-row h-10 pb-0 border-b  '>
              <span className='text-[15px] w-[45px] font-sans font-bold pt-2'>
                Salary: 
              </span>
              <SelectTab type="K20 - k30" />
          </div>
          <div className='flex flex-row h-10 pb-0 border-b'>
              <span className='text-[15px] w-[45px] font-sans font-bold pt-2'>
                Gender: 
              </span>
              <SelectTab  type="Male" />
          </div>
          </div>
          <div className='flex my-0 flex-row space-x-2 w-[100%] items-center justify-center'>
             <div className='w-[80px] flex flex-col items-center '>
                <CircularBar value={75}/>
                <span className='text-[11px] font-sans font-medium text-gray-500'>Average</span>
             </div>
             <div className='w-[80px] flex flex-col items-center '>
                <CircularBar value={56}/>
                <span className='text-[11px] font-sans font-medium text-gray-500' >Top</span>
             </div>
             <div className='w-[80px] flex flex-col  items-center'>
                <CircularBar value={96}/>
                <span className='text-[11px] font-sans font-medium text-gray-500' >Me</span>
             </div>
          </div>
        </div>
        </div>

      </div>
      <div className="performance w-[90%]   m-auto  flex flex-col  md:w-[20%] md:mt-10 md:mb-0 md:h-fit ">
        <div className='visible md:invisible md:hidden'>
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
             <div className='w-[80px]  md:w-[100px]'>
                <CircularBar value={75}/>
             </div>
             <div className=' w-[80px] md:w-[100px]'>
                <CircularBar value={56}/>
             </div>
             <div className='w-[80px]  md:w-[100px]'>
                <CircularBar value={96}/>
             </div>
          </div>
        </div>
        </div>
        <div className='md:bg-[#FAFAFA] md:rounded-lg md:py-4'>
        <div className='strategy px-4 flex flex-col'>
        <span className='text-[18px]  font-sans font-bold pb-4 '>Retirement Strategy</span>
        <span className='text-[15px]  font-sans font-bold pb-2' >Employee Contribution</span>
        <div className='flex flex-row justify-between items-center pb-4'>
            <input id="default-range" type="range"  value={range} onChange={e=>setrange(e.target.value)} className="w-[80%] h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-[#ECECEC]"/>
             <span className='text-[15px]  font-sans font-bold'>{range} %</span>
        </div>
        <span className='text-[15px]  font-sans font-bold pb-2' >Retirement Age</span>
        <div className='flex flex-row justify-between items-center pb-4'>
            
            <input id="default-range" type="range"  value={age} onChange={e=>setAge(e.target.value)} className="w-[80%] h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-[#ECECEC]"/>
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
        <button className='w-[100%]  mb-2  bg-[#4935FF] text-white font-sans z-[100] font-semibold rounded-md m-auto text-xl py-4 items-center md:w-[90%]'>Update</button>
        </div>
      
      
      
      </div> 
        <div className=' hidden md:px-4 md:flex md:flex-col md:border-l md:border-[#4935FF] md:my-8'>
            <div className='text-[18px]  font-sans '>Are you considering a</div>
            <div className='text-[18px]  font-sans font-bold pb-[6px] '>Housing Advance</div>
            <span className='text-[11px] font-sans font-medium text-gray-500'> Limites time reduced interest.</span>
            <button className='text-[#4935FF] font-mono w-fit'>{'Learn More >'}</button>
        </div>


      </div>
      
    </div>
  )
};

export default App;
