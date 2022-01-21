import prisma from '../../../client.ts';

const handler = async (req,res) => {
    const about = await prisma.about.findMany();
    
    res.json(about);
}

export default handler;