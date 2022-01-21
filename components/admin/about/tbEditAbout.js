import useSWR from "swr";

const hapusAbout = async (idAbout) => {
    let setuju = confirm(`Hapus data : ${idAbout}?`);

    if (setuju) {
        const data = { id: idAbout };
        const respon = await fetch('/api/about/hapus-data', {
            method: 'POST',
            body: JSON.stringify(data),
        });
        let status = await respon.json();

        if (status != null) {
            location.reload();
        }
    }
};

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function TBabout(){
    const { data,error } = useSWR('/api/about/data-about',fetcher);

    if(error) return <p>Ada masalah saat fetching data</p>
    if(!data) return <p>Loading...</p>
    if(data.length == 0) return <p>Tidak ada Data</p>;

    return(
        <div className="container py-5">
            <table>
            <thead>
                <tr align="center">
                    <td>About Me</td>
                    <td>Aksi</td>
                </tr>
            </thead>
            <tbody>
                {data.map((about,x) => (
                    <tr>
                        <td key={x+1}>
                            {about.tentang}
                            <td>
                                {about.tentang2}
                            </td>
                        </td>
                        <tr>
                            <td>
                                <a onClick={(event) => {
                                    event.preventDefault();
                                    hapusAbout(about.id);
                                }}>
                                    <a className="btn btn-danger">Hapus</a>
                                </a>
                            </td>
                        </tr>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}
    