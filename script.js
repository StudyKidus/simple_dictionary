import { loading, noSuchWord, wordData } from "./temp.js";

const form = document.querySelector("form");
const cont = document.querySelector(".cont");

form.onsubmit = async (e) => {
  e.preventDefault();

  const word = e.target.word.value;

  cont.innerHTML = loading({ word });

  try {
    const res = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word ? word : "Help"}`
      );
      
      
      cont.innerHTML = wordData(res.data[0])
      
      const audio = document.querySelector("audio");
    const playBtn = document.querySelector("i");
    
    playBtn.onclick = () => {
      audio.play();
    }
  } catch (err) {
    console.log(err)
    cont.innerHTML = noSuchWord({ word });
  }
};
