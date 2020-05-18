class manga_site:
    def __init__(self,name, link, manga_function):
        self.name = name
        self.link = link
        self.manga_function = manga_function
    def get_name(self):
        return self.name
    def get_link(self):
        return self.link
    def get_manga_function(self):
        return self.manga_function

    def toString(self):
        return self.name + self.link