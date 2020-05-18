# manga_aggregrator

A aplication for scraping and viewing manga. Built with typescript and express



## Compiling and running
```bash
tsc
```
```bash
npx nodemon localhost 5000
```

## Convensões no código
1)Todas as funções q retornam algo sempre retornam um array de dict, todas as routes retornam json

## TODO
1)Melhorar o handler fodido q eu fiz
2)Integrar o handler com o mongodb
3)Separar todos os web scraping em: os q pegam o link e o nome e os q pegam os capitulos
4)Refatorar o handle sem as gambiarras de global
5)Comentar e documentar o código
6)fazer o scraping pra pegar as imagens dos capitulos
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)