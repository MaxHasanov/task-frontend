import React, { useState } from "react";
import Input from "../components/Input";
import './Form.scss'

function Form() {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [options, setOptions] = useState('');
    const [err, setErr] = useState(true);

    // Этот объект мы будем передавать в API с помощью Json
    const data = {
        name,
        lastName,
        email,
        options,
    }

    // const changeRequired = () => {
    //     if (name || lastName.length > 2) {
    //         setErr(!err)
    //     }
    // }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <>
            <main>
                <h1 className="info-header">Form feedback!</h1>
                <form onSubmit={handleSubmit} action="#">
                    <div className="info-client">
                        <Input
                            key="name"
                            value={name}
                            name="Name"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Имя"
                            required={err}>
                        </Input>
                        <Input
                            key="lastName"
                            value={lastName}
                            name="LastName"
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Фамилия"
                            required={err}>
                        </Input>
                        <Input
                            key="email"
                            value={email}
                            name="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email">
                        </Input>
                    </div>
                    <div className="info-client">
                        <select
                            name="categories"
                            id="categories"
                            value={options}
                            onChange={(e) => setOptions(e.target.value)}>
                            <option disabled={true} hidden value="">Выберите категорию</option>
                            <option value="Показания">Показания</option>
                            <option value="Платежи">Платежи</option>
                            <option value="Помощь">Помощь</option>
                        </select>
                        <textarea name="message"
                            id="message"
                            cols="30"
                            rows="5"
                            required
                            minLength="10"
                            placeholder="Enter a message"></textarea>
                    </div>
                    <div className="info-client">
                        <label for="file-img">Изображение JPG или PNG:</label>
                        <br />
                        <input
                            type="file"
                            id="file-img"
                            accept=".jpg,.png"
                            multiple />
                        <button
                            type="submit"
                        >Отправить обращение</button>
                    </div>
                </form>
            </main>
        </>
    )
}

export default Form