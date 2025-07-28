function TextoColorido(props) {
  const estilo = {
    color: props.cor,
    fontSize: '30px',
    fontWeight: 'bold',
  };

  return <p style={estilo}>{props.texto.toUpperCase()}</p>;
}

export default TextoColorido;    
