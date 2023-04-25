import Comentario from '../models/Comentario.js';

const listarPorReceita = async (req, res, next) => {
  
  try {
    
    //const comentarios = await Comentario.find({ receita: req.params.receita_id }).populate('receita');

    const { pagina = 1, itensPorPagina = 10 } = req.query;
    
    const totalItens = await Comentario.countDocuments({ receita: req.params.receita_id });
    
    const comentarios = await Comentario.find({ receita: req.params.receita_id })
      .populate('receita')
      .skip((pagina - 1) * itensPorPagina)
      .limit(itensPorPagina);
    
    const totalPaginas = Math.ceil(totalItens / itensPorPagina);
    
    res.status(200);
    res.send({
      totalItens,
      totalPaginas,
      paginaAtual: pagina,
      itensPorPagina,
      comentarios
    });
  } catch (error) {
    next(error)
  }
}

const listarPorId = async (req, res, next) => {
  
  try {
    
    const comentario = await Comentario.findById(req.params.id);
    res.status(200);
    res.send(comentario);
  } catch (err) {
    next(err);
  }
}

const criar = async (req, res, next) => {
  
  try {
    
    const { texto, autor, receita } = req.body;
    
    const novoComentario = new Comentario({
      texto,
      autor,
      receita
    });
    
    const comentarioSalvo = await novoComentario.save();
    
    res.status(201);
    res.send(comentarioSalvo);
  } catch (err) {
    next(err);
  }
}

const deletar = async (req, res, next) => {
  
  try {
    
    const comentarioDeletado = await Comentario.findByIdAndDelete(req.params.id);
    
    if (!comentarioDeletado) {
      return res.status(404).send({ message: 'Comentário não encontrado' });
    }
    
    res.status(200);
    res.send(comentarioDeletado);
  } catch (err) {
    next(err);
  }
}

const comentariosController = {
  listarPorReceita,
  listarPorId,
  criar,
  deletar
}

export default comentariosController;