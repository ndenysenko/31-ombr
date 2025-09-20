<template>
    <section class="w-full mx-auto">
        <!-- Header -->
        <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-4">
            <div>
                <h1 class="text-2xl md:text-3xl font-semibold">Озброєння та техніка бригади</h1>
                <p class="text-base-content/70">Короткі описи ключових типів техніки та засобів.</p>
            </div>
        </div>
        <!-- Categories -->
        <div class="flex flex-wrap gap-2 mb-5">
            <button v-for="cat in categoriesWithAll" :key="cat" @click="activeCategory = cat"
                class="btn btn-sm rounded-full"
                :class="activeCategory === cat ? 'btn-primary' : 'btn-ghost border border-base-300'"
                :aria-pressed="activeCategory === cat"> {{ cat }} </button>
        </div>
        <!-- Grid -->
        <div v-if="filtered.length" class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            <article v-for="item in filtered" :key="item.id"
                class="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-shadow">
                <div class="card-body p-5">
                    <div class="flex items-center gap-3">
                        <div class=" placeholder">
                            <div
                                class="bg-base-200 text-base-content/80 rounded-2xl w-12 h-12 flex items-center justify-center">
                                <Icon :name="`mdi:${item.icon}`" size="24" class="text-primary" />
                            </div>
                        </div>
                        <div class="min-w-0">
                            <h2 class="card-title text-lg leading-tight truncate">{{ item.title }}</h2>
                            <div class="flex items-center gap-2 mt-1">
                                <span class="badge badge-ghost badge-sm">{{ item.type }}</span>
                                <span v-for="t in item.tags" :key="t" class="badge badge-outline badge-sm">{{ t
                                    }}</span>
                            </div>
                        </div>
                    </div>
                    <p class="mt-3 text-base-content/80">{{ item.description }}</p>
                </div>
            </article>
        </div>
        <div v-else class="alert">
            <i class="mdi mdi-information-outline" aria-hidden="true"></i>
            <span>Нічого не знайдено. Спробуйте змінити фільтри або пошук.</span>
        </div>
    </section>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'


type AssetItem = {
    id: string
    title: string
    description: string
    type: string
    icon: string
    tags: string[]
}

const items = ref<AssetItem[]>([
    {
        id: 't64bv',
        title: 'Танки Т-64БВ',
        description: 'Це основний танк, що стоїть на озброєнні бригади.',
        type: 'Танки',
        icon: 'tank',
        tags: ['основний бойовий танк']
    },
    {
        id: 'mrap-maxxpro',
        title: 'Бронеавтомобілі MRAP MaxxPro',
        description: 'Надані Україні в рамках допомоги; перевезення особового складу та захист від мін і засідок.',
        type: 'Бронеавто',
        icon: 'shield-car',
        tags: ['MRAP', 'перевезення']
    },
    {
        id: 'bmp',
        title: 'БМП (бойові машини піхоти)',
        description: 'Механізовані бригади ЗСУ зазвичай оснащені БМП-1 або БМП-2 (Козак).',
        type: 'БМП',
        icon: 'car-estate',
        tags: ['БМП-1', 'БМП-2']
    },
    {
        id: 'artillery',
        title: 'Артилерія',
        description: 'Гаубиці 152-мм і Д-30 122-мм; РСЗВ БМ-21 «Град».',
        type: 'Артилерія',
        icon: 'rocket-launch',
        tags: ['гаубиці', 'РСЗВ']
    },
    {
        id: 'atgm',
        title: 'Протитанкові засоби',
        description: 'Переносні ПТРК «Стугна-П», «Корсар», а також Javelin і NLAW.',
        type: 'ПТРК',
        icon: 'target-variant',
        tags: ['ПТРК', 'Javelin', 'NLAW']
    },
    {
        id: 'shorad',
        title: 'Засоби ППО малої дальності',
        description: 'Переносні ПЗРК типу «Игла» чи Stinger.',
        type: 'ППО',
        icon: 'shield-airplane-outline',
        tags: ['ПЗРК', 'Stinger']
    },
    {
        id: 'vehicles',
        title: 'Автомобільна техніка',
        description: 'Різноманітні вантажні автомобілі, броньовані медичні та командно-штабні машини.',
        type: 'Автотехніка',
        icon: 'truck',
        tags: ['логістика', 'медицина']
    },
    {
        id: 'uav',
        title: 'Безпілотні літальні апарати (БпЛА)',
        description: 'Різноманітні типи розвідувальних і ударних дронів.',
        type: 'БпЛА',
        icon: 'drone',
        tags: ['розвідка', 'ударні']
    }
])

const categories = [
    'Танки',
    'Бронеавто',
    'БМП',
    'Артилерія',
    'ПТРК',
    'ППО',
    'Автотехніка',
    'БпЛА'
]

const categoriesWithAll = computed(() => ['Усе', ...categories])

const activeCategory = ref<string>('Усе')


const filtered = computed(() => {
    let list = items.value

    // Category filter
    if (activeCategory.value !== 'Усе') {
        list = list.filter((i) => i.type === activeCategory.value)
    }


    return list
})


</script>
<style scoped>
/* Ensure mdi icons align nicely inside avatar */
.mdi {
    line-height: 1;
}
</style>
