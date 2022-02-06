import { useForm } from "react-hook-form"
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "store"
import { createUser } from "store/UserSlice"

export default function UserForm() {

    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const { register, handleSubmit } = useForm()

    function onSubmit(values: any) {
        dispatch(createUser(values))
        navigate('/users')
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label>Name</label>

                <input title='name' type='text'
                    {...register('name')}
                ></input>

                <label>Age</label>

                <input title='age' type='number'
                    {...register('age')}
                ></input>

                <button type='submit'>Create</button>
            </form>

        </>
    )
}