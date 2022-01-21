import prisma from '../../../client.ts';

const handler = async (req,res) =>{
    if(req.method !== "POST")
        return res
            .status(405)
            .json({ message : "Metode tidak diijinkan" });

    const data = JSON.parse(req.body);

    const hapus = await prisma.about.delete({
        where: { id: data.id },
    });

    res.json(hapus)
};

export default handler;