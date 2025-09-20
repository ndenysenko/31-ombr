<script setup>
const props = defineProps({
    category: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <a :href="`/vacancies/category/${category.slug}`" class="group relative block w-full min-h-[380px] md:min-h-[420px] lg:min-h-[520px]
           border border-gray-600 overflow-hidden 
           bg-base-100 transition-all duration-500 
           hover:border-primary focus:border-primary 
           focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
        <!-- Background -->
        <figure class="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1569242840510-9fe6f0112cee?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="Military"
                class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 group-focus:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 
               transition-colors duration-500 
               group-hover:from-black/70 group-hover:to-black/90
               group-focus:from-black/70 group-focus:to-black/90"></div>
        </figure>
        <!-- Content -->
        <div class="relative z-10 flex flex-col justify-between h-full p-6">
            <!-- Category Badge -->
            <span class="badge badge-lg font-semibold text-lg px-5 py-3
               border border-gray-400 bg-black/40 text-gray-200
               transition-colors duration-500
               group-hover:border-primary group-hover:text-primary
               group-focus:border-primary group-focus:text-primary"> {{ category.name }} </span>
            <!-- Arrow Button -->
            <div class="flex justify-end">
                <div
                    class="w-8 h-8 flex items-center justify-center rounded-full
                 border border-gray-500 bg-black/30 b
                 transition-all duration-500
                 group-hover:border-primary group-hover:bg-primary/10 group-hover:translate-y-1 group-hover:rotate-45 group-hover:scale-110
                 group-focus:border-primary group-focus:bg-primary/10 group-focus:translate-y-1 group-focus:rotate-45 group-focus:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="stroke-gray-300 -rotate-45 transform transition-colors duration-500
                   group-hover:stroke-primary group-focus:stroke-primary">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" d="m7 7l10 10m0-10v10H7" />
                    </svg>
                </div>
            </div>
        </div>
    </a>
</template>
