import GameSavingLoader from './GameSavingLoader';

(async () => {
  const result = document.querySelector('#result');

  try {
    const saving = await GameSavingLoader.load();
    result.textContent = JSON.stringify(saving, null, 2);
  } catch (error) {
    result.textContent = `Unable to load saving: ${error}`;
  }
})();
