export const wordData = ({ word, meanings, phonetics, origin }) => {
  const { text, audio } = phonetics[0];
  const { partOfSpeech, definitions } = meanings[0];
  const { definition, example, antonyms, synonyms } = definitions[0];

  return `
    <h1 class="text-lg font-bold">Word: <span>${word}</span></h1>
        <div class="text-sm space-y-2">
            <div class="flex items-center justify-between border border-green-400 p-2 rounded-md">
                <div>
                <p class="text-sm"><span class="font-bold">Phonetic:</span> <span>${text}</span></p>
                <p><span class="font-bold">Part of speech:</span> <span>${partOfSpeech}</span></p>
                </div>
                <div>
                <i class="fas fa-volume-up text-green-500 cursor-pointer"></i>
                <audio class="hidden" controls>
                <source src="${audio}" type="audio/mp3">
                </audio>
                </div>
                </div>
                <p><span class="font-bold">Origin:</span> <span>${origin}</span></p>
                <p><span class="font-bold">Definition:</span> <span>${definition}</span></p>
                <p><span class="font-bold">Example:</span> <span>${example}</span></p>
                
                
            <div class="flex text-center">
                    <div class="flex-1">
                    <p class="text-center font-bold">Synonyms</p>
                    <ul>
                    ${
                      synonyms.length > 3
                        ? synonyms
                            .slice(0, 3)
                            .map((word) => `<li>${word}</li>`)
                            .reduce((all, li) => all + li)
                        : synonyms.length >= 1 && synonyms.length < 3
                        ? synonyms
                            .map((word) => `<li>${word}</li>`)
                            .reduce((all, li) => all + li)
                        : "<li>No Synonyms</li>"
                    }
                    </ul>
                    </div>
                    <div class="flex-1">
                    <p class="text-center font-bold">Antonyms</p>
                    <ul>
                    ${
                      antonyms.length > 3
                        ? antonyms
                            .slice(0, 3)
                            .map((word) => `<li>${word}</li>`)
                            .reduce((all, li) => all + li)
                        : antonyms.length >= 1 && antonyms.length < 3
                        ? antonyms
                            .map((word) => `<li>${word}</li>`)
                            .reduce((all, li) => all + li)
                        : "<li>No Antonyms</li>"
                    }
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `;
};

export const noSuchWord = ({ word }) => {
  return `<p class="text-center py-4">No Such Word as <span class="text-red-400 font-bold">${word}</span></p>`;
};

export const loading = ({ word }) => {
  return `<p class="text-center py-3">Searching for <span class="text-green-500 font-bold">${word}</span></p>`;
};
