import { getRepository, getConnection } from 'typeorm';
import { Contact } from '../entity/Contact';

class ContactController {
    public async getContactList(req: any, res: any) {
        try {
            console.log('retrieving contact list..');
            const contactList = await getConnection()
                                    .createQueryBuilder()
                                    .select('contacts.id')
                                    .addSelect('contacts.title')
                                    .from(Contact, 'contacts')
                                    .getMany();
            res.json(contactList);
        } catch (err: any) {
            console.error(err);
            res.status(500).json({ error: 500, msg: err.message });
        }
    }

    public async getContactById(req: any, res: any) {
        try {
            console.log('retrieving contact by ID..');
            const id = req.query.id;
            if(id === undefined) {
                return res.status(404).send('ID is missing');
            }

            const repo = getRepository(Contact);
            const contact = await repo.findOne({ id });
            res.json(contact);
        }  catch (err: any) {
            console.error(err);
            res.status(500).json({ error: 500, msg: err.message });
        }
    }
}

export default ContactController;