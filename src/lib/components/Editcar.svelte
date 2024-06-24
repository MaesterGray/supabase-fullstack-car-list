<script lang="ts">
    import type {Car} from '$lib'
    let {car,route}:{car:Car,route:string} = $props()
    let showmodal = $state(false)
    let formdata = {
        brand:car.brand,
        model:car.model,
        referenceNumber:car.refrence_number
    }
</script>


<div>
    <button onclick={() => showmodal= true} class="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
        Edit
    </button>
    {#if showmodal}
        
    
        <div class="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center px-4">
            <div class="modal-content bg-gray-900 p-6 rounded-lg w-full max-w-md">
            <span class="close text-white text-xl leading-none hover:text-gray-300 cursor-pointer float-right" onclick={() => showmodal=false}>&times;</span>
            <form action={route} method="post"  class="mt-4">
                <input 
                    type="hidden" 
                    name="id" 
                    bind:value={car.id} 
                />
                <div class="mb-4">
                    <label for="brand" class="block text-gray-300 mb-2">Brand</label>
                    <input 
                        type="text" 
                        id="brand"
                        name="brand" 
                        bind:value={formdata.brand} 
                        class="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500" 
                    />
                </div>
                <div class="mb-4">
                    <label for="model" class="block text-gray-300 mb-2">Model</label>
                    <input 
                        type="text" 
                        id="model"
                        name="model" 
                        bind:value={formdata.model} 
                        class="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500" 
                    />
                </div>
                <div class="mb-4">
                    <label for="referenceNumber" class="block text-gray-300 mb-2">Reference Number</label>
                    <input 
                        type="text" 
                        id="referenceNumber"
                        name="referenceNumber" 
                        bind:value={formdata.referenceNumber} 
                        class="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500" 
                    />
                </div>
                <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Update Car
                </button>
            </form>
            </div>
        </div>
        {/if}
</div>