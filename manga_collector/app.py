from flask import Flask
from selenium import webdriver
from selenium.webdriver.common.by import By
from manga_site_handler import manga_site_handler
import json
app = Flask(__name__)

#pegar o nome e o link e dai pega ra função conrrespondente e retornar o search
@app.route('/v1/manga_search/<manga_site>/<manga_name>', methods=['GET'])
def manga_search(manga_site, manga_name):
    handler = manga_site_handler
    manga_site = handler.get_manga_site_by_name(manga_site, handler.manga_array_list)
    function = manga_site.get_manga_function()
    if(manga_site.get_manga_function()==""):
        return "deu ruim a função n existe"
    return function(manga_name)

@app.route('/v1/manga_sites/', methods=['GET'])
def get_all_manga_sites(manga_site, manga_name):
    handler = manga_site_handler
    return json.dumps(handler.list_all_sites_and_links())

app.run(debug=True)






