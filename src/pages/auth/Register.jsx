import React from 'react';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import './auth.css';


const Register = () => {
    const { handleSubmit, getValues, control, setValue, register, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('data', data);

    };

    return (
        <div className='registerStyle py-5'>
            <div className=" wrapper-login wrapperRegister">
                <div className="container container-login animated fadeIn">
                    <h2 className="text-center pb-3 font-weight-bold">Register</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                        <div className="form-group row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName" className="placeholder"><b>First Name</b></label>
                                <input {...register('firstName')} id="firstName" name="firstName" type="text" className="form-control" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName" className="placeholder"><b>Last Name</b></label>
                                <input {...register('lastName')} id="lastName" name="lastName" type="text" className="form-control" />
                            </div>
                            <div className="col-md-6 mb-3">
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

                            <div className="col-md-6 mb-3">
                                <label htmlFor="mobile" className="placeholder"><b>Mobile</b></label>
                                <input
                                    {...register('mobile', {
                                        required: 'Mobile is required',
                                        pattern: {
                                            value: /^[0-9]{10}$/,
                                            message: 'Invalid mobile number',
                                        },
                                    })}
                                    id="mobile"
                                    name="mobile"
                                    type="tel"
                                    className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                                />
                                {errors.mobile && <p className="invalid-feedback">{errors.mobile.message}</p>}
                            </div>


                            <div className="col-md-6 mb-3">
                                <label htmlFor="identificationType" className="placeholder"><b>Identification Type</b></label>
                                <select {...register('identificationType')} className="form-select" id="identificationType">
                                    <option>National ID</option>
                                    <option>Passport</option>
                                    <option>Driver's License</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="identificationNumber" className="placeholder"><b>Identification Number</b></label>
                                <input {...register('identificationNumber')} id="identificationNumber" name="identificationNumber" type="text" className="form-control" />
                            </div>

                            <div className="col-md-12 mb-3">
                                <label htmlFor="address" className="placeholder"><b>Address</b></label>
                                <textarea {...register('address')} id="address" name="address" className="form-control" />
                            </div>

                            <div className="col-md-6 mb-3">
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

                            <div className="col-md-6 mb-3">
                                <label htmlFor="confirmPassword" className="placeholder"><b>Confirm Password</b></label>
                                <input
                                    {...register('confirmPassword', {
                                        required: 'Confirm Password is required',
                                        validate: value => value === getValues('password') || 'Passwords do not match',
                                    })}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                                />
                                {errors.confirmPassword && <p className="invalid-feedback">{errors.confirmPassword.message}</p>}
                            </div>


                        </div>

                        <div className="form-group form-action-d-flex mb-3 text-center">
                            <button type="submit" className="btn btn-primary col-md-12 mt-3 mt-sm-0 fw-bold mx-auto">Register</button>
                        </div>
                        <div className="login-account" style={{ textAlign: "center" }}>
                            <span className="msg">Already have an account?</span>
                            <Link to='/login' id="show-login" className="link"> Login</Link>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    )
}

export default Register;