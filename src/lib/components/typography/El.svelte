<script lang='ts'>
  import type { Snippet } from 'svelte'

  type ElType = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'blockquote' | 'small'

  interface Props {
    el: ElType
    class?: string
    children: Snippet
  }

  const { el, class: clazz, children, ...props }: Props = $props()

  const mappings: Record<ElType, string> = {
    h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
    h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
    h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
    h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
    p: 'leading-7 [&:not(:first-child)]:mt-6',
    blockquote: 'mt-6 border-l-2 pl-6 italic',
    small: 'text-sm font-medium leading-none',
  }

  const base: string = $derived(mappings[el])
</script>

<svelte:element
  this={el}
  class='{base} {clazz}'
  {...props}
>{@render children()}</svelte:element>
