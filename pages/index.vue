<template>
  <div>
    <header class="bg-v t-w">
      <section>
        <h1>Rob Lowe</h1>
      </section>
    </header>

    <main>
      <article id="intro" class="bg-v t-w">
        <section>
          <picture>
            <source srcset="photos/minified/headshot.jpg" media="(min-width: 363px)" />
            <source srcset="photos/minified/headshot@0.5x.jpg" />
            <img src="photos/minified/headshot.jpg" alt="Photograph of Rob Lowe's head and shoulders. He is wearing a dark grey shirt, blue glasses, and a beard. The background is blurry, however a white wall and blue ceiling are recognizable." />
          </picture>
          <aside>My name is Rob, and I like to party.</aside>
        </section>
      </article>

      <article id="about">
        <section>
          <h2>About Me</h2>
          <p>I am an experienced Senior Front-end Developer with deep understanding of <abbr title="HyperText Markup Language">HTML</abbr>, <abbr title="Cascading Style Sheets">CSS</abbr>, and JavaScript and broad experience with full-stack software development life cycles. I am passionate about creating beautiful interfaces that are both Accessible and easy to use. I have achieved success through a combination of my own experience, by teaming up with anyone I can learn from, and a bit of luck. I strongly believe that diversity, equity, and inclusion make every team stronger and actively work to increase those qualities in my workplace.</p>
          <p>My preferred pronouns are <em>he</em>, <em>him</em>, and <em>his</em>.</p>
        </section>
      </article>

      <article id="social">
        <section>
          <h2>Social</h2>

          <ul class="flex-list">
            <li>
              <a href="https://www.linkedin.com/in/roberthenrylowe/">
                <img src="social/minified/linkedin.svg" alt="LinkedIn" class="svg-img" />
                <span>in/roberthenrylowe</span>
              </a>
            </li>

            <li>
              <a href="https://twitter.com/rhlowe">
                <img src="social/minified/twitter.svg" alt="Twitter" class="svg-img" />
                <span>@rhlowe</span>
              </a>
            </li>

            <li>
              <a href="https://github.com/rhlowe">
                <img src="social/minified/github.svg" alt="Github" class="svg-img" />
                <span>rhlowe</span>
              </a>
            </li>

            <li>
              <a href="mailto:rhlowe@gmail.com">
                <img src="social/minified/email.svg" alt="Email" class="svg-img" />
                <span>rhlowe@gmail.com</span>
              </a>
            </li>
          </ul>

          <p class="ta-c">
            <em>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> and <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></em>
          </p>
        </section>
      </article>

      <article id="skills">
        <section>
          <h2>Skills</h2>

          <ul>
            <li><img src="logos/minified/HTML5_logo_and_wordmark.svg" alt="HTML5 logo and wordmark" loading="lazy" /></li>
            <li><img src="logos/minified/CSS3_logo_and_wordmark.svg" alt="CSS3 logo and wordmark" loading="lazy" /></li>
            <li><img src="logos/minified/JavaScript-logo.png" alt="JavaScript logo" loading="lazy" /></li>
            <li><img src="logos/minified/ember_Tomster.png" alt="Ember Tomster" loading="lazy" /></li>
            <li><img src="logos/minified/vuejs.svg" alt="Vue logo" loading="lazy" /></li>
            <li><img src="logos/minified/React_logo.png" alt="React" loading="lazy" /></li>
            <li><img src="logos/minified/a11y-logo-hero.svg" alt="Accessibility" loading="lazy" /></li>
          </ul>
        </section>
      </article>

      <article id="resume">
        <section>
          <h2>Resume</h2>
        </section>
      </article>

      <article id="contact">
        <section>
          <h2>Contact Me</h2>
        </section>
      </article>
    </main>

    <footer>
      <section>
        <p class="ta-c">Copyright © Me, Forever.</p>
      </section>
    </footer>
  </div>
</template>
