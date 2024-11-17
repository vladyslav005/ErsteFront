import React, {useState} from 'react';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography} from '@mui/material';


function BasketSection({title, items, bgColor, onAddBasket}) {
    return (
        <Box
            sx={{
                backgroundColor: bgColor,
                borderRadius: 2,
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                minWidth: 400,
            }}
        >
            <Typography variant="h6" sx={{bgcolor: 'transparent', p: 1, borderRadius: 1}}>
                {title}
            </Typography>
            {items.map((item, index) => (
                <Typography
                    key={index}
                    variant="body1"
                    sx={{
                        backgroundColor: 'white',
                        p: 1,
                        borderRadius: 1,
                        width: '80%',
                        textAlign: 'center',
                    }}
                >
                    {item}
                </Typography>
            ))}

            {title === 'Moje košíky' && (
                <Button variant="contained" sx={{mt: 2}} onClick={onAddBasket}>
                    Pridať košík
                </Button>
            )}
        </Box>
    );
}

export function BasketsContainer() {

    const [openDialog, setOpenDialog] = useState(false);

    const [basketName, setBasketName] = useState('');

    const [productName, setProductName] = useState('');

    const [brand, setBrand] = useState('');

    const [store, setStore] = useState('');

    const [products, setProducts] = useState([]);

    const [openProductDialog, setOpenProductDialog] = useState(false);

    const [bucketProduct, setBucketProduct] = useState()


    const handleAddBasket = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleSaveBasket = () => {
        // Сохранение корзины (например, API вызов)
        console.log('Košík vytvorený:', {basketName, products});
        setOpenDialog(false);
    };

    const handleAddProduct = () => {
        setOpenProductDialog(true);
    };

    const handleCloseProductDialog = () => {
        setOpenProductDialog(false);
    };

    const handleSaveProduct = () => {
        setProducts([...products, {productName, brand, store}]);
        setProductName('');
        setBrand('');
        setStore('');
        setOpenProductDialog(false);
    };

    return (
        <Box sx={{
            p: 3, textAlign: 'center',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: 2,
        }}>
            <Typography variant="h4" gutterBottom>
                Košíky
            </Typography>

            {/*<BasketSection*/}
            {/*    title="Odporučané košíky"*/}
            {/*    items={["Košík 1 - Krátky popis", "Košík 2 - Krátky popis"]}*/}
            {/*    bgColor="#b6e6b6"*/}
            {/*/>*/}

            <BasketSection
                title="Moje košíky"
                items={["Košík 1 - Krátky popis", "Košík 2 - Krátky popis"]}
                bgColor="#e3f2fd"
                onAddBasket={handleAddBasket}
            />

            {/* Dialog for Adding Basket */}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Vytvoriť nový košík</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Názov košíka"
                        fullWidth
                        value={basketName}
                        onChange={(e) => setBasketName(e.target.value)}
                        sx={{mb: 2}}
                    />
                    <Button variant="contained" fullWidth sx={{mt: 2}} onClick={handleAddProduct}>
                        Pridať produkt do košíka
                    </Button>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Zrušiť
                    </Button>
                    <Button onClick={handleSaveBasket} color="primary">
                        Uložiť košík
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Dialog for Adding Product to the Basket */}
            <Dialog open={openProductDialog} onClose={handleCloseProductDialog}>
                <DialogTitle>Pridať produkt</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Názov produktu"
                        fullWidth
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        sx={{mb: 2}}
                    />
                    <TextField
                        label="Značka"
                        fullWidth
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        sx={{mb: 2}}
                    />
                    <TextField
                        label="Obchod"
                        fullWidth
                        value={store}
                        onChange={(e) => setStore(e.target.value)}
                        sx={{mb: 2}}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseProductDialog} color="primary">
                        Zrušiť
                    </Button>
                    <Button onClick={handleSaveProduct} color="primary">
                        Pridať produkt
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}