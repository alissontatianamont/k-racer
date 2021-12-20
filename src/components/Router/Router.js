import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from '../navBar/navbar';
import ItemListContainer from '../itemListContainer/ItemListContainer';
import ItemDetailContainer from '../itemDetailContainer/ItemDetailContainer';
import Cart from '../../views/Cart';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <ItemListContainer greeting="-K-RACER TIENDA VIRTUAL-" />
                    </Route>
                    <Route path="/category/:categoryId">
                        <ItemListContainer />
                    </Route>
                    <Route path="/detail/:paramId">
                        <ItemDetailContainer />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default Router;
