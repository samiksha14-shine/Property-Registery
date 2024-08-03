<script>
  // Add any necessary scripts here
</script>

<style>
  .dark-mode-bg {
    background-color: #0d0d0d; /* Dark background */
  }

  .dark-mode-text {
    color: #ffffff; /* White text color in dark mode */
  }

  .navbar-gradient {
    background: linear-gradient(45deg, #e94560, #0f3460); /* Gradient navbar background */
  }

  .navbar-item {
    color: #ffffff; /* White text color for navbar items */
  }

  .navbar-item:hover {
    color: #00bcd4; /* Light blue text color on hover */
  }

  .icon {
    color: #ffffff; /* White icon color */
  }
</style>

<nav class="navbar-gradient">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
    <a href="/" class="flex items-center space-x-3">
      <img src="https://img.icons8.com/?size=100&id=67283&format=png&color=000000" class="h-14" alt="Logo" />
      <span class="self-center text-2xl font-semibold hidden w-full md:block dark-mode-text md:w-auto rounded-md bg-black/60 p-2 px-5">
        Blockchain Property Registry 
      </span>
    </a>
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm dark-mode-text font-extrabold rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span class="sr-only">Open main menu</span>
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto bg-black/60 p-3 px-5 md:rounded-md" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-black rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
        <li>
          <a href="/" class="block py-2 px-3 navbar-item font-extrabold rounded md:bg-transparent md:p-0 hover:bg-white md:hover:text-blue-400" aria-current="page">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
              <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="currentColor"/>
            </svg>
          </a>
        </li>
        <li>
          <a href="/sign-in" class="block py-2 px-3 navbar-item font-extrabold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
            Sign In
          </a>
        </li>
        <li>
          <a href="/sign-up" class="block py-2 px-3 navbar-item font-extrabold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
            Sign Up
          </a>
        </li>
        <li>
          <a href="/Dashboard" class="block py-2 px-3 navbar-item font-extrabold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
            Dashboard
          </a>
        </li>
        <li>
          <a href="/Logout" class="block rounded-full py-2 px-3 navbar-item font-extrabold hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
              <path d="M16 13V11H8V8L4 12L8 16V13H16Z" fill="currentColor"/>
              <path d="M20 3H11V5H20V19H11V21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3Z" fill="currentColor"/>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
