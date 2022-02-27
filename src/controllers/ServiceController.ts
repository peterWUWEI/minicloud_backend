import { getRepository, getConnection } from 'typeorm';
import { Service } from '../entity/Service';

class ServiceController {
    public async getServiceList(req: any, res: any) {
        try {
            console.log('retrieving service list..');
            const serviceList = await getConnection()
                                    .createQueryBuilder()
                                    .select('services.id')
                                    .addSelect('services.service_title')
                                    .from(Service, 'services')
                                    .getMany();
            res.json(serviceList);
        } catch (err: any) {
            console.error(err);
            res.status(500).json({ error: 500, msg: err.message });
        }
    }

    public async getServiceById(req: any, res: any) {
        try {
            console.log('retrieving service by ID..');
            const id = req.query.id;
            if(id === undefined) {
                return res.status(404).send('ID is missing');
            }

            const repo = getRepository(Service);
            const service = await repo.findOne({ id });
            res.json(service);
        }  catch (err: any) {
            console.error(err);
            res.status(500).json({ error: 500, msg: err.message });
        }
    }
}

export default ServiceController;