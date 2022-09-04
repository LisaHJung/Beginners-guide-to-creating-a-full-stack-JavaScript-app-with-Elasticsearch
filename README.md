### Corresponding resources
- [Blog](https://dev.to/lisahjung/part-4-securely-connect-elasticsearch-service-to-nodejs-server-57gf-temp-slug-3638718?preview=6f362540fad022b443b642dd896eef4792483f0757e7ef8a39d5ac600fbcaeaf3b1389c7a0398cd8ebb0d6926ba20af930f6a9f5703a3ce5d7bde8bd)
- [Video](https://www.youtube.com/watch?v=ezrx6rPrScI)

### Don't forget!
This project requires creating an Elastic Cloud deployment and adding the Elastic Cloud access credentials to the `config/default.json` file.

The steps on how to accomplish these tasks are outlined in the following blogs:
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

### Generate an API key

Execute the following command in the terminal.
```javascript
//in project directory
node server/create-api-key.js
```

### Final outcome:

The server is connected to Elasticsearch via API key!
![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nxudjfndppdhr33zdy4y.png)
