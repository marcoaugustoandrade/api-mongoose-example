import Receita from '../models/Receita.js';

//ToDo: rota para upload de imagem


const listar = async (req, res, next) => {

  try {
    
    const { titulo, pagina = 1, itensPorPagina = 10 } = req.query;
    
    const filtro = titulo ? { titulo: { $regex: new RegExp(titulo), $options: 'i' } } : {};
    
    const totalItens = await Receita.countDocuments(filtro);
    
    const receitas = await Receita.find(filtro)
      .skip((pagina - 1) * itensPorPagina)
      .limit(itensPorPagina);
    
    const totalPaginas = Math.ceil(totalItens / itensPorPagina);
    
    res.status(200);
    res.send({
      totalItens,
      totalPaginas,
      paginaAtual: pagina,
      itensPorPagina,
      receitas
    });
  } catch (err) {
    next(err);
  }
}

const listarPorId = async (req, res, next) => {
  
  try {
    
    const receita = await Receita.findById(req.params.id);
    res.status(200);
    res.send(receita);
  } catch (err) {
    next(err);
  }
}

const criar = async (req, res, next) => {
  
  try {
    
    const { titulo, tempoPreparo, porcoes, imagem } = req.body;
    
    const novaReceita = new Receita({
      titulo,
      tempoPreparo,
      porcoes,
      imagem
    });
    
    const receitaSalva = await novaReceita.save();
    
    res.status(201);
    res.send(receitaSalva);
  } catch (err) {
    next(err);
  }
}

const atualizar = async (req, res, next) => {
  
  try { 
    
    const receitaAtualizada = await Receita.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    
    if (!receitaAtualizada) {
      return res.status(404).send({ message: 'Receita não encontrada' });
    }

    res.status(200);
    res.send(receitaAtualizada);
  } catch (err) {
    next(err);
  }
}

const deletar = async (req, res, next) => {
  
  try {
    
    const receitaDeletada = await Receita.findByIdAndDelete(req.params.id);
    
    if (!receitaDeletada) {
      return res.status(404).send({ message: 'Receita não encontrada' });
    }
    
    res.status(200);
    res.send(receitaDeletada);
  } catch (err) {
    next(err);
  }
}

const receitasController = {
  listar,
  listarPorId,
  criar,
  atualizar,
  deletar
}

export default receitasController;