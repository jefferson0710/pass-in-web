interface MeuBotaoProps {
  texto: string
}

function MeuBotao(props: MeuBotaoProps){
  return <button className="bg-orange-400 h-10 px-3 rounded font-medium ">{props.texto}</button>
}
export function App() {
  return (
    <div className="flex gap-2">
      <MeuBotao texto="Cique aqui"></MeuBotao>
      <MeuBotao texto="Botão 2"></MeuBotao>
      <MeuBotao texto="botão 3"></MeuBotao>
    </div>
    );
}


