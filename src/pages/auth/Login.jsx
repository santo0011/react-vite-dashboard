import React from 'react';
import './auth.css';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';



const Login = () => {

    const { handleSubmit, getValues, control, setValue, register, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('data', data);

    };

    return (
        <div className='loginStyle'>
            <div className=" wrapper-login wrapperLogin">
                <div className="container container-login animated fadeIn" style={{ display: 'block' }}>
                    <h2 className="text-center pb-3 font-weight-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                        <div className="form-group">
                            <label htmlFor="email" className="placeholder"><b>Email</b></label>
                            <input
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: 'Invalid email address',
                                    },
                                })}
                                id="email"
                                name="email"
                                type="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            />
                            {errors.email && <p className="invalid-feedback">{errors.email.message}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="placeholder"><b>Password</b></label>
                            <input
                                {...register('password', {
                                    required: 'Password is required',
                                })}
                                id="password"
                                name="password"
                                type="password"
                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            />
                            {errors.password && <p className="invalid-feedback">{errors.password.message}</p>}
                        </div>
                        <div className="form-group form-action-d-flex mb-3 text-center">
                            <button type="submit" className="btn btn-primary col-md-12 mt-3 mt-sm-0 fw-bold mx-auto">Login</button>
                        </div>
                        <div className="login-account" style={{ textAlign: "center" }}>
                            <span className="msg">Don't have an account yet ?</span>
                            <Link to='/register' id="show-signup" className="link"> Register</Link>
                        </div>
                    </form>
                </div>


            </div>

        </div>
    )
}

export default Login;