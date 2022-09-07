### Corresponding resources
- [Blog](https://dev.to/lisahjung/part-4-securely-connect-nodejs-server-to-elastic-cloud-4f22)
- [Video](https://www.youtube.com/watch?v=ezrx6rPrScI)

### Don't forget!
This project requires creating an Elastic Cloud deployment and adding the Elastic Cloud access credentials to the `config/default.json` file.

The steps on how to accomplish these tasks are outlined in the following blogs:
- [Part 3: Create an Elastic Cloud deployment](https://dev.to/lisahjung/part-3-create-an-elastic-cloud-deployment-36bn)
- [Part 4: Securely connect Node.js server to Elastic Cloud](https://dev.to/lisahjung/part-4-securely-connect-nodejs-server-to-elastic-cloud-4f22)

:sparkles:**When running this project, be sure to update the `config/default.json` file with your access credentials before running the project!**:sparkles:

### Start the server

Execute these commands in the terminal in the following order. 
```javascript
//in the project directory
npm install
npm start
```
### Final outcome:

The server is connected to Elasticsearch via basic authentication!
![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/c28mzs6jogmf87cfmfrj.png)
