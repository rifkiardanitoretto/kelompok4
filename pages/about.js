import Layout from "../components/user/Layout";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const about = () => {
  const { data,error } = useSWR('/api/about/data-about',fetcher);

  if(error) return <p>Ada masalah saat fetching data</p>
  if(!data) return <p>Loading...</p>
  if(data.length == 0) return <p>Tidak ada Data</p>;
  return (
    <Layout title="About">
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5 py-5">
              <h1> About Me!</h1>
              {data.map((about,x)=>(
                <>
                  <p key={x+1}>{about.tentang}</p>
                  <p>{about.tentang2}</p>
                </>
              ))}

            </div>
            <div className="col-md-6 mt-3">
              <img src="/gambar/11-2.png" width="500" alt="Gambar about" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default about;
