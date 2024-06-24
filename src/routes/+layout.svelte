<script>
	import '../app.css';
	import { goto, invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	let { data, children } = $props();

	const { session, supabase } = data;

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (!newSession) {
				/**
				 * Queue this as a task so the navigation won't prevent the
				 * triggering function from completing
				 */
				setTimeout(() => {
					goto('/', {
						invalidateAll: true
					});
				});
			}

			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

{@render children()}

