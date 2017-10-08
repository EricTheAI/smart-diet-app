This is a health & fitness app that tracks your diet and give you meal plans which best fit you.



## Features

- [ ] Scan the bar code?
- [ ] Take photo and parse the Nutrition Facts panels？
- [ ] sign out?
- [ ] 通过图片诊断糖尿病患者不能吃哪些食物？
- [ ] food recommendation



## Resources

### Related Apps in Market

[GET INTO SHAPE WITH THE BEST IPHONE FITNESS APPS](https://www.digitaltrends.com/mobile/best-health-and-fitness-apps-for-iphone/)

[Lifesum – Inspiring healthy lifestyle app](https://itunes.apple.com/au/app/lifesum-inspiring-healthy-lifestyle-app/id286906691?mt=8&ign-mpt=uo%3D4)

[8fit - Fitness & Nutrition plans, health coach](https://itunes.apple.com/au/app/8fit-fitness-nutrition-plans-health-coach/id866617777?mt=8)

### Tools

[Ionic](http://ionicframework.com)

[Ionic Creator](https://creator.ionic.io/app/dashboard/projects)

### Food Recognition

[food2vec](https://altosaar.github.io/food2vec/)

[How to train your own model for CoreML](http://reza.codes/2017-07-29/how-to-train-your-own-dataset-for-coreml/)

[Mining Discriminative Components with Random Forests](https://www.vision.ee.ethz.ch/datasets_extra/food-101/static/bossard_eccv14_food-101.pdf)

[food-101-keras](https://github.com/stratospark/food-101-keras)

### Style Guide

[GitHub Flavored Markdown](https://help.github.com/articles/basic-writing-and-formatting-syntax/)







## Server

### Backend API service
We use express, a famous Node.js web framework, as our backend server, hosted on an Azure virtual machine. The backend serves as a middle man between the database and a client. Express is a minimal and flexible web framework that uses middleware to extend it's functionality, hence gives us much space to customize the structure of the application. Usually a web app basically consists of three parts, view, router, and model.
Because we only need a API server, we don't need view here. So all models are in "server/models" directory, handling interactions between server and the database. And routers in "server/routes", mapping a request from a client to an action in the server. 

### Database
We use Azure's CosmosDB to save our user data, to be specific, it's DocumentDB, a key-value document database but with SQL-like queries. We chose to use a key-value database because it's more flxible in data structures and don't have to worry about changing schemes in the demo stage. We have four types of document, which are user, userprofile, food, and record.

### Storage
Apart from DocumentDB, we also use Storage to save a large block of data like images.