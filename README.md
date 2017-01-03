<h1>Sharon Smith's Portfolio</h1>
<p> A portfolio project for CodeFellows SoftwareDev 301 class</p>

<h2>User Stories</h2>
  <ol>
    <li>As a developer, I will use valid markup to meet professional standards.</li>
    <li>As a designer, I want to make the site as visually appealing as possible but also responsive.</li>
    <li>As a creator, I want to link only to my professional contacts rather than social as I believe they should be kept separate.</li>
    <li>As a developer and designer, I want my code to be organized so that I can easily find any elements I want to change quickly and easily.</li>
    <li>As a visitor, I want the site to have a good UX/UI experience.</li>
    <li>As a visitor, I want to be able to see new content first</li>
    <li>As a visitor, I want the design to be fully responsive, with layouts appropriate to the viewport</li>
    <li>As the creator, I want the Home and About nav links to act as tabs, so my story is revealed FAST.</li>
      <ul>
        <li>--This means your links to NOT navigate to a new page.</li>
        <li>--Instead, your "single page app" shows only the section related to the navigation tab that is selected.</li>
        <li>--You can use 'data-' attributes to associate a content section with a particular tab</li>
        <li>--Then use jQuery so when the tab is clicked, you hide all the sections, then reveal the associated section only.</li>
      </ul>
    <li>As a reader, I want the portfolio to use a nice color scheme, so that it stands out visually.</li>
      <ul><li>---As a designer, this is a given</li></ul>
    <li>As a reader, I want project descriptions truncated to the first paragraph so that I can easily scroll though the whole list.</li>
    <li>As a reader, I want to click the "More" button so that I can expand the entire description.</li>
    <li>As a reader, I want projects filterable by category so that I can review just the things that interest me.</li>
    <li>As a developer, I want to use Handlebars for my project template, so that I can include new projects more easily.</li>
    <li>As a developer, I want my CSS styles to follow SMACSS organization, so that I know where to look for creating and editing styles.</li>
    <li>[x]As a visitor, I want the site to use great typography, so that I have an enjoyable reading experience.</li>
    <li>---- Good typography is a design necessity, not a stretch goal. Well, to design people, anyways.</li>
    <li>As a developer, I want to store my project data in a .json file, so that I can keep it organized.</li>
    <li>As a developer, I want to retrieve that source data file asynchronously, so that my app logic gets the data just when I need it.</li>

  </ol>

<h3>User Stories: Stretch Goals</h3>

  <ol>
    <li>As a reader, I only want to have to fetch data when it's updated (and keep it cached locally), so that I don't make unneeded AJAX calls.</li>
  </ol>


