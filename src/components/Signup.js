import React from 'react'
import { Formik, Form } from 'formik';
import { TextField } from './TextField';

export const Signup = () => {
    return (
        <Formik
            initialValues={{
                firstName:'',
                lastName:'',
                email:'',
                password:'',
                confirmPassword:''
            }}
        >   
            {formik => (
                <div>
                    {console.log(formik.values)}
                    <h1 className="my-4 font-weight-bold-display-4">Signup</h1>
                    <Form>
                        <TextField label="First Name" name="firstName" type="text"/>
                        <TextField label="Last Name" name="lastName" type="text"/>
                        <TextField label="Email" name="email" type="email"/>
                        <TextField label="Password" name="password" type="password"/>
                        <TextField label="Confirm Pasword" name="confirmPassword" type="password"/>
                        <button className="btn btn-primary mt-3" type="submit">Submit</button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}
