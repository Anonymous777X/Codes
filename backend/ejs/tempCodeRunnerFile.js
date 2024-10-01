import {fileURlToPahth} from "url";

const app= express();
const __filename =fileURlToPahth(import.meta.url);
const __dirname = path.dirname(__filename);