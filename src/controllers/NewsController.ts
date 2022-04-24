import { getRepository, getConnection } from 'typeorm';
import { News } from '../entity/News';

class NewsController {
    public async getNewsList(req: any, res: any) {
        try {
            console.log('retrieving news list..');
            const newsList = await getConnection()
                                    .createQueryBuilder()
                                    .select('news.id')
                                    .addSelect('news.news_title')
                                    .addSelect('news.news_date')
                                    .from(News, 'news')
                                    .getMany();
            res.json(newsList);
        } catch (err: any) {
            console.error(err);
            res.status(500).json({ error: 500, msg: err.message });
        }
    }

    public async getNewsById(req: any, res: any) {
        try {
            console.log('retrieving news by ID..');
            const id = req.params.id;
            if(id === undefined) {
                return res.status(404).send('ID is missing');
            }

            const repo = getRepository(News);
            const news = await repo.findOne({ id });
            res.json(news);
        }  catch (err: any) {
            console.error(err);
            res.status(500).json({ error: 500, msg: err.message });
        }
    }

    public async createNews(req: any, res: any) {
        try {
            console.log('Inserting news..');
            await getConnection()
                .createQueryBuilder()
                .insert()
                .into(News)
                .values([
                    {
                        news_title: req.body.news_title,
                        news_content: req.body.news_content,
                        news_date: req.body.news_date
                    }
                ])
                .execute();
                res.json({ message: "News updated successfully!"});
        }  catch (err: any) {
            console.error(err);
            res.status(500).json({ error: 500, msg: err.message });
        }
    }

    public async deleteNewsById(req: any, res: any) {
        try {
            console.log('Deleting news by ID..');
            const id = req.params.id;
            if(id === undefined) {
                return res.status(404).send('ID is missing');
            }

            await getConnection()
            .createQueryBuilder()
            .delete()
            .from(News)
            .where("id = :id", { id })
            .execute();

            res.json({ message: `News with ID ${id} is deleted successfully!`});
        }  catch (err: any) {
            console.error(err);
            res.status(500).json({ error: 500, msg: err.message });
        }
    }

    public async updateNewsById(req: any, res: any) {
        try {
            console.log('Updating news..');
            const id = req.params.id;
            if(id === undefined) {
                return res.status(404).send('ID is missing');
            }

            await getConnection()
                .createQueryBuilder()
                .update(News)
                .set({
                    news_title: req.body.news_title,
                    news_content: req.body.news_content,
                    news_date: req.body.news_date
                })
                .where("id = :id", { id })
                .execute(); 

            res.json({ message: `News with ID ${id} is updated successfully!`});
        }  catch (err: any) {
            console.error(err);
            res.status(500).json({ error: 500, msg: err.message });
        }
    }
}

export default NewsController;