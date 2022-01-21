import prisma from '../../../client.ts';

const handler = async (req,res) => {
    const contact = await prisma.contact.findMany();

    res.json(contact);
}
export default handler;