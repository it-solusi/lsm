<script lang="ts" setup>
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { RangeCalendarCellTrigger, type RangeCalendarCellTriggerProps, useForwardProps } from 'reka-ui'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<RangeCalendarCellTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarCellTrigger
    :class="cn(
      buttonVariants({ variant: 'ghost' }),
      'h-8 w-8 p-0 font-normal data-[selected]:opacity-100',
      '[&[data-today]:not([data-selected])]:bg-neutral-100 [&[data-today]:not([data-selected])]:text-neutral-900 dark:[&[data-today]:not([data-selected])]:bg-neutral-800 dark:[&[data-today]:not([data-selected])]:text-neutral-50',
      // Selection Start
      'data-[selection-start]:bg-neutral-900 data-[selection-start]:text-neutral-50 data-[selection-start]:hover:bg-neutral-900 data-[selection-start]:hover:text-neutral-50 data-[selection-start]:focus:bg-neutral-900 data-[selection-start]:focus:text-neutral-50 dark:data-[selection-start]:bg-neutral-50 dark:data-[selection-start]:text-neutral-900 dark:data-[selection-start]:hover:bg-neutral-50 dark:data-[selection-start]:hover:text-neutral-900 dark:data-[selection-start]:focus:bg-neutral-50 dark:data-[selection-start]:focus:text-neutral-900',
      // Selection End
      'data-[selection-end]:bg-neutral-900 data-[selection-end]:text-neutral-50 data-[selection-end]:hover:bg-neutral-900 data-[selection-end]:hover:text-neutral-50 data-[selection-end]:focus:bg-neutral-900 data-[selection-end]:focus:text-neutral-50 dark:data-[selection-end]:bg-neutral-50 dark:data-[selection-end]:text-neutral-900 dark:data-[selection-end]:hover:bg-neutral-50 dark:data-[selection-end]:hover:text-neutral-900 dark:data-[selection-end]:focus:bg-neutral-50 dark:data-[selection-end]:focus:text-neutral-900',
      // Outside months
      'data-[outside-view]:text-neutral-500 data-[outside-view]:opacity-50 [&[data-outside-view][data-selected]]:text-neutral-500 [&[data-outside-view][data-selected]]:opacity-30 dark:data-[outside-view]:text-neutral-400 dark:[&[data-outside-view][data-selected]]:text-neutral-400',
      // Disabled
      'data-[disabled]:text-neutral-500 data-[disabled]:opacity-50 dark:data-[disabled]:text-neutral-400',
      // Unavailable
      'data-[unavailable]:text-neutral-50 data-[unavailable]:line-through dark:data-[unavailable]:text-neutral-50',
      props.class,
    )"
    v-bind="forwardedProps"
  >
    <slot />
  </RangeCalendarCellTrigger>
</template>
