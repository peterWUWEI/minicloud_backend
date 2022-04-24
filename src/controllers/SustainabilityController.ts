import { getConnection } from 'typeorm';
import { Sustainability } from '../entity/Sustainability';

class SustainabilityController {
    public async getSustainability(req: any, res: any) {
        try {
            console.log('retrieving sustainability..');
            const sustainability = await getConnection()
                                    .createQueryBuilder()
                                    .select('sustainability.title')
                                    .addSelect('sustainability.content')
                                    .from(Sustainability, 'sustainability')
                                    .getOne();
            res.json(sustainability);
        } catch (err: any) {
            console.error(err);
            res.status(500).json({ error: 500, msg: err.message });
        }
    }

    public async updateSustainability(req: any, res: any) {
        try {
            await getConnection()
                .createQueryBuilder()
                .update(Sustainability)
                .set({
                    title: req.body.title,
                    content: req.body.content
                })
                .where("id = :id", { id: 1 })
                .execute(); 

            res.json({ message: `Sustainability is updated successfully!`});
        } catch (err: any) {
            console.error(err);
            res.status(500).json({ error: 500, msg: err.message });
        }
        
    }
}

export default SustainabilityController;