import Layout from "../components/user/Layout";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const contact = () => {
  const { data,error } = useSWR('/api/contact/data-contact', fetcher);

  if(error) return <p>Ada masalah saat fetching data</p>
  if(!data) return <p>Loading...</p>
  if(data.length == 0) return <p>Tidak ada Data</p>;

  return (
    <>
   <Layout title="Contact">
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              <div className="mt-5 ">
                <h1> Contact Me! </h1>
                {data.map((contact,x) => (
                  <table>
                    <thead>
                        <tr>
                            <td>Nama</td>
                            <td key={x + 1}>{contact.nama}</td>
                        </tr>
                        <tr>
                          <td>Alamat</td>
                          <td>{contact.alamat}</td>
                        </tr>
                        <tr>
                          <td>Tanggal Lahir</td>
                          <td>{contact.tanggallahir}</td>
                        </tr>
                        <tr>
                          <td>Facebook</td>
                          <td>{contact.facebook}</td>  
                        </tr>
                        <tr>
                          <td>Instagram</td>
                          <td>{contact.instagram}</td>  
                        </tr>
                        <tr>
                          <td>Whatsapp</td>
                          <td>{contact.whatshapp}</td>  
                        </tr>
                    </thead>
                  </table>

                ))}
              </div>
            </div>
            <div className="col-md-6 py-4">
              <img src="/gambar/11-1.png" alt="Gambar contact" width="500" />
            </div>
          </div>
        </div>
      </div>
     </Layout> 
    </>
  );
};

export default contact;
