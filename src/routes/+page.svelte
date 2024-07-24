<script>
  // No need to import Navbar or Footer here if they are already included in layout.svelte
  import "../app.css";
</script>

<section class="bg-gray-900 dark:bg-gray-800">
  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
    <a
      href="https://github.com/samiksha14-shine/TSOC-website"
      class="inline-flex justify-between items-center py-2 px-4 mb-8 text-sm text-gray-200 bg-gray-700 rounded-full dark:bg-gray-600 dark:text-white hover:bg-gray-800 dark:hover:bg-gray-500 transition-all duration-300"
      target="_blank"
    >
      <span class="text-xs bg-primary-500 rounded-full text-white px-4 py-1.5 mr-3">Repo Link</span>
      <span class="text-sm font-semibold">GitHub</span>
      <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </a>
    <h1 class="mb-6 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-gray-100">
      Blockchain Property Registry
    </h1>
    <p class="mb-10 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-200">
      <span class="text-gray-400">This project is developed with</span>
      <span>
        <ul class="flex gap-x-6 items-center justify-center font-mono text-base p-2 text-gray-300">
          <li>SvelteKit</li>
          <li>TailwindCSS</li>
          <li>TypeScript</li>
          <li>Scrypt</li>
          <li>NeucronSdk</li>
          <li>Vercel</li>
          <li>BSV Blockchain</li>
        </ul>
      </span>
    </p>

    <div class="flex flex-col mb-12 lg:mb-20 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
      <a
        href="https://tsoc.dev"
        class="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-500 dark:focus:ring-primary-300 transition-all duration-300"
      >
        Learn More About TSoC
      </a>
    </div>
  </div>
</section>