<h2>Requirements & Rubric Checklist</h2>

  <ul>
    <li>[x] Start with a rough pen & paper "wireframe" sketch of what you want your portfolio site to look like.</li>
    <li><i>----Note: Include photo of wireframe somewhere?</i></li>
    <li>[x] Submit User Stories</li>
    <li>[x] Add the .eslintrc config file to the root of your repo, so we are all on the same linter settings.</li>
    <li>[x] Also include a .gitignore file in your root directory to prevent non-relevant files from being pushed to GitHub.</li>
    <li>[x] Refactor your CSS into a base, layout, and module structure where applicable.</li>
    <li>[] Think of some ideas for your source data, and code it up in its own file!</li>
    <li>[] Build out an array of three objects to start with, all having similar properties.</li>
    <li>[] Create a new .js file with the appropriate methods to help modify your source data to help render it to the DOM:</li>
    <li>[] Use good Object Oriented code: Create a constructor function for projects or source data.</li>
    <li>[] Leave as little in the window (global) namespace as possible: attach functions to objects, etc.</li>
    <li>[] Use jQuery to clone the example markup for each project, as you add additional content.</li>
    <li>[] Your "Project" prototype should have a .toHtml() function that adds new data to the DOM.</li>
    <li>[] Be sure to use proper viewport settings.</li>
    <li>[] Add new styles in any media queries as needed to make the page look good on desktop screens.</li>
    <li>[] Use mobile-first design principles when adding CSS.</li>
    <li>[]Use event delegation whenever appropriate.</li>
    <li>[]Add click handlers to at least one nav section.</li>
    <li>[]Do as much work as you can with advanced selectors, rather than littering your markup with classes and ids.</li>
    <li>[]When classes and IDs are needed, pick semantic names. There is to be no $('#content .content') nonsense!<li>
    <li>[x]Set up your h1, h2, h3 elements according to a type scale.</li>
    <li>[x]Include some good fonts, that work well together.<li>
    <li>[]Add Handlebars to your blogging system.</li>
    <li>[]Organize your CSS code according to SMACSS, with at least a file for base, layout, and modules.</li>
    <li>[]Transfer your collection of data over to a .json file, replacing your original file.</li>
    <li>[]Continue to follow good SMACSS principles.</li>
    <li[]>Be sure to use the correct jQuery method for each AJAX call.</li>
    <li>[]Be thoughtful when functions are executed asynchronously. This is a major source of bugs!<li>
    <li>[]Apply some functional programming concepts to your portfolio codebase.</li>
    <ul>
      <li>[]Eliminate all for loops.</li>
      <li>[]Use map where you are transforming one collection into another.</li>
      <li>[]In at least one place, enclose the contents of a script file in an IIFE, that exports your high-level objects.</li>
      <li>[]Refactor any parts of your app that could be more loosely coupled. Make smaller functions that can accept and expect the return values of other functions!</li>
      <li>[]Think of a useful way to use reduce. Maybe you want to put some "fun facts stats" in your footer?</li>
    </ul>
    <li>[]Use of at least one .map() method.</li>
    <li>[]Use of at least one .reduce() method.</li>
    <li>[]IIFE present on at least one .js file.</li>
    <li>[]Ensure your code passes ESLint.</li>
    <li>[]Passing tests</li>
    <li>[]At least two modules</li>
    <li>[]Working test harness (test page, test script, testing libraries)</li>
    <li>[]We converted the blog into a SPA by using the page.js library to capture clicks and execute a function to modify the page, rather than reloading content from a server. Give your portfolio the same treatment.</li>
    <li>[]Update your main nav so that each clickable item is a link to a different url, that is handled by a function as indicated by page.js.</li>
    <li>[]Keep your code organized in a M-V-C structure that isolates data management from presentation layer, from the controller that holds it all together. </li>
    <li>[]In our blog, we used RESTful routes to interact with the Github API.  It's time to take this a step further and integrate this functionality into your portfolio project.</li>
    <ul>
      <li>[]To get started, you will need to create a controller that includes a call to the Github API. This call should grab data about your individual account, and render portions of the returned content to the page, **once the data has been loaded**.  This is fairly open ended, so use whatever data you deem fit and be sure to separate your concerns.</li>
    </ul>
    <li>[]Ensure your code passes ESLint.</li>
    <li>[]Place all code within the proper layer of MVC abstraction and encapsulation.</li>
    <li>[]Use an authenticated ajax call to GitHub's API to get data from the API.</li>
    <li>Keep your portfolio responsive as it displays API data.</li>
    <li><b>DO NOT publish your GitHub Token to any public repo.</b></li>
  </ul>



<h2>Helpful Resources</h2>
  <ul>
    <li>Handlebars: http://handlebarsjs.com</li>
    <li>SMACSS: https://smacss.com/</li>
    <li>JSON-Lint: http://jsonlint.com/ to the rescue!</li>
    <li>401JS: https://www.youtube.com/watch?v=5HX0BGGLruI&index=29&list=PLVngfM2hsbi8gIVLWmnvSc975LAPYInrA</li>
    <li>OOP: https://www.youtube.com/watch?v=Y9GdXJI4SNc&list=PLVngfM2hsbi8gIVLWmnvSc975LAPYInrA&index=30</li>
    <li>Chrome Debugger: https://www.youtube.com/watch?v=TLU1XVJH0TI&index=31&list=PLVngfM2hsbi8gIVLWmnvSc975LAPYInrA</li>
    <li>Server and package.json  If you want the full capabilities of the page.js library, you will need a basic server and package.json file in your app's directory.</li>
  </ul>
