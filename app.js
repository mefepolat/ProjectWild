import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
import ejsMate from 'ejs-mate';
import championRoutes from './routes/champions.js'

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'))

app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/champions', championRoutes)

app.listen(3000, () => {
    console.log('listening to localhost 3000');
})