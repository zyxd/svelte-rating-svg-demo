<main>
	<header>
		<h1>
			<a href="https://github.com/zyxd/svelte-store-router">
				svelte-rating-svg
			</a>
		</h1>
		<p>
			Scalable stars-rating component for Svelte
		</p>
	</header>

	<div class="rating">
		<Rating {value} {color} max={stars}/>
	</div>

	<div>Rating: {minmax(value, 0, 5).toFixed(1)}</div>

	<br><br>

	<form>
		<div class="label">Color:</div>
		<select bind:value={color}>
			<option>red</option>
			<option>green</option>
			<option>blue</option>
			<option>orange</option>
			<option>purple</option>
			<option>#0AD5CB</option>
			<option>#739086</option>
		</select>

		<div class="label">Stars:</div>
		<input type="range" bind:value={stars} min="1" max="20">
	</form>
</main>

<script>
	import { onMount } from 'svelte'
	import Rating from 'svelte-rating-svg'
	
	let value
	let color
	let stars = 5
	
	const minmax = (value, min, max) => ((max - min) * value) + min
	
	onMount(() => setInterval(() => value = (Math.sin(Date.now() * 0.0005) + 1) / 2, 100))
</script>

<style>
	main {
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 1.5rem;
		font-weight: 300;
		text-align: center;
		margin: 0;
		padding: 0.4rem 0;
	}

	h1 > a {
		color: inherit;
	}

	p {
		font-size: 0.8rem;
		text-align: center;
	}

	@media (min-width: 640px) {
		main {
			max-width: 600px;
		}
	}
	
	.rating {
		width: 100%;
		max-width: 30rem;
		height: 5rem;
		margin: 0 auto;
	}

	form {
		font-size: 0.8rem;
		max-width: 250px;
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: auto;
		grid-column-gap: 1rem;
		grid-row-gap: 1rem;
		align-items: center;
		;
	}

	form input, select {
		margin: 0;
	}
</style>