<script>
  import '@unocss/reset/tailwind-compat.css'
  import 'uno.css'
  import '$lib/main.css'

  const { children } = $props()
</script>

{@render children()}
