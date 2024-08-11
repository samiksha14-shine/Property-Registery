<script lang="ts">
</script>

<section class="bg-gradient-to-r from-black via-gray-800 to-black min-h-screen flex items-center justify-center">
  <div class="w-full max-w-md bg-gray-800 rounded-lg shadow dark:border dark:border-gray-700">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
              Sign in to your account
          </h1>
          <form class="space-y-4 md:space-y-6" action="#">
              <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-300">Your email</label>
                  <input type="email" name="email" id="email" class="bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@TeamZ.com" required>
              </div>
              <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-300">Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
              </div>
              <div class="flex items-center justify-between">
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-600 rounded bg-gray-700 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="remember" class="text-gray-400">Remember me</label>
                      </div>
                  </div>
                  <a href="/forgot-password" class="text-sm text-gray-400 font-medium text-primary-600 hover:underline">Forgot password?</a>
              </div>
              <button type="submit" class="w-full bg-gradient-to-r from-red-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:from-blue-500 hover:to-red-500 transform hover:-translate-y-1 transition duration-300">Sign in</button>
          </form>
      </div>
  </div>
</section>
