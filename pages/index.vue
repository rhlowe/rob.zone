<template>
  <div>
    <header>
      <section>
        <h1>Rob Lowe</h1>
      </section>
    </header>

    <main>
      <article>
        <section>
          <h2>About Me</h2>
          <p>
            I am an experienced Senior Front-end Developer with deep understanding of HTML, CSS, and JavaScript and broad experience with the full software development life-cycle. I am passionate about creating beautiful interfaces that are both Accessible and easy to use. I have achieved success through a combination of my own experience, by teaming up with anyone I can learn from, and a bit of luck. I strongly believe that diversity, equity, and inclusion make every team stronger and actively work to increase those qualities in my workplace.
          </p>
        </section>
      </article>

      <article>
        <section>
          <h2>Social</h2>

          <ul class="flex-list">
            <li>
              <a href="https://www.linkedin.com/in/roberthenrylowe/">
                <img src="linkedin.svg" alt="LinkedIn" class="svg-img" />
                <span>in/roberthenrylowe</span>
              </a>
            </li>

            <li>
              <a href="https://twitter.com/rhlowe">
                <img src="twitter.svg" alt="Twitter" class="svg-img" />
                <span>@rhlowe</span>
              </a>
            </li>

            <li>
              <a href="https://github.com/rhlowe">
                <img src="github.svg" alt="Github" class="svg-img" />
                <span>rhlowe</span>
              </a>
            </li>

            <li>
              <a href="mailto:rhlowe@gmail.com">
                <img src="email.svg" alt="Email" class="svg-img" />
                <span>rhlowe@gmail.com</span>
              </a>
            </li>
          </ul>

          <p class="text-center">
            <em>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> and <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></em>
          </p>
        </section>
      </article>

      <article>
        <section>
          <h2>Skills</h2>
        </section>
      </article>

      <article>
        <section>
          <h2>Resume</h2>
        </section>
      </article>

      <article>
        <section>
          <h2>Contact Me</h2>
        </section>
      </article>
    </main>

    <footer>
      <section>
        <p class="text-center">This site made in 2020 with Nuxt.js and hosted on</p>
      </section>
    </footer>
  </div>
</template>

<style>
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

footer,
header,
article {
  display: grid;
  grid-template-columns: 1fr minmax(auto, 100ex) 1fr;
  grid-gap: 1rem;
}

footer section,
header section,
article section {
  grid-column: 2 / 3;
}

.svg-img {
  height: 32px;
  width: 32px;
}

.text-center {
  text-align: center;
}
</style>
