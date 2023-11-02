<script lang="ts">
	import { writable } from 'svelte/store';
	import { setContext } from 'svelte';
	import { aiResponse } from '../store/store';
	let name: string = '';
	let aboutYou: string = '';
	let workoutDays: string = '';
	let researchURLs: string = '';
	let loading: boolean = false;
	let response: string;

	const handleSubmit: any = (e: Event) => {
		e.preventDefault();
		loading = true;

		// Make an HTTP request to the backend
		fetch('http://localhost:9999/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				user_name: name,
				current_fitness: aboutYou,
				workout_days: workoutDays,
				research: researchURLs
			})
		})
		.then((response) => response.json())
		.then((data) => {
			loading = false;
			aiResponse.set(data['choices'][0]['message']['content']);
		})
		.catch((error) => {
			console.log(error);
			loading = false;
			response = error;
		});
	};

	const resetForm = () => {
		name = '';
		aboutYou = '';
		workoutDays = '';
		researchURLs = '';
		response = '';
	};
</script>

<form on:submit={handleSubmit} class="space-y-6 bg-yellow-50 p-6 rounded-lg">
    <div class="flex flex-col">
        <label for="name" class="text-sm font-medium text-gray-800">What's your name?</label>
        <input id="name" type="text" class="px-4 py-3 mt-1 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 bg-white text-gray-800" bind:value={name} />
    </div>

    <div class="flex flex-col">
        <label for="aboutYou" class="text-sm font-medium text-gray-800">Tell us about you! (current fitness, activity level, injury history, etc.)</label>
        <textarea id="aboutYou" class="px-4 py-3 mt-1 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 bg-white text-gray-800" bind:value={aboutYou} />
    </div>

    <div class="flex flex-col">
        <label for="workoutDays" class="text-sm font-medium text-gray-800">How many days a week do you want to workout? (1-7)</label>
        <input id="workoutDays" type="number" min="1" max="7" class="px-4 py-3 mt-1 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 bg-white text-gray-800" bind:value={workoutDays} />
    </div>

    <div class="flex flex-col">
        <label for="researchURLs" class="text-sm font-medium text-gray-800">List of URLs for your workout plan research.</label>
        <textarea id="researchURLs" class="px-4 py-3 mt-1 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 bg-white text-gray-800 h-32" bind:value={researchURLs} />
    </div>

    <div class="flex justify-center space-x-4">
        <button type="submit" class="flex-grow justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
            SUBMIT
        </button>
        <button type="button" on:click={resetForm} class="flex-none justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-gray-200 bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            RESET
        </button>
    </div>

    {#if response}
        <div class="mt-4 p-4 text-lg bg-gray-100 text-gray-900 rounded-md">{response}</div>
    {/if}
</form>


