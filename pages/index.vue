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
            <source srcset="photos/headshot.jpg" media="(min-width: 363px)" />
            <source srcset="photos/headshot@0.5x.jpg" />
            <img src="photos/headshot.jpg" alt="Photograph of Rob Lowe's head and shoulders. He is wearing a dark grey shirt, blue glasses, and a beard. The background is blurry, however a white wall and blue ceiling are recognizable." />
          </picture>
          <aside>My name is Rob, and I like to party.</aside>
        </section>
      </article>

      <article id="about">
        <section>
          <h2>About Me</h2>
          <p>My pronouns are <em>he</em>, <em>him</em>, and <em>his</em>. I am an experienced Senior Front-end Developer with deep understanding of <abbr title="HyperText Markup Language">HTML</abbr>, <abbr title="Cascading Style Sheets">CSS</abbr>, and JavaScript and broad experience with full-stack software development life cycles. I am passionate about creating beautiful interfaces that are both Accessible and easy to use. I have achieved success through a combination of my own experience, by teaming up with anyone I can learn from, and a bit of luck. I strongly believe that diversity, equity, and inclusion make every team stronger and actively work to increase those qualities in my workplace.</p>
        </section>
      </article>

      <article id="social">
        <section>
          <h2>Social</h2>

          <ul class="flex-list">
            <li>
              <a href="https://www.linkedin.com/in/roberthenrylowe/">
                <img src="social/linkedin.svg" alt="LinkedIn" class="svg-img" />
                <span>in/roberthenrylowe</span>
              </a>
            </li>

            <li>
              <a href="https://twitter.com/rhlowe">
                <img src="social/twitter.svg" alt="Twitter" class="svg-img" />
                <span>@rhlowe</span>
              </a>
            </li>

            <li>
              <a href="https://github.com/rhlowe">
                <img src="social/github.svg" alt="Github" class="svg-img" />
                <span>rhlowe</span>
              </a>
            </li>

            <li>
              <a href="mailto:rhlowe@gmail.com">
                <img src="social/email.svg" alt="Email" class="svg-img" />
                <span>rhlowe@gmail.com</span>
              </a>
            </li>
          </ul>

          <p class="text-center">
            <em>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> and <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></em>
          </p>
        </section>
      </article>

      <article id="skills">
        <section>
          <h2>Skills</h2>

          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Ember</li>
            <li>Vue</li>
            <li>React</li>
            <li>Accessibility</li>
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
        <p class="text-center">Copyright © Me, Forever.</p>
      </section>
    </footer>
  </div>
</template>

<style>
/* Tags */
article,
footer,
header {
  display: grid;
  grid-template-columns: 1fr minmax(auto, 80ex) 1fr;
  grid-gap: 1rem;
}

article section,
footer section,
header section {
  grid-column: 2 / 3;
}

header h1 {
  font-size: 4.5rem;
  margin: -1rem 0 0;
}

picture img,
picture source {
  max-width: 100%;
}

/* Classes */

.flex-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  margin: 0;
}

.flex-list li {
  list-style: none;
}

.flex-list li a {
  display: flex;
  align-items: center;
}

.flex-list li span {
  margin-left: 1ex;
}

.svg-img {
  height: 32px;
  width: 32px;
}

.text-center {
  text-align: center;
}

/* IDs */

#intro {
}

#intro aside {
  background-color: rgba(0, 0, 0, 0.33);
  font-size: 10vw;
  grid-column: 1 / 4;
  grid-row: 1 / 2;
  line-height: 1.25;
  padding: 0.5rem;
  text-align: center;
}

@media screen and (min-width: 481px) {
  #intro aside {
    font-size: 2.25rem;
    grid-column: 1 / 3;
  }
}

#intro picture {
  display: block;
  grid-column: 1 / 4;
  grid-row: 1 / 2;
}

@media screen and (min-width: 481px) {
  #intro picture {
    grid-column: 2 / 4;
  }
}

#intro section {
  align-items: flex-end;
  display: grid;
  grid-template-columns: auto;
}

@media screen and (min-width: 481px) {
  #intro section {
    align-items: center;
    grid-template-columns: 45% auto 45%;
  }
}
</style>
