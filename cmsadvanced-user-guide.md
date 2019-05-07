Функционал из коробки. Использование модуля пользователем
Админка
Настройки модуля:
Stores -> Configuration -> Brander -> Cmsadvanced
1) Module Enable	- включение/выключение модуля
2) Choose Root CmsAdvanced - выбор дефолтной root cmsadvanced страницы
3) Remove Store Codes with Url	- удаление store кода из url

Создание новых типов cmsadvanced страниц
2. Content -> Cms Advanced
Все новые страницы воспринимаемые модулем создаются как дочерние страницы root
ВАЖНО: все категории второго уровня не отображаются в верхнем и нижнем меню, отображаются их дочерние
1) Для работы cmsadvanced новой страницы добавляем дочернюю страницу, страниицы root
2) Включаем страницу Cmsadvanced Enable -> YES
3) В Search Optimization добавляем url_key
4) Если нужно выбираем тип страницы
5) Сохраняем, чистим кеш и страница готова к работе

Описание атрибутов страницы из коробки
1) Name - Название страницы, отображается во вкладке title
2) Enable Cmsadvanced - включает/выключает работу страницы
3) Include In Menu, Include In Footer - добавляет ссылку на страницу в header и footer(не работает для первый двух уровней)

fieldset Content
4) Content Heading - H1 на странице
5) Description - контент страницы

fieldset Search Engine Optimization
6) Url Key - ссылка страницы
7) Meta Title - SEO, если заполнена, то подменяет title вкладки на странице, если не заполнена, то отображается name страницы см. выше
8) Meta Keywords, Meta Description - seo

fieldset Design - для разработчика, позволяет обновлять структуру страницы по handle

fieldset Properties
9) Page Type - тип страницы

Типы страниц из коробки:
1) Дефолтная(не выбран тип) - позволет выводить странцу по типу обычной magento cms страницы
2) Redirects on Categories - позволяет выводить ссылку на определенную категорию. Используется исключительно в ссылка header и footer
3) Forward on Url - не создаёт отдельную страницу, но позволяет добавить ссылку в footer и header для редиректа на определенный урл, который задан в Search Optimization страницы
