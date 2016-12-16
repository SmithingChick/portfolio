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
  </ol>

<h2>Requirements & Rubric Checklist</h2>

  <h3>Day 1</h3>
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
      <ul>
        <li>[] Use good Object Oriented code: Create a constructor function for projects or source data.</li>
        <li>[] Leave as little in the window (global) namespace as possible: attach functions to objects, etc.</li>
        <li>[] Use jQuery to clone the example markup for each project, as you add additional content.</li>
        <li>[] Your "Project" prototype should have a .toHtml() function that adds new data to the DOM.</li>
      </ul>
    </ul>

  <h3>Day 2</h3>
    <ul>
      <li>[] Be sure to use proper viewport settings.</li>
      <li>[] Add new styles in any media queries as needed to make the page look good on desktop screens.</li>
      <li>[] Use mobile-first design principles when adding CSS.</li>
    </ul>

  <h3>Day 3</h3>

    <h4>User Stories: MVP</h4>
      <ol>
        <li>As the creator, I want the Home and About nav links to act as tabs, so my story is revealed FAST.</li>
          <ul>
            <li>--This means your links to NOT navigate to a new page.</li>
            <li>--Instead, your "single page app" shows only the section related to the navigation tab that is selected.</li>
            <li>--You can use 'data-' attributes to associate a content section with a particular tab</li>
            <li>--Then use jQuery so when the tab is clicked, you hide all the sections, then reveal the associated section only.</li>
          </ul>
        <li>As a reader, I want the portfolio to use a nice color scheme, so that it stands out visually.</li>
        <ul><li>---As a designer, this is a given</li></ul>
      </ol>

      <h5>Stretch Goals:</h5>
        <ul>
          <li>As a reader, I want project descriptions truncated to the first paragraph so that I can easily scroll though the whole list.</li>
          <li>As a reader, I want to click the "More" button so that I can expand the entire description.</li>
          <li>As a reader, I want projects filterable by category so that I can review just the things that interest me.</li>
        </ul>

    <h4>Technical Requirements and Grading Rubric</h4>
      <ul>
        <li>[]Use event delegation whenever appropriate.</li>
        <li>[]Add click handlers to at least one nav section.</li>
        <li>[]Do as much work as you can with advanced selectors, rather than littering your markup with classes and ids.</li>
        <li>[]When classes and IDs are needed, pick semantic names. There is to be no $('#content .content') nonsense!<li>
      </ul>

  <h3>Day 4 - Templates and Typography</h3>

    <h4>User Stories: MVP</h4>
      <ol>
        <li>As a developer, I want to use Handlebars for my project template, so that I can include new projects more easily.</li>
        <li>As a developer, I want my CSS styles to follow SMACSS organization, so that I know where to look for creating and editing styles.</li>
      </ol>

      <h5>User Stories: Stretch Goal</h5>
        <ul>
          <li>[x]As a visitor, I want the site to use great typography, so that I have an enjoyable reading experience.</li>
          <li>---- Good typography is a design necessity, not a stretch goal.</li>
        </ul>

    <h4>Technical Requirements and Grading Rubric</h4>
      <ul>
        <li>[x]Set up your h1, h2, h3 elements according to a type scale.</li>
        <li>[x]Include some good fonts, that work well together.<li>
        <li>[]Add Handlebars to your blogging system.</li>
        <li>[]Organize your CSS code according to SMACSS, with at least a file for base, layout, and modules.</li>
      </ul>

<h2>Helpful Resources</h2>
  <ul>
    <li>Handlebars: http://handlebarsjs.com</li>
    <li>SMACSS: https://smacss.com/</li>
  </ul>
