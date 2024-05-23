# GUIDE

_Đảm bảo NodeJS 18.x.x đã được cài_

## Database

- tạo database (MySQL) có tên kitty_shop (có thể tự đặt)

- vào file .env trong folder backend sửa lại theo đúng thông tin DB:

```
 PORT=8000
 DB_HOST=localhost
 DB_USER=root
 DB_PASS=root
 DB_NAME=kitty_shop
 URL_REACT=http://localhost:3000
```

- restore database bằng file database/kitty-shop.sql

## Run Backend

- `cd backend`
- `npm install`
- `npm start`

-> sau đó mỗi lần chạy chỉ cần chạy `npm start` là xong

## Run Frondend

- `cd frontend`
- `npm install`
- `npm start`

-> sau đó mỗi lần chạy chỉ cần chạy `npm start` là xong
-> localhost:3000 sẽ tự động được bật trên browser
