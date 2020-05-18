from manga_site import manga_site
from selenium import webdriver
from selenium.webdriver.common.by import By
import json
def convert_manga_jsonfy_site(elems):
    list_manga = []
    
    for elem in elems:
        dict_manga = {}
        dict_manga["name"] = elem.text
        dict_manga["link"] = elem.get_attribute('href')
        list_manga.append(dict_manga)
    return json.dumps(list_manga)
def mangakakalot_get_manga_link_and_name(manga_name):

    driver = webdriver.Firefox(executable_path="D:\geckodriver.exe")
    driver.get("https://mangakakalot.com/search/"+manga_name.replace(" ", "_"))
    #inicio de pegar os mangas
    manga_central_panel = driver.find_elements(By.XPATH, '/html/body/div[1]/div[2]/div[1]/div[3]/div/div/div/h3/a')
    
    manga_and_link_array = convert_manga_jsonfy_site(manga_central_panel)
    driver.quit()
    return manga_and_link_array
class manga_site_handler:
    manga_array_list = []
    manga_array_list.append(manga_site("Mangakakalot", "mangakakalot.com", mangakakalot_get_manga_link_and_name))
    def get_manga_site_by_name(name, manga_array):     
        for x in manga_array:
            if(x.get_name()==name):
                return x
        return manga_site("blank", "blank.com", "")
    def list_all_sites_and_links(self):
        list_manga = []
        for manga in self.manga_array_list: 
            dict_manga = {}
            dict_manga["name"] = manga.get_name()
            dict_manga["link"] = manga.get_link()
            list_manga.append(dict_manga)
        return list_manga

