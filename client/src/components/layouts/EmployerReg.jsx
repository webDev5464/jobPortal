import React from 'react'

const EmployerReg = () => {
    return (
        <>
            <form className="candidateform mt-5 mx-10">
            <div className="form 2xl:inline-flex xl:inline-flex lg:inline-flex md:inline-flex justify-between items-center gap-14">
                    <div>
                        <label className='text-gray' htmlFor="firstName">First Name : *</label><br />
                        <input type="text" required className='border w-[120%] px-4 py-1 outline-none border-gray focus:border-primary ' placeholder='Enter Firstname...' />
                    </div>
                    <div>
                        <label className='text-gray' htmlFor="lastName">Last Name : *</label><br />
                        <input type="text" required className='border w-[120%] px-4 py-1 outline-none border-gray  focus:border-primary' placeholder='Enter Lastname...' />
                    </div>
                </div>
                <div className="form1 2xl:inline-flex xl:inline-flex lg:inline-flex md:inline-flex justify-between items-center gap-14 mt-5 sm:mt-2">
                    <div>
                        <label className='text-gray' htmlFor="userName">Username : *</label><br />
                        <input type="text" required className='border w-[120%] px-4 py-1 outline-none border-gray focus:border-primary ' placeholder='Enter Username...' />
                    </div>
                    <div>
                        <label className='text-gray' htmlFor="email">Email : *</label><br />
                        <input type="email" required className='border w-[120%] px-4 py-1 outline-none border-gray  focus:border-primary' placeholder='Enter Email...' />
                    </div>
                </div>
                <div className="form2 2xl:inline-flex xl:inline-flex lg:inline-flex md:inline-flex justify-between items-center gap-14 mt-5 sm:mt-2">
                    <div>
                        <label className='text-gray' htmlFor="password">Password : *</label><br />
                        <input type="password" required className='border w-[120%] px-4 py-1 outline-none border-gray focus:border-primary ' placeholder='Enter Password...' />
                    </div>
                    <div>
                        <label className='text-gray' htmlFor="confirm-password">Confirm Password : *</label><br />
                        <input type="password" required className='border w-[120%] px-4 py-1 outline-none border-gray  focus:border-primary' placeholder='Enter Confirm Password...' />
                    </div>
                </div>
                <div className="form3 mt-5 sm:mt-2">
                    <div>
                        <label className='text-gray' htmlFor="number">Phone No. : *</label><br />
                        <input type="tel" required pattern='[0-9]{10}' className='border w-[34.5vw] px-4 py-1 outline-none border-gray focus:border-primary ' placeholder='Enter Phone No...' />
                    </div>
                    <div className='mt-5 sm:mt-2'>
                        <label className='text-gray' htmlFor="org-name">Organization Name : *</label><br />
                        <input type="text" required className='border w-[34.5vw] px-4 py-1 outline-none border-gray focus:border-primary ' placeholder='Enter Your Organization Name...' />
                    </div>
                    <div className='mt-5 2xl:flex xl:flex lg:flex md:flex sm:flex'>
                        <input type="checkbox" className='h-6 w-5' required name="" id="" /><p className=' text-gray'>By clicking checkbox, you agree to our <a href="" className='text-primary'>Terms and Conditions</a>  and <a href="" className='text-primary\ '> Privacy Policy</a> </p>
                    </div>
                </div>
                <div className="form4 mt-10 2xl:flex xl:flex lg:flex items-center justify-between">
                    <div>
                        <button className='border px-6 py-2 rounded-3xl md:w-full sm:w-full border-primary bg-primary text-white hover:bg-white hover:text-primary transition-all duration-300'>Sign Up...</button>
                    </div>
                    <div>
                        <a href="" className='text-primary hover:underline md:text-sm sm:text-sm'>Already have an account? Login</a>
                    </div>
                </div>
            </form>
        </>
    )
}

export default EmployerReg
