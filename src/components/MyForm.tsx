import React, { FormEvent, useState, ChangeEvent } from "react";

import styles from "./MyForm.module.css";

interface Props {
  userName: string;
  userEmail: string;
  role: string;
  bio: string;
}

const MyForm = ({ userName, userEmail }: Props) => {
  // Exemplo de controlled input

  // gerenciamento de dados
  const [name, setName] = useState<string>(userName);
  const [email, setEmail] = useState<string>(userEmail);
  const [bio, setBio] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleOptions = (e: ChangeEvent<HTMLSelectElement>) => {
    setRole(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();

    //setName(userName);
    //setEmail(userEmail);

    console.log("Enviando formulário...");
    console.log(name);
    console.log(email);
    console.log(bio);
    console.log(role);

    //Limpando o form após o envio
    console.log("Limpando os dados do formulário...");
    setName("");
    setEmail("");
    setBio("");
  };

  return (
    <div>
      {/* Envio de Form */}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Nome do Cliente"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* Label Envolvendo Input e função onChange inline*/}
        <label>
          <span>e-mail</span>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Informe o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Bio</span>
          <textarea
            name=""
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            placeholder="Fale um pouco da sua história"
          ></textarea>
        </label>
        <label>
          <span>Função:</span>
          <select
            name="role"
            onChange={handleOptions}
            placeholder="Escolha uma opção"
            value={role}
          >
            <option value="user">User</option>
            <option value="approver">Approver</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
