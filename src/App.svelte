<main>
	<header>
		<h1>
			<a href="https://github.com/zyxd/svelte-rating-svg">
				svelte-rating-svg
			</a>
		</h1>
		<p>
			Scalable stars-rating component for Svelte
		</p>
	</header>

	<br><br>

	<div class="rating">
		<Rating bind:value={value} bind:color={color} bind:max={stars}/>
	</div>

	<br><br>

	<form>
		<div class="control">
			<div>Rating:</div>
			<div>{parseFloat(value).toFixed(2)}</div>
		</div>

		<div class="control">
			<div>Color:</div>
			<select bind:value={color}>
				<option>red</option>
				<option>green</option>
				<option>blue</option>
				<option>orange</option>
				<option>purple</option>
				<option>#0AD5CB</option>
				<option>#739086</option>
			</select>
		</div>

		<div class="control">
			<div>Stars:</div>
			<input type="range" bind:value={stars} min="1" max="20">
		</div>
	</form>

	<hr>

	<h3>Installation</h3>
	<code>npm install svelte-rating-svg</code>

	<br><br>

	<h3>Usage</h3>
	<code>
&lt;Rating/&gt;

&lt;script&gt;
  import Rating from 'svelte-rating-svg'
&lt;/script&gt;
	</code>

	<br><br>

	<h3>Properties</h3>
	<p><strong>value</strong> - Value between 0 and 1</p>
	<p><strong>color</strong> - Color of stars</p>
	<p><strong>max</strong> - Maximum number of stars</p>
	<p><strong>duration</strong> - Filling of rating duration in seconds</p>

	<br><br>

	<h3>Examples</h3>
	<div class="example">
		<code>&lt;Rating value=&quot;0.5&quot; color=&quot;green&quot; max=&quot;3&quot;/&gt;</code>
		<div class="rating">
			<Rating value="0.5" color="green" max="3"/>
		</div>
	</div>

	<div class="example">
		<code>&lt;Rating value=&quot;0.9&quot; color=&quot;#AAA&quot; duration=&quot;10000&quot;/&gt;</code>
		<div class="rating">
			<Rating value="0.9" color="#AAA" duration="10000"/>
		</div>
	</div>

	<div class="example">
		<code>&lt;Rating value=&quot;0.4321&quot; max=&quot;1&quot;/&gt;</code>
		<div class="rating">
			<Rating value="0.4321" max="1"/>
		</div>
	</div>
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

	header h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 1.5rem;
		font-weight: 300;
		text-align: center;
		margin: 0;
		padding: 0.4rem 0;
	}

	header h1 > a {
		color: inherit;
	}

	header p {
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
		display: flex;
		justify-content: space-between;
	}

	form input, select {
		margin: 0;
	}

	hr {
		margin: 3rem 0;
	}

	p {
		margin: 0;
	}

	.example {
		display: grid;
		grid-template-columns: 70% 1fr;
		grid-column-gap: 1rem;
		grid-row-gap: 1rem;
		align-items: center;
	}

	code {
		display: block;
		background-color: rgb(246, 250, 253);
		border-width: 1px;
		border-style: solid;
		border-color: #ccc;
		border-radius: 4px;
		padding: 0.5rem;
		white-space: pre-wrap;
	}
</style>