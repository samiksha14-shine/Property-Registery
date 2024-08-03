<script>
  export let names;
</script>

<div class="mt-0 w-full max-w-md p-5 mx-auto rounded-lg shadow-xl bg-gradient-to-r from-red-900 to-blue-900 ring-1 ring-gray-700/5 backdrop-blur-lg">
  <div class="flex items-baseline justify-between mb-4">
    <div class="space-y-1">
      <h2 class="text-center font-semibold text-white uppercase tracking-wide text-xl mb-2">
        Welcome Back
      </h2>
      <p class="text-center tracking-wide font-extrabold text-white text-xl mb-3">
        Logged In {names.length} Users
      </p>
    </div>
  </div>
  
  <div class="divide-y divide-gray-700 mt-10">
    {#each names as user (user.id)}
      <div class="flex items-center justify-between py-2">
        <div class="flex items-center space-x-4 w-3/10 py-1">
          <div class="flex">
            <p class="font-medium text-white">{user.name}</p>
            <p class="font-medium pl-2 text-white">{user.email}</p>
          </div>
        </div>
        <form method="POST" action="/profiles?/delete" class="w-1/12">
          <input type="hidden" name="id" id="id" value={user.id} />
          <button type="submit">
            <img class="w-6 float-right" src="./trash-can.svg" alt="delete" />
          </button>
        </form>
      </div>
    {/each}
  </div>
</div>
