import mongoose from 'mongoose';

const receitaSchema = new mongoose.Schema({

  //adicionar data de criação da receita e receita
  
  titulo: {
    type: String,
    required: true,
  },
  tempoPreparo: {
    type: Number,
    required: true,
  },
  porcoes: {
    type: Number,
    required: true,
  },
  imagem: {
    type: String,
    required: true,
  },
});

const Receita = mongoose.model('Receita', receitaSchema);

export default Receita;