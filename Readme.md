##Установка на Windows
1. Docker 
    - скачать установщик со страницы https://docs.docker.com/docker-for-windows/install/
    - установить Wsl https://docs.microsoft.com/ru-ru/windows/wsl/install-win10#step-4---download-the-linux-kernel-update-package
2. Node Js
    - скачать установщик со страницы https://nodejs.org/en/download/
    - установить

##Сборка проекта
1. Авторизация в docker registry 
   - создать персональный токен https://gitlab.com/-/profile/personal_access_tokens с опциями read_registry и write_registry
   - docker login registry.gitlab.com/club-map/ -u [login] -p [Personal Access Tokens]
2. Сборка проекта в docker образах
   - buildImage.bat
3. Пуш собранных докер обзразов
   - pushImage.bat
   
##Запуск проекта
1. Старт проекта
   - up-dev.bat
   Фронетенд доступен по адресу http://localhost/
   Бэкенд доступен по адресу http://localhost:8080/
2. Остановка прокат
   - down-dev.bat
   
