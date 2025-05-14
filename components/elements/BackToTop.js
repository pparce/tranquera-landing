import { useEffect, useState } from "react";

import Link from "next/link";
export default function BackToTop() {
    const [hasScrolled, setHasScrolled] = useState(false)
    const isBrowser = () => typeof window !== 'undefined';

    useEffect(() => {
        window.addEventListener("scroll", onScroll)
        document.body.addEventListener("scroll", onScroll);
        window.onscroll = () => {
            if (window.scrollY > 100) {
                setHasScrolled(true)
            } else {
                setHasScrolled(false)
            }
        }
        return () => {
            document.body.removeEventListener("scroll", onScroll);
            window.removeEventListener("scroll", onScroll)
        }
    })

    const onScroll = () => {

        if (window.scrollY > 100 || document.body.scrollTop > 100) {
            setHasScrolled(true)
        } else {
            setHasScrolled(false)
        }
    }

    const handleScrollTop = () => {
        if (isBrowser()) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
            document.body.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        }
    };

    return (
        <div className="action-buttons">
            {hasScrolled && (
                <Link className="d-flex align-items-center justify-content-center" onClick={handleScrollTop} href="javascript:void(0);"
                    style={{ backgroundColor: '#0f6bf5', textAlign: "center", borderRadius: 50, height: 50, width: 50 }}>
                    <img src="/images/demo/icons/back-to-top.png" />
                </Link>
            )}
        </div>
    )
}