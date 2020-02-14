<template>
  <nuxt />
</template>

<style>
/*
White: #F4F4F9
Green: #3CF4B5
Red: #FF3366
Black: #000000
Violet: #503A53
https://coolors.co/000000-f4f4f9-3cf4b5-ff3366-503a53
 */
:root {
  --black: #000000;
  --green: #3cf4b5;
  --red: #ff3366;
  --violet: #503a53;
  --white: #f4f4f9;
}

h1 {
  line-height: 1;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--white);
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

.bg-b {
  background-color: var(--black);
}

.bg-g {
  background-color: var(--green);
}

.bg-r {
  background-color: var(--red);
}

.bg-v {
  background-color: var(--violet);
}

.bg-w {
  background-color: var(--white);
}

.t-b {
  color: var(--black);
}

.t-g {
  color: var(--green);
}

.t-r {
  color: var(--red);
}

.t-v {
  color: var(--violet);
}

.t-w {
  color: var(--white);
}
</style>
