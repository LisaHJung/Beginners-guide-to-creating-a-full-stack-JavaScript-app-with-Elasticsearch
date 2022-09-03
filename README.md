### Corresponding resources
- [Blog](https://dev.to/lisahjung/part-7-setting-up-the-server-to-handle-data-retrieval-transformation-and-ingestion-3fm7-temp-slug-2915281?preview=fe56d1c8931b38d6c355a2cbf6886ea8921b7f8990395ca99b6778096c32b3bcbc2968fc7c3d269672296406e716be244b1478c74a2c5881dd51f7a0)
- [Video](https://www.youtube.com/watch?v=vcQZTjhGDdY)

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

### Final outcome:

*Open up a new browser. Arrange the the terminal and the browser side by side as shown below.* 

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/70zrxxojdsubo8hqj01s.png)
 
*Copy and paste the following url in the address bar of your browser and hit enter:*

```javascript
//in the address bar of your browser
http://localhost:3001/ingest_data/earthquakes
```
You will see the following in the terminal acknowledging that the data is being retrieved, transformed, and ingested into Elasticsearch. You will also see that a timestamp has been prepended to the messages printed on the console! 
 
![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qcqfjxup5dlgq8c0bgbj.png)

You will also see that the message "Running Application..." is displayed on the browser.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9g3ejbuyg3zqp9d9g1j1.png)
