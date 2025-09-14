'use client'

import { useEffect, useRef, useState } from 'react'
import personalInfo from '@/data/personalInfo.json'

export default function Contact() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  })
  const [error, setError] = useState('')
  const [showToast, setShowToast] = useState(false)
  const errorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Input Animation - same as original main.js
    const inputs = document.querySelectorAll('.input')
    function focusFunc(this: HTMLInputElement | HTMLTextAreaElement) {
      let parent = this.parentNode as HTMLElement
      parent.classList.add('focus')
    }
    function blurFunc(this: HTMLInputElement | HTMLTextAreaElement) {
      let parent = this.parentNode as HTMLElement
      if (this.value == '') {
        parent.classList.remove('focus')
      }
    }
    inputs.forEach((input) => {
      input.addEventListener('focus', focusFunc)
      input.addEventListener('blur', blurFunc)
    })
    return () => {
      inputs.forEach((input) => {
        input.removeEventListener('focus', focusFunc)
        input.removeEventListener('blur', blurFunc)
      })
    }
  }, [])

  const handleContactClick = (type: 'email' | 'whatsapp' | 'phone') => {
    let url = ''
    switch (type) {
      case 'email':
        url = `mailto:${personalInfo.messaging.email.address}?subject=Portfolio Contact`
        break
      case 'whatsapp':
        url = `https://wa.me/${personalInfo.messaging.whatsapp.phone.replace(/\D/g, '')}?text=Hi Manish, I saw your portfolio and would like to connect!`
        break
      case 'phone':
        url = `tel:${personalInfo.messaging.call.phone}`
        break
    }
    if (url) {
      window.open(url, '_blank')
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.type === 'textarea' ? 'message' : e.target.name]: e.target.value })
    setError('')
    setShowToast(false)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.username || !form.email || !form.subject || !form.phone || !form.message) {
      setError('Please fill in all fields.')
      setShowToast(false)
      errorRef.current?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    setError('')
    setShowToast(true)
    setForm({ username: '', email: '', subject: '', phone: '', message: '' })
    setTimeout(() => setShowToast(false), 3000)
  }

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title" data-heading="Get in Touch">Contact me</h2>
      <div className="contact-container container grid">
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card" onClick={() => handleContactClick('email')}>
              <i className="uil uil-envelope-edit contact-card-icon"></i>
              <h3 className="contact-card-title">Email</h3>
              <span className="contact-card-data">{personalInfo.messaging.email.address}</span>
              <span className="contact-button">Write me <i className="uil uil-arrow-right contact-button-icon"></i></span>
            </div>
            <div className="contact-card" onClick={() => handleContactClick('whatsapp')}>
              <i className="uil uil-whatsapp contact-card-icon"></i>
              <h3 className="contact-card-title">WhatsApp</h3>
              <span className="contact-card-data">{personalInfo.messaging.whatsapp.phone}</span>
              <span className="contact-button">Write me <i className="uil uil-arrow-right contact-button-icon"></i></span>
            </div>
            <div className="contact-card" onClick={() => handleContactClick('phone')}>
              <i className="uil uil-phone contact-card-icon"></i>
              <h3 className="contact-card-title">Phone</h3>
              <span className="contact-card-data">{personalInfo.messaging.call.phone}</span>
              <span className="contact-button">Call me <i className="uil uil-arrow-right contact-button-icon"></i></span>
            </div>
          </div>
        </div>
        <div className="contact-content">
          <form action="" className="contact-form" onSubmit={handleSubmit} autoComplete="off">
            <div className="input-container">
              <input type="text" className="input" name="username" value={form.username} onChange={handleChange} />
              <label htmlFor="">Username</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" className="input" name="email" value={form.email} onChange={handleChange} />
              <label htmlFor="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" className="input" name="phone" value={form.phone} onChange={handleChange} />
              <label htmlFor="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container">
              <input type="text" className="input" name="subject" value={form.subject} onChange={handleChange} />
              <label htmlFor="">Subject</label>
              <span>Subject</span>
            </div>
            <div className="input-container textarea">
              <textarea className="input" name="message" value={form.message} onChange={handleChange}></textarea>
              <label htmlFor="">Message</label>
              <span>Message</span>
            </div>
            <div ref={errorRef} className="form-error-space">
              {error && <span className="form-error-text">{error}</span>}
            </div>
            <button type="submit" className="button">
              <i className="uil uil-navigator button-icon"></i>Send Message
            </button>
          </form>
        </div>
      </div>
      {showToast && (
        <div className="toast-success">Message sent successfully!</div>
      )}
    </section>
  )
} 