import { getRepository, getConnection } from 'typeorm';
import { InvestorInfo } from '../entity/InvestorInfo';

class InvestorInfoController {
    public async getInvestorInfoList(req: any, res: any) {
        try {
            console.log('retrieving invetor info list..');
            const invetorInfoList = await getConnection()
                                    .createQueryBuilder()
                                    .select('invetor_info.id')
                                    .addSelect('invetor_info.pdf_title')
                                    .addSelect('invetor_info.pdf_file_url')
                                    .from(InvestorInfo, 'invetor_info')
                                    .getMany();
            res.json(invetorInfoList);
        } catch (err: any) {
            console.error(err);
            res.status(500).json({ error: 500, msg: err.message });
        }
    }

    public async getInvestorInfoById(req: any, res: any) {
        try {
            console.log('retrieving investor info by ID..');
            const id = req.params.id;
            if(id === undefined) {
                return res.status(404).send('ID is missing');
            }

            const repo = getRepository(InvestorInfo);
            const investorInfo = await repo.findOne({ id });
            res.json(investorInfo);
        }  catch (err: any) {
            console.error(err);
            res.status(500).json({ error: 500, msg: err.message });
        }
    }

    public async createInvestorInfo(req: any, res: any) {
        try {
            console.log('Inserting new investor info..');
            await getConnection()
                .createQueryBuilder()
                .insert()
                .into(InvestorInfo)
                .values([
                    {
                        pdf_title: req.body.pdf_title,
                        pdf_file_url: req.body.pdf_file_url,
                        content: req.body.content
                    }
                ])
                .execute();
                res.json({ message: "New investor info updated successfully!"});
        }  catch (err: any) {
            console.error(err);
            res.status(500).json({ error: 500, msg: err.message });
        }
    }

    public async deleteInvestorInfoById(req: any, res: any) {
        try {
            console.log('Deleting investor info by ID..');
            const id = req.params.id;
            if(id === undefined) {
                return res.status(404).send('ID is missing');
            }

            await getConnection()
            .createQueryBuilder()
            .delete()
            .from(InvestorInfo)
            .where("id = :id", { id })
            .execute();

            res.json({ message: `Investor Info with ID ${id} is deleted successfully!`});
        }  catch (err: any) {
            console.error(err);
            res.status(500).json({ error: 500, msg: err.message });
        }
    }

    public async updateInvestorInfoById(req: any, res: any) {
        try {
            console.log('Updating investor info..');
            const id = req.params.id;
            if(id === undefined) {
                return res.status(404).send('ID is missing');
            }

            await getConnection()
                .createQueryBuilder()
                .update(InvestorInfo)
                .set({
                    pdf_title: req.body.pdf_title,
                    pdf_file_url: req.body.pdf_file_url,
                    content: req.body.content
                })
                .where("id = :id", { id })
                .execute(); 

            res.json({ message: `Investor Info with ID ${id} is updated successfully!`});
        }  catch (err: any) {
            console.error(err);
            res.status(500).json({ error: 500, msg: err.message });
        }
    }
}

export default InvestorInfoController;