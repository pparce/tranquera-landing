

export default function Lnk1_7() {
    return (
        <>
            <section id="lnk-1" className="pt-100 ct-02 content-section division">
                <div className="container">
                    {/* SECTION CONTENT (ROW) */}
                    <div className="row d-flex align-items-center">
                        {/* IMAGE BLOCK */}
                        <div className="col-md-6">
                            <div className="img-block left-column wow fadeInRight">
                                <img className="img-fluid" src="/images/hombre-pensante.png" alt="content-image" />
                            </div>
                        </div>
                        {/* TEXT BLOCK */}
                        <div className="col-md-6">
                            <div className="txt-block right-column wow fadeInLeft">
                                {/* Section ID */}
                                <span className="section-id">Con Tranqueras Inteligentes, podrás:</span>
                                {/* Title */}
                                <h2 className="s-46 w-700">Optimizar la seguridad y gestión de tu campo</h2>
                                
                                {/* List */}
                                <ul className="simple-list">
                                            <li className="list-item">
                                                <p className="mb-0">Crear protocolos de seguridad personalizados para una gestión eficiente.</p>
                                            </li>
                                            <li className="list-item">
                                                <p className="mb-0">Reportar emergencias y recibir asistencia inmediata.</p>
                                            </li>
                                            <li className="list-item">
                                                <p className="mb-0">Acceder a mapas descargables para navegar en zonas sin señal.</p>
                                            </li>
                                            <li className="list-item">
                                                <p className="mb-0">Visualizar tranqueras según su estado: abiertas, cerradas o de acceso restringido.</p>
                                            </li>
                                        </ul>
                            </div>
                        </div>	{/* END TEXT BLOCK */}
                    </div>	{/* END SECTION CONTENT (ROW) */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
