import React from 'react'
import '../css/form.css';

export default function Form() {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);

  return (
    <div className="form-container">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe-6HNBjq10lJFHdqG4WhVT70xy48CVAEms6J0LybSZ3Bu2QQ/viewform?vc=0&c=0&w=1&flr=0" className="form" frameBorder="0">Loading…</iframe>
    </div>
  )
}
