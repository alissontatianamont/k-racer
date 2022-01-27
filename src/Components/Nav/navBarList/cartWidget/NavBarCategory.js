import { Link } from "react-router-dom";

const NavBarCategory = ({category}) => {
    return (
        <li><Link className="title" key={category.id} to={`/category/${category.id}`}>{category.description}</Link></li>
    )
}

export default NavBarCategory
