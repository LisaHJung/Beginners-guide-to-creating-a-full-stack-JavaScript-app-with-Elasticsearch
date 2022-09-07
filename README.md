# Beginner's guide to building a full stack JavaScript web app with Elasticsearch

Welcome to season 2 of Mini Beginner's Crash Course to Elasticsearch and Kibana.

In this series, we will be building a full stack app(Node.js & React) that enables users to search for earthquake data stored in Elasticsearch!

![image](https://media.giphy.com/media/MVcpZ83Nwb2iICeUTD/giphy.gif)

## Two Ways to Learn
We all have preferred method of learning so choose the format that works for you:

**1. [Video format](https://ela.st/mini-beginners-crash-course)(YouTube playlist)**

Season 2 video titles start with S2 and has a thumbnail background similar to the following!
<img width="817" alt="image" src="https://user-images.githubusercontent.com/60980933/188253792-bccb5137-a7e3-462f-88b8-e7314b3660dd.png">

**2. [Blog format](https://dev.to/lisahjung/beginners-guide-to-building-a-full-stack-app-nodejs-react-with-elasticsearch-5347) (Dev.to)**

## How to use this repo
This repo contains multiple branches that serve as complementary resource to season 2 YouTube episode/blog.

- [main (final product)](https://github.com/LisaHJung/beginners-guide-to-creating-a-full-stack-Javascript-app-with-Elasticsearch/tree/main)
- [1-build-a-server](https://github.com/LisaHJung/beginners-guide-to-creating-a-full-stack-Javascript-app-with-Elasticsearch/tree/1-build-a-server)
- [2-connect-server-to-Elastic-Cloud-via-basic-authentication](https://github.com/LisaHJung/beginners-guide-to-creating-a-full-stack-Javascript-app-with-Elasticsearch/tree/2-connect-server-to-Elastic-Cloud-via-basic-authentication)
- [3-connect-server-to-Elastic-Cloud-via-apiKey](https://github.com/LisaHJung/beginners-guide-to-creating-a-full-stack-Javascript-app-with-Elasticsearch/tree/3-connect-server-to-Elastic-Cloud-via-apiKey)
- [4-retrieve_and_ingest_data](https://github.com/LisaHJung/beginners-guide-to-creating-a-full-stack-Javascript-app-with-Elasticsearch/tree/4-retrieve_and_ingest_data)
- [5-build_the_client](https://github.com/LisaHJung/beginners-guide-to-creating-a-full-stack-JavaScript-app-with-Elasticsearch/tree/5-build_the_client)
- [6-manage_elasticsearch_request](https://github.com/LisaHJung/beginners-guide-to-creating-a-full-stack-Javascript-app-with-Elasticsearch/tree/6-manage_elasticsearch_request)

:sparkles:**Follow the YouTube episodes/blogs in sequential order and use this repo as a supplementary resource. The videos/blogs contain the link to the corresponding repo branch.**:sparkles:

## Running the App locally
If you wish to download the project, follow these instructions.

### Downloading the repo
Go to the page of the branch you wish to download.

Click on the `Code` button(blue box) to display the drop down menu. 

<img width="1327" alt="image" src="https://user-images.githubusercontent.com/60980933/184769135-25c906df-3382-44bf-be0c-68222b79b79a.png">

Click on the `Download Zip` option(red box).

Once the code is downloaded, double click on the file to unzip it. 

Move the unzipped file to your desired location.

I recommend that you change the name to something shorter as the downloaded project will have the following name:

*beginners-guide-to-creating-a-full-stack-JavaScript-app-with-Elasticsearch-name-of-the-branch.zip*

Cd into the project directory.

:sparkles:**Depending on which episode/blog/branch you are working on, the corresponding repo will contain only the server side code or both the server and client side code.**:sparkles:

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

### Don't forget!
This project requires creating an Elastic Cloud deployment and adding the Elastic Cloud access credentials to the `config/default.json` file.

The steps on how to accomplish these tasks are outlined in the following blogs:
- [Part 3: Create an Elastic Cloud deployment](https://dev.to/lisahjung/part-3-create-an-elastic-cloud-deployment-36bn)
- [Part 4: Securely connect Node.js server to Elastic Cloud](https://dev.to/lisahjung/part-4-securely-connect-nodejs-server-to-elastic-cloud-4f22)

:sparkles:**When running the project from branches 2-6, be sure to update the `config/default.json` file with your access credentials before running the project!**:sparkles:
