<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useVacanciesStore } from "@/stores/vacancies";

const route = useRoute();
const { create } = useStrapi();

// Підключаємо Pinia store
const vacanciesStore = useVacanciesStore();

// Створюємо локальний стан форми
const form = ref({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    birthDate: "",
    vacancy: "",
    comment: "",
    militaryService: "",
});

const isSubmitting = ref(false);
const formError = ref("");
const formSuccess = ref("");

const MAX_COMMENT_LENGTH = 2000;

// Ставимо вакансію з query (якщо є)
watch(
    () => vacanciesStore.vacancies,
    (vacs) => {
        const vacancyId = route.query.vacancy;
        if (vacancyId && vacs.some(v => v.id === Number(vacancyId))) {
            form.value.vacancy = vacs.find(v => v.id === Number(vacancyId))?.attributes.title || "";
        }
    },
    { immediate: true }
);

// Валідація
const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidPhone = (phone: string) => /^\+380\d{9}$/.test(phone);

// Сабміт форми
const handleSubmit = async () => {
    formError.value = "";
    formSuccess.value = "";
    isSubmitting.value = true;

    const errors: Record<string, string> = {};

    if (!form.value.firstName) errors.firstName = "Будь ласка, введіть ім'я";
    if (!form.value.lastName) errors.lastName = "Будь ласка, введіть прізвище";
    if (!form.value.phone) errors.phone = "Будь ласка, введіть телефон";

    if (form.value.email && !isValidEmail(form.value.email))
        errors.email = "Некоректний email";
    if (form.value.phone && !isValidPhone(form.value.phone))
        errors.phone = "Телефон має бути у форматі +380XXXXXXXXX";

    if (form.value.comment && form.value.comment.length > MAX_COMMENT_LENGTH) {
        errors.comment = `Коментар не може бути довше ${MAX_COMMENT_LENGTH} символів`;
    }

    if (Object.keys(errors).length) {
        formError.value = Object.values(errors).join(". ");
        isSubmitting.value = false;
        return;
    }

    const payload = {
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        phone: form.value.phone,
        email: form.value.email || null,
        birthDate: form.value.birthDate || null,
        vacancy: form.value.vacancy || "Інше",
        comment: form.value.comment || null,
        militaryService:
            form.value.militaryService === "yes"
                ? true
                : form.value.militaryService === "no"
                    ? false
                    : null,
    };

    try {
        await create("applications", payload);
        formSuccess.value = "Ваша заявка успішно надіслана!";
        form.value = {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            birthDate: "",
            vacancy: "",
            comment: "",
            militaryService: "",
        };
    } catch (err: any) {
        formError.value =
            "Сталася помилка при надсиланні заявки. Спробуйте пізніше.";
        console.error("Strapi error:", err.response ? err.response.data : err);
    } finally {
        isSubmitting.value = false;
    }
};
</script>
<template>
    <div class="max-w-2xl mx-auto p-6 bg-base-100 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-6 text-center">Подати заявку</h2>
        <form @submit.prevent="handleSubmit" class="space-y-5">
            <!-- Ім’я -->
            <div>
                <label class="label"><span class="label-text">Ім’я*</span></label>
                <input v-model="form.firstName" type="text" placeholder="Введіть ім’я"
                    class="input input-bordered w-full" required />
            </div>
            <!-- Прізвище -->
            <div>
                <label class="label"><span class="label-text">Прізвище*</span></label>
                <input v-model="form.lastName" type="text" placeholder="Введіть прізвище"
                    class="input input-bordered w-full" required />
            </div>
            <!-- Телефон -->
            <div>
                <label class="label"><span class="label-text">Телефон*</span></label>
                <input v-model="form.phone" type="tel" placeholder="+380XXXXXXXXX" class="input input-bordered w-full"
                    required />
            </div>
            <!-- Email -->
            <div>
                <label class="label"><span class="label-text">Email</span></label>
                <input v-model="form.email" type="email" placeholder="example@gmail.com"
                    class="input input-bordered w-full" />
            </div>
            <!-- Дата народження -->
            <div>
                <label class="label"><span class="label-text">Дата народження</span></label>
                <input v-model="form.birthDate" type="date" class="input input-bordered w-full" />
            </div>
            <!-- Військова служба -->
            <div>
                <label class="label"><span class="label-text">Чи проходили військову службу?</span></label>
                <select v-model="form.militaryService" class="select select-bordered w-full">
                    <option disabled value="">Оберіть відповідь</option>
                    <option value="yes">Так</option>
                    <option value="no">Ні</option>
                </select>
            </div>
            <!-- Вакансія -->
            <div>
                <label class="label"><span class="label-text">Вакансія</span></label>
                <select v-model="form.vacancy" class="select select-bordered w-full">
                    <option disabled value=""> {{ vacanciesStore.isLoading ? "Завантаження вакансій..." :
                        "Оберіть&nbsp;вакансію" }} </option>
                    <option v-for="vac in vacanciesStore.vacancies" :key="vac.id" :value="vac.attributes.title"> {{
                        vac.attributes.title }} </option>
                    <option value="other">Інше</option>
                </select>
            </div>
            <!-- Коментар -->
            <div>
                <label class="label"><span class="label-text">Коментар</span></label>
                <textarea v-model="form.comment" :maxlength="MAX_COMMENT_LENGTH" placeholder="Додаткова інформація"
                    class="textarea textarea-bordered w-full"></textarea>
                <p class="text-sm text-gray-500 mt-1"> {{ form.comment.length }} / {{ MAX_COMMENT_LENGTH }} символів
                </p>
            </div>
            <!-- Повідомлення про помилки -->
            <p v-if="formError" class="text-red-500 font-medium">{{ formError }}</p>
            <!-- Повідомлення про успіх -->
            <p v-if="formSuccess" class="text-green-600 font-medium">{{ formSuccess }}</p>
            <!-- Кнопка -->
            <div class="flex justify-center">
                <button type="submit" class="btn btn-primary btn-lg w-full" :disabled="isSubmitting"> {{ isSubmitting ?
                    "Надсилаю..." : "Подати заявку" }} </button>
            </div>
        </form>
    </div>
</template>
