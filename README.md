### Corresponding resources
- [Blog](https://dev.to/lisahjung/part-8-create-the-frontend-h5e-temp-slug-8044851?preview=d8cf5496a0340a767b704f25fac2efe652320d339abd8276b40699470070ee3a093a4ebaa75343475443e0f4cee104516370cfbf063d680db0f650a0)
- [Video](https://www.youtube.com/watch?v=53071vyu7UY)

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
