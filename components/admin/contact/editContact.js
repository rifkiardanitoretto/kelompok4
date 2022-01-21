import { Formik, Form, Field } from 'formik';

const initFormValues = {
    nama: '',
    alamat: '',
    tanggallahir: '',
    facebook:'',
    instagram: '',
    whatsapp: '',
}

const handleOnSubmit = async (values) => {
    let url = '/api/contact/tambah-data';

    const respon = await fetch(url,{
        method: 'POST',
        body: JSON.stringify(values),
    });

    let status = await respon.json();

    if(status != null){
        location.replace('/');
    }
};

const CustomInputComponent = (props) => (
    <textarea className="my-custom-input" type="textarea" {...props} />
)
export default function EditContact(){
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
                                        <table>
                                            <tr>
                                                <td htmlFor='nama'>Nama</td>
                                                <td>:</td>
                                                <td>
                                                    <Field type='text' name='nama'/>
                                                </td>                                                
                                            </tr>
                                            <tr>
                                                <td htmlFor='alamat'>Alamat</td>
                                                <td>:</td>
                                                <td>
                                                    <Field name='alamat' as={CustomInputComponent}/>
                                                </td>                                                
                                            </tr>
                                            <tr>
                                                <td htmlFor='tanggallahir'>Tanggal lahir</td>
                                                <td>:</td>
                                                <td>
                                                    <Field type='date' name='tanggallahir'/>
                                                </td>                                                
                                            </tr>
                                            <tr>
                                                <td htmlFor='facebook'>Facebook</td>
                                                <td>:</td>
                                                <td>
                                                    <Field type='text' name='facebook'/>
                                                </td>                                                
                                            </tr>
                                            <tr>
                                                <td htmlFor='instagram'>Instagram</td>
                                                <td>:</td>
                                                <td>
                                                    <Field type='text' name='instagram'/>
                                                </td>                                                
                                            </tr>
                                                                                        <tr>
                                                <td htmlFor='whatsapp'>Whatsapp</td>
                                                <td>:</td>
                                                <td>
                                                    <Field type='text' name='whatsapp'/>
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
                            <img src="/gambar/11-1.png" alt="Gambar contact" width="500" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}