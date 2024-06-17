import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/thunk/authThunks';

const CandidateReg = ({ logForm, setLogForm, setRegForm }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        agreeTerms: false,
    });

    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        dispatch(registerUser(formData));
    };

    return (
        <form onSubmit={handleSubmit} className="candidateform mt-5 mx-10">
            <div className="form 2xl:inline-flex xl:inline-flex lg:inline-flex md:inline-flex justify-between items-center gap-14">
                <div className='w-full'>
                    <label className='text-gray' htmlFor="firstName">First Name : *</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className='border w-full px-4 py-1 outline-none border-gray focus:border-primary '
                        placeholder='Enter Firstname...'
                    />
                </div>
                <div className='w-full'>
                    <label className='text-gray' htmlFor="lastName">Last Name : *</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className='border w-full px-4 py-1 outline-none border-gray  focus:border-primary'
                        placeholder='Enter Lastname...'
                    />
                </div>
            </div>
            <div className="form1 w-full 2xl:inline-flex xl:inline-flex lg:inline-flex md:inline-flex justify-between items-center gap-14 mt-5 sm:mt-2">
                <div className='w-full'>
                    <label className='text-gray' htmlFor="userName">Username : *</label>
                    <input
                        type="text"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        required
                        className='border w-full px-4 py-1 outline-none border-gray focus:border-primary '
                        placeholder='Enter Username...'
                    />
                </div>
                <div className='w-full'>
                    <label className='text-gray' htmlFor="email">Email : *</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='border w-full px-4 py-1 outline-none border-gray  focus:border-primary'
                        placeholder='Enter Email...'
                    />
                </div>
            </div>
            <div className="form2 2xl:inline-flex xl:inline-flex lg:inline-flex md:inline-flex justify-between items-center gap-14 mt-5 sm:mt-2">
                <div className='w-full'>
                    <label className='text-gray' htmlFor="password">Password : *</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className='border w-full px-4 py-1 outline-none border-gray focus:border-primary '
                        placeholder='Enter Password...'
                    />
                </div>
                <div className='w-full'>
                    <label className='text-gray' htmlFor="confirmPassword">Confirm Password : *</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        className='border w-full px-4 py-1 outline-none border-gray  focus:border-primary'
                        placeholder='Enter Confirm Password...'
                    />
                </div>
            </div>
            <div className="form3 mt-5 sm:mt-2">
                <div className='w-full'>
                    <label className='text-gray' htmlFor="phoneNumber">Phone No. : *</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                        pattern='[0-9]{10}'
                        className='border w-full  px-4 py-1 outline-none border-gray focus:border-primary '
                        placeholder='Enter Phone No...'
                    />
                </div>
                <div className='mt-5 2xl:flex xl:flex lg:flex md:flex sm:flex'>
                    <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        required
                        className='h-6 w-5'
                    />
                    <p className=' text-gray'>By clicking checkbox, you agree to our <a href="" className='text-primary'>Terms and Conditions</a>  and <a href="" className='text-primary'> Privacy Policy</a> </p>
                </div>
            </div>
            <div className="form4 mt-10 2xl:flex xl:flex lg:flex items-center justify-between">
                <div>
                    <button
                        type="submit"
                        className='border px-6 py-2 rounded-3xl md:w-full sm:w-full border-primary bg-primary text-white hover:bg-white hover:text-primary transition-all duration-300'
                        disabled={loading}
                    >
                        {loading ? 'Signing Up...' : 'Sign Up'}
                    </button>
                </div>
                <div>
                    <p className='text-primary hover:underline md:text-sm sm:text-sm'>Already have an account? <a className='cursor-pointer' onClick={() => { setRegForm(false); setLogForm(!logForm) }}>Login</a></p>
                </div>
            </div>
            {error && <p className="mt-4 text-red-500">{error.message}</p>}
        </form>
    );
}

export default CandidateReg;
