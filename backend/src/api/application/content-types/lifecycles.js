const axios = require("axios");

module.exports = {
    async afterCreate(event) {    // Connected to "Save" button in admin panel
        const { result } = event;

      console.log("🔥 Хук afterCreate спрацював!");

      try {

        const payload = {
          firstName: result.firstName,
          lastName: result.lastName,
          phone: result.phone,
          email: result.email,
          birthDate: result.birthDate,
          vacancy: result.vacancy,
          comment: result.comment,
          militaryService: result.militaryService,
        };

        await axios.post(
          "https://script.google.com/macros/s/AKfycbxAGduWQHjkZBB0I_QQPQrMbVEdCo1wpmHv9iU_0vmdtU147kZZLD-ZOb8r7peevr8A/exec",
          payload,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        strapi.log.info("✅ Заявку відправлено у Google Sheets");
      } catch (error) {
        strapi.log.error("❌ Помилка відправки у Google Sheets:", error.message);
      }
    },
  
};
