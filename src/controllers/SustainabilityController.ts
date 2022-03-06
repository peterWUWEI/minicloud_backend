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
}

export default SustainabilityController;