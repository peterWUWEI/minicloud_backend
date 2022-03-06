import { getRepository, getConnection } from 'typeorm';
import { About } from '../entity/About';

class AboutController {
    public async getAboutList(req: any, res: any) {
        try {
            console.log('retrieving service list..');
            const aboutList = await getConnection()
                                    .createQueryBuilder()
                                    .select('about.id')
                                    .addSelect('about.title')
                                    .from(About, 'about')
                                    .getMany();
            res.json(aboutList);
        } catch (err: any) {
            console.error(err);
            res.status(500).json({ error: 500, msg: err.message });
        }
    }

    public async getAboutById(req: any, res: any) {
        try {
            console.log('retrieving about by ID..');
            const id = req.query.id;
            if(id === undefined) {
                return res.status(404).send('ID is missing');
            }

            const repo = getRepository(About);
            const about = await repo.findOne({ id });
            res.json(about);
        }  catch (err: any) {
            console.error(err);
            res.status(500).json({ error: 500, msg: err.message });
        }
    }
}

export default AboutController;