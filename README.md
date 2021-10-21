# MammaRecipes 


The link to the live project. (https://uskawi.github.io/MammaRecipes/)<br>
MammaRecipes is an online recipe search engine where users can search for more than 40 000 recipes from the Edamam recipes search database.

[Image showing the website displayed Desktop](assets/images/ReadmeImages/desctop.jpg)<br>
[Image showing the website displayed phon](assets/images/ReadmeImages/phon.png)<br>
[Image showing the website displayed tablet](assets/images/ReadmeImages/tablet.png)<br>

## Contents 

- [User Experience (UX)](#user-experience-ux)
   * [Strategy](#strategy)
   * [User Stories](#user-stories) 
   * [Scope](#scope)
      + [Current Features](#current-features)
      + [Features to implement in the future](#features-to-implement-in-the-future)
   * [Structure](#structure)
   * [Skeleton](#skeleton)
   * [Surface](#surface)
     + [Colour Scheme](#colour-scheme)
     + [Typography](#typography)
     + [Imagery](#imagery)

- [Technologies](#technologies)
   * [Languages used](#languages-used)
   * [Frameworks, Libraries & Programs Used](#frameworks-libraries-&-programs-used)

- [Testing](#testing)
   
- [Deployment](#deployment)

- [Credits](#credits)
   * [Code](#code)
   * [Content](#content)
   * [Media](#media)
   * [Acknowledgements](#acknowledgements)


## User Experience (UX)

   ### Strategy 
   #### User goals 
   - As a user, I want to easily find a recipe that suits my culinary needs.

   #### Website owner goals:
   1. Accessibility to visitors.
   2. Drive traffic, engage prospects, generate leads, and re-engage existing users.
   3. Build a media presence to generate a passive income through ads and other sales in the future.
   5.  My learning objective is to learn vanilla Javascript and complete this project without using third-party libraries.


   ### User Stories

   - #### First Time Visitor 
        As a user who is for the first time redirected by a search engine to EdamamRecipes, I would more likely know the website's purpose. The most important  for me would be:

        1. To intuitively use the site.
        2. Accessibility.
        3. Responsiveness.
        4. Quick and easy way to find recipes.

   - #### Frequent user Goals

          As a frequent user:
          1. I want to be able to contact the owner.
          2. I want to be able to subscribe to get all new features.
          3. I want to see as much information as possible about recipes and the people who created them.
   ### User stories

1. User Story 1
I can visit the website and browse content. No log-in is required.
2. User Story 2
I can visit the website and search for vegetarian and vegan recipes.
3. User Story 3
I can contact the owner ot the website.
4. User Story 4
I got a message that the email was sent successfully.
5. User Story 5
I can subscribe.
6. User Story 6
I get a message that I bein subscribe.
7. User Story 7
When I'm browsing website content, I don't need to scroll up au again to the top to start a new search because the search bar is visible all time.
8. User Story 8
I can see the source of the recipes.
9. User Story 9
I can filter through the recipes based on some keywords.
10. User Story 10
I can see the total number of recipes found for my search.
11. User Story 11
I can see dish type or cuisine type.
12. User Story 12
I can use the website on different devices.

   ### Scope
   #### Current features 

   - Easy and straightforward to navigate.
   - Responsive on all device sizes.
   - Interactive elements. 
   - Images of dishes from different parts of the world on one page.
   - Search for recipes based on API.
   - Sticky search bar on top of the page to prevent the user from scrolling up to the top of the page to start a new search. 
   - Possibility to subscribe.
   - Social Links. 
   -  Possibility to contact the owner.
   - Search for recipes based on API.
   - Search suggestion icons that indicate the possible key used by search engines and display search results when clicked to make users' experience more straightforward.
   - footer with image and social media links.


 #### Features to implement in the future

   - Add a Comments section where visitors can add comments and give feedback to help improve user experience and get ideas for a new feature.
   -Add Google AdSense to the website once the traffic increases to generate income.
   - Add a section of different counties that would allow visitors t culinary traditions and customs from different countries
   -Add video content where visitors can watch the preparation of different dishes.
   - Add a possibility to upgrade to premium to receive diet plans.

   ### Structure
    The website contains one page serving as a landing page and displaying search results, contacting the owner of the page, and making a subscription.
   1. Top Bar
   [Image showing the top bar](assets/images/contentImages/topbar.jpg)<br>
      - Topbar contains a logo, subscribe button to open the subscribe form, and search bar.<br>
      - Topbar contains a logo, subscribe button to open the subscribe form, and search bar.
         The topbar always stays on the top of the page when the user is scrolling down or up to improve the user experience by facilitating a new search without scrolling back to the top.

  2. Search Suggetions
      [Image showing search-suggestion](assets/images/ReadmeImages/search-suggestions.jpg)<br> 
      - Search suggestions comprises a header and six different divs, which contain icons and a search keyword.
      - The icons are clickable, and each icon return specified search results vegetarian, desserts depending on the icon the user clicked.
      - The layout of the content of the search suggestion section change depending on the screen width.
   3. Recipes Highlight.
    [Image showing Recipes Highlight](assets/images/ReadmeImages/recipes-highlight.jpg)<br>
      - recipes highlight section contains an image and search keys often used by users searching for recipes.
      - The layout of the content of the search suggestion section change depending on the screen width.
   4. Results-heder
      - results header by default, it's hidden, appears after r search to shows the number of recipes found for given search key.
   5. Recipes template
    [Image showing Recipes-template](assets/images/ReadmeImages/templates.jpg)<br>
      - Recipes-template by default, it's hidden, appears after search to shows the cars containing information about recipes found for given search key.
   6. Subscribe form
    [Image showing subscribe form](assets/images/contentImages/topbar.jpg)<br>
      - Subscribe form by default, hidden, appears after clicking on the subscribe button or subscribe in the footer.
   7. Contact Form
    [Image showing contact form](assets/images/ReadmeImages/subscribe.jpg)<br>
      - Contact form  by default, hidden, appears after clicking on the subscribe button or subscribe in the footer.
   8. Footer
    [Image showing the Footer](assets/images/ReadmeImages/footer-readme.jpg)<br>
   - Footer is composed of an image and part that holds all the content: social media links, contact, subscribe, CopyRights.
   - The Footer image is visible only in large and medium devices.
  ### Skeleton 

   - Wireframes were created on Balsamiq.
   - Changes from the wireframes to the final site are significant. 
   - The planned layout was changed by removing the navbar because it wouldn't add any value as the website is composed of one HTML page only.
   - Image was added to the footer as the footer had too much empty real Estate.
 ### Surface

 -   #### Colour Scheme
        
       Colors with a low contrast ratio were used to make the website look simple. Images used in the website contain colors matching the ones used in CSS.

-   #### Typography
         
     Fonts used for this website were imported from  [Google Fonts](https://fonts.google.com/) and also used fonts from the Gitpode default fonts.
     Font imported from Google Fonts: Lato, Roboto, and Source  Code Pro.
     Arial, Helvetica, and Titillium Web from the default fonts.tica and Titillium Web from the the default fonts.
      
-   #### Imagery
      
       Images were chosen to much the colors used in the website to make the website look simple.

## Technologies 

### Languages Used

-   [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
-   [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, and Platforms

1. [Balsamiq](https://balsamiq.com/)  
- Used to Create wireframe.
2. [Gitpod](https://www.gitpod.io/)
- Used as a text editor.
3. [Chrome devtools](https://developer.chrome.com/docs/devtools/)
- Used as a browser.
4. [Google Fonts](https://fonts.google.com/)
- Used to import fonts.
5. [Font Awesome](https://fontawesome.com/)
- Used for icons.
6. [GitHub](https://github.com/)
- Used for icons.
8. [Pexel](https://www.pexels.com/)
- Used as a source for images.
8. [TinyJPG](https://tinyjpg.com/)
- used to compress images
9. [Emailjs](https://www.emailjs.com/)
- Used to send emails  and make subscription
10. [Git Pages](https://pages.github.com/)
- Used to deploy the website.
11. [Edamam](https://developer.edamam.com/)
-  Used as recipes database.

## Testing
### Code Validation
1. HTML 
  - [HTML validation image](assets/images/ReadmeImages/html-validation.jpg)<br>
  - All pages passed the W3C HTML Validation tests with 0 errors, and can be viewed here
  -  Warnings:
     1. - The type attribute is unnecessary for JavaScript resources.  
2. CSS
  - [CSS validation image](assets/images/ReadmeImages/css-validation.jpg)<br>
  - The CSS on the website passed the W3C CSS Jigsaw validation.
  - warnings:
    1. Imported style sheets are not checked in direct input and file upload modes
    2. -webkit-min-device-pixel-ratio is a vendor extension
3. Java Script
   - [EdamamAPI.js validation image](assets/images/ReadmeImages/edamam-jshint.jpg)<br>
   - [email.js validation image](assets/images/ReadmeImages/email.js-jhnit.jpg)<br>
   - [main.js validation image](assets/images/ReadmeImages/email.js-jhnit.jpg)<br>
   - The JavaScript on the website was validated with JSHint. No errors found.
   - Warnings
      1.  available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). <br>
       this warning was fixed by adding  **/*jshint esversion: 6 */** as comment on the top of each Java script page.
    	2. Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (suggestionIcon, i)	Functions declared within  loops referencing an outer scoped variable may lead to confusing semantics. (suggestionIcon, i)
      3.	Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (subscribetUserMessage, contactDiv, subscribe)     
4. Lighthouse test
      - [lighthouse test results image](assets/images/ReadmeImages/lightHouse.jpg)<br>
### Browser Testing
 - The website has been tested on Chrome, Vivaldi, Opera, Microsoft Edge, Firefox, and Internet Explorer. No problems were found on any of them exclude Explorer. The issue was to be a lack of support on the Internet Explorer for the CSS grid. The image below represents. 

### Bugs
   Bug caused  the email.js   not to  send subscribe email to inform about new subscribers. bug caused  by function  called twice for both sending contact email and subscribing.
   fixed the bug by changing subscribe function name.

## Deployment

### GitHub Pages
To deploy a page in Github Pages falow the steps below:
1. Access your GitHub account and find the relevant repository.
2. Click 'Settings' in the repository.
3. In Settings, click 'Pages' in the left-hand menu.
4. Click 'Source'.
5. In the dropdown menu displaying 'None', select 'Master Branch' or 'Main'6.
6. Allow the page some time to deploy your website.
7. At the top of Github Pages you will see a link to your live website.

### Making a Local Clone
To clone this  respiratory falow the steps below:
1. In the File menu, click Clone Repository.
2. Click the tab that corresponds to the location of the repository you want to clone. You can also click URL to manually enter the repository location.
3. Choose the repository you want to clone from the list.
4. Click Choose... and navigate to a local path where you want to clone the repository.
5. Click Clone.
6. If you plan to use this fork for contributing to the original upstream repository, click To contribute to the parent project.
8. If you plan to use this fork for a project not connected to the upstream, click For my own purposes.
8. Click Continue.

### Forking a repository
 To fork this  respiratory falow the steps below:
1. Access your GitHub account and find the relevant repository.
2. Click on 'Fork' on the top right of the page.
3. You will find a copy of the repository in your own Github account. 
### Edamam API 
The way to creat Edamam API:
1.  Navigate to https://developer.edamam.com/ and create a Edamamaccount.
2. Go to application  and creat New  Application and add application name.
3. Create a credential (API-key) and (APP-KEY) for the project.

4. G to https://developer.edamam.com/edamam-docs-recipe-api-v1?cms=published&cms_token=  copy URL and Read the documentations.

5. Past The  URl, APP_KEY, APP_KEY to the function that call the Esamam API inside your project.

### Email.js
1. Creat an email.js  acount and login.
2. Open Email Services (opens new window)page in EmailJS dashboard
Choose from the list of supported services and click on the service
Fill out the service details
Test the email service and make sure you receive the test email
3. Creat Email Templete
5. You can start to use email.js inside your project.
  
## Credits
### Code

Function used in email.js file is cretided to code-institute.

### Media

 - [Tajin image by Naim Benjelloun ](https://www.pexels.com/photo/vegetable-dish-in-ceramic-cooking-pot-2291596/) Recipes Highlight image.
 - [bowl-of-noodles-with-sunny-side image by Cats Comings](https://www.pexels.com/photo/bowl-of-noodles-with-sunny-side-up-egg-1359310/): footer image.
 

### Acknowledgements

-   Code institute.
-   Student Support.
-   My mentor  Caleb Mbakwe. 
-   The slack community.

