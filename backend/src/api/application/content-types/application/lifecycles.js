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
          "https://script.google.com/macros/s/AKfycbxe1i3GYRcp3IRk8UZD70trinO3niT6zSbVVpe7-alBQzmFZ2UsJnx9SLHhPT2zfRQz/exec",
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
