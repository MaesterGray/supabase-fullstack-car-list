<script lang="ts">
    import Editcar from "$lib/components/Editcar.svelte";
    import Carform from "$lib/components/Carform.svelte";
    let {data} = $props()
    
   
</script>
<div class="min-h-screen bg-gray-900 text-gray-300">
    <div class="container mx-auto p-6 sm:p-12">
        <div class="flex justify-between items-start">
            <h1 class="text-5xl md:text-6xl font-extrabold text-white mb-6">My Car List</h1>
            <form action="?/signOut" method="post">
                <button 
                    type="submit" 
                    class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                    Sign out
                </button>
            </form>
        </div>
        <Carform route='?/addCars'/>
        <div class=" mt-6">
            {#each data.cars as car }
                <div class=" mb-4 p-4 bg-gray-800 rounded-lg shadow">
                    <h2 class=" text-xl text-white mb-2">{car.brand} - {car.model}</h2>
                    <div class=" flex space-x-2">
                        <form action="?/deleteCar" method="post">
                            <input type="hidden" name='id' bind:value={car.id}>
                            <button class=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" type='submit'>Delete</button>
                        </form>
                        <Editcar {car} route='?/editCar'/>
                    </div>
                    
                </div>
            {/each}
        </div>
        </div>
        </div>