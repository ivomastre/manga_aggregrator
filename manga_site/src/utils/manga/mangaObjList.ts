import mangaSiteClass from './mangaSiteClass';
import mangaIdScrap from '../../scraping/mangaId/mangaIdScrap';
const mangaScrapList = new mangaIdScrap();
const mangaObjList = [
    new mangaSiteClass(
        'Mangakakalot',
        'mangakakalot.com',
        mangaScrapList.mangakakalot['mangakakalotIdByName'],
        function foo() {
            return 'to be implemented';
        },
    ),
];

export default mangaObjList;
