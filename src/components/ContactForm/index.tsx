import { FormButton } from '@/components/Button';
import React, { useState } from 'react';
import axios from "axios";

export const ContactForm = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      nome,
      telefone,
      email: emailInput,
      subject,
      message,
    };

    try {
      const response = await axios.post("http://localhost/carneiro-e-carballido/back-end/send-email.php", formData);
      setResponseMessage(response.data.message);
    } catch (error) {
      setResponseMessage("There was an error sending the message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div className="flex flex-col">
          <label htmlFor='nome'>Nome</label>
          <input 
            className='border-2 border-grey rounded-lg px-1.5 py-1.5' 
            name='nome'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor='telefone'>Telefone</label>
          <input 
            className='border-2 border-grey rounded-lg px-1.5 py-1.5'
            name='telefone'
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="flex flex-col">
          <label htmlFor='email'>E-mail</label>
          <input
            className='border-2 border-grey rounded-lg px-1.5 py-1.5'
            name='email'
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor='subject'>Assunto</label>
          <input
            className='border-2 border-grey rounded-lg px-1.5 py-1.5'
            name='subject'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="flex flex-col">
          <label htmlFor='message'>Mensagem</label>
          <textarea
            className='border-2 border-grey rounded-lg mb-8 h-28'
            name='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
      </fieldset>
      <FormButton type="submit" disabled={loading}/>
      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
};