# Тестовый проект Marvel
Проект использует открытый API от компании Marvel, для демонстрации героев коммиксов
## Реализация проекта
Проект реализован на JS, с использованием библиотеки React

## Основные моменты
<ol>
<li> Использование системных хуков useCallback, useState, useRef
<li> Реализация пользовательского хука useHttp
<li> Написание сервиса на основе хука useHttp
</ol>

## Установка, развертывание и запуск
<ol>
<li> Установка Node.js через пакет nvm, для чего скачиваем: https://github.com/coreybutler/nvm-windows#installation--upgrades
<li>Скачиваем последний выпуск файла nvm-setup.zip.
<li>После скачивания откройте ZIP-файл, а затем запустите файл nvm-setup.exe.
<li>Cледуем указаям мастера установки Setup-NVM-for-Windows, который поможет выполнить все этапы установки, в том числе выбрать каталог, в котором будут установлены репозиторий nvm-windows и Node.js.
<pre>
    $ nvm list available
    $ nvm install latest
    $ nvm ls
    $ nvm use version
</pre>
<li>Далее React приложение
<pre>
 npm install
 npm start
</pre> </i>
</ol>
<a href="https://dvorobiev1968.github.io/marvel/">Marvel project</a>
