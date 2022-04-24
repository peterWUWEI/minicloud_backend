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
            const id = req.params.id;
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

    public async createAbout(req: any, res: any) {
        try {
            console.log('Inserting new service..');
            await getConnection()
                .createQueryBuilder()
                .insert()
                .into(About)
                .values([
                    {
                        title: req.body.title,
                        content: req.body.content
                    }
                ])
                .execute();
                res.json({ message: "New about updated successfully!"});
        }  catch (err: any) {
            console.error(err);
            res.status(500).json({ error: 500, msg: err.message });
        }
    }

    public async deleteAboutById(req: any, res: any) {
        try {
            console.log('Deleting about by ID..');
            const id = req.params.id;
            if(id === undefined) {
                return res.status(404).send('ID is missing');
            }

            await getConnection()
            .createQueryBuilder()
            .delete()
            .from(About)
            .where("id = :id", { id })
            .execute();

            res.json({ message: `About with ID ${id} is deleted successfully!`});
        }  catch (err: any) {
            console.error(err);
            res.status(500).json({ error: 500, msg: err.message });
        }
    }

    public async updateAboutById(req: any, res: any) {
        try {
            console.log('Updating about..');
            const id = req.params.id;
            if(id === undefined) {
                return res.status(404).send('ID is missing');
            }

            await getConnection()
                .createQueryBuilder()
                .update(About)
                .set({
                    title: req.body.title,
                    content: req.body.content
                })
                .where("id = :id", { id })
                .execute(); 

            res.json({ message: `About with ID ${id} is updated successfully!`});
        }  catch (err: any) {
            console.error(err);
            res.status(500).json({ error: 500, msg: err.message });
        }
    }
}

export default AboutController;