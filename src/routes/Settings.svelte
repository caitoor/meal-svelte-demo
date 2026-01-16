<script>
  import { name, setName, getName } from "../stores/profileStore.js";

  let input = getName();

  function save() {
    setName(input.trim());
  }

  function reset() {
    setName("");
    input = "";
  }
</script>

<h1>Profilsettings</h1>

<label>
  Name
  <input bind:value={input} placeholder="z.B. Kim" />
</label>

<div class="row">
  <button on:click={save}>Speichern</button>
  <button type="button" on:click={reset}>Zurücksetzen</button>
</div>

<p class="hint">
  Store = eine Variable.  
  LocalStorage wird nur beim Setzen/Laden benutzt.
</p>
