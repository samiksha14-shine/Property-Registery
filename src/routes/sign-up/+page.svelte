<script lang="ts">
  import Table from "$lib/Table.svelte";
  import { onMount } from "svelte";

  /** @type {import('./$types').PageData} */
  export let data;
  console.log("hello", data.names);

  /** @type {import('./$types').ActionData} */
  export let form;

  // Initialize the Google Auth library
  function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    // Here you would send the token to your backend for validation and further processing
  }
  function initializeGoogleSignIn() {
    google.accounts.id.initialize({
      client_id: "542951753379-9p165a1ivngmvvanq7ersuek7oteli1r.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById("google-sign-in"),
      { theme: "outline", size: "large" }  // customization attributes
    );
  }

  onMount(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = initializeGoogleSignIn;
    document.body.appendChild(script);
  });
</script>

<section class="bg-gradient-to-r from-black via-gray-800 to-black min-h-screen flex items-center justify-center">
  <div class="w-full max-w-md bg-gray-700 rounded-lg shadow dark:border dark:border-gray-700">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
              Create an account
          </h1>
          <form class="space-y-4 md:space-y-6" action="#">
              <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-300">Your email</label>
                  <input type="email" name="email" id="email" class="bg-gray-800 border border-gray-600 text-gray-100 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@teamZ.com" required>
              </div>
              <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-300">Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-800 border border-gray-600 text-gray-100 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required>
              </div>
              <div>
                  <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-300">Confirm password</label>
                  <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-800 border border-gray-600 text-gray-100 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required>
              </div>
              <div class="flex items-start">
                  <div class="flex items-center h-5">
                      <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-600 rounded bg-gray-800 focus:ring-3 focus:ring-primary-600" required>
                  </div>
                  <div class="ml-3 text-sm">
                      <label for="terms" class="font-light text-gray-400">I accept the <a class="font-medium text-primary-600 hover:underline" href="#">Terms and Conditions</a></label>
                  </div>
              </div>
              <button type="submit" class="w-full bg-gradient-to-r from-red-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:from-blue-500 hover:to-red-500 transform hover:-translate-y-1 transition duration-300">Create an account</button>
          </form>
      </div>
  </div>
</section>

{#if form?.success}
  <p class="pt-2 text-white">Sign-up successful! 🎉</p>
{/if}

<div class="h-32"></div>
