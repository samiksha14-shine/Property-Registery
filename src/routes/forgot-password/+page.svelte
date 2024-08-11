<script lang="ts">
    let email = '';
    let message = '';
  
    const handleSubmit = async () => {
      if (!email) {
        message = 'Please enter your email address.';
        return;
      }
      // Placeholder logic for handling the password reset request
      // In a real application, this would involve sending the email to your backend server
      message = 'If this email is registered, a reset link will be sent to your inbox.';
      email = '';
    };
  </script>
  
  <div class="min-h-screen bg-gradient-to-b from-gray-800 to-black flex items-center justify-center py-12 px-4">
    <div class="max-w-md w-full space-y-8 bg-gradient-to-r from-red-500 to-blue-500 p-8 rounded-lg shadow-md">
      <h2 class="text-3xl font-bold text-white text-center">Forgot Password</h2>
      <p class="text-white text-center">Enter your email address and we'll send you a link to reset your password.</p>
      <div class="mt-8 space-y-6">
        <div class="rounded-md shadow-sm -space-y-px">
          <input
            type="email"
            placeholder="Email address"
            bind:value={email}
            class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
          />
        </div>
  
        <div>
          <button
            type="button"
            on:click={handleSubmit}
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Send Reset Link
          </button>
        </div>
  
        {#if message}
          <p class="text-white text-center mt-4">{message}</p>
        {/if}
      </div>
    </div>
  </div>
  