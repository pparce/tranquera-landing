import Link from 'next/link';
import { useState } from 'react';
export default function MobileMenu({ onClick }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const onClickMenu = () => {
        // onClick();
    }

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <ul className="wsmenu-list nav-theme border-start">
         
              
                <li className="nl-simple" aria-haspopup="true"><Link href="/#features-6" onClick={onClickMenu} className="h-link">Beneficios</Link></li>
                <li className="nl-simple" aria-haspopup="true"><Link href="/#features-2" onClick={onClickMenu} className="h-link">Solución</Link></li>
                <li className="nl-simple" aria-haspopup="true"><Link href="/#mapa" onClick={onClickMenu} className="h-link">Mapa</Link></li>
                <li className="nl-simple" aria-haspopup="true"><Link href="/#faqs-3" onClick={onClickMenu} className="h-link">Preguntas frecuentes</Link></li>
                <li className="nl-simple" aria-haspopup="true"><Link href="/#contacts-1" onClick={onClickMenu} className="h-link">Contáctenos</Link></li>
                <li className="nl-simple" aria-haspopup="true">
                    <a href="https://tranquerasinteligentes.salliquelo.gob.ar/auth/login" className="btn r-04 btn--theme last-link hover--green-100">Inicio de Sesión</a>
                </li>

            </ul>
        </>
    )
}
