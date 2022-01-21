import { Formik, Form, Field } from 'formik';

const initFormValues = {
    tentang : '',
    tentang2 : ''
}

    
const handleOnSubmit = async (values) => {
    const respon = await fetch('/api/about/tambah-data',{
        method: "POST",
        body: JSON.stringify(values)
    });

    let status = await respon.json();

    if(status != null){
        location.reload();
    }
};

const CustomInputComponent = (props) => (
    <textarea className="my-custom-input" type="textarea" {...props} />
)
export default function AboutEdit(){
    return(
        <>
            <div className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 mt-5">
                            <div className="mt-5">
                            <Formik initialValues={initFormValues} onSubmit={handleOnSubmit}>
                                {({ isSubmitting }) => (
                                    <Form>
                                        <table align='center'>
                                            <tr>
                                                <td htmlFor='tentang' align='center'>Tentang Saya</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Field name='tentang' as={CustomInputComponent}/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Field name='tentang2' as={CustomInputComponent} htmlFor="tentang2"/>
                                                </td>
                                            </tr>
                                            
                                        </table>
                                
                                        <center>
                                            <button type='submit' disabled={isSubmitting}>
                                                Tambah
                                            </button>
                                        </center>
                                
                                    </Form>
                                )}
                                </Formik>
                            </div>
                        </div>
                        <div className="col-md-6 mt-3">
                            <img src="/gambar/11-2.png" width="500" alt="Gambar about" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}