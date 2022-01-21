import Link from "next/link";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function LandingPage() {
  const { data,error } = useSWR('/api/home/data-home', fetcher);

  if(error) return <p>Ada masalah saat fetching data</p>
  if(!data) return <p>Loading...</p>
  if(data.length == 0) return <p>Tidak ada data</p>;
  return (
    <>
      <div>
        <div className="container">
          <div className="row mt-4">
            <div className="col md-6">
              <div className="mt-5 landing py-5 mt-5">
                <>
                  {data.map((home,x) => (
                      <div>
                        <h1 key={x+1}>{home.judul}</h1>
                        <p>{home.caption}</p>
                      </div>
                  ))}
                </>
                <Link href="/about">
                  <a className="btn btn-warning">See About Me</a>
                </Link>
              </div>
            </div>
            <div className="col md-6">
              <img
                src="/gambar/11.png"

                width="500"
                alt="landing page"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
