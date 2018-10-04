# Scanbot landing

> Сборка работает на gulp версии 4.0. 

## Для начала работы

1. ```clone this repo```
2. ```cd path/to/...```
3. ```npm install gulpjs/gulp-cli -g```  
> Установка последней версии Gulp CLI tools глобально (подробнее - [GitHub](https://github.com/gulpjs/gulp/blob/4.0/docs/getting-started.md) )

4. ```npm install```
6. ```run gulp``` 


Все серверные плагины ставить через NPM с ключом --save-dev

Пример установки плагина для минификации изображений:

```javascript
npm i gulp-imagemin --save-dev
```


## Директории и файлы SCSS #
Обязательно использование методологии [БЭМ](https://ru.bem.info/methodology/quick-start/)

Внутри директори лучше всего создавать файлы (модули) с префиксом директории.

*Примечание:* В отличие от официальной рекомендации, для модификаторов нужно использовать двойное тире (--) вместо одиночного подчёркивания (_)

Пример создания блока формы поиска: form/form-search.scss

*form-search.scss:*

```scss
.form-search {
  background: #dedede;
  padding: 10px;
  &__input { // .form-search__input - элемент блока 'поиск'
    font-size: 40px;
  }
  &__button { // .form-search__button - элемент блока 'поиск'
    margin: 2rem 0;
  }
  &--fixed {  // .form-search--fixed - модификатор блока 'поиск'
    position: fixed;
  }
  &--theme_pink {  // .form-search--theme_pink - модификатор блока 'поиск'
    background: pink;
  }
}
```