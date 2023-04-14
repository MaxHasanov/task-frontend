import React, { useState } from "react";
import Input from "../components/Input";
import './Form.scss'
import { useForm } from "react-hook-form";

const styles = {
    input: {
        width: "25%",
    },
    container: {
        width: "80%",
        margin: "0 auto",
    }
}

function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur"
    });

    // Этот объект мы будем передавать в API с помощью Json
    // const data = {
    //     name,
    //     lastName,
    //     email,
    //     options,
    // }


    const onSubmit = (data) => console.log(data);

    return (
        <>
            <main style={styles.container}>
                <h1 className="info-header">Form feedback!</h1>
                <form onSubmit={handleSubmit(onSubmit)} action="#">
                    <div className="info-client">
                        <span>Введите имя: </span>
                        {errors?.name && errors.name.message}
                        <input
                            placeholder="Имя"
                            style={{ ...styles.input, borderColor: errors.name && "red" }}
                            {...register("name", {
                                required: "Поле обязательно к заполнению",
                                pattern: {
                                    value: /^[A-Za-z]+$/i,
                                    message: 'Имя должно содержать только буквы',
                                },
                                minLength: {
                                    value: 2,
                                    message: 'Короткое имя'
                                }
                            })}
                        />
                        <Input
                            name="lastName"
                            placeholder="Фамилия"
                        >
                        </Input>
                        <Input
                            name="email"
                            placeholder="Email">
                        </Input>
                    </div>
                    <div className="info-client">
                        <select
                            name="categories"
                            id="categories">
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