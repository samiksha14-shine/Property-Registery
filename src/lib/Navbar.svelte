<nav class="bg-gray-800 border-gray-700">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://tsoc.dev/TSoC_Favicon.svg" class="h-8" alt="TSoC Logo" />
      <span class="self-center text-2xl font-semibold text-white whitespace-nowrap">
        TSoC Fullstack Application Project
      </span>
    </a>
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span class="sr-only">Open main menu</span>
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto bg-gray-900 p-3 px-5 rounded-full bg-opacity-50" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
        <li><a href="/" class="block py-2 px-3 text-gray-400 rounded md:bg-transparent md:text-white md:p-0" aria-current="page">Home</a></li>
        <li><a href="/profiles" class="block py-2 px-3 text-gray-400 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0">Login</a></li>
        <li><a href="/raw-wallet" class="block py-2 px-3 text-gray-400 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0">Register</a></li>
        <li><a href="/cloud-wallet" class="block py-2 px-3 text-gray-400 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0">Dashboard</a></li>
        <li><a href="/bounty" class="block py-2 px-3 text-gray-400 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0">Logout</a></li>
      </ul>
    </div>
    <a href="https://www.linkedin.com/in/samikshashindee/" target="_blank">
      <div class="mine w-12 h-12 bg-black rounded-full hover:bg-emerald-700"></div>
    </a>
  </div>
</nav>

<style>
  .mine {
    background-image: url(../../static/mylogo_white.png);
    background-size: 80%;
    background-position: center;
  }
  .mine:hover {
    scale: 0.9;
    transition: all 0.4s;
    transition-timing-function: ease;
  }
</style>
