import Link from "next/link";


export default function Wswrapper_1() {
    return (
        <>
            <section id="mapa" className="pt-100 ws-wrapper content-section">
                <div className="container">
                    <div className="bc-1-wrapper bg--02 bg--fixed r-16">
                        <div className="section-overlay">
                            <div className="row d-flex align-items-center">
                                {/* IMAGE BLOCK */}
                                <div className="col-md-6">
                                    <div className="img-block left-column wow fadeInRight">
                                        <img className="img-fluid" src="/images/mapa-tranquera.png" style={{borderRadius: 20, border: '1px solid #ccc'}} alt="content-image" />
                                    </div>
                                </div>
                                {/* TEXT BLOCK */}
                                <div className="col-md-6">
                                    <div className="txt-block right-column wow fadeInLeft">
                                        {/* Section ID */}
                                        <span className="section-id">Mapa Dinámico</span>
                                        {/* Title */}
                                        <h2 className="s-46 w-700"> Visualiza tu campo en tiempo real</h2>
                                        {/* Text */}
                                        <p>Ve en tiempo real los cambios en tu campo, con un mapa interactivo que te permite
                                            navegar por tu campo y ver las tranqueras, servicios y accesos optimizados</p>
                                        {/* button */}
                                        <Link href="https://tranquerasinteligentes.salliquelo.gob.ar/maps" className="btn r-04 btn--theme hover--theme">Ver Mapa</Link>
                                    </div>
                                </div>	{/* END TEXT BLOCK */}
                            </div>   {/* End row */}
                        </div>    {/* End section overlay */}
                    </div>    {/* End content wrapper */}
                </div>     {/* End container */}
            </section>
        </>
    )
}
