import Rating from 'svelte-rating-svg'

export async function get({ params }) {
  const { value, max, color } = params
  
  const { html } = Rating.render({
    value,
    color,
    max
  })

	return {
    body: html,
    headers: {
      'content-type': 'image/svg+xml'
    }
  }
}