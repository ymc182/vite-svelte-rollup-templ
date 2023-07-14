<script lang="ts">
  import Counter from "./lib/Counter.svelte";
  import { KeyPair } from "near-api-js";
</script>

<main>
  <div class="text-xl font-bold">Bodega Remastered</div>
  <Counter />
  {KeyPair.fromRandom("ed25519").getPublicKey().toString()}
</main>

<style>
</style>
