<script lang='ts'>
  import { pushState } from '$app/navigation'
  import { page } from '$app/stores'
  import { El } from '$lib/components/typography'
  import { Button } from '$lib/components/ui/button'
  import { Textarea } from '$lib/components/ui/textarea'

  let value = $state('')
</script>

<El el='h1'>Historia</El>
<Textarea bind:value />
<Button onclick={() => {
  for (const x of [...value])
    pushState('', { x })
}}>Push</Button>
<pre>{value}</pre>
<pre>{$page.state.x ?? ''}</pre>
