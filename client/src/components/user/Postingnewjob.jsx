import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiSuitcaseFill } from "react-icons/ri";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { VscPass } from "react-icons/vsc";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";
import { TfiCheckBox } from "react-icons/tfi";
import { MdFormatListNumbered } from "react-icons/md";
import { PiFileTextLight } from "react-icons/pi";
import { SlBookOpen } from "react-icons/sl";
import { IoCloudUploadOutline } from "react-icons/io5";

const Postingnewjob = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpe, setIsOpe] = useState(false);
  const [selectedIte, setSelectedIte] = useState(null);
  const [isOp, setIsOp] = useState(false)
  const [selectedIt, setSelectedIt] = useState(null);
  const [salary, setSalary] = useState(false);
  const [selectedI, setSelectedI] = useState(null);
 const [saar,setSaar] = useState(false);
 const [selected,setSelected] = useState(null);

 const [exps,setExps] = useState(false);
 const [selecte,setSelecte]=useState(null);


 const [gender,setGender] = useState(false);
 const [select,setSelect] = useState(null);





 const [exp,setExp] = useState(false);
 const [selec,setSelec] = useState(null);








 const hum =[
 'Development',
 'Managment',
 'Finance',
 'Html Department',
 'Seo',
 'Banking',
 'Graphic Desiging',
 'Php Department'


 ];
const ss = ()=>{
  setExp(!exp)

};

