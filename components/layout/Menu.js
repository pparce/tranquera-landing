import Link from "next/link"
import { useRouter } from "next/router"

export default function Menu() {
    const router = useRouter()


    return (
        <>

            <ul className="wsmenu-list nav-theme">


                <li className="nl-simple" aria-haspopup="true"><Link href="/#features-6" className="h-link">Beneficios</Link></li>
                <li className="nl-simple" aria-haspopup="true"><Link href="/#features-2" className="h-link">Solución</Link></li>
                <li className="nl-simple" aria-haspopup="true"><Link href="/#mapa" className="h-link">Mapa</Link></li>
                <li className="nl-simple" aria-haspopup="true"><Link href="/#faqs-3" className="h-link">Preguntas frecuentes</Link></li>
                <li className="nl-simple" aria-haspopup="true"><Link href="/#contacts-1" className="h-link">Contáctenos</Link></li>
                <li className="nl-simple" aria-haspopup="true">
                    <a href="https://tranquerasinteligentes.salliquelo.gob.ar/auth/login" className="btn r-04 btn--theme last-link hover--green-100">Inicio de Sesión</a>
                </li>

            </ul>
        </>
    )
}
