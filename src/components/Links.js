import "../styles/links.css";

const Links = (props) => {
  return (
    <div className="links">
      <p className="title">{ props.title }</p>
      {
        props.links.map((link) => {
          return <p>{ link }</p>
        })
      }
    </div>
  );
}
 
export default Links;