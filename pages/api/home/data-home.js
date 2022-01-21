import prisma from '../../../client.ts';

const handler = async (req,res) => {
    const home = await prisma.home.findMany();
    
    res.json(home);
}

export default handler;