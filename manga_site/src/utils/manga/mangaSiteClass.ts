class mangaClass{
    mangaSiteName: string;
    mangaSiteUrl: string;
    getMangaById: Function;
    getMangaImagesByIdAndChapter: Function;
    constructor(mangaSiteName : string, mangaSiteUrl: string, getMangaById: Function, getMangaImagesByIdAndChapter: Function) {
        this.mangaSiteName = mangaSiteName;
        this.mangaSiteUrl = mangaSiteUrl;
        this.getMangaById = getMangaById;
        this.getMangaImagesByIdAndChapter = getMangaImagesByIdAndChapter;
    }

    getMangaSiteName(){
        return this.mangaSiteName
    }
    
}
export default mangaClass