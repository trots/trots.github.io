---

title: "Как загрузить код проекта на GitHub"
date: 2022-01-07 16:36:53 -0000
tags: 
  - github
  - git
  - vcs
categories:
  - Начинающим
header:
  overlay_image: /assets/images/load-code-on-github/8xDUNxLvQ.png
  overlay_filter: rgba(0, 0, 0, 0.8)
tagline: "Рассмотрим несколько способов загрузки исходного кода проекта на GitHub"

---

Уровень: новичок.

База: [системы контроля версий](https://www.google.com/search?q=%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B+%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D1%8F+%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D0%B9), [распределенная система контроля версий git](https://www.google.com/search?q=%D1%80%D0%B0%D1%81%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F+%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0+%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D1%8F+%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D0%B9+git).

## Создание пустого репозитория GitHub

Пусть есть проект с исходным кодом, состоящим из одного файла `main.py`. Загрузим его в репозиторий GitHub.

![Файл main.py проекта в папке MyProject в Проводнике Windows](/assets/images/load-code-on-github/8xDUNxLvQ.png)

Переходим на сайт [https://github.com](https://github.com). Регистрируемся, если не зарегистрированы, и входим в свой аккаунт. На главной странице GitHub нажимаем кнопку "New" для создания нового репозитория.

![Кнопка New на главной странице GitHub для создания нового репозитория](/assets/images/load-code-on-github/8B0_tAHfS.png)

На открывшейся странице вводим название репозитория. Название должно отражать суть проекта.

![Форма создания нового репозитория GitHub с полем ввода названия MyProject](/assets/images/load-code-on-github/0kmfl6Ejo.png)

Нажимаем кнопку "Create repository" для завершения создания нового репозитория.

![Кнопка Create repository внизу формы создания репозитория на GitHub](/assets/images/load-code-on-github/kAwJ4ZcwGs.png)

Пустой репозиторий GitHub создан. Теперь загрузим сюда код нашего проекта. Сделать это можно разными способами. Рассмотрим несколько из них.

> Не нужно загружать в репозиторий производные файлы проекта. Это те файлы, которые генерируются тем или иным образом из исходного кода. Например, это файлы сборки (вроде Makefile), файлы редактора кода (IDE) и т.п.


## Загрузка проекта через веб-интерфейс GitHub

Загрузить проект средствами GitHub проще и быстрее всего. Этот вариант хорошо подходит в случаях, когда нужно просто сохранить проект, чтобы не потерять или поделиться им. Открываем страницу проекта и нажимаем ссылку "uploading an existing file".

![Ссылка uploading an existing file на странице пустого репозитория GitHub](/assets/images/load-code-on-github/jL_uQ82uU.png)

Далее в открывшееся окно можно либо перетащить файлы, либо указать их через диалоговое окно по ссылке "choose your files".

![Окно загрузки файлов на GitHub со ссылкой choose your files](/assets/images/load-code-on-github/8IRw7C5T2.png)

Выбираем файлы (или папки, если есть) проекта и жмем "Открыть". 

![Диалог выбора файла main.py с кнопкой Открыть](/assets/images/load-code-on-github/thwqiMV-e.png)

Выбранные файлы отобразятся в интерфейсе.

![Выбранный файл main.py в списке загружаемых файлов на GitHub перед коммитом](/assets/images/load-code-on-github/cwJVv_1q9m.png)

После загрузки всех файлов проекта, изменения нужно зафиксировать в репозитории. Иначе говоря, сделать коммит (от англ. commit). Нажимаем на кнопку "Commit changes" внизу страницы. При желании можно изменить автоматическое сообщение коммита "Add files via upload" на что-то свое. Например, "Первая версия проекта".

![Кнопка Commit changes для фиксации загруженного файла main.py в репозитории GitHub](/assets/images/load-code-on-github/fC7Occe_G.png)

После некоторого ожидания загрузки, мы увидим страницу нашего репозитория с файлом проекта.

![Страница репозитория MyProject на GitHub с загруженным файлом main.py](/assets/images/load-code-on-github/tDWkrsCSO.png)


## Загрузка проекта через интерфейс командной строки git

Этот способ немного сложнее предыдущего и потребует навыков работы с командной строкой. Для начала работы нам нужно установить Git на свой компьютер. Переходим на сайт [git-scm.com](https://git-scm.com/) и скачиваем нужный установщик. Во время установки можно следовать рекомендуемым параметрам мастера установки.

![Сайт git-scm.com с кнопкой Download for Windows для скачивания установщика Git](/assets/images/load-code-on-github/smCKS0KG6.png)

На странице проекта переключаемся на ссылку "HTTPS" и далее будем следовать инструкциям из первого блока (команды можно копировать прямо из него ).

![Переключение на вкладку HTTPS со списком git-команд для загрузки проекта на странице репозитория GitHub](/assets/images/load-code-on-github/Q97CNXuKR.png)

Запускаем консоль командной строки. В Windows ее можно найти в меню Пуск через поиск. И переходим в папку с проектом командой `cd`.

![Переход в папку проекта MyProject командой cd в консоли Windows](/assets/images/load-code-on-github/VU2BWzk0d.png)

Инициализируем пустой локальный репозиторий командой `git init`.

![Инициализация локального репозитория командой git init в консоли](/assets/images/load-code-on-github/jx2nAlLVn.png)

Добавляем в локальный репозиторий файлы проекта командой `git add`.

![Добавление файла main.py в индекс командой git add в консоли](/assets/images/load-code-on-github/P59Tmr3wU.png)

Фиксируем добавленные в репозиторий файлы командой `git commit`.

![Фиксация файла коммитом с сообщением "first commit" командой git commit в консоли](/assets/images/load-code-on-github/yGPz994Nc.png)

Переименуем главную ветку проекта в `main`.

![Переименование главной ветки в main командой git branch -M main в консоли](/assets/images/load-code-on-github/O9VoomtKw.png)

Добавим созданный ранее репозиторий GitHub как удаленный репозиторий для нашего проекта. Не забудьте подставить свою ссылку в команде.

![Добавление удаленного репозитория origin командой git remote add в консоли](/assets/images/load-code-on-github/Lu5KlWkvgX.png)

Отправляем наш локальный репозиторий в GitHub командой `git push -u origin main`. Здесь git может запросить учетные данные пользователя GitHub - вводим свои логин и пароль.

![Отправка локального репозитория на GitHub командой git push -u origin main в консоли](/assets/images/load-code-on-github/lAYeiG-jc.png)

Теперь заходим на страницу проекта в GitHub и видим наш репозиторий с файлом проекта. Если страница уже была открыта, ее нужно обновить.

![Страница репозитория MyProject на GitHub с файлом main.py, загруженным через git push](/assets/images/load-code-on-github/Ss7Jfgm_K.png)


## Загрузка проекта с помощью TortoiseGit

TortoiseGit - это графическая оболочка git для Windows с множеством приложений, облегчающих работу с системой контроля версий. Для начала работы с TortoiseGit, нужно установить сам git как это указано в начале предыдущего раздела. После этого [скачиваем установщик TortoiseGit](https://tortoisegit.org/) с официального сайта и устанавливаем программу, следуя указаниям мастера установки.

![Официальный сайт tortoisegit.org с кнопкой Download для скачивания установщика](/assets/images/load-code-on-github/A6ySyow7W.png)

Переходим в Проводнике в папку с проектом и вызываем контекстное меню на свободном месте. В меню выбираем пункт "Git Create repository here..." для начала инициализации репозитория.

![Пункт контекстного меню Git Create repository here в Проводнике для инициализации репозитория](/assets/images/load-code-on-github/XBKszZS0t.png)

В появившемся окне просто жмем "Ок". Создавать чистый репозиторий нам не нужно.

![Диалог Git Init TortoiseGit с невыбранной опцией Make it Bare и кнопкой OK](/assets/images/load-code-on-github/GkmRxa.png)

Получаем сообщение, что пустой репозиторий инициализирован. Жмем "Ок".

![Сообщение TortoiseGit "Initialized empty Git repository in D:\MyProject"](/assets/images/load-code-on-github/FeOegL1or.png)

Теперь добавим в репозиторий файлы нашего проекта. В папке репозитория переходим в контекстное меню "TortoiseGit -> Add...".

![Пункт Add в контекстном меню TortoiseGit для добавления файлов в репозиторий](/assets/images/load-code-on-github/WY6SRV66R.png)

В открывшемся окне ставим галочки напротив файлов, которые мы хотим добавить в репозиторий. Жмем "Ок".

![Диалог Add TortoiseGit со списком файлов и отмеченной галочкой main.py](/assets/images/load-code-on-github/vjToVvuDv.png)

Следующим окном TortoiseGit информирует нас, что все выбранные файлы добавлены в репозиторий. Нажимаем кнопку "Commit...", чтобы зафиксировать внесенные файлы в репозитории или, другими словами, сделать коммит.

![Окно Add Finished TortoiseGit с кнопкой Commit для перехода к фиксации файла](/assets/images/load-code-on-github/6zPxDRKgY.png)

Обязательно набираем сообщение коммита, например, "Добавление первой версии проекта" и жмем кнопку "Commit".

![Диалог Commit TortoiseGit с введенным сообщением "Добавление первой версии проекта"](/assets/images/load-code-on-github/jEuRgq140.png)

Дожидаемся успешного завершения коммита и закрываем окно.

![Окно Git Command Progress TortoiseGit с успешным завершением коммита и кнопкой Close](/assets/images/load-code-on-github/cNLl2eLVu.png)

Переименуем основную ветку репозитория в "main". Переходим в контекстное меню "TortoiseGit -> Browse References" в папке проекта.

![Пункт Browse References в контекстном меню TortoiseGit](/assets/images/load-code-on-github/gOK8JZzJd.png)

В открывшемся окне вызываем контекстное меню для основной ветки, жмем "Rename" и вводим новое имя ветки "main". Закрываем диалог по кнопке "Ок".

![Диалог Browse references TortoiseGit с контекстным меню Rename для основной ветки](/assets/images/load-code-on-github/NUof3ftsE.png)

Укажем созданный репозиторий на GitHub как удаленный репозиторий для нашего проекта. Предварительно на странице проекта на GitHub переключаемся на ссылку "HTTPS" и копируем ее.

![Копирование ссылки HTTPS репозитория MyProject со страницы GitHub](/assets/images/load-code-on-github/PBJ6v6bNw.png)

Переходим в настройки репозитория через контекстное меню "TortoiseGit -> Settings..." в папке проекта.

![Пункт Settings в контекстном меню TortoiseGit для перехода в настройки репозитория](/assets/images/load-code-on-github/JL1zZQfAa.png)

В разделе настроек "Remote" вводим имя удаленного репозитория как "origin" и в поле "URL:" вставляем ссылку репозитория на GitHub. Нажимаем кнопку "Add New/Save" для добавления репозитория в список.

![Раздел настроек Remote TortoiseGit с именем origin, URL репозитория и кнопкой Add New/Save](/assets/images/load-code-on-github/1b7QWgsik.png)

В появившемся запросе можем смело нажать "Нет". Все равно никаких веток в нашем репозитории на GitHub еще не существует.

![Запрос TortoiseGit "Do you want to fetch remote branches from the newly added remote?" с ответом Нет](/assets/images/load-code-on-github/7lsUeSo9o.png)

Удаленный репозиторий origin добавлен. Закрываем окно настроек по кнопке "Ок".

![Добавленный удаленный репозиторий origin в настройках TortoiseGit с кнопкой ОК](/assets/images/load-code-on-github/hU2LLhb8vA.png)

И, наконец, отправим наш проект в репозиторий GitHub. Вызываем окно "Push" через контекстное меню "TortoiseGit -> Push..." в папке проекта.

![Пункт Push в контекстном меню TortoiseGit для отправки проекта на GitHub](/assets/images/load-code-on-github/MMXyTbKFa.png)

В окне "Push" обязательно ставим галочку "Set upstream/track remote branch", чтобы наша локальная ветка на компьютере привязалась к своей удаленной копии на GitHub. Нажимаем "Ок" и ждем окончания процесса отправки проекта.

![Диалог Push TortoiseGit с отмеченной галочкой Set upstream/track remote branch](/assets/images/load-code-on-github/EulEnbXQP.png)

Проект успешно отправлен на GitHub. Закрываем окно.

![Окно Git Command Progress TortoiseGit с успешным завершением push и кнопкой Close](/assets/images/load-code-on-github/An2DecSIL.png)

Теперь заходим на страницу проекта в GitHub и видим наш репозиторий с файлом проекта. Если страница уже была открыта, ее нужно обновить.

![Страница репозитория MyProject на GitHub с файлом main.py, загруженным через TortoiseGit](/assets/images/load-code-on-github/yFt2k4cdCH.png)
