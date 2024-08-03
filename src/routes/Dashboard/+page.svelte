<script>
  export let form;
  let last = 0;
</script>

<div
  class="mt-10 pt-10 w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
>
  <form method="POST" action="?/login">
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-city"
        >
          Email
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="email"
          type="text"
          placeholder="Enter email"
          name="email"
          required
        />
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-city"
        >
          Password
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="password"
          type="text"
          placeholder="Enter password"
          name="password"
          required
        />
      </div>
      <button
        type="submit"
        class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-6 rounded"
        on:click={() => {
          last = 0;
        }}
      >
        Login
      </button>
    </div>
  </form>
  {#if last == 0}
    {#if form?.success}
      <p class="pt-2">
        Login Successful! Your Wallet Balance is {form?.balance}
      </p>
    {/if}
  {/if}
</div>

<div
  class="mt-10 pt-10 w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
>
  <form method="POST" action="?/pay">
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-city"
        >
          Email
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="email"
          type="text"
          placeholder="Enter email"
          name="email"
          required
        />
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-city"
        >
          Password
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="password"
          type="text"
          placeholder="Enter password"
          name="password"
          required
        />
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-city"
        >
          Paymail
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="paymail"
          type="text"
          placeholder="Enter paymail"
          name="paymail"
          required
        />
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-city"
        >
          Amount
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="amount"
          type="number"
          placeholder="Enter Amount"
          name="amount"
          required
        />
      </div>
      <button
        type="submit"
        class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-6 rounded"
        on:click={() => {
          last = 1;
        }}
      >
        Pay
      </button>
    </div>
  </form>
  {#if last == 1}
    {#if form?.success}
      <p class="pt-2">
        Your payment was successfull and Here's your <a
          href="https://whatsonchain.com/tx/{form?.payment}"
          class="text-blue-500">transaction</a
        >
      </p>
    {/if}<script lang="ts">
      // Your existing script content
    </script>
    
    <style>
      .bg-gray-50 {
        background-color: #f9fafb; /* Default light background */
      }
    
      .dark\:bg-gray-900 {
        background-color: #0d0d0d; /* Dark background */
      }
    
      .text-gray-900 {
        color: #111827; /* Dark text color */
      }
    
      .dark\:text-white {
        color: #ffffff; /* White text color in dark mode */
      }
    
      .hover\:bg-gray-100:hover {
        background-color: #f3f4f6; /* Light hover background */
      }
    
      .group-hover\:text-gray-900:hover {
        color: #111827; /* Dark hover text color */
      }
    
      .text-gray-500 {
        color: #6b7280; /* Gray text color */
      }
    
      .rounded-lg {
        border-radius: 0.5rem; /* Rounded corners */
      }
    
      .transition {
        transition: all 0.3s ease-in-out; /* Smooth transitions */
      }
    
      .space-y-2 > * + * {
        margin-top: 0.5rem; /* Vertical space between items */
      }
    
      .flex {
        display: flex;
      }
    
      .flex-col {
        flex-direction: column;
      }
    
      .items-center {
        align-items: center;
      }
    
      .justify-center {
        justify-content: center;
      }
    
      .mx-auto {
        margin-left: auto;
        margin-right: auto;
      }
    
      .px-2 {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
      }
    
      .py-3 {
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
      }
    
      .md\:h-screen {
        height: 100vh;
      }
    
      .lg\:py-1 {
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
      }
    
      .min-h-0 {
        min-height: 0;
      }
    
      .border-r {
        border-right-width: 1px;
      }
    
      .border-white {
        border-color: #ffffff;
      }
    
      .pt-10 {
        padding-top: 2.5rem;
      }
    
      .pt-5 {
        padding-top: 1.25rem;
      }
    
      .pb-4 {
        padding-bottom: 1rem;
      }
    
      .overflow-y-auto {
        overflow-y: auto;
      }
    
      .rounded-xl {
        border-radius: 1rem;
      }
    
      .bg-white {
        background-color: #ffffff;
      }
    
      .divide-y > * + * {
        border-top-width: 1px;
      }
    
      .pb-2 {
        padding-bottom: 0.5rem;
      }
    
      .pt-2 {
        padding-top: 0.5rem;
      }
    
      .group {
        display: flex;
        align-items: center;
        text-decoration: none;
        transition: all 0.3s ease-in-out;
      }
    
      .group:hover {
        background: linear-gradient(45deg, #e94560, #0f3460); /* Gradient hover effect */
        color: #ffffff; /* White text color on hover */
      }
    
      .p-2 {
        padding: 0.5rem;
      }
    
      .ml-3 {
        margin-left: 0.75rem;
      }
    
      .flex-1 {
        flex: 1;
      }
    
      .whitespace-nowrap {
        white-space: nowrap;
      }
    </style>
    
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center mx-auto">
        <a href="/" class="flex mt-4 text-gray-900 dark:text-white">
          <img class="w-16 h-16" src="https://img.icons8.com/?size=100&id=pWELdzsZI2w4&format=png&color=000000" alt="logo">
        </a>
      </div>
      <div class="flex flex-col items-center px-2 py-3 mx-auto md:h-screen lg:py-1 min-h-0 border-r border-white pt-10">
        <div class="flex flex-col pt-5 pb-4 overflow-y-auto">
          <div class="px-2 rounded-xl bg-white divide-y">
            <ul class="space-y-2 pb-2">
              <div class="space-y-2 pt-2"></div>
              <li>
                <a href="/Property-Issuance" target="_blank" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group">
                  <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  <span class="ml-3 flex-1 whitespace-nowrap">Property Issuance</span>
                </a>
              </li>
              <li>
                <a href="/Public-Map" target="_blank" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group">
                  <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                    <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                  </svg>
                  <span class="ml-3 flex-1 whitespace-nowrap">Public Map</span>
                </a>
              </li>
              <li>
                <a href="/Property-Details" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group">
                  <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="ml-3 flex-1 whitespace-nowrap">Property Details</span>
                </a>
              </li>
              <li>
                <a href="/sign-in" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group">
                  <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="ml-3 flex-1 whitespace-nowrap">Sign In</span>
                </a>
              </li>
              <li>
                <a href="/sign-up" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group">
                  <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="ml-3 flex-1 whitespace-nowrap">Sign Up</span>
                </a>
              </li>
            </ul>
            <div class="space-y-2 pt-2">
              <a href="/Contact" target="_blank" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">
                <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L</path>
                </svg>
                <span class="ml-3 flex-1 whitespace-nowrap">Contact</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  {/if}
</div>
