import * as express from 'express';
import { Request, Response } from 'express';
import IControllerBase from 'interfaces/IControllerBase.interface';
import mangaSiteHandler from '../../utils/mangaSite/mangaSiteIdHandler';
import mangaObjList from '../../utils/manga/mangaObjList';
class MangaSiteController implements IControllerBase {
    public path = '/';
    public router = express.Router();

    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.get('/mangaSite', this.index);
        this.router.get('/mangaSite_by_id', this.getMangaSiteById);
    }

    index = (req: Request, res: Response) => {
        res.json(mangaObjList);
    };

    getMangaSiteById = (req: Request, res: Response) => {
        const { mangaSite, mangaName, mangaLanguage } = req.body;
        res.json(mangaSiteHandler.getMangaObjByName(mangaSite));
    };
}

export default MangaSiteController;
