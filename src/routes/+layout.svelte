<script lang='ts'>
  import { ModeWatcher } from 'mode-watcher'
  import type { Snippet } from 'svelte'

  import { LightSwitch } from '$lib/components'

  import '@unocss/reset/tailwind-compat.css'
  import 'uno.css'
  import '$lib/main.css'

  interface Props {
    children: Snippet
  }

  const { children }: Props = $props()
</script>

<ModeWatcher />

<header class='sticky z-50 mb-8 w-full b-b-1 bg-background py-2'>
  <div class='mx-auto h-full flex items-center container'>
    <span class='font-bold'>historia</span>
    <LightSwitch class='ml-auto' />
  </div>
</header>

{@render children()}
