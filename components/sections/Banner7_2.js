

import Link from "next/link"
export default function Banner7_2() {
    return (
        <>
            <section id="banner-7" className="banner-section">
                <div className="banner-overlay py-100">
                    <div className="container">
                        {/* BANNER-7 WRAPPER */}
                        <div className="banner-7-wrapper">
                            <div className="row justify-content-center">
                                {/* BANNER-7 TEXT */}
                                <div className="col-md-8">
                                    <div className="banner-7-txt text-center">
                                        {/* Title */}
                                        <h2 className="s-48 w-700">Impulsa tu negocio con herramientas inteligentes</h2>
                                        {/* Buttons */}
                                        <div className="btns-group">
                                            <Link href="#hero-7" className="btn r-04 btn--theme hover--theme">Inicia sesión</Link>
                                        </div>
                                        {/* Button Text */}
                                        {/* <p className="btn-txt ico-15">Free for 14 days - no credit card required.</p> */}
                                    </div>
                                </div>
                            </div>   {/* End row */}
                        </div>    {/* END BANNER-7 WRAPPER */}
                    </div>    {/* End container */}
                </div>     {/* End banner overlay */}
            </section>
        </>
    )
}
