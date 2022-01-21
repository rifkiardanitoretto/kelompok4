import { Formik, Form, Field } from 'formik';
import Head from 'next/head';
import { supabase } from '../../utils/supabase/supabase-client';


const init = { username : '', password : '' };

const prosesSignUp = async (values) => {
    const { error } = await supabase.auth.signUp({
        email : values.username,
        password : values.password,
    });

    if(error) {
        alert(error.message);
    }
    else{
        alert(`Check your email ${values.username} to confirm your account`)
        location.replace('/admin/login');
    }   
}

export default function FormSignUp(){
    return(
        <>
            <Head>
                <title>Sign Up</title>
            </Head>
            <div className='container my-5 py-5'>
                <Formik initialValues={init} onSubmit={prosesSignUp}>
                    {({ isSubmitting }) => (
                        <Form align='center'>
                            <h1 className='fw-bold py-5 text-primary'>Sign Up</h1>
                            <table align='center'>
                                <tr>
                                    <td htmlFor='username'>Username</td>
                                    <td>:</td>
                                    <td>
                                    <Field placeholder="name@example.com" type='text' name='username'/>
                                    </td>
                                </tr>
                                <tr>
                                    <td htmlFor='password'>Password</td>
                                    <td>:</td>
                                    <td>
                                    <Field placeholder="Password" type='password' name='password'/>
                                    </td>
                                </tr>
                            </table>
                            <br />
                            <button className="btn btn-primary"type='submit' disabled={isSubmitting}>
                                Sign Up
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>  
        </>
    )
}