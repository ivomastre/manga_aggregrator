import * as express from 'express';
import { Request, Response } from 'express';
import IControllerBase from 'interfaces/IControllerBase.interface';
import mangaSiteIdHandler from '../../utils/mangaSite/mangaSiteIdHandler';
class mangaIdController implements IControllerBase {
    public path = '/';
    public router = express.Router();

    constructor() {
        this.initRoutes();
    }
    public initRoutes() {
        this.router.get('/mangaid', this.index);
    }

    index = async (req: Request, res: Response) => {
        const { mangaName, mangaSite } = req.body;
        const mangaSiteScraper = mangaSiteIdHandler.getMangaObjByName(mangaSite);
        if (mangaSiteScraper.error === '404') {
            res.json(mangaSiteScraper);
        } else {
            const mangaIds = await mangaSiteScraper.getMangaById(mangaName);
            res.status(200).json({ mangaIds });
        }
    };
}

export default mangaIdController;
