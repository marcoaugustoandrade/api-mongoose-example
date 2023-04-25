import db from "../config/database.js";
import disconnect from "../config/disconnectDb.js";
import Receita from "../models/Receita.js";

async function seeds() {

  try {

    const receitas = [
      {
        titulo: 'Bolo de chocolate',
        tempoPreparo: 6,
        porcoes: 8,
        imagem: 'https://www.example.com/images/bolo-de-chocolate.jpg',
      },
      {
        titulo: 'Pizza margherita',
        tempoPreparo: 3,
        porcoes: 4,
        imagem: 'https://www.example.com/images/pizza-margherita.jpg',
      },
      {
        titulo: 'Frango xadrez',
        tempoPreparo: 5,
        porcoes: 6,
        imagem: 'https://www.example.com/images/frango-xadrez.jpg',
      },
    ];

    await Receita.insertMany(receitas);
    await disconnect();  
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
seeds();