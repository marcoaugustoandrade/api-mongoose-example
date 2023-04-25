import mongoose from 'mongoose';

const comentarioSchema = new mongoose.Schema({
  
  texto: {
    type: String,
    required: [true, 'O texto do comentário é obrigatório.'],
    minlength: [5, 'O texto do comentário deve ter no mínimo 5 caracteres.'],
  },
  
  autor: {
    type: String,
    required: [true, 'O autor do comentário é obrigatório.'],
    minlength: [3, 'O nome do autor do comentário deve ter no mínimo 3 caracteres.'],
  },
  
  dataCriacao: {
    type: Date,
    default: Date.now(),
  },
  
  receita: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Receita',
    required: [true, 'A referência da receita é obrigatória.'],
  },
});

const Comentario = mongoose.model('Comentario', comentarioSchema);

export default Comentario;
