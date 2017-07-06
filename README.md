= Sample Application image:https://travis-ci.org/oasp/oasp4js.svg?branch=development["Build Status",link="https://travis-ci.org/oasp/oasp4js"] image:https://coveralls.io/repos/oasp/oasp4js/badge.svg?branch=development["Coverage Status",link="https://coveralls.io/r/oasp/oasp4js?branch=development"]
The sample application is built on top of the https://github.com/oasp/oasp4js-app-template[application template] and is an AngularJS application. Some of the AngularJS modules (e.g. oasp-security, oasp-i18n, etc.) which can be reused in your application are available in https://github.com/oasp/oasp4js-bower[this repository] either directly or using the Bower package manager. The sample application needs the https://github.com/oasp/oasp4j[oasp4j] (Java) server part to be installed.

== Getting Started

To get started you need to clone both the `oasp4j` and `oasp4js` repositories containing the server and the client part respectively. Each of them is to be built and started to talk to each other it. There are two ways to get the sample application working: eithter by getting the https://github.com/oasp/oasp4j/wiki/oasp-ide-setup[oasp IDE] and running it from there or setting up the IDE manually. 

= Full oasp IDE installation

If you want to install full OASP IDE and get both server and client code please follow steps described in https://github.com/oasp/oasp4j/wiki/oasp-ide-setup[oasp IDE setup]. The `oasp IDE` already contains software (Node.js, Gulp, Bower, Maven) required to run the sample application; only Git has to be additionally installed. 

= Getting oasp4js client working
== Install prerequisites


Please refer to the https://github.com/oasp/oasp4js/wiki[OASP wiki page] for installation instructions for the server part.

* node.js version 5.0.0
* npm version 3.3.6
* gulp version 3.9.1
* bower version 1.7.7

== Create the `<oasp_dir>` directory for the sample application

....
mkdir <oasp_dir>
cd <oasp_dir>    
....

== Set up the client part of the application

We asume you are back in the `<oasp_dir>` directory.

Clone the oasp4js repository:

....
git clone https://github.com/oasp-forge/bht-2017-RideSharing-Client.git -b master 
....

Install the client part's dependencies: 

....
cd oasp4js
npm install
....

During the `npm install` process Bower downloads some libraries and uses Git for it. Git defaults to the Git protocol whose standard port (9418) is sometimes blocked by firewalls. A solution for this problem is to configure Git to use the `https` instead of the git protocol with following command:

....
git config --global url."https://".insteadOf git://
....
and to rerun the `npm install` command.

Start the application using Gulp:

....
gulp serve
....

The above Gulp's task opens the client part of the application in your default browser and watches for any changes in HTML/JavaScript/CSS files. Once you change one, the page is reloaded automatically!
 
You can sign in using the following credentials: waiter/waiter or cook/cook.

If for some reason your client should talk to the server configured in a different way, you can configure the server details in the client's configuration file, `<oasp_dir>\oasp4js\config.json`, in the `proxy` part:

....
{
    "proxy": {
        "baseUrl": "http://localhost:8081",
        "context": "/oasp4j-sample-server"
    }
}
....
