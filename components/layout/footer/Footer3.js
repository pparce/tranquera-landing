
import Link from "next/link"
export default function Footer3() {
    return (
        <>
            <footer id="footer-3" className="pt-100 footer ft-3-ntr">
                <div className="container">
                    {/* FOOTER CONTENT */}
                    <div className="row">
                        {/* FOOTER LOGO */}
                        <div className="col-12 col-md-3">
                            <div className="footer-info">
                                <img className="footer-logo" src="/logo-tranquera.png" style={{ height: '50px !important', maxHeight: 50 }} alt="footer-logo" />
                                <img className="footer-logo-dark" src="/logo-tranquera.png" style={{ height: '50px !important', maxHeight: 50 }} alt="footer-logo" />
                            </div>
                        </div>
                        {/* FOOTER LINKS */}
                        <div className="col-6 col-md-3">
                            <div className="footer-links fl-2">
                                {/* Title */}
                                <h6 className="s-17 w-700">Menu</h6>
                                {/* Links */}
                                <ul className="foo-links clearfix">
                                    <li>
                                        <p><Link href="/#features-6">Beneficios</Link></p>
                                    </li>
                                    <li>
                                        <p><Link href="/#features-2">Solución</Link></p>
                                    </li>
                                    <li>
                                        <p><Link href="/#mapa">Mapa</Link></p>
                                    </li>
                                    <li>
                                        <p><Link href="/#faqs-3">Preguntas frecuentes</Link></p>
                                    </li>
                                    <li>
                                        <p><Link href="/#contacts-1">Contáctenos</Link></p>
                                    </li>
                                </ul>
                            </div>
                        </div> {/* END FOOTER LINKS */}
                        {/* FOOTER LINKS */}
                        <div className="col-6 col-md-3">
                            <div className="footer-links fl-3">
                                {/* Title */}
                                <h6 className="s-17 w-700">Links de Interés</h6>
                                {/* Links */}
                                <ul className="foo-links clearfix">
                                    <li><p><a target="_blank" href="https://www.salliquelo.gob.ar/">Municipio</a></p></li>
                                    <li><p><a target="_blank" href="https://www.salliquelo.gob.ar/municipalidad.php">Autoridades</a></p></li>
                                    <li><p><a target="_blank" href="https://www.salliquelo.gob.ar/prensa.php">Noticias</a></p></li>
                                    <li><p><a target="_blank" href="https://www.salliquelo.gob.ar/tramites.php">Datos Útiles</a></p></li>
                                </ul>
                            </div>
                        </div> {/* END FOOTER LINKS */}
                        <div className="col-6 col-md-3">
                            <div className="footer-links fl-3">
                                {/* Title */}
                                <h6 className="s-17 w-700">Links de Interés</h6>
                                {/* Links */}
                                <ul className="foo-links clearfix">
                                    <li><p><a target="_blank" href="https://www.salliquelo.gob.ar/hcd/">Consejo Deliberante</a></p></li>
                                    <li><p><a target="_blank" href="https://www.salliquelo.gob.ar/salliquelo.php">Salliquelo</a></p></li>
                                    <li><p><a target="_blank" href="https://www.salliquelo.gob.ar/quenuma.php">Quenumá</a></p></li>
                                </ul>
                            </div>
                        </div> {/* END FOOTER LINKS */}
                      
                    </div>
                    <hr /> {/* FOOTER DIVIDER LINE */}
                    {/* BOTTOM FOOTER */}
                    <div className="bottom-footer">
                        <div className="row row-cols-1 row-cols-md-1 d-flex align-items-center">
                            {/* FOOTER COPYRIGHT */}
                            <div className="col">
                                <div className="footer-copyright">
                                    <p className="p-sm">© 2025 Inteligencia natural. <span>Reservados todos los derechos</span></p>
                                </div>
                            </div>
                            {/* FOOTER SOCIALS */}
                            {/* <div className="col">
                                <ul className="bottom-footer-socials ico-20 text-end">
                                    <li><Link href="#"><span className="flaticon-facebook" /></Link></li>
                                    <li><Link href="#"><span className="flaticon-twitter" /></Link></li>
                                    <li><Link href="#"><span className="flaticon-instagram" /></Link></li>
                                    <li><Link href="#"><span className="flaticon-youtube" /></Link></li>
                                </ul>
                            </div> */}
                        </div> {/* End row */}
                    </div> {/* END BOTTOM FOOTER */}
                </div> {/* End container */}
            </footer>

        </>
    )
}
