

export default function Faqs3_6() {
    return (
        <>
            <section id="faqs-3" className="py-100 faqs-section">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-title mb-70">
                                {/* Title */}
                                <h2 className="s-50 w-700">Preguntas Frecuentes</h2>
                                {/* Text */}
                                <p className="s-21 color--grey">Resolvemos tus dudas más comunes.</p>
                            </div>
                        </div>
                    </div>
                    {/* FAQs-3 QUESTIONS */}
                    <div className="faqs-3-questions">
                        <div className="row">
                            {/* QUESTIONS HOLDER */}
                            <div className="col-lg-6">
                                <div className="questions-holder">
                                    {/* QUESTION #1 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>1.</span>¿Es necesario tener conexión a internet para usar la aplicación?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">Algunas funciones, como el chat y la actualización en tiempo real, requieren conexión a internet. Sin embargo, la app permite descargar mapas para navegar sin conexión. Además, en áreas sin conexión, el botón de emergencias permite almacenar el reporte y enviarlo automáticamente al recuperar señal.</p>
                                    </div>
                                    {/* QUESTION #2 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>2.</span>¿Cómo puedo reportar una emergencia?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">La app cuenta con tres iconos flotantes ubicados de forma permanente en la página de inicio para garantizar acceso rápido. Tienen diferentes colores para facilitar su identificación. Con un solo click, reportas tu emergencia a bomberos, policía o salud, obteniendo una respuesta inmediata.</p>
                                    </div>
                                    {/* QUESTION #3 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>3.</span>¿La app permite gestionar permisos y accesos de diferentes usuarios?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">Sí, se pueden asignar permisos personalizados para que cada usuario tenga acceso solo a las funciones y áreas que correspondan.</p>
                                    </div>
                                </div>
                            </div>	{/* END QUESTIONS HOLDER */}
                            {/* QUESTIONS WRAPPER */}
                            <div className="col-lg-6">
                                <div className="questions-holder">
                                    {/* QUESTION #4 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>4.</span>¿La app permite compartir mi ubicación en tiempo real?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">Sí, al reportar una emergencia la app envía automáticamente tu ubicación en tiempo real al servicio que corresponda, para garantizar una respuesta rápida y eficiente.</p>
                                    </div>
                                    {/* QUESTION #5 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>5.</span>¿El mapa sugiere rutas optimizadas desde mi ubicación actual?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">Sí, ofrece rutas estratégicas para mejorar la movilidad, reducir tiempos y recibir notificaciones sobre el estado de los caminos y condiciones climáticas.</p>
                                    </div>
                                </div>
                            </div>	{/* END QUESTIONS HOLDER */}
                        </div>  {/* End row */}
                    </div>	{/* END FAQs-3 QUESTIONS */}
                  
                </div>	   {/* End container */}
            </section>
        </>
    )
}
