<script lang='ts'>
  import { pushState } from '$app/navigation'
  import { page } from '$app/stores'
  import { Button } from '$lib/components/ui/button'
  import { Textarea } from '$lib/components/ui/textarea'

  let value = $state('')
</script>

<main class='mx-auto flex flex-col gap-5 container'>
  <Textarea class='min-h-50svh' bind:value />

  <Button
    class='self-start'
    onclick={() => {
      for (const x of [...value]) pushState('', { x })
    }}
  >Push</Button>

  <pre>{value}</pre>
  <pre>{$page.state.x ?? ''}</pre>
</main>
