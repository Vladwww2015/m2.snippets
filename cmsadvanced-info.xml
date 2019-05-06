Работа модуля. Общее

1) Функционал автоматически пробегается по всем модулям и ищет файл по пути Namespace_ModuName/etc/cmsadvanced.xml по типу схемы Brander_CmsAdvanced:/etc/cmsadvanced.xsd
2) В коробке есть два основных объекта это:
- Тип страницы(Brander\CmsAdvanced\Model\Cmsadvanced, который реализует интерфейс Brander\CmsAdvanced\Api\Data\CmsadvancedInterface)
- Тип грида (Brander\CmsAdvanced\Model\Grid, который реализует интерфейс Brander\CmsAdvanced\Api\Data\GridInterface)
3) Объект Brander\CmsAdvanced\Model\Cmsadvanced - предназначен для создания страницы и её атрибутов
4) Объект Brander\CmsAdvanced\Model\Grid - предназначен для создания связанных сущностей со страницей, к примеру дополнительных оберток и их элементов - блоков
5) По определенной структуре файла cmsadvanced.xml (которая определена по схеме: Brander_CmsAdvanced:/etc/cmsadvanced.xsd , создаются новые типы страниц, а так же связанные с ними гриды и их атрибуты

1. Общее руководство по созданию новых типов страниц cmsadvanced:

Добавление любых генерируемых данных через файл cmsadvanced.xml начинается следующей структурой:
<?xml version="1.0"?>
  <cmsadvanced xmlns:xsi="http://wwpageTypeAddw.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Brander_CmsAdvanced:etc/cmsadvanced.xsd">
  <pagetypes>
  ...
  </pagetypes>
  
где - <pagetypes> - определяет типы страниц(образования конечного массива всех типов страниц)
Внутри тега <pagetypes> указываются новые типы страниц, есть два способа: 
- первый способ - добавляет новый тип страницы;
- второй способ - даёт возможность расширить существующий тип страницы

Далее по документации для удобства описания структуры страниц будет начинаться с тега <pagetypes>

1) Создание нового типа страницы cmsadvanced, начинается с определенной структуры записи в файл cmsadvanced.xml 
Пример минимальных настроек для создания нового типа страницы:
<pagetypes>
  <pageType name="redirect">
    <name>Redirect On Categories</name>
  </pageType>
</pagetypes>

где тег pageType - это ключевой тег, который говорит что это новый тип страницы, атрибут name это тип страницы(будет записан в бд);
тег name - Наименования типа страницы(отображается в админ панели) *Обязательный тег для заполнения
2) Расширение существующего типа страницы cmsadvanced:
<pagetypes>
  <pageTypeAdd name="redirect">
    <name>Redirect On Categories</name>
    ...
  </pageTypeAdd>
</pagetypes>
где тег pageTypeAdd - это ключевой тег, который позволяет расширять/обновлять существующий тип страницы
Далее все что будет написано для ключевого тега pageType - так же обязательно в применении и для pageTypeAdd
3) Минимальная структура для создания/обновления fieldset группы:
....
<pagetypes>
    <pageType name="redirect">
        <name>Redirect On Categories</name>
        <groups>
            <group name="redirect_category">
                <name>redirect_category</name>
                <config>
                    <label>Redirect On Categories</label>
                    <sortOrder>100</sortOrder>
                    <collapsible>1</collapsible>
                </config>
                <js_config>
                    <component>Magento_Ui/js/form/components/fieldset</component>
                    <collapsible>1</collapsible>
                </js_config>
            </group>
         </groups>
      </pageType>
</pagetypes>
где тег groups - говорит о том что внутри будут созданы группы fieldset; 
тег group - новый fieldset, атрибут name - имя группы обязательно для заполнения;
тег name - обязательный ВАЖНО: атрибут name тега group должен совпадать со значением тега name см. пример выше

