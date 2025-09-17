---

title: "Как разбить проект CMake на подпроекты"
tagline: "Разделяем на подпроекты существующий проект C++ на CMake"
date: 2025-04-22 06:00:44 -0000
tags:
    - cpp
    - cmake
categories:
    - Начинающим
header:
    overlay_image: /assets/images/cmake-submodule/teaser.png
    overlay_filter: rgba(0, 0, 0, 0.8)

---

В этой статье мы разберём одну из ключевых возможностей CMake — команду [`add_subdirectory`](https://cmake.org/cmake/help/latest/command/add_subdirectory.html). Это инструмент, который помогает структурировать код в больших проектах, разделяя его на логические части.

Конечно можно организовать весь проект в одном файле `CMakeLists.txt`. Но со временем он станет большим и сложным для поддержки. Гораздо удобнее разбить проект на модули: например, отдельно библиотека, отдельно тесты, отдельно основное приложение. Вот здесь и пригодится [`add_subdirectory`](https://cmake.org/cmake/help/latest/command/add_subdirectory.html). Эта команда позволяет подключать подпроекты к основному проекту. В каком-то смысле это как `#include` в C++, только для сборки проекта.

Видео-версия текста статьи: 
- <i class="fab fa-youtube" aria-hidden="true"></i> [YouTube](https://youtu.be/icdzH7QqQW0)
- <i class="fab fa-vk" aria-hidden="true"></i>[VKVideo](https://vk.com/video-228420545_456239024)

# Структура исходного проекта

Итак, у нас есть проект C++ на CMake, который реализует простую программу - сложение двух чисел. Но интересует нас здесь не назначение программы, а структура ее проекта. Сейчас это выглядит так:

```bash
project/  
├── CMakeLists.txt  (главный файл)  
├── main.cpp        (код программы)  
├── math_utils.cpp  (код утилиты)  
└── math_utils.h    (заголовочный файл)
```

Здесь у нас есть один файл проекта `CMakeLists.txt`, главный файл программы `main.cpp` и отдельный модуль с математикой, состоящий из заголовочного файла `math_utils.h` и файла исходного кода `math_utils.cpp`.

Приведу исходный код проекта:

* `CMakeLists.txt`
    
    ```makefile
    cmake_minimum_required(VERSION 3.5)
    project(subdirs_example)
    
    add_executable(subdirs_example main.cpp math_utils.cpp math_utils.h)
    ```
    
* `main.cpp`
    
    ```cpp
    #include <iostream>
    
    #include "math_utils.h"
    
    int main() 
    {
      std::cout << "2 + 3 = " << add(2, 3) << std::endl;
      return 0;
    }
    ```
    
* `math_utils.h`
    
    ```cpp
    #pragma once
    
    int add(int a, int b);
    ```
    
* `math_utils.cpp`
    
    ```cpp
    #include "math_utils.h"
    
    int add(int a, int b)
    {
      return a + b;
    }
    ```
    

# Схема разбиения проекта на подпроекты

Теперь превратим “плоскую” структуру исходного проекта в проект с двумя подпроектами: библиотекой и основным приложением.

Целевая структура проекта будет соответствовать схеме ниже.

```bash
project/  
├── CMakeLists.txt        (главный файл)  
├── app/  
│   ├── CMakeLists.txt    (приложение)  
│   └── main.cpp          (код программы)  
└── lib/  
    ├── CMakeLists.txt    (библиотека)  
    └── math_utils.cpp    (код библиотеки)  
    └── math_utils.h      (заголовок)
```

Библиотеку мы разместим в папке `lib` и перенесем в нее математическую функцию `math_utils`, а основное приложение разместим в папке `app`.

# Реализация разбиения проекта на подпроекты

## Подпроект библиотеки “lib”

Создадим папку lib в корне проекта и перенесем в нее два файла математического модуля `math_utils.h` и `math_utils.cpp`, не изменяя их содержимое.

Но перенести файлы не достаточно. Нам нужно создать новый файл подпроекта `CMakeLists.txt` внутри папки `lib`. Файл подпроекта должен включать определение цели сборки типа “библиотека”. Делается это с помощью вызова команды [`add_library`](https://cmake.org/cmake/help/latest/command/add_library.html).

`lib/CMakeLists.txt`:

```makefile
add_library(MathUtils STATIC math_utils.cpp math_utils.h)
```

## Подпроект основного приложения “app”

Создадим папку app в корне проекта и перенесем в нее файл `main.cpp`.

Как и в случае с библиотекой, создадим новый файл подпроекта `CMakeLists.txt` внутри папки `app`. Файл проекта должен включать не только определение цели сборки исполняемого файла, но и обозначать связь с используемой им библиотекой. Достигается это с помощью команды [`target_link_libraries`](https://cmake.org/cmake/help/latest/command/target_link_libraries.html), где мы должны указать к какому приложению (цель `App`) нужно подключить библиотеку (цель `MathUtils`).

`app/CMakeLists.txt`:

```makefile
add_executable(App main.cpp)

target_link_libraries(App PRIVATE MathUtils)
```

## Главный файл проекта

Наконец, нам остается изменить исходный файл проекта `CMakeLists.txt` таким образом, чтобы он подключал вложенные подпроекты. Как раз здесь мы подходим к команде [`add_subdirectory`](https://cmake.org/cmake/help/latest/command/add_subdirectory.html), в которой указываем имена подключаемых директорий. По этим именам CMake сам найдет вложенные файлы подпроектов.

`CMakeLists.txt`:

```makefile
cmake_minimum_required(VERSION 3.5)
project(subdirs_example)

add_subdirectory(lib)
add_subdirectory(app)
```

# Сборка проекта

Переходим к сборке проекта.

При сборке CMake создает отдельные сборочные папки для каждого подпроекта и размещает собранные элементы внутри этих папок.

Например, CMake с компилятором MSVC создает такую структуру папок:

![](/assets/images/cmake-submodule/5d0a38bf-6ac8-4eab-bddc-cd8eac11fd4a.png)

Внутри папки `lib` размещается файл с собранной статической библиотекой `MathUtils.lib`:

![](/assets/images/cmake-submodule/38bef119-20de-427a-890e-11c8316eef13.png)

Внутри папки app размещается файл с финальным исполняемым файлом `App.exe`, внутрь которого уже вкомпилирована упомянутая библиотека:

![](/assets/images/cmake-submodule/856495c1-84e6-4bb7-88e1-de5ac6d4785b.png)

# Вывод

С помощью команды [`add_subdirectory`](https://cmake.org/cmake/help/latest/command/add_subdirectory.html) мы создали два подпроекта с приложением и библиотекой. Если рассматривать большие проекты, то там все организуется примерно так же, только в большем масштабе. Подпроектов, во-первых, бывает гораздо больше, а во-вторых, они могут еще и многократно вкладываться друг в друга. Например, может быть групповой подпроект с юнит-тестами, внутри которого будут находиться подпроекты самих тестов. Да и сами библиотеки тоже могут состоять из подпроектов. Структуры получаются самые разные.

Изучайте и пробуйте.

---

- <i class="fab fa-telegram" aria-hidden="true"></i> [Обсудить в Телеграм](https://t.me/mediocre_developer/275){:target="_blank"}
- <i class="fab fa-youtube" aria-hidden="true"></i> [Обсудить в YouTube](https://youtu.be/icdzH7QqQW0){:target="_blank"}
- <i class="fab fa-vk" aria-hidden="true"></i>[Обсудить в VK](https://vk.com/video-228420545_456239024){:target="_blank"}

---
