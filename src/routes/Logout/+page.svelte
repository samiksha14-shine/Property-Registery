<script>
  import { createEventDispatcher } from 'svelte';
  let success = '';
  let error = '';
  const dispatch = createEventDispatcher();

  async function handleLogout() {
    try {
      const response = await fetch('/logout', { method: 'POST' });
      const result = await response.json();
      if (result.success) {
        success = 'Logout successful.';
        dispatch('logout');
      } else {
        error = result.message || 'Logout failed.';
      }
    } catch (err) {
      error = 'An error occurred.';
    }
  }

  handleLogout();
</script>

{#if success}
  <p class="success">{success}</p>
{/if}
{#if error}
  <p class="error">{error}</p>
{/if}

<style>
  .success {
    color: green;
  }
  .error {
    color: red;
  }
</style>
