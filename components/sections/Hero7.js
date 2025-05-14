

export default function Hero7() {
    return (
        <>
            <section id="hero-7" className="gr--perl hero-section">
                <div className="hero-overlay">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            {/* HERO TEXT */}
                            <div className="col-md-6">
                                <div className="hero-7-txt wow fadeInRight">
                                    {/* Title */}
                                    <h2 className="s-54 w-700">Control y Gestión de Accesos en el Campo</h2>
                                    {/* Text */}
                                    <p className="p-lg">
                                    Optimiza la administración de tus tranqueras con nuestra solución inteligente
                                    </p>
                                    {/* HERO QUICK FORM */}
                                    <form name="quickform" className="quick-form form-shadow form-half mt-35">
                                        {/* Form Inputs */}
                                        <div className="input-group">
                                            <input type="email" name="email" className="form-control email r-06" placeholder="Tu email" autoComplete="off" required />
                                            <span className="input-group-btn form-btn">
                                                <button type="submit" className="btn r-06 btn--theme hover--theme submit">Comenzar</button>
                                            </span>
                                        </div>
                                        {/* Form Message */}
                                        <div className="quick-form-msg"><span className="loading" /></div>
                                    </form>	{/* END HERO QUICK FORM */}
                                   
                                </div>
                            </div>	{/* END HERO TEXT */}
                            {/* HERO IMAGE */}
                            <div className="col-md-6">
                                <div className="hero-7-img text-center wow fadeInLeft">
                                    <img className="img-fluid" src="/images/hero.png" alt="hero-image" />
                                </div>
                            </div>
                        </div>    {/* End row */}
                    </div>	   {/* End container */}
                </div>	   {/* End hero-overlay */}
            </section>
        </>
    )
}
