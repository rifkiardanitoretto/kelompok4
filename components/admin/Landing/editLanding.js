import { Formik, Form, Field } from 'formik';

const initFormValues = {
    judul: '',
    caption : '',
}

    
const handleOnSubmit = async (values) => {
    const respon = await fetch('/api/home/tambah-data',{
        method: "POST",
        body: JSON.stringify(values)
    });

    let status = await respon.json();

    if(status != null){
        location.reload();
    }
};

export default function LandingEdit(){
    return(
        <>
            <div className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mt-5">
                            <div className="mt-5 ">
                            <Formik initialValues={initFormValues} onSubmit={handleOnSubmit}>
                                {({ isSubmitting }) => (
                                    <Form>
                                        <table align='center'>
                                        <tr>
                                                <td htmlFor="judul">Judul</td>
                                                <td>:</td>
                                                <td>
                                                <Field type='text'name='judul'/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td htmlFor='caption'>Caption</td>
                                                <td>:</td>
                                                <td>
                                                    <Field type='text'name='caption'/>
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
                        <div className="col-md-6 py-4">
                            <img src="/gambar/11.png" alt="Gambar contact" width="500" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}