import { FormButton } from '@/components/Button';
import React, { useState } from 'react';

export const ContactForm = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log({
      nome,
      telefone,
      email: emailInput,
      subject,
      message,
    });
  };

  return (
    <form>
      <fieldset>
        <div className="flex flex-col">
          <label htmlFor='nome'>Nome</label>
          <input
            name='nome'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor='telefone'>Telefone</label>
          <input
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
            name='email'
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor='subject'>Assunto</label>
          <input
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
            name='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
      </fieldset>
      <FormButton onClick={handleFormSubmit} />
    </form>
  );
};
