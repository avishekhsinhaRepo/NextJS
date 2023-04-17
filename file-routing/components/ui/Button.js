import Link from "next/Link";
import classes from '../ui/button.module.css';
function Button(props) {
  return (
    <Link href={props.link} className={classes.btn}>
     {props.children}
    </Link>
  );
}
export default Button;
