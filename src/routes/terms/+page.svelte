<script>
    let agreed = false;
  
    function handleAgree() {
        agreed = true;
        // Add any additional logic for when the user agrees to the terms
    }
</script>

<div class="min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex flex-col items-center justify-center py-12">
    <div class="bg-gradient-to-r from-red-500 to-blue-500 shadow-md rounded-lg p-8 max-w-3xl w-full">
        <h1 class="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <p class="mb-4">
            Welcome to our Property Registry System. By accessing or using this service, you agree to the following terms and conditions.
        </p>
        <p class="mb-4">
            <strong>1. Acceptance of Terms</strong><br>
            By registering an account or accessing the system, you acknowledge that you have read, understood, and agree to be bound by these terms.
        </p>
        <p class="mb-4">
            <strong>2. User Responsibilities</strong><br>
            You agree to provide accurate and up-to-date information when registering properties in the system. You are responsible for ensuring that your use of the system complies with all applicable laws and regulations.
        </p>
        <p class="mb-4">
            <strong>3. Property Registration</strong><br>
            The system allows users to register properties and update their details. You are solely responsible for the accuracy of the information you provide, and any fraudulent activity may result in legal action.
        </p>
        <p class="mb-4">
            <strong>4. Privacy and Data Protection</strong><br>
            We are committed to protecting your privacy. Any personal information provided during registration will be handled in accordance with our Privacy Policy.
        </p>
        <p class="mb-4">
            <strong>5. Intellectual Property</strong><br>
            All content, trademarks, and data provided within the system are the property of the respective owners. Unauthorized use of such materials is prohibited.
        </p>
        <p class="mb-4">
            <strong>6. Limitation of Liability</strong><br>
            We are not liable for any damages arising from the use of this system, including loss of data or unauthorized access to your account.
        </p>
        <p class="mb-4">
            <strong>7. Modifications to Terms</strong><br>
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the system.
        </p>
        <p class="mb-4">
            <strong>8. Governing Law</strong><br>
            These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the system operates.
        </p>
        <div class="flex items-center justify-between mt-8">
            <button class="bg-gray-300 text-gray-900 px-4 py-2 rounded-md hover:bg-gray-400" on:click="{() => window.history.back()}">Back</button>
            <button class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700" on:click="{handleAgree}" disabled={agreed}>I Agree</button>
        </div>
    </div>
</div>
