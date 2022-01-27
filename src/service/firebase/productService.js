import { collection, getDocs, query, where, doc, getDoc, writeBatch, addDoc } from 'firebase/firestore';
import { db } from './firebase';

export const getFirebase = (itemCollection, category) => {
    return new Promise((resolve, reject) => {
        const collectionQuery =
            itemCollection && category
                ? query(collection(db, itemCollection), where('categoryId', '==', category))
                : collection(db, itemCollection);

        getDocs(collectionQuery)
            .then((QuerySnapshot) => {
                const products = QuerySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });
                resolve(products);
            })
            .catch((error) => {
                console.log(error);
            });
    });
};

export const getProductById = (itemCollection, parameter) => {
    return new getDoc(doc(db, itemCollection, parameter))
        .then((querySnapshot) => {
            const product = { id: querySnapshot.id, ...querySnapshot.data() };
            return product;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getProductStock = (purchase) => {
    const batch = writeBatch(db);
    const outOfStock = [];

    purchase.items.forEach((item) => {
        getDoc(doc(db, 'items', item.item.id))
            .then((docSnapshot) => {
                if (docSnapshot.data().stock >= item.count) {
                    batch.update(doc(db, 'items', docSnapshot.id), { stock: docSnapshot.data().stock - item.count });
                } else {
                    outOfStock.push({ id: docSnapshot.id, ...docSnapshot.data() });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    });

    return { outOfStock, batch };
};

export const outOfStockProduct = (purchase, batch, outOfStock) => {
    if (outOfStock.length === 0) {
        return new addDoc(collection(db, 'orders'), purchase)
            .then(({ id }) => {
                batch.commit();
                return id;
            })
            .catch((error) => {
                return error;
            });
    }
};
