import useSWR from "swr";

const hapusLanding = async (idHome, judul) => {
    let setuju = confirm(`Hapus data : ${judul}?`);

    if (setuju) {
        const data = { id: idHome };
        const respon = await fetch('/api/home/hapus-data', {
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

export default function TbJudul(){
    const { data,error } = useSWR('/api/home/data-home',fetcher);

    if(error) return <p>Ada masalah saat fetching data</p>
    if(!data) return <p>Loading...</p>
    if(data.length == 0) return <p>Tidak ada Data</p>;

    return(
        <div className="container py-5">
            <table>
            <thead>
                <tr align="center">
                    <td>Judul</td>
                    <td >Caption</td>
                    <td>Aksi</td>
                </tr>
            </thead>
            <tbody>
                {data.map((home,x) => (
                    <tr>
                        <td key={x+1}>{home.judul}</td>
                        <td>{home.caption}</td>
                        <td>
                            <a onClick={(event) => {
                                event.preventDefault();
                                hapusLanding(home.id, home.judul);
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
    