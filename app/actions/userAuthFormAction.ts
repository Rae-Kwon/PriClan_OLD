import { isError } from "~/components/User/UserAuthFormHandlers"

export const userAuthFormAction = async (request: Request) => {
    const form = await request.formData()

    const email = form.get("email")
    const username = form.get("username")
    const passwordCheck = form.get("passwordCheck")

    const errors = {
        email: isError({ 'email',  })
    }
}