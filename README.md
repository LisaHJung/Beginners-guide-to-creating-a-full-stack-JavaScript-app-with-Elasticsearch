### Corresponding resources
- [Blog](https://dev.to/lisahjung/part-9-set-up-server-to-send-requests-80m-temp-slug-1808507?preview=27ba4fbceb55a21129bbeadfe949d3b9cba596bebfa335de8fd463288e3849f91e771a71a76ae47fda42a7b3bc501ae99ec035fee5e0cb5632ed6ca5)
- [Video](https://www.youtube.com/watch?v=IwBwhb0htII)

### Don't forget!
This project requires creating an Elastic Cloud deployment and adding the Elastic Cloud access credentials to the `config/default.json` file.

The steps on how to accomplish these tasks are outlined in the blogs:
- [Part 3: Create an Elastic Cloud deployment](https://dev.to/lisahjung/part-3-securely-connect-elasticsearch-service-to-nodejs-server-30ah-temp-slug-1884353?preview=258b54384c37640f7abbefedc09bfb1016f209b2d70b1311ec7e294058c0001229a9f32abc40994e7152ed7723799280dd56e1292195135742beeb76)
- [Part 4: Securely connect Node.js server to Elastic Cloud](https://dev.to/lisahjung/part-4-securely-connect-elasticsearch-service-to-nodejs-server-57gf-temp-slug-3638718?preview=6f362540fad022b443b642dd896eef4792483f0757e7ef8a39d5ac600fbcaeaf3b1389c7a0398cd8ebb0d6926ba20af930f6a9f5703a3ce5d7bde8bd)

:sparkles:**When running this project, be sure to update the `config/default.json` file with your access credentials before running the project!**:sparkles:!

### Start the server

Execute these commands in the terminal in the following order. 
```javascript
//in the project directory
npm install
npm start
```

### Start the client

Execute these commands *in a new terminal* in the following order. 
```javascript
//in the project directory
cd client
npm install
npm start
```
:sparkles:**The recommended browser for this project is Google Chrome.**:sparkles: 

### Final outcome:

The browser will display the client.
When you click on each select option, it will render the corresponding drop down menu. It will also display a form where a user can type in the location of interest. 

![ezgif com-gif-maker (5)](https://user-images.githubusercontent.com/60980933/169545964-9c84ea5f-94f7-47cb-9ba8-64b5973a0b6a.gif)

If Elasticsearch contains the documents you are looking for, you will see the search results displayed in the form of cards. 

![image](https://user-images.githubusercontent.com/60980933/187599185-f54a7a85-9f0f-4a65-8f71-3e49d9d99204.png)

If Elasticsearch does not have the documents you seek, you will see the following message displayed on the page. 
![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/c5jue7px2gazhkts7qt0.png)
