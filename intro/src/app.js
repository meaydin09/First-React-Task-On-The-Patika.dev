import getData from './lib/service.js';

const main = async () => {
  try {
    const result = await getData(1); // Kullanıcı ID'sini girin
    console.log(result);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
};

main();