const z = (hum)=>{
  setSelec(hum);
  setExp(false);
};


 const [ex,setEx]=useState(false);
 const [sss,setSss] =useState(null);





 const quli = [
  'Certificat',
  'Diploma',
  'Associate',
  'Degree Bachelor',
  'Master Degree',
  'Medical',

 ]



 const xx = ()=>{
  setEx(!ex)

};







 const o = (quli)=>{
  setSss(quli);
  setEx(false);
};















 const human =[
  'Male',
  'Fmale',

 ]

 const undo = ()=>{

   setGender(!gender);
  };

  const y = (human)=>{
    setSelect(human);
    setGender(false);
  };

 






 const year = [
  'Fresher',
  'Less than one year',
  '2 Year',
  '3 Year',
  '4 Year',
  '5 Year',
  '6+ Year'
 ]
 const deep = ()=>{
  setExps(!exps);
 };
 const x = (year)=>{
  setSelecte(year);
  setExps(false);
 };







 const money = [
 '3000',
 '5000',
 '7000',
 '9000',
 '11000',
 '13000',
 '15000',
 '17000'
 ]

 const toggle = ()=>{
  setSaar(!saar);
 };
 const handel = (money)=>{
  setSelected(money);
  setSaar(false);
 };



  


  const item = [
    'Accounting / Finance',
    ' Automotive Jobs',
    ' Construction / Facilities',
    'Health Care',
    'Restaurant / Food Service',
    ' Sales & Marketing',

    'Construction / Facilities',
    'Telecommunication',]
  const toggleDropdow = () => {
    setIsOpe(!isOpe);
  };
  const handleItemClic = (item) => {
    setSelectedIte(item);
    setIsOpe(false);
  };


  const items = [
    'Freelancer',
    'Full time',
    'Part time',
    'Temporary',
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleItemClick = (items) => {
    setSelectedItem(items);
    setIsOpen(false);
  };


  const itemm = [
    'Monthly',
    'Weekly',
    'Hourly',
    'Negotiable',
  ];

  const shyamal = () => {
    setIsOp(!isOp);
  };
  const handleItemCli = (itemm) => {
    setSelectedIt(itemm);
    setIsOp(false);
  };





  const offered = [
   

    'Manager',
    'Officer',
    'Student',
    'Executive',
    'Others',
  ]


  const down = () => {
    setSalary(!salary);

  };
  const clik = (offered) => {
    setSelectedI(offered);
    setSalary(false);
  };




  
  return (


    <div>



      <div className=''>
        <div className='bg-zinc-400 text-whit max-h-full text-center p-20'>

          <h1 className='font-bold text-3xl text-white'>Post New Job</h1>

        </div>
        <div className='flex items-center justify-center bg-zinc-800 p-2.5 items-center ' >
          <NavLink to={'/'} className='text-white text-lg text-sm hover:text-primary duration-300'>Home</NavLink>
          <p className='text-white pt-1 pr-1  pl-1 text-1.5xl'><MdKeyboardArrowRight /></p>

          <p className='text-white text-lg text-sm '>Post New Jobs</p>

        </div>


      </div>



      {/* main1 */}
      <div className='shadow-slate-300 shadow  mt-20 mx-20 '>

        <div className='px-7'>

          <div>
            <h1 className='pt-8 text-2xl  text-primary'>Post a New Job</h1>
            <div className='pt-4'>

              <hr className=' bg-gray ' />
            </div>

          </div>






          {/* icon */}



          <div className='flex justify-center gap-20 mt-8 mb-8'>

            <div>
              <p className='text-6xl h duration-500 text-primary pl-1 cursor-pointer'><RiSuitcaseFill /></p>
              <p>Job Detail</p>

            </div>
            <div className=''></div>






            <div>
              <p className='text-6xl rounded-full  pl-9 hover:text-primary duration-500 text-gray cursor-pointer  '><BsCreditCard2FrontFill /></p>
              <p>Package & Payment</p>


            </div>

            <div className=''>
              <p></p>
            </div>
            <div>
              <p className='text-6xl hover:text-primary duration-500 text-gray pl-4 cursor-pointer '>< VscPass /></p>
              <p>Confirmation</p>

            </div>


          </div>





          {/* main 3  */}

          <div>
            <p className='py-2 font-bold'>Job Title *</p>

            <input type="text" name="" id="" className='border-slate-300 min-h-10 rounded-sm  border w-full taxt-gray      w-full border rounded-md py-2 pl-4  pr-3 shadow-sm focus:outline-none text-gray  sm:text-sm' placeholder='Exampal: react developer' />
          </div>


          {/* excel */}

          <div className='mt-4'>
            <div>
              <p className='font-bold text-sm' > Job Description *</p>
            </div>
          </div>

























          {/* form */}



          <div className='flex w-full flex justify-between gap-10 '>



            <div className='w-full '>
              <p className='pb-3 pt-3 font-medium sm:text-sm'>Email Address *</p>
              <input type="email" name="" id="" className='border-slate-300 min-h-10 rounded-sm  border  taxt-gray w-full        border rounded-md py-2 pl-4   pr-3 shadow-sm focus:outline-none text-gray  sm:text-sm' placeholder='' />
            </div>

            <div className='w-full'>
              <p className='pb-3 pt-3 font-medium sm:text-sm'>Username *</p>
              <input type="text" name="" id="" className='border-slate-300 min-h-10 rounded-sm   border  taxt-gray  w-full      border rounded-md py-2 pl-4   pr-3 shadow-sm focus:outline-none text-gray  sm:text-sm' placeholder=' ' />
            </div>






          </div>

          <div className='flex w-full flex gap-10 justify-space '>
            <div className=' w-full'>
              <p className='pb-3 pt-3 font-medium  sm:text-sm'>Company Name</p>
              <input type="email" name="" id="" className='border-slate-300 min-h-10 rounded-sm  border  taxt-gray w-full        border rounded-md py-2 pl-4   pr-3 shadow-sm focus:outline-none text-gray  sm:text-sm' placeholder='' />
            </div>

            <div className=' w-full  '>
              <p className='pb-3 pt-3 font-medium sm:text-sm'>Application Deadline *</p>
              <input type="date" name="" id="" className='border-slate-300 min-h-10 rounded-sm   border  taxt-gray  w-9/12      border rounded-md py-2 pl-4   pr-3 shadow-sm focus:outline-none text-gray  sm:text-sm' placeholder=' ' />
            </div>
          </div>










          {/* drop 1 */}


          <div className='flex justify-start gap-10 pt-5'>

            <div className='w-4/12'>
              <p className='font-medium text-sm pb-2'>Job Sector *</p>

              <div className='relative inline-block w-full text-left'>
                <div>
                  <button type='button'
                    className='inline-flex justify-start w-full  border border-slate-200  shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray hover:bg-gray-50  focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'
                    id='option-menu'
                    aria-haspopup='true'
                    aria-expanded='true'
                    onClick={toggleDropdow}>
                    Job sector-

                    {selectedIte || ''}
                    <svg className='-mr-1 ml-2 h-5 w-5 '
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'>
                      <path className=''
                        fillRule="evenodd"
                        d=""
                        clipRule="evenodd" />



                    </svg>


                    <p className='p absolute right-3 top-3.5'><FaChevronDown /></p>




                  </button>

                </div>
                {isOpe && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black  ring-opacity-5 z-10 "
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu">
                    <div className="py-1" role="none">
                      {item.map((item, index) => (
                        <NavLink
                          key={index}
                          href="#"
                          className="block px-4  py-2 text-sm text-gray-700 hover:bg-primary hover:pl-6 duration-300"
                          role="menuitem"
                          onClick={() => handleItemClic(item)}
                        >
                          {item}
                        </NavLink>
                      ))}
                    </div>

                  </div>

                )}
              </div>







            </div>





            <div className='w-4/12 '>
              <p className='font-medium text-sm pb-2'>Job Type</p>


              <div className='relative inline-block w-full text-left'>
                <div>
                  <button type='button'
                    className='inline-flex justify-start w-full  border border-slate-200 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray hover:bg-gray-50  focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 '
                    id='option-menu'
                    aria-haspopup='true'
                    aria-expanded='true'
                    onClick={toggleDropdown} >
                    Job type-



                    {selectedItem || ''}
                    <svg className='-mr-1 ml-2 h-5 w-5  '
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox='0 0 20 20 '
                      fill='currentColor'
                      aria-hidden='true'>
                      <path className=''
                        fillRule="evenodd"
                        d=""
                        clipRule="evenodd" />





                    </svg>


                    <p className='p absolute right-3 top-3.5'><FaChevronDown /></p>




                  </button>

                </div>
                {isOpen && (

                  <div
                    className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 "
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu">
                    <div className="py-1" role="none">
                      {items.map((item, index) => (
                        <NavLink
                          key={index}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:pl-6 duration-300"
                          role="menuitem"
                          onClick={() => handleItemClick(item)}
                        >

                          {item}
                        </NavLink>
                      ))}
                    </div>

                  </div>

                )}
              </div>

            </div>

          </div>





































          {/* option */}

          <div>



          </div>


          {/* job apply type */}

          <div className='w-2/6 pb-10'>

            <p className='font-medium text-sm  pt-4'>Salary</p>

            <div className='relative inline-block w-full text-left'>
              <div>
                <button type='button'
                  className='inline-flex justify-start w-full  border border-slate-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray hover:bg-gray-50  focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 '
                  id='option-menu'
                  aria-haspopup='true'
                  aria-expanded='true'
                  onClick={shyamal}
                >

                  {selectedIt || ''}

                  <svg className='-mr-1 ml-2 h-5 w-5  '
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox='0 0 20 20 '
                    fill='currentColor'
                    aria-hidden='true'>
                    <path className=''
                      fillRule="evenodd"
                      d=""
                      clipRule="evenodd" />





                  </svg>
                  <p className='p absolute right-3 top-3.5'><FaChevronDown /></p>

                </button>
              </div>


              {isOp && (
                <div
                  className=" z-10 origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 "
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu">
                  {itemm.map((item, index) => (
                    <NavLink
                      key={index}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:pl-6 duration-300"
                      role="menuitem"
                      onClick={() => handleItemCli(item)}
                    >

                      {item}
                    </NavLink>
                  )

                  )}



                </div>
              )}



            </div>






          





          </div>







        </div>

      </div>

      {/* main 2 */}

      <div className='shadow-slate-300 shadow  mt-10  mx-20 '>
        <div className='px-7'>



          <div>
            <h1 className='pt-8 text-1xl  text-primary'>Other Information</h1>
            <div className='pt-4'>

              <hr className=' bg-gray ' />
            </div>
          </div>





          {/* offered   salary  and career level */}

          {/* offered saar */}












          <div className='main2'>

            <div className='flex justify-start gap-10 pt-5'>





            <div className='w-6/12 '>
                <p className='font-medium text-sm pb-2'>Offered Salary</p>


                <div className='relative inline-block w-full text-left'>
                  <div>
                    <button type='button'
                      className='inline-flex justify-start w-full  border border-slate-200 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray hover:bg-gray-50  focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 '
                      id='option-menu'
                      aria-haspopup='true'
                      aria-expanded='true'
                      onClick={toggle} >
                      



                      {selected || ''}
                      <svg className='-mr-1 ml-2 h-5 w-5  '
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox='0 0 20 20 '
                        fill='currentColor'
                        aria-hidden='true'>
                        <path className=''
                          fillRule="evenodd"
                          d=""
                          clipRule="evenodd" />





                      </svg>


                      <p className='p absolute right-3 top-3.5'><FaChevronDown /></p>




                    </button>

                  </div>
                  {saar&& (

                    <div
                      className="origin-top-right  absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10  "
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu">
                      <div className="py-1" role="none">
                        {money.map((item, index) => (
                          <NavLink
                            key={index}
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:pl-6 duration-300"
                            role="menuitem"
                            onClick={() => handel(item)}
                          >

                            {item}
                          </NavLink>
                        ))}
                      </div>

                    </div>

                  )}
                </div>

              </div>

         





              <div className='w-6/12 '>
                <p className='font-medium text-sm pb-2'>Career Level</p>


                <div className='relative inline-block w-full text-left'>
                  <div>
                    <button type='button'
                      className='inline-flex justify-start w-full  border border-slate-200 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray hover:bg-gray-50  focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 '
                      id='option-menu'
                      aria-haspopup='true'
                      aria-expanded='true'
                      onClick={down} >
                      



                      {selectedI || ''}
                      <svg className='-mr-1 ml-2 h-5 w-5  '
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox='0 0 20 20 '
                        fill='currentColor'
                        aria-hidden='true'>
                        <path className=''
                          fillRule="evenodd"
                          d=""
                          clipRule="evenodd" />





                      </svg>


                      <p className='p absolute right-3 top-3.5'><FaChevronDown /></p>




                    </button>

                  </div>
                  {salary && (

                    <div
                      className="origin-top-right  absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10  "
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu">
                      <div className="py-1" role="none">
                        {offered.map((item, index) => (
                          <NavLink
                            key={index}
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:pl-6 duration-300"
                            role="menuitem"
                            onClick={() => clik(item)}
                          >

                            {item}
                          </NavLink>
                        ))}
                      </div>

                    </div>

                  )}
                </div>

              </div>

            </div>




          </div>




          {/* experince and gender */}







          <div className='main2'>

<div className='flex justify-start gap-10 pt-5'>





<div className='w-6/12 '>
    <p className='font-medium text-sm pb-2'>Experience *</p>


    <div className='relative inline-block w-full text-left'>
      <div>
        <button type='button'
          className='inline-flex justify-start w-full  border border-slate-200 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray hover:bg-gray-50  focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 '
          id='option-menu'
          aria-haspopup='true'
          aria-expanded='true'
          onClick={deep} >
          



          {selecte || ''}
          <svg className='-mr-1 ml-2 h-5 w-5  '
            xmlns="http://www.w3.org/2000/svg"
            viewBox='0 0 20 20 '
            fill='currentColor'
            aria-hidden='true'>
            <path className=''
              fillRule="evenodd"
              d=""
              clipRule="evenodd" />





          </svg>


          <p className='p absolute right-3 top-3.5'><FaChevronDown /></p>




        </button>

      </div>
      {exps&& (

        <div
          className="origin-top-right  absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10  "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu">
          <div className="py-1" role="none">
            {year.map((item, index) => (
              <NavLink
                key={index}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:pl-6 duration-300"
                role="menuitem"
                onClick={() => x(item)}
              >

                {item}
              </NavLink>
            ))}
          </div>

        </div>

      )}
    </div>

  </div>







  <div className='w-6/12 '>
    <p className='font-medium text-sm pb-2'>Career Level</p>


    <div className='relative inline-block w-full text-left'>
      <div>
        <button type='button'
          className='inline-flex justify-start w-full  border border-slate-200 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray hover:bg-gray-50  focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 '
          id='option-menu'
          aria-haspopup='true'
          aria-expanded='true'
          onClick={undo} >
          



          {select || ''}
          <svg className='-mr-1 ml-2 h-5 w-5  '
            xmlns="http://www.w3.org/2000/svg"
            viewBox='0 0 20 20 '
            fill='currentColor'
            aria-hidden='true'>
            <path className=''
              fillRule="evenodd"
              d=""
              clipRule="evenodd" />





          </svg>


          <p className='p absolute right-3 top-3.5'><FaChevronDown /></p>




        </button>

      </div>
      {gender&& (

        <div
          className="origin-top-right  absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10  "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu">
          <div className="py-1" role="none">
            {human.map((item, index) => (
              <NavLink
                key={index}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:pl-6 duration-300"
                role="menuitem"
                onClick={() => y(item)}
              >

                {item}
              </NavLink>
            ))}
          </div>

        </div>

      )}
    </div>

  </div>

</div>




</div>















<div className='main2'>

<div className='flex justify-start gap-10 pt-5 pb-10'>





<div className='w-6/12 '>
    <p className='font-medium text-sm pb-2'>Industry *</p>


    <div className='relative inline-block w-full text-left'>
      <div>
        <button type='button'
          className='inline-flex justify-start w-full  border border-slate-200 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray hover:bg-gray-50  focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 '
          id='option-menu'
          aria-haspopup='true'
          aria-expanded='true'
          onClick={ss} >
          



          {selec || ''}
          <svg className='-mr-1 ml-2 h-5 w-5  '
            xmlns="http://www.w3.org/2000/svg"
            viewBox='0 0 20 20 '
            fill='currentColor'
            aria-hidden='true'>
            <path className=''
              fillRule="evenodd"
              d=""
              clipRule="evenodd" />





          </svg>


          <p className='p absolute right-3 top-3.5'><FaChevronDown /></p>




        </button>

      </div>
      {exp&& (

        <div
          className="origin-top-right  absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10  "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu">
          <div className="py-1" role="none">
            {hum.map((item, index) => (
              <NavLink
                key={index}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:pl-6 duration-300"
                role="menuitem"
                onClick={() => z(item)}
              >

                {item}
              </NavLink>
            ))}
          </div>

        </div>

      )}
    </div>

  </div>







  <div className='w-6/12 '>
    <p className='font-medium text-sm pb-2'>Qualifications *</p>


    <div className='relative inline-block w-full text-left'>
      <div>
        <button type='button'
          className='inline-flex justify-start w-full  border border-slate-200 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray hover:bg-gray-50  focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 '
          id='option-menu'
          aria-haspopup='true'
          aria-expanded='true'
          onClick={xx} >
          



          {sss || ''}
          <svg className='-mr-1 ml-2 h-5 w-5  '
            xmlns="http://www.w3.org/2000/svg"
            viewBox='0 0 20 20 '
            fill='currentColor'
            aria-hidden='true'>
            <path className=''
              fillRule="evenodd"
              d=""
              clipRule="evenodd" />





          </svg>


          <p className='p absolute right-3 top-3.5'><FaChevronDown /></p>




        </button>

      </div>
      {ex&& (

        <div
          className="origin-top-right  absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10  "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu">
          <div className="py-1" role="none">
            {quli.map((item, index) => (
              <NavLink
                key={index}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:pl-6 duration-300"
                role="menuitem"
                onClick={() => o(item)}
              >

                {item}
              </NavLink>
            ))}
          </div>

        </div>

      )}
    </div>

  </div>

</div>




</div>



























        </div>

      </div>







      <div className='shadow-slate-300 shadow  mt-10  mx-20 '>

        <div className='px-7'>
          <h1 className='text-2xl text-primary pb-5'>Apply Job Question</h1>
          <hr />


        </div>
        <div>
        <p className='text-xl text-center py-5 font-medium'>Select Question Type</p>
       
        </div>


        <div className='flex px-7 justify-between pb-10'>

          <div className='flex'>
          <button className=' px-1.5 border-neutral-200  text-black text-3xl text-white  bg-primary font-medium'><CiMenuFries /></button>
          <button className='px-5 text-gray border-neutral-200 py-1 border bg-stone-200'>Dropdown</button>
            



          </div>


          <div className='flex'>
          <button className='border px-1 text-black text-3xl font-medium border-neutral-400 focus:bg-primary focus:text-white  hover:bg-primary duration-500 border-r-0 hover:text-white text-gray'><TfiCheckBox /></button>
          <button className='px-4 py-1 border border-neutral-400 text-gray  focus:bg-stone-200      hover:bg-stone-200 ... '>Checkboxes</button>
            



          </div>



          <div className='flex'>
          <button className='border px-1 text-black text-3xl font-medium border-neutral-400  hover:bg-primary duration-500 border-r-0 hover:text-white text-gray focus:bg-primary focus:text-white'><MdFormatListNumbered /></button>
          <button className='px-5 py-2 border border-neutral-400 text-gray focus:bg-stone-200     hover:bg-stone-200 ...'>Number</button>
            



          </div>




          <div className='flex'>
          <button className='border px-1 text-black text-3xl font-medium border-neutral-400  hover:bg-primary duration-500 border-r-0 hover:text-white text-gray focus:bg-primary focus:text-white '><PiFileTextLight /></button>
          <button className='px-7 py-2 border border-neutral-400 text-gray focus:bg-stone-200    hover:bg-stone-200 ...'>Text</button>
            



          </div>

          <div className='flex'>
          <button className='border px-1 text-black text-3xl font-medium border-neutral-400  hover:bg-primary duration-500 border-r-0 hover:text-white text-gray focus:bg-primary focus:text-white'><SlBookOpen /></button>
          <button className='px-7 py-2 border border-neutral-400 text-gray focus:bg-stone-200   hover:bg-stone-200 ...'>Textarea</button>
            



          </div>




          <div className='flex'>
          <button className='border px-1 text-black text-3xl font-medium border-neutral-400  hover:bg-primary duration-500 border-r-0 hover:text-white text-gray focus:bg-primary focus:text-white'><IoCloudUploadOutline  /></button>
          <button className='px-7 py-2 border border-neutral-400 text-gray  focus:bg-stone-200   hover:bg-stone-200 ...'>Upload Field</button>
            



          </div>







        </div>




      </div>



















    </div>
  )
}

export default Postingnewjob
