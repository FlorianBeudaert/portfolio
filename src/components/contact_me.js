import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactMe = () => {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        content: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            email: formData.email,
            sujet: formData.subject,
            message: formData.content
        };

        emailjs.send('service_4xnm7rl', 'template_v3rg25e', templateParams, 'wsqflf0MA67xoZGJU')
            .then((result) => {
                toast.success('Email envoyé avec succès!');
                console.log('SUCCESS!', result.status, result.text);
            }, (error) => {
                toast.error('Échec de l\'envoi de l\'email.');
                console.log('FAILED...', error);
            });

        setFormData({
            email: '',
            subject: '',
            content: ''
        });
    };

    return (
        <div className="pt-16 min-h-screen flex flex-col justify-start md:mx-8 xl:w-3/4 xl:mx-auto mx-4" id="contact">
            <h1 className="text-4xl font-bold text-primary text-center">Contactez-moi</h1>
            <form onSubmit={handleSubmit} className="flex flex-col mt-4 md:w-1/2 xl:w-2/3 mx-auto">
                <label className="mb-2 text-lg font-medium text-primary">Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input input-bordered input-primary bg-base-200 mb-4"
                />
                <label className="mb-2 text-lg font-medium text-primary">Sujet</label>
                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input input-bordered input-primary bg-base-200 mb-4"
                />
                <label className="mb-2 text-lg font-medium text-primary">Contenu</label>
                <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    required
                    className="textarea textarea-bordered textarea-primary bg-base-200 mb-4"
                />
                <button type="submit" className="btn btn-primary text-secondary">Envoyer</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default ContactMe;