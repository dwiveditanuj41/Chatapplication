# chat_app
<a href ="http://tranquil-refuge-85164.herokuapp.com/"><H3> Heroku Link </h3> </a> <br/><br/>
This is a real-time chat application built on NodeJS, ExpressJS, Socket.io for server side, AngularJS for client side and MongoDB for database storage.<br /><br />

<h3>Procedure to deploy the app</h3> <br /> i) Install Node and then install the node packages by using package.json (already done). <br />
ii.a) Download and install MongoDB on local server. <br />
ii.b) Make a directory C:\data and C:\data\db. <br />
ii.c) Open bin folder in MongoDB.  <br />
ii.d) open command line tool and write $ mongod.exe --dbpath "C:\data\db" <br />
The above steps will allow you to use C:\data\db as your database.<br />
iii) Open command line and set current directory to the chat_app folder. The app runs on local server 3000. <br />
Type command "node server" in cmd.<br />
iv) Goto <strong> "http://localhost:3000/" </strong> on browser. Then follow the instructions.
<hr /> 
<h3> Images </h3>

![main](https://user-images.githubusercontent.com/28799334/53494448-d1899800-3ac3-11e9-8357-3a21e4f3e3ff.PNG)
![message](https://user-images.githubusercontent.com/28799334/53494462-d77f7900-3ac3-11e9-9b9a-697853aeace4.PNG)
![sent](https://user-images.githubusercontent.com/28799334/53494463-d77f7900-3ac3-11e9-8639-4d3a310a61f5.PNG)
![newuser](https://user-images.githubusercontent.com/28799334/53494466-d8180f80-3ac3-11e9-8f6e-64437a12a0b1.PNG)
![join notification](https://user-images.githubusercontent.com/28799334/53494469-d8180f80-3ac3-11e9-9c9c-5766b3e6e9ac.PNG)
![sent user](https://user-images.githubusercontent.com/28799334/53494477-dd755a00-3ac3-11e9-99bd-41f98059c3ce.PNG)
![recieved user](https://user-images.githubusercontent.com/28799334/53494479-de0df080-3ac3-11e9-8794-cdc8e179e663.PNG)




