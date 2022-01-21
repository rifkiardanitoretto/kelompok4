import prisma from '../../../client.ts';

const handler = async (req,res) => {
    switch(req.method){
        case "POST":
            const contact = JSON.parse(req.body);
            const tambah = await prisma.contact.create({
                data: {
                    nama: contact.nama,
                    alamat: contact.alamat,
                    tanggallahir: contact.tanggallahir,
                    facebook: contact.facebook,
                    instagram: contact.instagram,
                    whatshapp: contact.whatsapp
                }
            })
            res.json(tambah);
            break
    }
}
export default handler