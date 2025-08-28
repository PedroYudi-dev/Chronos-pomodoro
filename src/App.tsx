import Heading from "./components/Heading"
import "./styles/global.css"
import "./styles/theme.css"

import { Timer } from "lucide-react"

export default function App(){
    return (
      <div>
        <Heading>
          <h1>Olá Mundo</h1>
          <button>
            <Timer strokeWidth={1.5} />
          </button>
        </Heading>
      </div>
    );
}