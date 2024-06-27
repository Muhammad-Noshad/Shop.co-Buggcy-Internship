const FormField = ({ label, type, id, className, value, onChange, onBlur, error }) => {
  return (
    <>
      <div className="field">
          <label>{ label }:</label>
          <input type={ type } id={ id } className={ className } value={ value } onChange={ onChange } onBlur={ onBlur } placeholder={`Enter your ${ label }`} />
        </div>  
        { error && <p className="error-message">{error}</p> }
    </>
  );
}
 
export default FormField;