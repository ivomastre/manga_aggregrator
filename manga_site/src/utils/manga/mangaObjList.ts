import mangaSiteClass from "./mangaSiteClass"
import mangaIdScrap from "../../scraping/mangaId/mangaIdScrap"
class mangaObjList {
    static mangaObjList = [
        new mangaSiteClass("Mangakakalot", "mangakakalot.com", mangaIdScrap.mangakakalotIdByName, function foo(){return "to be implemented"}),
    ]
    
}


export default mangaObjList