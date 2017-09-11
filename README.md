## Prerequirest

- Node v8+
- Git

## Setup Exam

```
$ git clone https://github.com/thirawutp/react-exam.git
$ npm install
```

## I.  ออกแบบ UI และ Layout

![](screenshots/ui-layout.gif)

- Label
- Logo
  -  ใช้ไฟล์ logo.svg
  - ขนาดกว้าง 180px
- Whiteframe
- Text Input
  - มีขอบโค้ง 1rem
  - เมื่อมีการ Focus จะมีขอบสี #242526
- Button
  - สีของปุ่มใช้สี deepskyblue
  - มีขอบโค้ง  5px
- Tag A
  - เมื่อนำเม้าส์ Hover จะมีเส้นใต้ตัวอักษร
  - ตัวอักษรใช้สี deepskyblue
- Background
  - สีพื้นหลัง ghostwhite    


## II. UI Component & Service

Run คำสั่ง 

```
$ npm run server
```

แก้ไข Code ในข้อ 1 โดยทำการยิง Request ไปที่

 [POST] http://localhost:3000/api/login 

```json
{
  "email" : String,
  "password" : String
}
```


*** email และ password ที่ถูกต้องคือ
```json
{
  "email" : "example@appman.co.th",
  "password" : "password"
}
```

ระหว่างการรอ response จาก server ให้ทำการแสดงถึงการ wating ด้วยการ หมุนโลโก้ react โดยมี class logo-spin เตรียมไว้แล้ว

หากได้รับ http code 200 ให้แสดง Alert และแสดงข้อความว่า Login Successed

หากได้รับ http code 40x ให้แสดงผลลัพท์ดังภาพ

ทุกครั้งที่มีการ submit form ให้ทำการเคลียร์ error label

![](screenshots/login-error.png)


## III. JS & Unit Test

โดยการ Run คำสั่ง

```
$ npm run test 
```

จะต้องได้ผลลัพท์ดังนี้ 

เปิดไฟล์ /utils/index.js เพื่อทำการเขียน function 

![](screenshots/pass-test.png)


## หลักการประเมิน (100 คะแนน)

1. ออกแบบ UI & Layout
- วิธีการ render html และการ manipulate DOM (10 คะแนน)
- ความถูกต้องตามโจทย์ (15 คะแนน)
- การเขียน style CSS (5 คะแนน)

2. UI Component & Service
- การใช้งาน react component, state, props (20 คะแนน)
- การเรียกใช้ service และการ handle (10 คะแนน)

3. JS & Unit Test
- Pass 5 cases (15 คะแนน)
- Logic (15 คะแนน)
- Code style (10 คะแนน)
