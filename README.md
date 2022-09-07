### Corresponding resources
- [Blog](https://dev.to/lisahjung/part-7-set-up-the-nodejs-server-to-retrieve-api-data-and-send-the-data-to-elasticsearch-50fm)
- [Video](https://www.youtube.com/watch?v=vcQZTjhGDdY)

### Don't forget!
This project requires creating an Elastic Cloud deployment and adding the Elastic Cloud access credentials to the `config/default.json` file.

The steps on how to accomplish these tasks are outlined in the following blogs:
- [Part 3: Create an Elastic Cloud deployment](https://dev.to/lisahjung/part-3-create-an-elastic-cloud-deployment-36bn)
- [Part 4: Securely connect Node.js server to Elastic Cloud](https://dev.to/lisahjung/part-4-securely-connect-nodejs-server-to-elastic-cloud-4f22)

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
