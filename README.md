# Beginner's guide to building a full stack JavaScript web app with Elasticsearch

Welcome to season 2 of Mini Beginner's Crash Course to Elasticsearch and Kibana.

In this series, we will be building a full stack app(Node.js & React) where users can search for earthquake data stored in Elasticsearch!

![image](https://media.giphy.com/media/MVcpZ83Nwb2iICeUTD/giphy.gif)

## Two Ways to Learn
We all have preferred method of learning so choose the format that works for you:

**1. [Video format]()(YouTube playlist)**

**2. [Blog format](https://dev.to/lisahjung/beginners-guide-to-building-a-full-stack-appnodejsreact-with-elasticsearch-2o5j-temp-slug-1991233?preview=63b623ad98660c9aef77e65a1a0e615e08a34a446e07bdad78c382ea5ac3f4b554b77514786031e1bb67701a633d55735a8cf5ff1c6220fc71b302f9) (Dev.to)**

## How to use this repo
This repo contains multiple branches that serve as complementary resource to season 2 YouTube episode/blog.

- [main (final product)](https://github.com/LisaHJung/beginners-guide-to-creating-a-full-stack-Javascript-app-with-Elasticsearch/tree/main)
- [1-build-a-server](https://github.com/LisaHJung/beginners-guide-to-creating-a-full-stack-Javascript-app-with-Elasticsearch/tree/1-build-a-server)
- [2-connect-server-to-Elastic-Cloud-via-basic-authentication](https://github.com/LisaHJung/beginners-guide-to-creating-a-full-stack-Javascript-app-with-Elasticsearch/tree/2-connect-server-to-Elastic-Cloud-via-basic-authentication)
- [3-connect-server-to-Elastic-Cloud-via-apiKey](https://github.com/LisaHJung/beginners-guide-to-creating-a-full-stack-Javascript-app-with-Elasticsearch/tree/3-connect-server-to-Elastic-Cloud-via-apiKey)
- [4-retrieve_and_ingest_data](https://github.com/LisaHJung/beginners-guide-to-creating-a-full-stack-Javascript-app-with-Elasticsearch/tree/4-retrieve_and_ingest_data)
- [5-build_the_client](https://github.com/LisaHJung/beginners-guide-to-creating-a-full-stack-Javascript-app-with-Elasticsearch/tree/5-build_the_client)
- [6-manage_elasticsearch_request](https://github.com/LisaHJung/beginners-guide-to-creating-a-full-stack-Javascript-app-with-Elasticsearch/tree/6-manage_elasticsearch_request)

:sparkles:**Follow the YouTube episodes/blogs in sequential order and use this repo as a supplementary resource. The videos/blogs contain the link to the corresponding repo branch.**:sparkles:

## Running the App locally
:sparkles:**I highly recommend that you follow the tutorials and build your own app in your local environment instead of downloading the project. Our team is not able to provide support troubleshooting npm issues that arise with the downloaded/cloned projects.** :sparkles:

If you wish to download the project, follow these instructions.

### Downloading the repo
Go to the page of the branch you wish to download.

Click on the `Code` button(blue box) to display the drop down menu. 

<img width="1327" alt="image" src="https://user-images.githubusercontent.com/60980933/184769135-25c906df-3382-44bf-be0c-68222b79b79a.png">

Click on the `Download Zip` option(red box).

Once the code is downloaded, double click on the file to unzip it. 

Move the unzipped file to your desired location.

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
### Don't forget!
This project requires creating an Elastic Cloud deployment and adding the Elastic Cloud access credentials to the `config/default.json` file.

The steps on how to accomplish these tasks are outlined in the blogs:
- [Part 3: Create an Elastic Cloud deployment](https://dev.to/lisahjung/part-3-securely-connect-elasticsearch-service-to-nodejs-server-30ah-temp-slug-1884353?preview=258b54384c37640f7abbefedc09bfb1016f209b2d70b1311ec7e294058c0001229a9f32abc40994e7152ed7723799280dd56e1292195135742beeb76)
- [Part 4: Securely connect Node.js server to Elastic Cloud](https://dev.to/lisahjung/part-4-securely-connect-elasticsearch-service-to-nodejs-server-57gf-temp-slug-3638718?preview=6f362540fad022b443b642dd896eef4792483f0757e7ef8a39d5ac600fbcaeaf3b1389c7a0398cd8ebb0d6926ba20af930f6a9f5703a3ce5d7bde8bd)

:sparkles:**When running the project from branches 2-6, be sure to update the `config/default.json` file with your access credentials before running the project!**:sparkles:
