<template>
    <div :class="computedClass" aria-hidden="true"></div>
</template>
<script setup lang="ts">
import { computed } from 'vue'

interface Props {
    /**  
     * Direction of spacing  
     * horizontal → sets width  
     * vertical → sets height
     */
    direction?: 'vertical' | 'horizontal'
    /**  
     * Tailwind size: `1`, `2`, `4`, `8`, etc.  
     * Defaults to `4` → `h-4` or `w-4`
     */
    size?: number | string
    /**  
     * Allow custom Tailwind class override  
     * Example: `my-10` or `px-8`
     */
    customClass?: string
}

const props = withDefaults(defineProps<Props>(), {
    direction: 'vertical',
    size: 4,
    customClass: ''
})

/**
 * Dynamically generates Tailwind classes based on props.
 */
const computedClass = computed(() => {
    // If user provided a custom class → override default
    if (props.customClass) {
        return props.customClass
    }

    const s = typeof props.size === 'number' ? props.size : props.size.toString()

    return props.direction === 'vertical' ? `h-${s}` : `w-${s}`
})
</script>
