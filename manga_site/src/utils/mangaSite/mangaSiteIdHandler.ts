import mangaObjList from '../manga/mangaObjList';
class mangaSiteHandler {
    static getMangaObjByName(mangaSite: string): any {
        for (const mangaObj of mangaObjList) {
            if (mangaObj.getMangaSiteName() === mangaSite) {
                return mangaObj;
            }
        }
        return { error: '404', text: 'Manga site not found' };
    }
}

export default mangaSiteHandler;
