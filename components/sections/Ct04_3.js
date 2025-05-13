

export default function Ct04_3() {
    return (
        <>
            <section className="pt-100 ct-04 content-section division">
                <div className="container">
                    {/* SECTION CONTENT (ROW) */}
                    <div className="row d-flex align-items-center">
                        {/* TEXT BLOCK */}
                        <div className="col-md-6 order-last order-md-2">
                            <div className="txt-block left-column wow fadeInRight">
                                {/* CONTENT BOX #1 */}
                                <div className="cbox-2 process-step">
                                    {/* Icon */}
                                    <div className="ico-wrap">
                                        <div className="cbox-2-ico bg--theme color--white">1</div>
                                        <span className="cbox-2-line" />
                                    </div>
                                    {/* Text */}
                                    <div className="cbox-2-txt">
                                        <h5 className="s-22 w-700">Ubicación Precisa de Tranqueras</h5>
                                        <p>Localiza, configura y gestiona tranqueras con tecnología de geolocalización interactiva y precisa.
                                        </p>
                                    </div>
                                </div>	{/* END CONTENT BOX #1 */}
                                {/* CONTENT BOX #2 */}
                                <div className="cbox-2 process-step">
                                    {/* Icon */}
                                    <div className="ico-wrap">
                                        <div className="cbox-2-ico bg--theme color--white">2</div>
                                        <span className="cbox-2-line" />
                                    </div>
                                    {/* Text */}
                                    <div className="cbox-2-txt">
                                        <h5 className="s-22 w-700">Mapas Interactivos con Información en Tiempo Real</h5>
                                        <p>Visualiza campos, tranqueras, servicios, accesos y rutas optimizadas en un mapa dinámico.</p>
                                    </div>
                                </div>	{/* END CONTENT BOX #2 */}
                                {/* CONTENT BOX #3 */}
                                <div className="cbox-2 process-step">
                                    {/* Icon */}
                                    <div className="ico-wrap">
                                        <div className="cbox-2-ico bg--theme color--white">3</div>
                                    </div>
                                    {/* Text */}
                                    <div className="cbox-2-txt">
                                        <h5 className="s-22 w-700">Historial de Emergencias</h5>
                                        <p className="mb-0">Accede a un registro de emergencias anteriores para seguimiento y reportes formales.</p>
                                    </div>
                                </div>	{/* END CONTENT BOX #3 */}
                            </div>
                        </div>	{/* END TEXT BLOCK */}
                        {/* IMAGE BLOCK */}
                        <div className="col-md-6 order-first order-md-2">
                            <div className="img-block wow fadeInLeft">
                                <img className="img-fluid" src="/images/tablet-01.png" alt="content-image" />
                            </div>
                        </div>
                    </div>	{/* END SECTION CONTENT (ROW) */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
