

export default function Features2_7() {
    return (
        <>
            <section id="features-2" className="pt-100 features-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-title mb-80">
                                {/* Title */}
                                <h2 className="s-50 w-700">Solución Completa</h2>
                                {/* Text */}
                                <p className="s-21 color--grey">Una plataforma integral para el control de accesos rurales.</p>
                            </div>
                        </div>
                    </div>
                    {/* FEATURES-2 WRAPPER */}
                    <div className="fbox-wrapper text-center">
                        <div className="row row-cols-1 row-cols-md-3">
                            {/* FEATURE BOX #1 */}
                            <div className="col">
                                <div className="fbox-2 fb-1 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                    <img src="/images/svg/1.svg" alt="icon" /> 
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-22 w-700">Ubicación Precisa de Tranqueras</h6>
                                        <p>Localiza, configura y gestiona tranqueras con tecnología de geolocalización interactiva y precisa.</p>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #1 */}
                            {/* FEATURE BOX #2 */}
                            <div className="col">
                                <div className="fbox-2 fb-2 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                    <img src="/images/svg/4.svg" alt="icon" /> 
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-22 w-700">Mapas Interactivos con Información en Tiempo Real</h6>
                                        <p>Visualiza campos, tranqueras, servicios, accesos y rutas optimizadas en un mapa dinámico.</p>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #2 */}
                            {/* FEATURE BOX #3 */}
                            <div className="col">
                                <div className="fbox-2 fb-3 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                    <img src="/images/svg/emergencia.svg" alt="icon" /> 
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-22 w-700">Historial de Emergencias</h6>
                                        <p>Accede a un registro de emergencias anteriores para seguimiento y reportes formales.</p>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #3 */}
                        </div>  {/* End row */}
                    </div>	{/* END FEATURES-2 WRAPPER */}
                </div>     {/* End container */}
            </section>
        </>
    )
}
