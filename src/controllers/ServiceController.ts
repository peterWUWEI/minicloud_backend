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
            const id = req.params.id;
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

    public async createService(req: any, res: any) {
        try {
            console.log('Inserting new service..');
            await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Service)
                .values([
                    {
                        service_title: req.body.service_title,
                        service_content: req.body.service_content
                    }
                ])
                .execute();
                res.json({ message: "New service updated successfully!"});
        }  catch (err: any) {
            console.error(err);
            res.status(500).json({ error: 500, msg: err.message });
        }
    }

    public async deleteServiceById(req: any, res: any) {
        try {
            console.log('Deleting service by ID..');
            const id = req.params.id;
            if(id === undefined) {
                return res.status(404).send('ID is missing');
            }

            await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Service)
            .where("id = :id", { id })
            .execute();

            res.json({ message: `Service with ID ${id} is deleted successfully!`});
        }  catch (err: any) {
            console.error(err);
            res.status(500).json({ error: 500, msg: err.message });
        }
    }

    public async updateServiceById(req: any, res: any) {
        try {
            console.log('Updating service..');
            const id = req.params.id;
            if(id === undefined) {
                return res.status(404).send('ID is missing');
            }

            await getConnection()
                .createQueryBuilder()
                .update(Service)
                .set({
                    service_title: req.body.service_title,
                    service_content: req.body.service_content
                })
                .where("id = :id", { id })
                .execute(); 

            res.json({ message: `Service with ID ${id} is updated successfully!`});
        }  catch (err: any) {
            console.error(err);
            res.status(500).json({ error: 500, msg: err.message });
        }
    }
}

export default ServiceController;