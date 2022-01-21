import prisma from '../../../client.ts';

const handler = async (req,res) => {
    switch (req.method){
        case "POST":
            const about = JSON.parse(req.body);
            const tambah = await prisma.about.create({
                data: {
                    tentang: about.tentang,
                    tentang2: about.tentang2,
                }
            });
            res.json(tambah);
            break
        }
};

export default handler