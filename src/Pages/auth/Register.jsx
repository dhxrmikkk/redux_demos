import React, { useState } from 'react';
import { SIDEIMG } from '../../assets/index';
import { Button, Input } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/reducers/authSlice';
import Loader from '../../components/Loader';

const Register = () => {

    //                                      ================ STATE FOR FIELDS  ================
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cnfPassword, setCnfPassword] = useState('');
    //                                      ================ STATE FOR LOADER  ================
    const [isLoading, setIsLoading] = useState(false);
    //                                      ================ VARIABLES FOR RANDOM ID  ================
    const randomId = Date.now();
    //                                      ================ VARIABLES FOR HOOKS  ================
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //                                      ================ REGISTER FUNCTION ================

    const handleRegister = (e) => {
        e.preventDefault();

        if (email === '') {
            toast.error("Email is Required!");
        } else if (password === '') {
            toast.error("Password is Required!");
        } else if (cnfPassword === '') {
            toast.error("Confirm Password is Required!");
        } else if (password !== cnfPassword) {
            toast.error("Password Mismatched!");
        } else {
            setIsLoading(true);
            try {
                const registeredUserDetail = {
                    user_id: randomId,
                    user_email: email,
                    user_password: password,
                };

                setTimeout(() => {
                    dispatch(register(registeredUserDetail));
                    toast.success("Registered Successfully!");
                    setEmail('');
                    setPassword('');
                    setCnfPassword('');
                    navigate("/login");
                }, 1000);
            }
            catch (error) {
                console.log(error);
            }
            finally {
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000);
            }
        }
    };

    return (
        <section className='h-screen p-6 flex w-full font-mono'>
            {/* ================ LEFT SECTION ================ */}

            <div className='md:w-2/3 w-full p-6 flex flex-col justify-center'>
                {/* ================ HEADING ================ */}

                <div className='mb-16'>
                    <h2 className="block antialiased tracking-normal text-2xl md:text-4xl leading-[1.3] text-inherit font-bold mb-4">Create An Account</h2>
                    <h4 className='md:text-lg text-sm'>Enter Your Credentials To Register Account.</h4>
                </div>

                {/* ================ REGISTER FORM ================ */}

                <form onSubmit={handleRegister} className='mb-16 max-w-[40rem]'>
                    <div className='w-full mb-6'>
                        <Input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='text-[16px] w-full tracking-wide'
                            size="lg"
                            label="Enter Email"
                        />
                    </div>
                    <div className='w-full mb-6'>
                        <Input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='text-[16px] w-full tracking-wide'
                            size="lg"
                            label="Enter Password"
                        />
                    </div>
                    <div className='w-full'>
                        <Input
                            type='password'
                            value={cnfPassword}
                            onChange={(e) => setCnfPassword(e.target.value)}
                            className='text-[16px] w-full tracking-wide'
                            size="lg"
                            label="Confirm Password"
                        />
                    </div>
                    <div className='mt-16'>
                        <Button
                            type='submit'
                            className='w-full p-3 tracking-wider text-[14px] font-normal'>
                            {
                                isLoading
                                    ?
                                    <Loader visible={true}
                                        height="21"
                                        width="21"
                                        color="#fff"
                                        secondaryColor="transparent"
                                        ariaLabel="oval-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                        className={`flex justify-center items-center`} />
                                    : "Register"
                            }
                        </Button>
                    </div>
                </form>

                {/* ================ NAV TO LOGIN ================ */}

                <div className='flex flex-col md:flex-row items-center'>
                    <span className='text-gray-500 md:me-3'>Already Registered?</span>
                    <Link to='/login' className='cursor-pointer'>Login Here</Link>
                </div>
            </div>

            {/* ================ RIGHT SECTION ================ */}

            <div className='md:w-1/3 hidden md:flex'>
                <img src={SIDEIMG} alt="Side image" className='rounded-3xl' />
            </div>
        </section>
    );
};

export default Register;
