const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3002;

app.use(cors());
app.use(bodyParser.json());

const products = [
  {
    id: 1,
    title: 'iPhone 5',
    description: 'Teraz jest szansa go mieć, twój wymarzony telefon',
    thumbnail: '',
    category: 'Electronics',
    price: 499.99,
    owner: 'user1',
  },
  {
    id: 2,
    title: 'Ziemniak',
    description: 'Polski ziemniak!!!',
    thumbnail: '',
    category: 'Food',
    price: 999.99,
    owner: 'admin1',
  },
  {
    id: 3,
    title: 'pasta',
    description: 'pasta do zębów',
    thumbnail: '',
    category: 'Other',
    price: 99.99,
    owner: 'user1',
  },
  {
    id: 4,
    title: 'Smartwatch XYZ',
    description: 'Nowy model smartwatcha z najnowszymi funkcjami',
    thumbnail: '',
    category: 'Electronics',
    price: 199.99,
    owner: 'admin1',
  },
  {
    id: 5,
    title: 'Bluza z nadrukiem',
    description: 'Stylowa koszulka z unikalnym nadrukiem',
    thumbnail: '',
    category: 'Clothes',
    price: 29.99,
    owner: 'user1',
  },
  {
    id: 6,
    title: 'Kawa Arabica',
    description: 'Kawa najwyższej jakości, idealna na każdą porę dnia',
    thumbnail: '',
    category: 'Food',
    price: 49.99,
    owner: 'admin2',
  },
  {
    id: 7,
    title: 'Laptop ProBook X',
    description: 'Wydajny laptop do pracy i rozrywki',
    thumbnail: '',
    category: 'Electronics',
    price: 899.99,
    owner: 'user1',
  },
  {
    id: 8,
    title: 'Oczyszczacz powietrza',
    description: 'Zadbaj o czyste powietrze w swoim domu',
    thumbnail: '',
    category: 'Other',
    price: 149.99,
    owner: 'user2',
  },
  {
    id: 9,
    title: 'Słuchawki Bluetooth',
    description: 'Bezprzewodowe słuchawki z doskonałym dźwiękiem',
    thumbnail: '',
    category: 'Electronics',
    price: 79.99,
    owner: 'user1',
  },
  {
    id: 10,
    title: 'Nowoczesny stół',
    description: 'Elegancki stół do jadalni z nowoczesnym designem',
    thumbnail: '',
    category: 'Other',
    price: 349.99,
    owner: 'user2',
  },
  {
    id: 11,
    title: 'Ubranka dla niemowląt',
    description: 'Pierwszy rowerek dla malucha do nauki równowagi',
    thumbnail: '',
    category: 'Kids',
    price: 59.99,
    owner: 'user2',
  },
  {
    id: 12,
    title: 'Myszka komputerowa gamingowa',
    description: 'Precyzyjna myszka dla pasjonatów gier komputerowych',
    thumbnail: '',
    category: 'Electronics',
    price: 39.99,
    owner: 'admin1',
  },
  {
    id: 13,
    title: 'Książka "Podróż przez czas"',
    description: 'Najnowsza powieść science fiction',
    thumbnail: '',
    category: 'Other',
    price: 19.99,
    owner: 'user1',
  },
  {
    id: 14,
    title: 'Rower miejski',
    description: 'Stylowy rower na codzienne przejażdżki po mieście',
    thumbnail: '',
    category: 'Other',
    price: 299.99,
    owner: 'user1',
  },
  {
    id: 15,
    title: 'Zestaw garnków',
    description: 'Najwyższej jakości garnki do gotowania',
    thumbnail: '',
    category: 'Home',
    price: 129.99,
    owner: 'user1',
  },
  {
    id: 16,
    title: 'Smart TV 4K',
    description: 'Najnowszy model telewizora z rozdzielczością 4K',
    thumbnail: '',
    category: 'Electronics',
    price: 799.99,
    owner: 'admin2',
  },
  {
    id: 17,
    title: 'Piękny naszyjnik',
    description: 'Elegancki naszyjnik z błyszczącymi kamieniami',
    thumbnail: '',
    category: 'Other',
    price: 149.99,
    owner: 'user2',
  },
  {
    id: 18,
    title: 'Konsola do gier',
    description: 'Nowoczesna konsola dla zapalonych graczy',
    thumbnail: '',
    category: 'Electronics',
    price: 499.99,
    owner: 'admin1',
  },
  {
    id: 19,
    title: 'Elegancka sukienka',
    description: 'Sukienka wieczorowa idealna na specjalne okazje',
    thumbnail: '',
    category: 'Clothes',
    price: 79.99,
    owner: 'user2',
  },
  {
    id: 20,
    title: 'Smartfon Android',
    description: 'Nowoczesny smartfon z systemem Android',
    thumbnail: '',
    category: 'Electronics',
    price: 349.99,
    owner: 'admin2',
  },
  {
    id: 21,
    title: 'Przenośna drukarka',
    description: 'Drukuj dokumenty w dowolnym miejscu',
    thumbnail: '',
    category: 'Electronics',
    price: 129.99,
    owner: 'user1',
  },
  {
    id: 22,
    title: 'Zestaw do manicure',
    description: 'Profesjonalny zestaw do pielęgnacji paznokci',
    thumbnail: '',
    category: 'Other',
    price: 34.99,
    owner: 'user1',
  },
  {
    id: 23,
    title: 'Drewniana deska do krojenia',
    description: 'Trwała deska do krojenia z litego drewna',
    thumbnail: '',
    category: 'Home',
    price: 24.99,
    owner: 'admin1',
  },
  {
    id: 24,
    title: 'Zegarek męski',
    description: 'Elegancki zegarek męski z automatycznym mechanizmem',
    thumbnail: '',
    category: 'Clothes',
    price: 199.99,
    owner: 'user2',
  },
  {
    id: 25,
    title: 'Rowerek biegowy dla dzieci',
    description: 'Pierwszy rowerek dla malucha do nauki równowagi',
    thumbnail: '',
    category: 'Other',
    price: 49.99,
    owner: 'admin2',
  },
  {
    id: 26,
    title: 'Kamera sportowa 4K',
    description: 'Nagrywaj swoje przygody w najwyższej jakości',
    thumbnail: '',
    category: 'Electronics',
    price: 179.99,
    owner: 'admin2',
  },
  {
    id: 27,
    title: 'Koszulka z nadrukiem',
    description: 'Unikalna koszulka, która wyróżni Twój styl',
    thumbnail: '',
    category: 'Clothes',
    price: 24.99,
    owner: 'user1',
  },
  {
    id: 28,
    title: 'Głośnik Bluetooth',
    description: 'Bezprzewodowy głośnik do słuchania ulubionej muzyki',
    thumbnail: '',
    category: 'Electronics',
    price: 49.99,
    owner: 'user2',
  },
  {
    id: 29,
    title: 'Puzzle dla dzieci',
    description: 'Zestaw kolorowych puzzli dla najmłodszych',
    thumbnail: '',
    category: 'Home',
    price: 14.99,
    owner: 'admin1',
  },
  {
    id: 30,
    title: 'Łóżko drewniane',
    description: 'Eleganckie łóżko z litego drewna',
    thumbnail: '',
    category: 'Home',
    price: 299.99,
    owner: 'user2',
  },
  {
    id: 31,
    title: 'Monitor gamingowy',
    description: 'Szeroki monitor do pełnych wrażeń podczas gry',
    thumbnail: '',
    category: 'Electronics',
    price: 399.99,
    owner: 'admin2',
  },
  {
    id: 32,
    title: 'Szczoteczka elektryczna',
    description: 'Nowoczesna szczoteczka do zębów dla całej rodziny',
    thumbnail: '',
    category: 'Electronics',
    price: 39.99,
    owner: 'user1',
  },
  {
    id: 33,
    title: 'Kubki termiczne',
    description: 'Zestaw eleganckich kubków na gorące napoje',
    thumbnail: '',
    category: 'Home',
    price: 19.99,
    owner: 'user2',
  },
  {
    id: 34,
    title: 'Fotel biurowy',
    description: 'Komfortowy fotel do pracy i nauki',
    thumbnail: '',
    category: 'Home',
    price: 129.99,
    owner: 'admin1',
  },
  {
    id: 35,
    title: 'Prostownica do włosów',
    description: 'Prostownica do szybkiego i skutecznego układania włosów',
    thumbnail: '',
    category: 'Electronics',
    price: 34.99,
    owner: 'admin2',
  },
  {
    id: 36,
    title: 'Torba podróżna',
    description: 'Praktyczna torba na krótkie wypady',
    thumbnail: '',
    category: 'Clothes',
    price: 29.99,
    owner: 'user1',
  },
  {
    id: 37,
    title: 'Owocowy zestaw herbat',
    description: 'Zestaw aromatycznych herbat owocowych',
    thumbnail: '',
    category: 'Food',
    price: 19.99,
    owner: 'user2',
  },
  {
    id: 38,
    title: 'Gra planszowa dla rodziny',
    description: 'Rozwijająca i zabawna gra planszowa dla całej rodziny',
    thumbnail: '',
    category: 'Other',
    price: 39.99,
    owner: 'admin1',
  },
  {
    id: 39,
    title: 'Zestaw do makijażu',
    description: 'Profesjonalny zestaw do makijażu dla każdej kobiety',
    thumbnail: '',
    category: 'Other',
    price: 49.99,
    owner: 'user2',
  },
  {
    id: 40,
    title: 'Termos na kawę',
    description: 'Termos na świeżą kawę zawsze pod ręką',
    thumbnail: '',
    category: 'Home',
    price: 24.99,
    owner: 'user1',
  },
];


app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/products', (req, res) => {
  const newProduct = req.body;

  if (!newProduct.title || !newProduct.description || !newProduct.thumbnail || !newProduct.price || !newProduct.owner || !newProduct.category) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const newProductId = products.length > 0 ? Math.max(...products.map((product) => product.id)) + 1 : 1;

  const newProductWithId = {
    id: newProductId,
    title: newProduct.title,
    description: newProduct.description,
    category: newProduct.category,
    thumbnail: newProduct.thumbnail,
    price: newProduct.price,
    owner: newProduct.owner
  };

  products.push(newProductWithId);

  res.status(201).json(newProductWithId);
});

app.delete('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  const index = products.findIndex((product) => product.id === productId);

  if (index !== -1) {
    const deletedProduct = products.splice(index, 1)[0];
    res.json(deletedProduct);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

app.put('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const updatedProduct = req.body;

  const index = products.findIndex((product) => product.id === productId);
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct };
    res.json(products[index]);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  const product = products.find((product) => product.id === productId);
  
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
