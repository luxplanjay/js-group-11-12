# Browserlist

https://github.com/browserslist/browserslist

```yaml
[production]
>0.2%
not dead
not op_mini all

[development]
last 1 chrome version
last 1 firefox version
last 1 safari version
```

# Font loader

```js
{
  test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'fonts/',
      },
    },
  ],
};
```

# Infinite scroll с IO

- делаем div#sentinel под контейнером элементов
- ставим rootMargin у вьюпорта снизу на Npx
- ставим обзервер на div#sentinel
- когда sentinel пересекается с root значит до конца видимого контента осталось
  Npx и в этот момент делаем новый http-запрос за итемами сдедующими и рендерим
  разметку
- После добавления в галерею новых items, галерея становится больше по высоте и
  sentinel отодвигается вниз, а при скроле опять пересекает root и по циклу
