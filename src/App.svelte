<script>
  import Router from "svelte-spa-router";
  import { link } from "svelte-spa-router";

  import Home from "./routes/Home.svelte";
  import Settings from "./routes/Settings.svelte";

  const routes = {
    "/": Home,
    "/settings": Settings,
  };
</script>

<nav>
  <a use:link href="/">Überrasch mich</a>
  <a use:link href="/settings">Profilsettings</a>
</nav>

<main>
  <Router {routes} />
</main>

<style>
  nav {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    border-bottom: 1px solid green;
  }

  main {
    padding: 1rem;
    max-width: 720px;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
