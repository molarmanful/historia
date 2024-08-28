<script lang='ts'>
  import type { Snippet } from 'svelte'

  import '@unocss/reset/tailwind-compat.css'
  import 'uno.css'
  import '$lib/main.css'

  interface Props {
    children: Snippet
  }

  const { children }: Props = $props()
</script>

{@render children()}
