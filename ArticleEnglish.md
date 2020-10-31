<h2>Single Page Application: Basic Blog System</h2>
<h3>Introduction</h3>
<p>
  A Single Page Application consists of a set of functions and processes that are structured in a page, the only thing that will change during its use will be the events that are handled and the visibility of its components.
</p>
<p>
  In this case the SPA was focused to recreate the basic functioning of a blog system in Spanish in which we can see a list of the blog posts made, see in detail the information with the posts we interact and if we wish we can create our own blog posts.
</p>
<p>
  To explain how it was created I must emphasize that it is divided in two big parts, the first one would be the Backend where the server is controlled and the communication to the database. The other part would be the Frontend which aims to manage the user interface and the consumption of the API to control the requests that are made.
</p>

<h3>Backend</h3>
<p>
  For this section, the main technologies used were:
</p>

<ul>
  <li>Node.js + Express: For server and API route management.</li>
  <li>MongoDB: As our main database to store the information of the blog posts created.</li>
</ul>

<p>
  This section is based on the REST API architecture because it handles mainly HTTP (GET, POST, etc) for the transfer of information and all this process is done through files with JSON extension to make the execution more efficient. Therefore, the methods and routes were structured following this pattern:
</p>
</br>
<div align="center">
    <img alt="API Structure Image" src="./src/assets/static/API Structure.png">
</div>
</br>
<p>
  In server we establish the communication of all the API with the web, in the routes we indicate addresses/endpoints that are necessary to indicate to be able to use the API, besides establishing that it will happen if the process was successful or failed.
</p>
<p>
  Then we have the model to verify that the different fields and elements we send in JSON meet the requirements we want. In the controller all the information is processed based on the business logic of the application and finally the database that based on the request will list, add, modify or delete the information.
</p>

<h3>Frontend</h3>
<p>
  In this part the technologies used were:
</p>
<ul>
  <li>React: In the creation of components and interaction that runs at the time an event is presented.</li>
  <li>Sass: For the management of application styles.</li>
  <li>Webpack: In order to compile the files and upload them to the Vercel deployment platform.</li>
</ul>

<p>
  This section was focused on the creation of three main views, the first view was the blog post list where we can see all the blog posts that are in the database arranged in a way that we can see the title, the main image, date and the main or introductory paragraph.
</p>
<p>
  The blog post details view where the content is highlighted, the other elements are better appreciated, we also have the delete button to remove the blog post if desired.
</p>
<p>
  Finally, there is the section of creation of the blog post where by filling out the form and interact with the button will allow us to create the blog post, it should be noted that in this case the main image section will only receive links to images already uploaded on the web, this in order not to limit access to this application.
</p>
</br>
<p>
  Now that you know about the functionality of this application I invite you to review it, try it and leave me your comments to improve it.
</p>

- Demo App: [https://frontend-blog-ulzahk.vercel.app](https://frontend-blog-ulzahk.vercel.app)

If you want to review the application documentation, here I share the repositories:

- Repository App: [https://github.com/Ulzahk/Frontend-Blog](https://github.com/Ulzahk/Frontend-Blog)
- Repository API: [https://github.com/Ulzahk/Backend-Blog](https://github.com/Ulzahk/Backend-Blog)

<h3>References</h3>

- [https://nodejs.org](https://nodejs.org)
- [https://expressjs.com]https://expressjs.com)
- [https://www.mongodb.com](https://www.mongodb.com)
- [https://reactjs.org](https://reactjs.org)
- [https://sass-lang.com](https://sass-lang.com)
- [https://webpack.js.org](https://webpack.js.org)



<ul>
  <li><a target='_blank'>https://nodejs.org</a></li>
  <li><a target='_blank'>https://expressjs.com</a></li>
  <li><a target='_blank'>https://www.mongodb.com</a></li>
  <li><a target='_blank'>https://reactjs.org</a></li>
  <li><a target='_blank'>https://sass-lang.com</a></li>
  <li><a target='_blank'>https://webpack.js.org</a></li>
</ul>

