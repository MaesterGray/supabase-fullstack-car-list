<script lang="ts">
    let {route}:{route:string}= $props()
</script>
<form action={route} class="mb-6" method="post">
    <div class="mb-4">
        <label for="brand" class="block text-white mb-2">Brand</label>
        <input 
            type="text"
            id="brand"
            name="brand"
            class="shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-2 px-3 text-white"
            required
        />
    </div>
    <div class="mb-4">
        <label for="model" class="block text-white mb-2">Model</label>
        <input 
            type="text"
            id="model"
            name="model"
            class="shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-2 px-3 text-white"
            required
        />
    </div>
    <div class="mb-4">
        <label for="referenceNumber" class="block text-white mb-2">Reference Number</label>
        <input 
            type="text"
            id="referenceNumber"
            name="referenceNumber"
            class="shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-2 px-3 text-white"
        />
    </div>
    <button type="submit" class="bg-gray-600 hover:bg-gray-300 text-white hover:text-black font-bold py-2 px-4 rounded">
        Add Car
    </button>
</form>  