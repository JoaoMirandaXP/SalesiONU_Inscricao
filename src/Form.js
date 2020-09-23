import React, { useState, useEffect } from 'react'
import api from './services/Api'

export default function Form(){
     
    const [comite,setComite] = useState('')
    const [nome,setNome] = useState('')
    const [email,setEmail] = useState('')
    const [delegacao,setDelegacao]= useState('')
    const [instituicao,setInstituicao]= useState('')
    const [pagamento,setPagamento] = useState(true)
    const [delegacoes,setDelegacoes]=useState([])

    async function HandleCadastro(e){
        e.preventDefault()
        setPagamento(true)
        const revisado = window.confirm("Deseja enviar o cadastro?")
        if(revisado){
        const response = await api.post(`/cadastro/${comite}`,{
            "nome": nome,
            "pagamento": pagamento,
            "email": email,
            "delegacao": delegacao,
            "instituicao": instituicao
        })
        if(response !== [] ){
            alert("Cadastro efetivado com sucesso! Você deverá receber um email de confirmação")
            window.location.reload()
        } 
        else{
            alert("Hmm parece que essa delegação acabou de ser escolhida... Recarregue a página e tente novamente")
            window.location.reload()

        }
        console.log(response)
        }
    }

    useEffect(()=>{
        async function fetchData(){
            let url = `/cadastro/${comite}`            
            let dels = await api.get(url)
            if(url!=="/cadastro/"){
                setDelegacoes(dels.data)
                setDelegacao(dels.data[0].delegacao)
                // console.log(dels)
            }
        }
        fetchData()
    },[comite])
    
    return(
    <>
        <main>
            <form 
            onSubmit={HandleCadastro}
            id="form-inscricao"
            action="/cadastrado"
            method="GET"
            >
                <strong>Inscrição</strong>
                <div className="input-block">
                    <label htmlFor="nome">Nome</label>
                    <input 
                    name="nome" 
                    id="campo_nome"
                    value={nome}
                    onChange={e=>setNome(e.target.value)}
                    required></input>
                </div>
                <div className="input-block">
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email"
                    name="email" 
                    id="campo_email"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    required></input>
                </div>
                <div className="input-block">
                    <label htmlFor="instituicao">Instituição</label>
                    <input 
                    name="instituicao" 
                    id="campo_instituicao"
                    value={instituicao}
                    onChange={e=>setInstituicao(e.target.value)}
                    required></input>
                </div>
                
                <div className="input-block">
                    <label htmlFor="comite">Comitê</label>
                    <select 
                    name="comite" 
                    id="campo_comite"
                    value={comite}
                    onChange={e=>setComite(e.target.value)}
                    defaultValue="Escolha seu comitê"
                    required>
                        <option selected hidden>-----</option>
                        <option>acnur</option>
                        <option>csnu</option>
                        <option>oms</option>
                    </select>
                </div>
                <div className="input-block">
                    <label htmlFor="delegacao">Delegação</label>
                    <select 
                    name="delegacao" 
                    id="campo_delegacao"
                    defaultValue="Escolha sua Delegação"
                    value={delegacao}
                    onChange={e=>setDelegacao(e.target.value)}
                    required>
                        <option id="default" selected disabled>-------</option>
                        {delegacoes.map(del=>(
                            <option id={del._id}>{del.delegacao}</option>
                        ))}
                    </select>
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </main>       
    </>
    ) 
    
}