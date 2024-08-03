<script lang="ts">
    let propertyId = '';
    let propertyAddress = '';
    let ownerName = '';
  
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      // Handle form submission logic here
      console.log({ propertyId, propertyAddress, ownerName });
    };
  </script>
  
  <style>
    .dark-mode-bg {
      background-color: #0d0d0d; /* Dark background */
    }
  
    .dark-mode-text {
      color: #ffffff; /* White text color in dark mode */
    }
  
    .input-dark {
      background-color: #333333; /* Dark input background */
      color: #ffffff; /* White input text color */
      border: 1px solid #444444; /* Dark border */
    }
  
    .button-dark {
      background: linear-gradient(45deg, #e94560, #0f3460); /* Gradient button background */
      color: #ffffff; /* White button text */
    }
  
    .button-dark:hover {
      background: linear-gradient(45deg, #d03450, #0d2c50); /* Darker gradient on hover */
    }
  
    .form-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 2rem;
      background-color: #1a1a1a; /* Dark form container background */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      border-radius: 0.5rem;
    }
  </style>
  
  <div class="container mx-auto p-6 dark-mode-bg dark-mode-text">
    <h1 class="text-2xl font-bold mb-4">Issue Property</h1>
    <form on:submit={handleSubmit} class="form-container">
      <div class="mb-4">
        <label for="property-id" class="block text-sm font-bold mb-2">Property ID:</label>
        <input
          type="text"
          id="property-id"
          bind:value={propertyId}
          required
          class="input-dark shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter Property ID"
        />
      </div>
  
      <div class="mb-4">
        <label for="property-address" class="block text-sm font-bold mb-2">Property Address:</label>
        <input
          type="text"
          id="property-address"
          bind:value={propertyAddress}
          required
          class="input-dark shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter Property Address"
        />
      </div>
  
      <div class="mb-4">
        <label for="owner-name" class="block text-sm font-bold mb-2">Owner Name:</label>
        <input
          type="text"
          id="owner-name"
          bind:value={ownerName}
          required
          class="input-dark shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter Owner Name"
        />
      </div>
  
      <div class="flex items-center justify-between">
        <button
          type="submit"
          class="button-dark font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Issue Property
        </button>
      </div>
    </form>
  </div>
  