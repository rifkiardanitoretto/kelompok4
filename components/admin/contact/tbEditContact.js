import useSWR from "swr";

const hapusContact = async(idContact, nama) => {
    let setuju = confirm(`Hapus data nama : ${nama}?`);
    let url = '/api/contact/hapus-data';

    if(setuju){
        const data = { id: idContact };
        const respon = await fetch(url,{
            method: 'POST',
            body: JSON.stringify(data),
        });
        
        let status = await respon.json();

        if(status != null){
            location.reload();
        }
    }
};

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function TBcontact(){
    const { data,error } = useSWR('/api/contact/data-contact', fetcher);

    if(error) return <p>Ada masalah saat fetching data</p>
    if(!data) return <p>Loading...</p>
    if(data.length == 0) return <p>Tidak ada Data</p>;

    return(
        <div className="container py-5">
            <table>
                <thead>
                    <tr align='center'>
                        <td>Nama</td>
                        <td>Alamat</td>
                        <td>Tanggal Lahir</td>
                        <td>Facebook</td>
                        <td>Instagram</td>
                        <td>Whatsapp</td>
                        <td>Aksi</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((contact, x) => (
                        <tr>
                            <td key={x + 1}>{contact.nama}</td>
                            <td>{contact.alamat}</td>
                            <td>{contact.tanggallahir}</td>
                            <td>{contact.facebook}</td>
                            <td>{contact.instagram}</td>
                            <td>{contact.whatshapp}</td>
                            <td>
                                <a onClick={(event) => {
                                    event.preventDefault();
                                    hapusContact(contact.id, nama);
                                }}>
                                    <a className="btn btn-danger">Hapus</a>
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}