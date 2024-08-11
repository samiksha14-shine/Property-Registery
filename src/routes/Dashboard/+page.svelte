<script lang="ts">
  // Additional logic or data fetching can be added here if needed
</script>

<section class="bg-gradient-to-r from-black via-gray-800 to-black min-h-screen">
  <div class="flex flex-col items-center justify-center py-10 mx-auto md:h-screen lg:py-10">
    <div class="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-6 space-y-6">
      <h1 class="text-3xl font-bold text-center text-gray-100 mb-6">Dashboard</h1>

      <div class="space-y-4">
        <!-- Property Details Section -->
        <a href="/property-details" class="flex items-center justify-center bg-gradient-to-r from-red-500 to-blue-500 text-white font-semibold rounded-lg px-6 py-4 hover:from-blue-500 hover:to-red-500 transition duration-300 shadow-lg text-center">
          <span class="text-lg">Property Details</span>
        </a>

        <!-- Property Issuance Section -->
        <a href="/property-issuance" class="flex items-center justify-center bg-gradient-to-r from-red-500 to-blue-500 text-white font-semibold rounded-lg px-6 py-4 hover:from-blue-500 hover:to-red-500 transition duration-300 shadow-lg text-center">
          <span class="text-lg">Property Issuance</span>
        </a>

        <!-- Property Bidding Section -->
        <a href="/property-bidding" class="flex items-center justify-center bg-gradient-to-r from-red-500 to-blue-500 text-white font-semibold rounded-lg px-6 py-4 hover:from-blue-500 hover:to-red-500 transition duration-300 shadow-lg text-center">
          <span class="text-lg">Property Bidding</span>
        </a>

        <!-- Property Map Section -->
        <a href="/property-map" class="flex items-center justify-center bg-gradient-to-r from-red-500 to-blue-500 text-white font-semibold rounded-lg px-6 py-4 hover:from-blue-500 hover:to-red-500 transition duration-300 shadow-lg text-center">
          <span class="text-lg">Property Map</span>
        </a>
      </div>
      
      <!-- Contact Section -->
      <div class="mt-6 flex justify-center">
        <a href="/contact" class="flex items-center justify-center bg-gray-700 text-white font-semibold rounded-lg px-6 py-3 hover:bg-gray-600 transition duration-300 shadow-md text-center">
          <span class="text-lg">Contact</span>
        </a>
      </div>
    </div>
  </div>
</section>
