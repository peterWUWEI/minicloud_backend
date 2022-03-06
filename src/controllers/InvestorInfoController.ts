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
            const id = req.query.id;
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
}

export default InvestorInfoController;