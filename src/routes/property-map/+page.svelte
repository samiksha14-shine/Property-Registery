<script lang="ts">
    import { onMount } from 'svelte';
    import L from 'leaflet';
    import 'leaflet/dist/leaflet.css';
  
    let searchQuery = '';
    let map;
  
    // Initialize Leaflet map
    function initializeMap() {
      map = L.map('map').setView([51.505, -0.09], 13); // Default coordinates
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
      }).addTo(map);
    }
  
    // Handle search form submission
    function handleSearch(event: Event) {
      event.preventDefault();
      // Placeholder logic to update map based on search query
      console.log('Search query:', searchQuery);
      // Example: Add a marker at a new location based on search query
      // Integration with geocoding service would be required here
    }
  
    // Initialize map on component mount
    onMount(() => {
      initializeMap();
    });
  </script>
  
  <style>
    :global(body) {
      background: linear-gradient(to right, #1a202c, #2d3748, #1a202c); /* Gradient background matching other pages */
      color: #e2e8f0; /* Light text color */
    }
    .container {
      background: #2d3748; /* Slightly lighter dark background */
      padding: 2rem;
      border-radius: 0.5rem;
    }
    .form-container {
      background: #2d3748; /* Slightly lighter dark background */
      border: 1px solid #4a5568; /* Border color */
      padding: 2rem;
      border-radius: 0.5rem;
    }
    .button {
      background: linear-gradient(to right, #f56565, #4299e1); /* Gradient matching website theme */
      padding: 0.75rem 1.5rem; /* Matching button padding */
    }
    #map {
      height: 500px; /* Adjust height as needed */
      border-radius: 0.5rem;
    }
  </style>
  
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4">Property Map</h1>
    <form on:submit|preventDefault={handleSearch} class="form-container shadow-md rounded mb-6">
      <div class="mb-4">
        <label for="search-query" class="block text-gray-300 text-sm font-bold mb-2">Search Properties:</label>
        <input
          type="text"
          id="search-query"
          bind:value={searchQuery}
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter search query"
        />
      </div>
      <div class="flex items-center justify-center">
        <button
          type="submit"
          class="button hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Search
        </button>
      </div>
    </form>
  
    <div id="map"></div>
  </div>
  