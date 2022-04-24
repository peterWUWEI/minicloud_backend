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
            const id = req.params.id;
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

    public async createContact(req: any, res: any) {
        try {
            console.log('Inserting new contact..');
            await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Contact)
                .values([
                    {
                        title: req.body.title,
                        content: req.body.content
                    }
                ])
                .execute();
                res.json({ message: "New service updated successfully!"});
        }  catch (err: any) {
            console.error(err);
            res.status(500).json({ error: 500, msg: err.message });
        }
    }

    public async deleteContactById(req: any, res: any) {
        try {
            console.log('Deleting contact by ID..');
            const id = req.params.id;
            if(id === undefined) {
                return res.status(404).send('ID is missing');
            }

            await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Contact)
            .where("id = :id", { id })
            .execute();

            res.json({ message: `Contact with ID ${id} is deleted successfully!`});
        }  catch (err: any) {
            console.error(err);
            res.status(500).json({ error: 500, msg: err.message });
        }
    }

    public async updateContactById(req: any, res: any) {
        try {
            console.log('Updating contact..');
            const id = req.params.id;
            if(id === undefined) {
                return res.status(404).send('ID is missing');
            }

            await getConnection()
                .createQueryBuilder()
                .update(Contact)
                .set({
                    title: req.body.title,
                    content: req.body.content
                })
                .where("id = :id", { id })
                .execute(); 

            res.json({ message: `Contact with ID ${id} is updated successfully!`});
        }  catch (err: any) {
            console.error(err);
            res.status(500).json({ error: 500, msg: err.message });
        }
    }
}

export default ContactController;