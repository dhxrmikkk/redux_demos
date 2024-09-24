import React, { useState } from 'react'
import { SIDEIMG } from '../../assets/index'
import { Button, Input } from '@material-tailwind/react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/reducers/authSlice'

const Login = () => {

    //                                      ================ STATE FOR FIELDS  ================
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //                                      ================ STATE FOR LOADER  ================
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //                                      ================ LOGIN FUNCTION ================


    const handleLogin = (e) => {
        e.preventDefault()
        if (email === '') {
            toast.error("Email is Required !")
        }
        else if (password === '') {
            toast.error("Password is Required !")
        }
        else if (email === "" && password === "") {
            toast.error("Fields can't be empty !")
        }
        else {
            setIsLoading(true);
            try {
                const loginUser = { user_email: email, user_password: password };
                dispatch(login(loginUser));
                toast.success("Login Successful!");
                setEmail('');
                setPassword('');
                navigate("/")

            } catch (error) {
                toast.error("Invalid Credentials !");
            } finally {
                setIsLoading(false);
            }
        }
    }

    return (
        <>
            <section className='h-screen p-6 flex w-full font-mono'>
                {/* ================ LEFT SECTION ================ */}

                <div className='md:w-2/3 w-full p-6 flex flex-col justify-center'>
                    {/* ================ HEADING ================ */}

                    <div className='mb-16'>
                        <h2 className="block antialiased tracking-normal text-2xl md:text-4xl leading-[1.3] text-inherit font-bold mb-4">Sign In</h2>
                        <h4 className='md:text-lg text-sm'>Enter Your Credentials To Sign in.</h4>
                    </div>

                    {/* ================ LOGIN FORM ================ */}

                    <form onSubmit={handleLogin} className='mb-16 max-w-[40rem]'>
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
                        <div className='w-full'>
                            <Input
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='text-[16px] w-full tracking-wide'
                                size="lg"
                                label="Enter Password"

                            />
                        </div>
                        <div className='mt-16'>
                            <Button
                                type='submit'
                                className='w-full p-3 tracking-wider text-[14px] font-normal capitalize'>
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
                                        : "Sign in"
                                }
                            </Button>
                        </div>
                    </form>

                    {/* ================ NAV TO REGISTER ================ */}

                    <div className='flex flex-col md:flex-row items-center'>
                        <div className='text-gray-500 md:me-3'>Don't Have Account ?</div>
                        <Link to='/register' className='cursor-pointer'>Register Here</Link>
                    </div>
                </div>

                {/* ================ RIGHT SECTION ================ */}

                <div className='md:w-1/3 hidden md:flex'>
                    <img src={SIDEIMG} alt="Side image" className='rounded-3xl' />
                </div>
            </section>
        </>
    )
}

export default Login
