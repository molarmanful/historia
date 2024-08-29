<script lang='ts'>
  import Moon from 'lucide-svelte/icons/moon'
  import Sun from 'lucide-svelte/icons/sun'
  import { toggleMode } from 'mode-watcher'

  import { Button } from '$lib/components/ui/button'

  interface Props {}

  const { ...props }: Props = $props()
</script>

<Button size='icon' variant='outline' on:click={toggleMode} {...props}>
  <Sun
    class='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0 dark:-rotate-90'
  />
  <Moon
    class='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
  />
  <span class='sr-only'>Toggle theme</span>
</Button>
