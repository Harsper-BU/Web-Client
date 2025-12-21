# 새로운 환경 테스트 방법
## 1. Nginx 설치
```
sudo apt update
sudo apt install -y nginx
sudo systemctl enable --now nginx
```
<hr/>

## 2. 빌드된 dist 파일 복사
```
sudo mkdir -p /var/www/web
sudo rm -rf /var/www/web/*
sudo cp -r dist/* /var/www/web/
sudo chown -R www-data:www-data /var/www/web
```
최종 구조는 아래와 같습니다.
```
/var/www/web/index.html
/var/www/web/assets/...
```
<hr/>

## 3. Nginx 설정
설정 파일 생성
```
sudo nano /etc/nginx/sites-available/web-client
```
아래 설정 값 붙여넣기
```
server {
    listen 80;
    server_name _;

    root /var/www/web;
    index index.html;

    client_max_body_size 100M;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```
기본 설정 끄고, 새로운 것으로 연결
```
sudo rm -f /etc/nginx/sites-enabled/default
sudo ln -s /etc/nginx/sites-available/web-client /etc/nginx/sites-enabled/web-client
```
nginx 문법 테스트
```
sudo nginx -t
```
재시작하여 설정 적용
```
sudo systemctl restart nginx
```

## 4. 사이트 접속 테스트
```
http://localhost
```
