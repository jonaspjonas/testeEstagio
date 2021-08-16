const axios = require("axios");

async function consultaPorCNPJ(req, res) {
    cnpj = Number(req.params.cnpj);
    console.log(cnpj);
    
    if(isNaN(cnpj)){
        res.status(400);
        res.json({Mensagem: "O valor informado deve ser numérico"});
        return;
    }
    if(!cnpj){
        res.status(400);
        res.json({Mensagem: "Favor informar um CPNJ."});
        return;
    }


    const cnpjConsultado = await axios.get(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`);
    
    
    res.json({
        atividadePrincipal: cnpjConsultado.data.atividade_principal,
        atividadesSecundarias: cnpjConsultado.data.atividades_secundarias,
        nome: cnpjConsultado.data.nome,
        uf: cnpjConsultado.data.uf,
        telefone: cnpjConsultado.data.telefone,
        email: cnpjConsultado.data.email,
        dataDeAbertura: cnpjConsultado.data.abertura,
    });
}

module.exports = {consultaPorCNPJ};