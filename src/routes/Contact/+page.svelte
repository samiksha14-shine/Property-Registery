<script>
    let name = '';
    let email = '';
    let message = '';
  
    function handleSubmit() {
      // Handle form submission logic here
      alert(`Message sent by ${name} (${email}): ${message}`);
      // Reset the form
      name = '';
      email = '';
      message = '';
    }
  </script>
  
  <style>
    :global(body) {
      background: linear-gradient(to right, #1a202c, #2d3748, #1a202c); /* Gradient background matching other pages */
      color: #e2e8f0; /* Light text color */
    }
    .form-container {
      background: #2d3748; /* Slightly lighter dark background */
      border: 1px solid #4a5568; /* Border color */
      padding: 2rem; /* Matching padding */
    }
    .input, .textarea {
      background: #1a202c; /* Dark input background */
      border: 1px solid #4a5568; /* Border color */
      color: #e2e8f0; /* Light text color */
      padding: 0.75rem; /* Padding inside input */
    }
    .button {
      background: linear-gradient(to right, #f56565, #4299e1); /* Gradient matching website theme */
      padding: 0.75rem 1.5rem; /* Matching button padding */
    }
  </style>
  
  <section class="bg-gradient-to-r from-black via-gray-800 to-black min-h-screen flex items-center justify-center py-12">
    <div class="w-full max-w-md bg-gray-800 rounded-lg shadow-lg">
      <h1 class="text-3xl font-bold text-center text-gray-100 mb-6">Contact Us</h1>
      <form on:submit|preventDefault={handleSubmit} class="form-container shadow-md rounded">
        <div class="mb-4">
          <label class="block text-gray-300 text-sm font-bold mb-2" for="name">Name</label>
          <input class="input w-full rounded" id="name" type="text" bind:value={name} required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-300 text-sm font-bold mb-2" for="email">Email</label>
          <input class="input w-full rounded" id="email" type="email" bind:value={email} required>
        </div>
        <div class="mb-6">
          <label class="block text-gray-300 text-sm font-bold mb-2" for="message">Message</label>
          <textarea class="textarea w-full rounded" id="message" rows="4" bind:value={message} required></textarea>
        </div>
        <div class="flex items-center justify-center">
          <button class="button text-white font-bold rounded focus:outline-none focus:shadow-outline" type="submit">Send</button>
        </div>
      </form>
    </div>
  </section>
  