<script lang="ts">
  import Table from "$lib/Table.svelte";
  import { onMount } from 'svelte';

  /** @type {import('./$types').PageData} */
  export let data;
  console.log("Profile data:", data.names);

  /** @type {import('./$types').ActionData} */
  export let form;
  console.log("Form data:", form);

  let editMode = false;
  let currentApplicant = { id: null, name: '', email: '' };

  function editApplicant(applicant) {
    editMode = true;
    currentApplicant = { ...applicant };
    console.log("Editing applicant:", currentApplicant);
  }

  function cancelEdit() {
    editMode = false;
    currentApplicant = { id: null, name: '', email: '' };
    console.log("Cancelled edit");
  }

  function deleteApplicant(id) {
    // Handle delete action
    console.log("Deleting applicant with id:", id);
  }
</script>

<Table names={data.names} />

<div class="mt-10 pt-10 w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg">
  <form method="POST" action={`?/create`}>
    <div class="flex flex-wrap -mx-3 mb-2">
      <input type="hidden" name="id" value={currentApplicant.id} />
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="name">
          Name
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="name"
          type="text"
          placeholder="Enter name"
          name="name"
          bind:value={currentApplicant.name}
          required
        />
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
          Email
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="email"
          type="text"
          placeholder="Enter email"
          name="email"
          bind:value={currentApplicant.email}
          required
        />
      </div>
      <button type="submit" class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-2 rounded">
        {editMode ? 'Update' : 'Create'} Applicant
      </button>
      {#if editMode}
        <button type="button" class="bg-gray-500 hover:bg-gray-700 text-white font-bold mt-5 ml-2 px-2 rounded" on:click={cancelEdit}>
          Cancel
        </button>
      {/if}
    </div>
  </form>
  {#if form?.success}
    <p class="pt-2">{editMode ? 'Updated' : 'Added'} new Applicant!</p>
  {/if}
</div>

{#each data.names as applicant (applicant.id)}
  <div class="flex items-center justify-between mt-5">
    <div>
      <p>{applicant.name} - {applicant.email}</p>
    </div>
    <div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded" on:click={() => editApplicant(applicant)}>
        Edit
      </button>
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold px-2 rounded" on:click={() => deleteApplicant(applicant.id)}>
        Delete
      </button>
    </div>
  </div>
{/each}

<div class="h-32"></div>
