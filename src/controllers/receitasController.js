import Receita from '../models/Receita.js';

//ToDo: upload de imagem

const listarReceitas = async (req, res) => {

  try {
    const receitas = await Receita.find();
    res.json(receitas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const listarReceitaPorId = async (req, res) => {
  
  try {
    const receita = await Receita.findById(req.params.id);
    res.json(receita);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const criarReceita = async (req, res) => {
  
  try {
    const { titulo, tempoPreparo, porcoes, imagem } = req.body;
    const novaReceita = new Receita({
      titulo,
      tempoPreparo,
      porcoes,
      imagem
    });
    const receitaSalva = await novaReceita.save();
    res.status(201).json(receitaSalva);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const atualizarReceita = async (req, res) => {
  
  try {
    
    const receita = await Receita.findById(req.params.id);
    if (!receita) {
      return res.status(404).json({ message: 'Receita não encontrada' });
    }

    // Atualiza a receita com os valores do corpo da requisição
    receita.titulo = req.body.titulo || receita.titulo;
    receita.tempoPreparo = req.body.tempoPreparo || receita.tempoPreparo;
    receita.porcoes = req.body.porcoes || receita.porcoes;
    receita.imagem = req.body.imagem || receita.imagem;

    // Salva a receita atualizada no banco de dados
    const receitaAtualizada = await receita.save();

    res.json(receitaAtualizada);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const deletarReceita = async (req, res) => {
  
  try {
    const receita = await Receita.findById(req.params.id);
    await receita.remove();
    res.json({ message: 'Receita excluída com sucesso' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const receitasController = {
  listarReceitas,
  listarReceitaPorId,
  criarReceita,
  atualizarReceita,
  deletarReceita
}

export default receitasController;