тег config - тег для набора конфигураций fieldset - обязательный
тег label - Название fieldset(отображается в админ панели) -обязательное для заполнения
тег sortOrder - позиция fieldset - обязательное для заполнения
тег collapsible - отображение fieldset по-деволту 1-закрыто, 0-открыто

тег js_config - минимальные настройки js 
тег component - указывает какой компонент будет использован в fieldset
тег collapsible - отображение fieldset по-деволту 1-закрыто, 0-открыто

Всё описанное в этом пункте так же обязательно для pageTypeAdd

4) Добавление атрибутов в группу fieldset

<pagetypes>
    <pageType name="redirect">
        <name>Redirect On Categories</name>
        <groups>
            <group name="redirect_category">
                <name>redirect_category</name>
                <config>
                    <label>Redirect On Categories</label>
                    <sortOrder>100</sortOrder>
                    <collapsible>1</collapsible>
                </config>
                <js_config>
                    <component>Magento_Ui/js/form/components/fieldset</component>
                    <collapsible>1</collapsible>
                </js_config>
                <attributes>
                    <attribute name="redirect_category">
                        <sortOrder>1</sortOrder>
                        <config>
                            <label>Redirect to</label>
                            <sortOrder>20</sortOrder>
                        </config>
                    </attribute>
                </attributes>
            </group>
        </groups>
    </pageType>
</pagetypes>

где тег attributes - говорит о добавлении атрибутов 
тег attribute - атрибут c кодом name - обязательный атрибут тега(создаёт eav атрибут с кодом который указан в значении name)
тег sortOrder - обязательный для заполения, показывает позицию поля атрибута внутри группы fieldset

тег config - конфигурация атрибута
тег label - наименование атрибута(видимая часть) - обязательно для заполнения
тег sortOrder - обязательное для заполнения

5) Типы атрибутов группы attributes:
<attribute name="redirect_category">
    <sortOrder>1</sortOrder>
    <config>
        <component>Magento_Ui/js/form/element/select</component>
        <source>Brander\CmsAdvanced\Model\Config\Source\RedirectsCategory</source>
        <visible_in_grid>1</visible_in_grid>
        <formElement>select</formElement>
        <input>select</select>
        <label>Redirect to</label>
        <sortOrder>20</sortOrder>
    </config>
</attribute>

тег source - указывает ресур модель атрибута, если не указан берется дефолтный
тег visible_in_grid - указывает показывать значение атрибута в таблице грида ( к примеру ссылки нет смысла показывать, потому указываем 0 чтобы скрыть)
тег formElement - указывает какой шаблон в js будет использован при редактировании атрибута(select, input - по-умолчанию,wysiwyg, fileUploader, date... полный список можно посмотреть )  
тег input - указывает тип поля(для обычного поля можно не указывать) используемые типы: select, multiselect, image, editor, hidden и другие типы ui компонентов см. документацию

6) Другие типичные конфиги атрибутов(для типичных задач)
- Для загрузки изображения:
<config>
  <formElement>fileUploader</formElement>
  <type>text</type>
  <label>Image</label>
  <backend>Brander\CmsAdvanced\Model\Grid\Attribute\Backend\Image</backend>
</config>

где тег backend - это бэкенд модель для сохранения атрибута в бд

- список
<config>
  <visible_in_grid>false</visible_in_grid>
  <type>text</type>
  <label>Enable</label>
  <component>select</component>
  <input>select</input>
  <source>Brander\CmsAdvanced\Model\Config\Source\Yesno</source>
</config>

- wysiwyg редактор

<config>
  <visible_in_grid>false</visible_in_grid>
  <type>text</type>
  <label>Description</label>
  <formElement>wysiwyg</formElement>
  <input>editor</input>
  <global>false</global>
</config>

где тег global - будет подставлена модель по-умолчанию (Magento\Eav\Model\Entity\Attribute\ScopedAttributeInterface)

- Date picker
<config>
  <type>varchar</type>
  <label>Date from</label>
  <formElement>date</formElement>
  <input>date</input>
</config>

Так же есть ещё множество ui элементов, тут были описаны те которые были протестированы и работают



