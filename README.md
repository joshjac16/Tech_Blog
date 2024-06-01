# Tech_Blog

This project involves building a CMS-style blog site similar to Wordpress, allowing developers to publish their blog posts and
comment on other developers' posts. The application will be developed from scratch and deployed to Heroku. It will follow the
MVC (Model-View-Controller) architectural pattern, utilizing Handlebars.js for templating, Sequelize as the ORM (Object-Relational
Mapping) tool for database management, and the express-session npm package for authentication.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts
```

## Key Features

- User Authentication: Users can sign up, log in, and log out securely using authentication sessions.
- Create, Read, Update, Delete (CRUD) Operations: Authenticated users can create, edit, and delete their blog posts.
- Commenting System: Users can comment on blog posts, fostering engagement and interaction within the community.
- Responsive Design: The application will be responsive, ensuring optimal user experience across devices.
- MVC Architecture: Follows the MVC pattern for clear separation of concerns and maintainability.
- Handlebars Templating: Handlebars.js will be used as the templating engine for generating dynamic HTML content.

## Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MySQL or PostgreSQL (via Sequelize ORM)
- Templating: Handlebars.js
- Authentication: express-session
- Deployment: Heroku

## Installation

1. Clone repo

```bash
git clone (repo url)
```

2. Install dependencies:

```bash
npm i
```

3. Set Up Environment Variables

## Usage 

1. Start Server

```bash
npm start
```
2. Access the application in your browser at http://localhost:3001.



## Contributing:

Contributions are welcome! Fork the repository, make your changes, and submit a pull request for review.


