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
            console.log('retrieving service by ID..');
            const id = req.query.id;
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
}

export default NewsController;