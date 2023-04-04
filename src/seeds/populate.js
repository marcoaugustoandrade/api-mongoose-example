import db from "../config/database.js";
import Receita from "../models/Receita.js";

const receitas = [
  {
    "titulo": "Bolo de Cenoura",
    "porcoes": 8,
    "tempoPreparo": 1,
    "imagem": "https://www.exemplo.com/bolo_de_cenoura.jpg"
  },
  {
    "titulo": "Lasanha à Bolonhesa",
    "porcoes": 6,
    "tempoPreparo": 2,
    "imagem": "https://www.exemplo.com/lasanha_a_bolonhesa.jpg"
  },
  {
    "titulo": "Pudim de Leite",
    "porcoes": 10,
    "tempoPreparo": "1 hora e 30 minutos",
    "imagem": "https://www.exemplo.com/pudim_de_leite.jpg"
  },
  {
    "titulo": "Frango Xadrez",
    "porcoes": 4,
    "tempoPreparo": 3,
    "imagem": "https://www.exemplo.com/frango_xadrez.jpg"
  },
  {
    "titulo": "Sopa de Legumes",
    "porcoes": 6,
    "tempoPreparo": 1,
    "imagem": "https://www.exemplo.com/sopa_de_legumes.jpg"
  },
  {
    "titulo": "Salada de Grão de Bico",
    "porcoes": 4,
    "tempoPreparo": 2,
    "imagem": "https://www.exemplo.com/salada_de_grao_de_bico.jpg"
  },
  {
    "titulo": "Risoto de Camarão",
    "porcoes": 4,
    "tempoPreparo": 20,
    "imagem": "https://www.exemplo.com/risoto_de_camarao.jpg"
  },
  {
    "titulo": "Feijoada",
    "porcoes": 8,
    "tempoPreparo": 20,
    "imagem": "https://www.exemplo.com/feijoada.jpg"
  },
  {
    "titulo": "Torta de Frango",
    "porcoes": 6,
    "tempoPreparo": 1,
    "imagem": "https://www.exemplo.com/torta_de_frango.jpg"
  },
  {
    "titulo": "Salada Caesar",
    "porcoes": 4,
    "tempoPreparo": 15,
    "imagem": "https://www.exemplo.com/salada_caesar.jpg"
  },
  {
    "titulo": "Macarrão com Queijo",
    "porcoes": 4,
    "tempoPreparo": 30,
    "imagem": "https://www.exemplo.com/macarrao_com_queijo.jpg"
  },
  {
    "titulo": "Estrogonofe de Carne",
    "porcoes": 6,
    "tempoPreparo": 1,
    "imagem": "https://www.exemplo.com/estrogonofe_de_carne.jpg"
  },
  {
    "titulo": "Arroz de Forno",
    "porcoes": 6,
    "tempoPreparo": 1,
    "imagem": "https://www.exemplo.com/arroz_de_forno.jpg"
  },
]

receitas.forEach(async receita => {
  
  //TODO: trocar para many
  try {
    const novaReceita = new Receita(receita);
    await novaReceita.save();
    console.log(novaReceita);
  } catch (err) {
    console.log(err);
  }
});