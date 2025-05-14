
export default function Contact(params) {
    return <>
        <div>
            <section id="contacts-1" className="pb-50 inner-page-hero contacts-section division bg--04 mt-3">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-title text-center mb-80">
                                {/* Title */}
                                <h2 className="s-52 w-700">¿Preguntas?Hablemos</h2>
                                {/* Text */}
                                <p className="p-lg">Déjanos tu consulta y te responderemos a la brevedad.
                                Si necesitas más información sobre nuestra plataforma, completa el siguiente formulario y nuestro equipo se pondrá en contacto contigo.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* CONTACT FORM */}
                    <div className="row justify-content-center">
                        <div className="col-md-11 col-lg-10 col-xl-8">
                            <div className="form-holder">
                                <form name="contactform" className="row contact-form">
                                    <div className="col-md-12">
                                        <p className="p-lg">Su nombre: </p>
                                        <input type="text" name="name" className="form-control name bg-white" placeholder="Su nombre*" />
                                    </div>
                                    <div className="col-md-12">
                                        <p className="p-lg">Su dirección de correo electrónico: </p>
                                        <input type="text" name="email" className="form-control email bg-white" placeholder="Dirección de correo electrónico*" />
                                    </div>
                                    <div className="col-md-12">
                                        <p className="p-lg">Explica tu pregunta en detalles: </p>
                                        <textarea className="form-control message bg-white" name="message" rows={6} placeholder="Tengo una consulta" />
                                    </div>
                                    {/* Contact Form Button */}
                                    <div className="col-md-12 mt-15 form-btn text-right">
                                        <button type="submit" className="btn btn--theme hover--theme submit">Enviar</button>
                                    </div>
                                    <div className="contact-form-notice">
                                        <p className="p-sm">Estamos comprometidos con tu privacidad. Tranqueras Inteligentes utiliza la información que nos proporcionas para contactarte sobre contenido, productos y servicios relevantes. Puedes darte de baja de estas comunicaciones en cualquier momento. 
                                            {/* Para más información, consulta nuestra <Link href="/privacy">política de privacidad</Link>. */}
                                        </p>
                                    </div>
                                    {/* Contact Form Message */}
                                    <div className="col-lg-12 contact-form-msg">
                                        <span className="loading" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>	   {/* END CONTACT FORM */}
                </div>	   {/* End container */}
            </section>	{/* END CONTACTS-1 */}
            {/* DIVIDER LINE */}
            <hr className="divider" />
            {/* NEWSLETTER-1
			============================================= */}
            <section id="newsletter-1" className="newsletter-section">
                <div className="newsletter-overlay">
                    <div className="container">
                        <div className="row d-flex align-items-center row-cols-1 row-cols-lg-2">
                            {/* NEWSLETTER TEXT */}
                            <div className="col">
                                <div className="newsletter-txt">
                                    <h4 className="s-34 w-700">Manténgase al día con nuestras noticias, ideas y actualizaciones</h4>
                                </div>
                            </div>
                            {/* NEWSLETTER FORM */}
                            <div className="col">
                                <form className="newsletter-form">
                                    <div className="input-group">
                                        <input type="email" autoComplete="off" className="form-control" placeholder="Su dirección de correo electrónico" required id="s-email" />
                                        <span className="input-group-btn">
                                            <button type="submit" className="btn btn--theme hover--theme">Suscríbase ahora</button>
                                        </span>
                                    </div>
                                    {/* Newsletter Form Notification */}
                                    <label htmlFor="s-email" className="form-notification" />
                                </form>
                            </div>	  {/* END NEWSLETTER FORM */}
                        </div>	  {/* End row */}
                    </div>    {/* End container */}
                </div>     {/* End newsletter-overlay */}
            </section>	{/* END NEWSLETTER-1 */}
            {/* DIVIDER LINE */}
            <hr className="divider" />
        </div>
    </>
}