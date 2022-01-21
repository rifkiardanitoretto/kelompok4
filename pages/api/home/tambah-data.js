import prisma from '../../../client.ts';

const handler = async (req,res) => {
    if(req.method !== "POST")
        return res
            .status(405)
            .json({ message : "Metode tidak diijinkan" });

    const home = JSON.parse(req.body);
    
    const tambah = await prisma.home.create({
        data : 
        {
            judul: home.judul,
            caption: home.caption
        }
    })
    res.json(tambah)
};

export default handler;