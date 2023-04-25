import mongoose from 'mongoose';

const receitaSchema = new mongoose.Schema({

  titulo: {
    type: String,
    required: [true, 'O título da receita é obrigatório.'],
    minlength: [3, 'O título da receita deve ter no mínimo 3 caracteres.'],
  },
  
  tempoPreparo: {
    type: Number,
    required: [true, 'O tempo de preparo da receita é obrigatório.'],
    validate: {
      validator: v => {
        return v < 10;
      },
      message: 'O tempo de preparo da receita deve ser menor que 10 minutos.'
    }
  },
  
  porcoes: {
    type: Number,
    required: [true, 'A quantidade de porções da receita é obrigatória.']
  },
  
  imagem: {
    type: String,
    required: [true, 'A imagem da receita é obrigatória.']
  },
});

const Receita = mongoose.model('Receita', receitaSchema);

export default Receita;