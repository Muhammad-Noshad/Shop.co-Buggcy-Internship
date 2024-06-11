import "../styles/links.css";

const Links = (props) => {
  return (
    <div className="links">
      <p class="title">{ props.title }</p>
      <p>{ props.links[0] }</p>
      <p>{ props.links[1] }</p>
      <p>{ props.links[2] }</p>
      <p>{ props.links[3] }</p>
    </div>
  );
}
 
export default Links;